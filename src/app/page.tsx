"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  // const res = await fetch("https://...", { next: { tags: ["collection"] } });
  // const data = await res.json();

  return (
    <main className={styles.main}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="button" onClick={() => router.push("/dashboard")}>
          Dashboard
        </button>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">about</Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/blog/aaa">Blog aaa</Link>
        <Link href="/blog/bbb">Blog bbb</Link>
        <Link href="/blog/ccc">Blog ccc</Link>
      </div>
    </main>
  );
}
