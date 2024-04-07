import "../../css/globals.css";

export const metadata = {
  title: "SuperAdmin Dashboard Page",
  description: "This is SuperAdmin Dashboard Page",
};

export default function SuperAdminDashboardLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}
