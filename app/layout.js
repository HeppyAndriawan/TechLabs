import "./globals.css";
import Providers from "./Providers";
import {poppins} from "@/components/Font/Font";

export const metadata = {
  title: "Fashion",
  description: "Media to connect people who like fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="shortcut icon" as="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
