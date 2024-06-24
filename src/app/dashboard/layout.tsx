import styles from "./styles.module.css";

export default function DashboardLayout({
  children,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <section className={styles.dashboard}>
      <div>dashboard専用の共通のレイアウト</div>
      <nav></nav>

      {children}

      {analytics}
    </section>
  );
}
