import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
      <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
            <h1 id="colorlib-logo"><a href="index.html">Kierra Merriman</a></h1>
            <span className="email"><i className="icon-mail"></i>k.merriman32@hotmail.com</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                <li><a href="#about" data-nav-section="about">About</a></li>
                <li><a href="/" data-nav-section="projects">Projects</a></li>
                <li><a href="/" data-nav-section="blog">Blog</a></li>
                <li><a href="/" data-nav-section="timeline">Work Experience</a></li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li><a href="https://www.linkedin.com/in/kierra-merriman-0633971a9/" >linkedin</a></li>
              <li><a href="https://github.com/kierrakay" >github</a></li>
              <li><a href="https://medium.com/@kierramerriman" >medium</a></li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p>footer</p>
          </div>
        </aside>
      </div>
    </div>

    )
  }
}