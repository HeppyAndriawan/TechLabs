import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = await NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, reg) {
        const { email, password } = credentials;

        // Get Data User URL
        const targetLocation = process.env.NEXT_PUBLIC_BASE_URL;

        const findBy = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          params: {
            key: process.env.NEXT_PUBLIC_API_KEY,
            email: email,
          },
        };

        // Check if user is exist
        const userData = async () =>
          await axios
            .get(`${targetLocation}/api/users`, findBy)
            .then(async function (response) {
              var passwordHash = require("password-hash");
              
              /** Find User Profile */
              const dataUser = response.data.response;

              if (dataUser.length !== 0) {
                const passworVerify = passwordHash.verify(
                  password,
                  dataUser.password
                );

                // If User Found Then Store Data
                if (passworVerify) {
                  const returnedUser = {
                    key: btoa(dataUser.email),
                    role: dataUser.account_type,
                    log: new Date().getTime() + 60 * 60 * 48 * 1000,
                  };

                  return returnedUser;
                } else {
                  return null;
                }
              }

              if (dataUser.length === 0) {
                return null;
              }
              return null;
            })
            .catch(function (error) {
              console.log(`It's an Error : ${error.message}`);
              return null;
            });

        const user = async () => {
          const data = await userData();
          return data;
        };

        return user();
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  session: { jwt: true },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authOptions as GET, authOptions as POST };
