import React from 'react';
import PropTypes from 'prop-types';

const ExperienceElement = (props) => {
  const {
    company,
    position,
    img,
    tags,
    description,
  } = props;

  const tagsJSX = [];
  tags.forEach((element) => {
    tagsJSX.push(
      <span className="tag">
        {element}
      </span>,
    );
  });

  const descriptionJSX = [];
  description.forEach((element) => {
    descriptionJSX.push(
      <li>
        {element}
      </li>,
    );
  });

  return (
    <div className="extra-margin-exp">
      <div className="columns is-centered">
        <div className="column is-one-quarter">
          <p className="image is-256x256 vertical-center is-hidden-mobile">
            <img className="is-rounded" src={img} alt={company} />
          </p>
        </div>
        <div className="column is-half">
          <div className="content">
            <div className="title is-2">
              {company}
            </div>
            <div className="subtitle is-4">
              {position}
            </div>
            <ul>
              {description}
            </ul>
            <div className="horizontal-center">
              <div className="tags">
                {tags}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperienceElement.propTypes = {
  tags: PropTypes.arrayOf(String).isRequired,
  description: PropTypes.arrayOf(String).isRequired,
  img: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default ExperienceElement;
