import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
