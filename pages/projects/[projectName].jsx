import React from "react";

const ProjectDetails = () => {
  return <div>ProjectDetails</div>;
};

export default ProjectDetails;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { projectName: "recipecloud" } },
      { params: { projectName: "specialforcesartdepartment" } },
      { params: { projectName: "pokedex" } },
      { params: { projectName: "introspectiveimages" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://mikerustportfolio.com/api/projects/?slug=${params.projectName}`
  );
  const data = await res.json();
  return {
    props: {
      project: data.project,
    },
  };
};
