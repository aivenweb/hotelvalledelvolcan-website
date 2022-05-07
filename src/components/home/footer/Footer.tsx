import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div id="footer">
            <footer className="footer-sky">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1">
              <div className="icon-email">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  title="Email"
                  ><img
                    src="./Home 1_files/footer-top-icon-l.png"
                    alt="Email"
                    className="img-responsive"
                /></a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-5">
              <div className="textbox">
                <form className="form-inline">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                        aria-label="Search for..."
                      />
                      <button className="btn btn-secondary" type="button">
                        <i className="ion-android-send"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6 text-right">
              <div className="footer-icon-l">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  title="Twitter"
                  ><i className="fa fa-twitter" aria-hidden="true"></i
                ></a>
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  title="Facebook"
                  ><i className="fa fa-facebook-square" aria-hidden="true"></i
                ></a>
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  title="Tripadvisor"
                  ><i className="fa fa-tripadvisor" aria-hidden="true"></i
                ></a>
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                  title="Isnstagram"
                  ><i className="fa fa-instagram" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mid">
        <div className="container">
          <div className="row padding-footer-mid">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="footer-logo text-center list-content">
                <a
                  href="http://landing.engotheme.com/html/skyline/demo/index.html"
                  title="Skyline"
                  ><img src="./Home 1_files/sky-logo-footer.png" alt="Image"
                /></a>
              </div>
            </div>
            <div
              className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1"
            >
              <div className="list-content">
                <ul>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/attractions.html"
                      title=""
                      >Site Map</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/tems_condition_1.html"
                      title=""
                      >Term &amp; Conditions</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >Privacy Policy</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >Help</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >Affiliate</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1"
            >
              <div className="list-content">
                <ul>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >Our Location</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >Career</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/about.html"
                      title=""
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/contact.html"
                      title=""
                      >Contact Us</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-lg-offset-1 col-md-offset-1"
            >
              <div className="list-content">
                <ul>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >FAQS</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >News</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/gallery_1.html"
                      title=""
                      >Photo &amp; Video</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/restaurant_1.html"
                      title=""
                      >Restaurant</a
                    >
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title=""
                      >Gift Card</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
              Copyright © 2017 by
              <a
                href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                title=""
                >EngoTheme.</a
              >
              SkyLine Hotel Theme crafted with love
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding">
              <div className="payments text-right">
                <ul>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title="Paypal"
                      ><img src="./Home 1_files/Paypal.png" alt="Paypal"
                    /></a>
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title="Visa"
                      ><img src="./Home 1_files/Visa.png" alt="Visa"
                    /></a>
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title="Master"
                      ><img src="./Home 1_files/Master-card.png" alt="Master"
                    /></a>
                  </li>
                  <li>
                    <a
                      href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                      title="Discover"
                      ><img src="./Home 1_files/Discover.png" alt="Discover"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer;