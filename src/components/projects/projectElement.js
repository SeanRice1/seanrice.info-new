import React from 'react';
import PropTypes from 'prop-types';

const ProjectElement = (props) => {
  const {
    tags,
    description,
    title,
    img,
    github,
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
            <img className="is-rounded" src={img} alt={title} />
          </p>
        </div>
        <div className="column is-half">
          <div className="content">
            <div className="title is-2">
              {title}
            </div>
            <a className="button is-light is-rounded" href={github} target="__blank">
              <span className="icon button-marg">
                <i className="fab fa-github" />
              </span>
              <span>
                GitHub Repo
              </span>
            </a>
            <ul>
              {descriptionJSX}
            </ul>
            <div className="horizontal-center">
              <div className="tags">
                {tagsJSX}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ProjectElement.defaultProps = {
  github: '',
};

ProjectElement.propTypes = {
  tags: PropTypes.arrayOf(String).isRequired,
  description: PropTypes.arrayOf(String).isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ProjectElement;
