import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero/Hero";
import ProjectsSection from "../components/Projects/ProjectsSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import Head from "next/head";

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
