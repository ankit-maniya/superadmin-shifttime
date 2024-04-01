import "../../css/globals.css";

export const metadata = {
  title: "Admin Dashboard Page",
  description: "This is Admin Dashboard Page",
};

export default function AdminDashboardLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
