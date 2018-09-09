import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item is-size-4">
                                Experience
                            </a>
                            <a className="navbar-item is-size-4">
                                Projects
                            </a>
                            <a className="navbar-item is-size-4">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="subtitle is-size-2">
              Hi im Sean <span>👋</span><br></br> Im a senior at University of Wisconsin, and i have a passion for fullstack development
            </h1>
          </div>
        </div>
        <div className="hero-footer">
            <div className="container" id="expquick">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <div>
                                <p className="subtitle is-3">
                                    Current:
                                </p>
                                <figure className="image is-200x75 exp-quick">
                                    <img src='/uw-logo.png' />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <div>
                                <p className="subtitle is-3">
                                    Past:
                                </p>
                                <ul className='horizontal-list'>
                                    <li className="horizontal-list">
                                        <figure className="image is-200x75 exp-quick">
                                            <img src='/uw-logo.png' />
                                        </figure>
                                    </li>
                                    <li className="horizontal-list">
                                        <figure className="image is-200x75 exp-quick">
                                            <img src='/uw-logo.png' />
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    );
  }
}

export default Intro;
