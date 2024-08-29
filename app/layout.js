import "./globals.css";
import { Footer } from "@/components";

export const metadata = {
  title: "Welcome | Lodges",
  description: "This is a lodge",
  author: "Qualis Designers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="../public/logo.svg"
          type="image/x-icon"
        />
      </head>
      <body className="bg-gray-900 min-h-screen">
        {/* Nav tabs */}
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
