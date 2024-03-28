import { Inter } from "next/font/google";
import "../css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login Page",
  description: "This is my first Login Page",
};

export default function LoginLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
