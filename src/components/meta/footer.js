import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="footer" id="Footer">
            <div className="content has-text-centered">
              <a className="no-dec" href="https://github.com/seanrice1">
                <span className="icon i-space">
                  <i className="fab fa-3x fa-github"></i>
                </span>
              </a>
              <a className="no-dec" href="https://www.linkedin.com/in/sean-rice/">
                <span className="icon i-space">
                  <i className="fab fa-3x fa-linkedin-in"></i>
                </span>
              </a>
              <a className="no-dec" href="mailto:srice3@wisc.edu">
                <span className="icon i-space fix-env">
                  <i className="fas fa-3x fa-envelope"></i>
                </span>
              </a>
            </div> 
        </footer>
    );
  }
}

export default Footer;