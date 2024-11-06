import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <nav className="site-nav">
          <div className="container">
            <div className="menu-bg-wrap">
              <div className="site-navigation">
                <a href="index.html" className="logo m-0 float-start">Property</a>
                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                  <li className="active"><a href="index.html">Home</a></li>
                  <li className="has-children">
                    <a href="properties.html">Properties</a>
                    <ul className="dropdown">
                      <li><a href="#">Buy Property</a></li>
                      <li><a href="#">Sell Property</a></li>
                      <li className="has-children">
                        <a href="#">Dropdown</a>
                        <ul className="dropdown">
                          <li><a href="#">Sub Menu One</a></li>
                          <li><a href="#">Sub Menu Two</a></li>
                          <li><a href="#">Sub Menu Three</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
                <a href="#" className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                  <span />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-slide">
            <div className="img overlay" style={{backgroundImage: 'url("images/hero_bg_3.jpg")'}} />
            <div className="img overlay" style={{backgroundImage: 'url("images/hero_bg_2.jpg")'}} />
            <div className="img overlay" style={{backgroundImage: 'url("images/hero_bg_1.jpg")'}} />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-9 text-center">
                <h1 className="heading" data-aos="fade-up">Easiest way to find your dream home</h1>
                <form action="#" className="narrow-w form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay={200}>
                  <input type="text" className="form-control px-4" placeholder="Your ZIP code or City. e.g. New York" />
                  <button type="submit" className="btn btn-primary">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="font-weight-bold text-primary heading">Popular Properties</h2>
              </div>
              <div className="col-lg-6 text-lg-end">
                <p><a href="#" target="_blank" className="btn btn-primary text-white py-3 px-4">View all properties</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="property-slider-wrap">
                  <div className="property-slider">
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_5.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_6.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_7.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_8.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                    <div className="property-item">
                      <a href="property-single.html" className="img">
                        <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
                      </a>
                      <div className="property-content">
                        <div className="price mb-2"><span>$1,291,000</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">5232 California Fake, Ave. 21BC</span>
                          <span className="city d-block mb-3">California, USA</span>
                          <div className="specs d-flex mb-4">
                            <span className="d-block d-flex align-items-center me-3">
                              <span className="icon-bed me-2" />
                              <span className="caption">2 beds</span>
                            </span>
                            <span className="d-block d-flex align-items-center">
                              <span className="icon-bath me-2" />
                              <span className="caption">2 baths</span>
                            </span>
                          </div>
                          <a href="property-single.html" className="btn btn-primary py-2 px-3">See details</a>
                        </div>
                      </div>
                    </div> {/* .item */}
                  </div>
                  <div id="property-nav" className="controls" tabIndex={0} aria-label="Carousel Navigation">
                    <span className="prev" data-controls="prev" aria-controls="property" tabIndex={-1}>Prev</span>
                    <span className="next" data-controls="next" aria-controls="property" tabIndex={-1}>Next</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="features-1">
          <div className="container">
            <div className="row">
              <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={300}>
                <div className="box-feature">
                  <span className="flaticon-house" />
                  <h3 className="mb-3">Our Properties</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
                  <p><a href="#" className="learn-more">Learn More</a></p>
                </div>
              </div>
              <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={500}>
                <div className="box-feature">
                  <span className="flaticon-building" />
                  <h3 className="mb-3">Property for Sale</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
                  <p><a href="#" className="learn-more">Learn More</a></p>
                </div>
              </div>
              <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={400}>
                <div className="box-feature">
                  <span className="flaticon-house-3" />
                  <h3 className="mb-3">Real Estate Agent</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
                  <p><a href="#" className="learn-more">Learn More</a></p>
                </div>
              </div>
              <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={600}>
                <div className="box-feature">
                  <span className="flaticon-house-1" />
                  <h3 className="mb-3">House for Sale</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
                  <p><a href="#" className="learn-more">Learn More</a></p>
                </div>
              </div>	
            </div>
          </div>
        </section>
        <div className="section sec-testimonials">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-md-6">
                <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">Customer Says</h2>
              </div>
              <div className="col-md-6 text-md-end">
                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev">Prev</span>
                  <span className="next" data-controls="next">Next</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
              </div>
            </div>
            <div className="testimonial-slider-wrap">
              <div className="testimonial-slider">
                <div className="item">
                  <div className="testimonial">
                    <img src="images/person_1-min.jpg" alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                    <div className="rate">
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                    </div>
                    <h3 className="h5 text-primary mb-4">James Smith</h3>
                    <blockquote>
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                    </blockquote>
                    <p className="text-black-50">Designer, Co-founder</p>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial">
                    <img src="images/person_2-min.jpg" alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                    <div className="rate">
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                    </div>
                    <h3 className="h5 text-primary mb-4">Mike Houston</h3>
                    <blockquote>
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                    </blockquote>
                    <p className="text-black-50">Designer, Co-founder</p>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial">
                    <img src="images/person_3-min.jpg" alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                    <div className="rate">
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                    </div>
                    <h3 className="h5 text-primary mb-4">Cameron Webster</h3>
                    <blockquote>
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                    </blockquote>
                    <p className="text-black-50">Designer, Co-founder</p>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial">
                    <img src="images/person_4-min.jpg" alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                    <div className="rate">
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                      <span className="icon-star text-warning" />
                    </div>
                    <h3 className="h5 text-primary mb-4">Dave Smith</h3>
                    <blockquote>
                      <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                    </blockquote>
                    <p className="text-black-50">Designer, Co-founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-4 bg-light">
          <div className="container">
            <div className="row justify-content-center  text-center mb-5">
              <div className="col-lg-5">
                <h2 className="font-weight-bold heading text-primary mb-4">Let's find home that's perfect for you</h2>
                <p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit.</p>
              </div>
            </div>
            <div className="row justify-content-between mb-5">
              <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
                <div className="img-about dots">
                  <img src="images/hero_bg_3.jpg" alt="Image" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-home2" />
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">2M Properties</h3>
                    <p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>   
                  </div>
                </div>
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-person" />
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">Top Rated Agents</h3>
                    <p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>   
                  </div>
                </div>
                <div className="d-flex feature-h">
                  <span className="wrap-icon me-3">
                    <span className="icon-security" />
                  </span>
                  <div className="feature-text">
                    <h3 className="heading">Legit Properties</h3>
                    <p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>   
                  </div>
                </div>
              </div>
            </div>
            <div className="row section-counter mt-5">
              <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={300}>
                <div className="counter-wrap mb-5 mb-lg-0">
                  <span className="number"><span className="countup text-primary">3298</span></span>
                  <span className="caption text-black-50"># of Buy Properties</span>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={400}>
                <div className="counter-wrap mb-5 mb-lg-0">
                  <span className="number"><span className="countup text-primary">2181</span></span>
                  <span className="caption text-black-50"># of Sell Properties</span>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={500}>
                <div className="counter-wrap mb-5 mb-lg-0">
                  <span className="number"><span className="countup text-primary">9316</span></span>
                  <span className="caption text-black-50"># of All Properties</span>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={600}>
                <div className="counter-wrap mb-5 mb-lg-0">
                  <span className="number"><span className="countup text-primary">7191</span></span>
                  <span className="caption text-black-50"># of Agents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="row justify-content-center footer-cta" data-aos="fade-up">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="mb-4 ">Be a part of our growing real state agents</h2>
              <p><a href="#" target="_blank" className="btn btn-primary text-white py-3 px-4">Apply for Real Estate agent</a></p>
            </div> {/* /.col-lg-7 */}
          </div> {/* /.row */}
        </div>
        <div className="section section-5 bg-light">
          <div className="container">
            <div className="row justify-content-center  text-center mb-5">
              <div className="col-lg-6 mb-5">
                <h2 className="font-weight-bold heading text-primary mb-4">Our Agents</h2>
                <p className="text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="h-100 person">
                  <img src="images/person_1-min.jpg" alt="Image" className="img-fluid" />
                  <div className="person-contents">
                    <h2 className="mb-0"><a href="#">James Doe</a></h2>
                    <span className="meta d-block mb-3">Real Estate Agent</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    <ul className="social list-unstyled list-inline dark-hover">
                      <li className="list-inline-item"><a href="#"><span className="icon-twitter" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-facebook" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-linkedin" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="h-100 person">
                  <img src="images/person_2-min.jpg" alt="Image" className="img-fluid" />
                  <div className="person-contents">
                    <h2 className="mb-0"><a href="#">Jean Smith</a></h2>
                    <span className="meta d-block mb-3">Real Estate Agent</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    <ul className="social list-unstyled list-inline dark-hover">
                      <li className="list-inline-item"><a href="#"><span className="icon-twitter" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-facebook" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-linkedin" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="h-100 person">
                  <img src="images/person_3-min.jpg" alt="Image" className="img-fluid" />
                  <div className="person-contents">
                    <h2 className="mb-0"><a href="#">Alicia Huston</a></h2>
                    <span className="meta d-block mb-3">Real Estate Agent</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    <ul className="social list-unstyled list-inline dark-hover">
                      <li className="list-inline-item"><a href="#"><span className="icon-twitter" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-facebook" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-linkedin" /></a></li>
                      <li className="list-inline-item"><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <h3>Contact</h3>
                  <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                  <ul className="list-unstyled links">
                    <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                    <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                    <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                  </ul>
                </div> {/* /.widget */}
              </div> {/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="widget">
                  <h3>Sources</h3>
                  <ul className="list-unstyled float-start links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Mission</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                  <ul className="list-unstyled float-start links">
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Creative</a></li>
                  </ul>
                </div> {/* /.widget */}
              </div> {/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="widget">
                  <h3>Links</h3>
                  <ul className="list-unstyled links">
                    <li><a href="#">Our Vision</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                  <ul className="list-unstyled social">
                    <li><a href="#"><span className="icon-instagram" /></a></li>
                    <li><a href="#"><span className="icon-twitter" /></a></li>
                    <li><a href="#"><span className="icon-facebook" /></a></li>
                    <li><a href="#"><span className="icon-linkedin" /></a></li>
                    <li><a href="#"><span className="icon-pinterest" /></a></li>
                    <li><a href="#"><span className="icon-dribbble" /></a></li>
                  </ul>
                </div> {/* /.widget */}
              </div> {/* /.col-lg-4 */}
            </div> {/* /.row */}
            <div className="row mt-5">
              <div className="col-12 text-center">
                {/* 
              **==========
              NOTE: 
              Please don't remove this copyright link unless you buy the license here https://untree.co/license/  
              **==========
            */}
                <p>Copyright ©. All Rights Reserved. — Designed with love by <a href="https://untree.co">Untree.co</a> {/* License information: https://untree.co/license/ */}
                </p>
              </div>
            </div>
          </div> {/* /.container */}
        </div> {/* /.site-footer */}
        
      </div>
  )
}

export default Home