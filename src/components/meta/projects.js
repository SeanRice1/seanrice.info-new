import React, { Component } from 'react';
import ProjectBlock from '../project_block';

export default class Projects extends Component {
  render() {
    return (
        <div>
          <ProjectBlock
            title="AllergyID"
            description={["Android app that alerts users if they are allergic to an item via scanning a barcode, utilizing the Android Vision API and a food database API"]}
            tags={["Java", "XML", "Git"]}
            img ="/allergyid.png"
            github="https://github.com/SeanRice1/AllergyID"
          />
        </div>
    );
  }
}
