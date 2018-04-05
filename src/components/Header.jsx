import React from 'react' // eslint-disable-line no-unused-vars

function Header() {
  return <header id="header">
    <div id="header-inner">
      <div className="container container-pod container-pod-short">
        <nav className="navigation">
          <ul>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <div className="header-button-wrapper">
          <nav className="navigation">
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
}

export default Header


