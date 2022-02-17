import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
