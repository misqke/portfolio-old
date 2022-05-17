import styles from "../styles/Home.module.scss";
import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/ProjectsSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Nav />
      <About />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}
