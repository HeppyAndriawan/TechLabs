"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Chek if authenticated otherwise redirected to login page
  useEffect(() => {
    if (status === "unauthenticated") {
      signOut({ callbackUrl: "/login" });
    }
  }, [status]);

  // Chek if session is error then redirected to login page
  useEffect(() => {
    if (session?.error === "inactive-user") {
      if (session?.error === "inactive-user") {
        signOut({ callbackUrl: "/login" });
      }
    }
  }, [session?.error]);

  return <>{children}</>;
}
