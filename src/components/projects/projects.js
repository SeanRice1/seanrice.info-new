import React from 'react';
import ProjectElement from './project_element';

const Projects = () => (
  <div>
    <ProjectElement
      title="AllergyID"
      description={['Android app that alerts users if they are allergic to an item via scanning a barcode, utilizing the Android Vision API and a food database API']}
      tags={['Java', 'XML', 'Git']}
      img="/allergyid.png"
      github="https://github.com/SeanRice1/AllergyID"
    />
  </div>
);

export default Projects;
