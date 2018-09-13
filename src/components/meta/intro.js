import React, { Component } from 'react';

class Intro extends Component {
  constructor(props){
    super(props);

    this.state = {
      mobileNav: false,
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => ({
      mobileNav: !prevState.mobileNav
    }))
  }

  render() {
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-head">
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <span className="navbar-burger" onClick={this.toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div className="container">
              <div className={this.state.mobileNav ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-end">
                  <a className="navbar-item is-size-4 montserrat" href="#Experience">
                    Experience
                   </a>
                  <a className="navbar-item is-size-4 montserrat" href="#Project">
                    Projects
                  </a>
                  <a className="navbar-item is-size-4 montserrat" href="#Footer">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="subtitle is-size-2 montserrat">
              Hi I'm Sean <span role="img" aria-label="Wave Hand">👋</span><br></br> I'm a senior at University of Wisconsin, and I have a passion for <span className="has-text-weight-semibold">fullstack development</span>
            </h1>
          </div>
        </div>
        <div className="hero-footer">
          <div className="container" id="expquick">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div>
                    <p className="subtitle is-4 is-uppercase montserrat-spaced">
                      Current:
                                </p>
                    <figure className="image is-200x75 exp-quick">
                      <a href="https://www.wisc.edu/" target="__blank">
                        <img src='/uw-logo.png' alt="UW Madison"/>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <div>
                    <p className="subtitle is-4 is-uppercase montserrat-spaced">
                      Past:
                                </p>
                    <ul className='horizontal-list'>
                      <li className="horizontal-list">
                        <figure className="image is-200x75 exp-quick">
                          <a href="https://campus.capitalone.com/technology-program?id=internship" target="__blank">
                            <img src='/capitalone-logo.png' alt="Capital One"/>
                          </a>
                        </figure>
                      </li>
                      <li className="horizontal-list">
                        <figure className="image is-200x75 exp-quick">
                          <a href="https://www.leidos.com/" target="__blank">
                            <img src='/leidos-logo.png'  id="fix_leidos_img" alt="Leidos"/>
                          </a>
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
