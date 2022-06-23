import React from "react";

import { projects } from "../../projects";

const ProjectDetails = ({ project }) => {
  return <div>project</div>;
};

export default ProjectDetails;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { projectName: "recipecloud" } },
      { params: { projectName: "specialforcesartdepartment" } },
      { params: { projectName: "pokedex" } },
      { params: { projectName: "introspectiveimages" } },
      { params: { projectName: "milkmaster" } },
      { params: { projectName: "encounterbuddy" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const project = projects.find((proj) => proj.slug === params.projectName);
  return {
    props: {
      project,
    },
  };
};
