import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
              <a className="no-dec" href="https://github.com/seanrice1">
                <span class="icon i-space">
                  <i class="fab fa-3x fa-github"></i>
                </span>
              </a>
              <a className="no-dec" href="https://www.linkedin.com/in/sean-rice/">
                <span class="icon i-space">
                  <i class="fab fa-3x fa-linkedin-in"></i>
                </span>
              </a>
              <a className="no-dec" href="mailto:srice3@wisc.edu">
                <span class="icon i-space fix-env">
                  <i class="fas fa-3x fa-envelope"></i>
                </span>
              </a>
            </div> 
        </footer>
    );
  }
}

export default Footer;