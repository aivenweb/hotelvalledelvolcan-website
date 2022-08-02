import React from "react";
import './AboutUsPageComponent.scss'
import BannerComponent from "../BannerComponent";

interface AboutUsPageComponentProps {}

const AboutUsPageComponent: React.FC<AboutUsPageComponentProps> = () => {
  return (
    <div id="about-us-page">
      <BannerComponent title="Sobre Nosotros" />
      <section className="section-about">
        <div className="container">
          <div className="row">
            <div className="wrap-about">
              <div className="about-item">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right">
                  <div className="img img-left">
                    <img
                      src="/assets/images/fachada-hotel-valle-del-volcan.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-left">
                  <div className="text">
                    <h2 className="heading">Nosotros</h2>
                    <div className="desc">
                      <p>
                        Todo el equipo de Hotel Valle del Volcán trabaja en
                        conjunto para lograr la satisfacción de nuestros
                        clientes. La clave de nuestro éxito es la excelente
                        calidad humana de todas las personas que trabajan con
                        nosotros y que hacen de la estadía de los clientes un
                        lugar como en casa.
                      </p>
                      <br></br>
                      <p>
                        Una ubicación privilegiada que permite disfrutar de la
                        naturaleza y el descanso. En Hotel Valle del Volcán nos
                        encargamos de que disfrutes de lo mejor de Copahue.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-item about-right">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  no-padding-left col-lg-push-6 col-md-push-6 ">
                  <div className="img img-right">
                    <img src="/assets/images/copahue.jpg" alt="" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right col-lg-pull-6 col-md-pull-6">
                  <div className="text">
                    <h2 className="heading">
                      ¿Cómo llegar?
                    </h2>
                    <div className="desc">
                      <p>
                        La ciudad de Copahue se encuentra a 375 km de Neuquén
                        Capital (aproximadamente 5 hs de viaje). El Hotel Valle
                        del Volcán se encuentra integrado en la naturaleza
                        entorno a las Termas de Copahue, es un hotel que busca
                        brindar comodidad y hospitalidad para favorecer el
                        descanso de los clientes.
                      </p>
                      <br></br>
                      <p>
                        Si viajas desde Buenos Aires, las empresas aéreas que
                        llegan a Neuquén son Latam y Aerolíneas Argentinas.
                        Algunas de las empresas que viajan por tierra son Vía
                        Bariloche, El Valle, Crucero Del Norte. Luego de llegar
                        a Neuquén Capital debe empalmar su viaje hasta Copahue
                        en un bus especial de la empresa Cono Sur. Desde
                        cualquier destino que viajes rumbo a Copahue la mejor
                        opción es llegar a Neuquén Capital por la mañana para
                        empalmar de manera más cómoda el trayecto a Copahue.
                      </p>
                    </div>
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

export default AboutUsPageComponent;
