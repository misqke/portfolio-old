import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({ projects }) {
  return (
    <div className={styles.container}>
      <Hero />
      <Projects projects={projects} />
      <About />
      <Contact />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/projects`);
  const data = await res.json();
  return {
    props: {
      projects: data.projects,
    },
  };
};
