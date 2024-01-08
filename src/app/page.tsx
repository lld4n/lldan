import styles from "./page.module.scss";
import First from "@/components/First/First";
import Second from "@/components/Second/Second";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <First />
      <Second />
    </div>
  );
}
