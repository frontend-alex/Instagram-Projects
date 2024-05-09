import { Inter } from "next/font/google";
import "@styles/globals.css";
import FirstNavbar from "@components/Navbars/Navbar-1";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirstNavbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
