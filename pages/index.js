import styles from "../styles/Home.module.scss";
import Hero from "../components/hero/Hero";
import ProjectsSection from "../components/projects/ProjectsSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Head from "next/dist/shared/lib/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mike Rust Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <Nav />
      <About />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}
