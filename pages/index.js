import styles from "../styles/Home.module.scss";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
