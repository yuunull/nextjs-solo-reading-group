"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="button" onClick={() => router.push("/dashboard")}>
          Dashboard
        </button>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">about</Link>
      </div>
    </main>
  );
}
