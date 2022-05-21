import React from "react";
import './Gallery.css';
import ImageComponent from "./ImageComponent";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  return (
    <div id="gallery">
      <section style={{ background: `url('${process.env.PUBLIC_URL}/assets/images/bg-gallery.jpg')`}} className="gallery-our">
        <div className="container-fluid">
          <div className="gallery">
            <h2 className="title-gallery">Nuestra galería</h2>
            <div className="outline"></div>
            <ul className="nav nav-tabs text-uppercase">
              <li className="active">
                <a
                  data-toggle="tab"
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#Hotel"
                >
                  Nuestro Hotel
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="http://landing.engotheme.com/html/skyline/demo/index.html#menu1"
                >
                  Actividades
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
            <br />2
            <div className="tab-content">
              <div id="Hotel" className="tab-pane fade in active">
                <div className="product">
                  <div className="row">
                    {/* <ImageComponent image="/assets/images/gallery/naturaleza-nieve-1-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/naturaleza-nieve-2-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/naturaleza-nieve-3-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/naturaleza-nieve-4-hotel-valle-del-volcan.jpg" imageDescription="alt"/> */}
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-1.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-2.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-4.jpeg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-8.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-3.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-5.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-6.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/hotel-valle-del-volcan-7.jpg" imageDescription="alt" />
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
