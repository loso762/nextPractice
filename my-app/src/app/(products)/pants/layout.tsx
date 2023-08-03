import Link from "next/link";

import styles from "../../layout.module.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <Link href="">여성옷</Link>
          <Link href="">남성옷</Link>
        </nav>
      </div>
      <section>{children}</section>
    </>
  );
}
