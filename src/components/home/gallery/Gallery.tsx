import React from "react";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  return (
    <div id="gallery">
      <section className="gallery-our">
        <div className="container-fluid">
          <div className="gallery">
            <h2 className="title-gallery">Our Gallery</h2>
            <div className="outline"></div>
            <ul className="nav nav-tabs text-uppercase">
              <li className="active">
                <a
                  data-toggle="tab"
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#Hotel"
                >
                  Hotel &amp; Ground
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#menu1"
                >
                  Room/Suite
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#menu2"
                >
                  Bathroom
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#menu3"
                >
                  Dining
                </a>
              </li>
            </ul>
            <br />
            <div className="tab-content">
              <div id="Hotel" className="tab-pane fade in active">
                <div className="product">
                  <div className="row">
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-1.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main" title="">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-1-1.jpg"
                              data-littlelightbox-group="gallery"
                              title="Luxury Room view all"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-2.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="HIHI"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-3.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-3-3.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-4.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-4-4.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-5.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-5-5.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-6.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-6-6.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-7.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-7-7.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-8.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-8-8.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu1" className="tab-pane fade">
                <div className="product">
                  <div className="row">
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-6.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-7.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-3-3.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-8.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-4-4.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu2" className="tab-pane fade">
                <div className="product">
                  <div className="row">
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-7.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-8.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-6-6.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="menu3" className="tab-pane fade">
                <div className="product">
                  <div className="row">
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-3.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-4.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-5.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-6.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-7.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6">
                      <div className="wrap-box">
                        <div className="box-img">
                          <img
                            src="./Home 1_files/gallery-8.jpg"
                            className="img-responsive"
                            alt="Product"
                            title="images products"
                          />
                        </div>
                        <div className="gallery-box-main">
                          <div className="gallery-icon">
                            <a
                              className="lightbox"
                              href="http://landing.engotheme.com/html/skyline/demo/images/Home-1/gallery-2-2.jpg"
                              data-littlelightbox-group="gallery"
                              title="Flying is life"
                            >
                              <i
                                className="ion-ios-plus-empty"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-default btn-our">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
