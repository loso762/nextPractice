import "./globals.css";
import type {Metadata} from "next";
import styles from "./layout.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>header</h1>
          <nav className={styles.nav}>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
            <Link href="/pants">pants</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
