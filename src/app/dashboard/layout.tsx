export default function DashboardLayout({
  children,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <section>
      <div>dashboard専用の共通のレイアウト</div>
      <nav></nav>

      {children}

      {analytics}
    </section>
  );
}
