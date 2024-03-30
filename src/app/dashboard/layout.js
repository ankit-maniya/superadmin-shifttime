import "../css/globals.css";

export const metadata = {
  title: "Dashboard Page",
  description: "This is my Dashboard Page",
};

export default function DashboardLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
