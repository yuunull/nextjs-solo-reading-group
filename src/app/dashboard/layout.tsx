export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>dashboard専用の共通のレイアウト</div>
      <nav></nav>

      {children}
    </section>
  );
}
