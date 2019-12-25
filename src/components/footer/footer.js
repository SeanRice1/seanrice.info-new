import React from 'react';

const Footer = () => (
  <footer className="footer has-background-grey-light" id="Footer">
    <div className="content has-text-centered">
      <a className="no-dec" href="https://github.com/seanrice1">
        <span className="icon i-space">
          <i className="fab fa-3x fa-github" />
        </span>
      </a>
      <a className="no-dec" href="https://www.linkedin.com/in/sean-rice/">
        <span className="icon i-space">
          <i className="fab fa-3x fa-linkedin-in" />
        </span>
      </a>
      <a className="no-dec" href="mailto:srice3@wisc.edu">
        <span className="icon i-space fix-env">
          <i className="fas fa-3x fa-envelope" />
        </span>
      </a>
    </div>
  </footer>
);

export default Footer;
