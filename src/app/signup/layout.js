import { Inter } from "next/font/google";
import "../css/globals.css";

export const metadata = {
  title: "SignUp Page",
  description: "This is my SignUp Page",
};

export default function SignUpLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
