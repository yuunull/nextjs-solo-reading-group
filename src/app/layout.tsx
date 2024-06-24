import { Roboto } from "next/font/google";
import "./global.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={roboto.className}>
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
