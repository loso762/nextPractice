import type {Metadata} from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description: "여러 옷들을 파는 사이트 입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>hi</div>
    </main>
  );
}
