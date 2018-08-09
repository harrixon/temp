import * as React from "react";
import "./css/bootstrap.min.css";
import "./css/fonts/font-awesome/css/font-awesome.css"
import "./css/style.css"

import { connect } from "react-redux";
import { IRootState } from "src/redux/store";

import Logo from "src/Page/landingPage/img/logo-org.svg"

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

interface ILandingPageProps { name: string }

interface ILandingPageStates { navBarIsOpen: boolean }

const mapStateToProps = (state: IRootState) => {
  return { name: state.name }
}

class PureLandingPage extends React.Component<ILandingPageProps, ILandingPageStates> {
  constructor(props: ILandingPageProps) {
    super(props);

    this.state = {
      navBarIsOpen: false
    }
  }

  public toggleNavBar = () => {
    this.setState({
      navBarIsOpen: !this.state.navBarIsOpen
    })
  }

  public render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Navbar id="menu" className="navbar navbar-default navbar-fixed-top navbar-expand-lg" light={true} color="faded">

                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <NavbarBrand className="navbar-brand" href="index.html">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </NavbarBrand>
                  <NavbarToggler
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    {" "}
                    <span className="navbar-toggler-icon" />{" "}
                  </NavbarToggler>
                  {/* <a className="navbar-brand page-scroll" href="#page-top">Standout</a> */}
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <Collapse
                  className="navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                  isOpen={this.state.navBarIsOpen}
                  navbar={true}
                >
                  <Nav className="navbar-nav navbar-right">
                    <NavItem className="nav-item">
                      {" "}
                      <NavLink
                        className="nav-link page-scroll"
                        href="#about"
                        onClick={this.toggleNavBar}
                      >
                        About <span className="sr-only">(current)</span>
                      </NavLink>{" "}
                    </NavItem>
                    <NavItem className="nav-item">
                      {" "}
                      <NavLink
                        className="nav-link page-scroll"
                        href="#services"
                        onClick={this.toggleNavBar}
                      >
                        Services <span className="sr-only">(current)</span>
                      </NavLink>{" "}
                    </NavItem>
                    <NavItem className="nav-item">
                      {" "}
                      <NavLink
                        className="nav-link page-scroll"
                        href="#portfolio"
                        onClick={this.toggleNavBar}
                      >
                        Gallery <span className="sr-only">(current)</span>
                      </NavLink>{" "}
                    </NavItem>
                    <NavItem className="nav-item">
                      {" "}
                      <NavLink
                        className="nav-link page-scroll"
                        href="#testimonials"
                        onClick={this.toggleNavBar}
                      >
                        Testimonials <span className="sr-only">(current)</span>
                      </NavLink>{" "}
                    </NavItem>
                    <NavItem className="nav-item">
                      {" "}
                      <NavLink
                        className="nav-link page-scroll"
                        href="#contact"
                        onClick={this.toggleNavBar}
                      >
                        Contact <span className="sr-only">(current)</span>
                      </NavLink>{" "}
                    </NavItem>
                  </Nav>
                </Collapse>
                {/* /.navbar-collapse */}
                {/* /.container-fluid */}
              </Navbar>
            </div>
          </div>
        </div>
        {/* Header */}
        <div id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="intro-text"> <span>Welcome to</span>
                    <h1>Standout</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing. <br />
                      Duis sed dapibus leo nec ornare diam.</p>
                    <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div id="about">
          <div className="container">
            <div className="section-title text-center center">
              <h2>About Us</h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <img src="img/about.png" className="img-responsive" alt="" />
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h3>Lorem ipsum dolor sit amet!</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div id="services" className="text-center">
          <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
              <h2>Our Services</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-3"> <i className="fa fa-comments-o" />
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
              </div>
              <div className="col-xs-6 col-md-3"> <i className="fa fa-bullhorn" />
                <h4>Dolor sit amet</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>
              </div>
              <div className="col-xs-6 col-md-3"> <i className="fa fa-group" />
                <h4>Tempus eleifend</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
              </div>
              <div className="col-xs-6 col-md-3"> <i className="fa fa-magic" />
                <h4>Pellentesque</h4>
                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio Section */}
        <div id="portfolio">
          <div className="container">
            <div className="section-title text-center center">
              <h2>Gallery</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="categories">
              <ul className="cat">
                <li>
                  <ol className="type">
                    <li><a href="#" data-filter="*" className="active">All</a></li>
                    <li><a href="#" data-filter=".lorem">Lorem Ipsum</a></li>
                    <li><a href="#" data-filter=".dolor">Dolor Sit</a></li>
                    <li><a href="#" data-filter=".adipiscing">Adipiscing Elit</a></li>
                  </ol>
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="row">
              <div className="portfolio-items">
                <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Lorem Ipsum</h4>
                        </div>
                        <img src="img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Adipiscing Elit</h4>
                        </div>
                        <img src="img/portfolio/02-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Lorem Ipsum</h4>
                        </div>
                        <img src="img/portfolio/03-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Lorem Ipsum</h4>
                        </div>
                        <img src="img/portfolio/04-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 adipiscing">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Adipiscing Elit</h4>
                        </div>
                        <img src="img/portfolio/05-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 dolor">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Dolor Sit</h4>
                        </div>
                        <img src="img/portfolio/06-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 dolor">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/07-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Dolor Sit</h4>
                        </div>
                        <img src="img/portfolio/07-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 lorem">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      <a href="img/portfolio/08-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                          <h4>Lorem Ipsum</h4>
                        </div>
                        <img src="img/portfolio/08-small.jpg" className="img-responsive" alt="Project Title" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Achievements Section */}
        <div id="achievements" className="text-center">
          <div className="overlay">
            <div className="container">
              <div className="section-title center">
                <h2>Some Stats</h2>
                <hr />
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="achievement-box"> <span className="count">260</span>
                    <h4>Customers</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <div className="achievement-box"> <span className="count">83</span>
                    <h4>Developers</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <div className="achievement-box"> <span className="count">571</span>
                    <h4>Projects</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <div className="achievement-box"> <span className="count">12</span>
                    <h4>Awards</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div id="testimonials" className="text-center">
          <div className="container">
            <div className="section-title">
              <h2>Testimonials</h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div id="testimonial" className="owl-carousel owl-theme">
                  <div className="item"> <img src="img/clients/01.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
                    <p><strong>John DOE</strong>, CEO, Company.</p>
                  </div>
                  <div className="item"> <img src="img/clients/02.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
                    <p><strong>Jenny DOE</strong>, CEO, Company.</p>
                  </div>
                  <div className="item"> <img src="img/clients/03.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>
                    <p><strong>John DOE</strong>, CEO, Company.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div id="contact" className="text-center">
          <div className="container">
            <div className="section-title center">
              <h2>Get In Touch</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="col-md-8 col-md-offset-2">
              <form name="sentMessage" id="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows={4} placeholder="Message" />
                  <p className="help-block text-danger" />
                </div>
                <div id="success" />
                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
              </form>
              <div className="social">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

const landingPage = connect(mapStateToProps, {})(PureLandingPage);

export default landingPage;