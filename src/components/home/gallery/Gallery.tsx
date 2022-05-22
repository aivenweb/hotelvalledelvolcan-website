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
                  href="/index.html#Hotel"
                >
                  Nuestro Hotel
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="/index.html#menu1"
                >
                  Termas
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="/index.html#menu2"
                >
                  Copahue
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="/index.html#menu3"
                >
                  Copahue bajo nieve
                </a>
              </li>
            </ul>
            <br />2
            <div className="tab-content">
              <div id="Hotel" className="tab-pane fade in active">
                <div className="product">
                  <div className="row">
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-1.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-9.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-2.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-10.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-3.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-5.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-4.jpeg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-8.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-6.jpg" imageDescription="alt" />
                    <ImageComponent image="/assets/images/gallery/nosotros/hotel-valle-del-volcan-7.jpg" imageDescription="alt" />
                  </div>
                </div>
              </div>
              <div id="menu1" className="tab-pane fade">
                <div className="product">
                  <div className="row">
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-1.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-5.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-7.jpeg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-11.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-4.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-10.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-12.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-8.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-6.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-2.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-3.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-9.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-15.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-14.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-13.jpg" imageDescription="alt" />
                  <ImageComponent image="/assets/images/gallery/actividades/actividades-hotel-valle-del-volcan-16.jpg" imageDescription="alt" />
                  </div>
                </div>
              </div>
              <div id="menu2" className="tab-pane fade">
                <div className="product">
                  <div className="row">
                    <ImageComponent image="/assets/images/gallery/copahue/arco-copahue.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-1.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-2.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-3.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-12.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-15.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-13.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-14.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-6.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-10.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-4.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-5.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-11.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-7.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-8.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/copahue/copahue-9.jpg" imageDescription="alt"/>
                  </div>
                </div>
              </div>
              <div id="menu3" className="tab-pane fade">
                <div className="product">
                  <div className="row">
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-2-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-1-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-3-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-4-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-5-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-6-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-7-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                    <ImageComponent image="/assets/images/gallery/nieve/nieve-8-hotel-valle-del-volcan.jpg" imageDescription="alt"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
