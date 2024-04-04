import { Inter } from "next/font/google";
import "../css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Page",
  description: "This is your admin panel.",
};

export default function AdminLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
