import styles from "./page.module.scss";
import First from "@/components/First/First";
import Second from "@/components/Second/Second";
import Third from "@/components/Third/Third";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <First />
      <Second />
      <Third />
    </div>
  );
}
