import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero/Hero.jsx";
import ProjectsSection from "../components/Projects/ProjectsSection.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Nav from "../components/Layout/Nav.jsx";
import Footer from "../components/Layout/Footer.jsx";
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
