import React, { Component } from 'react';

export default class ExperienceBlock extends Component {
  state = {

  }

  render() {
    let tags = [];
    this.props.tags.forEach(element => {
      tags.push(
        <span className="tag">
          {element}
        </span>
      ) 
    });

    let description = [];
    this.props.description.forEach(element => {
      description.push(
        <li>
          {element}
        </li>
      )
    });

    return(
      <div className="extra-margin-exp">
        <div className="columns is-mobile is-centered">
          <div className="column is-one-quarter">
            <p className="image is-256x256 vertical-center">
              <img className="is-rounded" src={this.props.img} alt={this.props.company}/>
              </p>
          </div>
          <div className="column is-half">
            <div className="content">
              <div className="title is-2">
                {this.props.company}
              </div>
              <div className="subtitle is-4">
                {this.props.position}
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
    )
  }
}