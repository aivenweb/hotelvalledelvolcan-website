import React from "react";
import "./OurServices.css";

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = () => {
  return (
    <div id="our-services">
      <section className="section-our-services">
        <div className="container">
          <div className="section-header">
            <div className="section-heading">
              <h3 className="section-title">Nuestros servicios</h3>
              <div className="section-description">
                <p>
                  Hotel valle del volcán es un establecimiento tres estrellas
                  atendido por sus dueños, con un trato personalizado y cuidado
                  hacia todos nuestros clientes. Nuestra política de venta Low
                  Cost nos permite siempre brindar el precio más bajo del
                  mercado, garantizando una relación precio-calidad excelente.
                </p>
              </div>
            </div>
          </div>
          <div className="services-row">
            <div className="col-lg-6">
              <div className="service-box">
                <div className="service-wrapper">
                  <div className="service-text">
                    <h5>Habitaciones</h5>
                    <p>
                      Nuestras habitaciones están equipadas con baño privado,
                      televisión y wifi. Y también contamos con servicio de
                      lavandería, servicio de caja fuerte, un restaurant y
                      estufa hogar para disfrutar de un ambiente cálido y
                      tranquilo.
                    </p>
                  </div>
                  <div className="service-img">
                    <img className="image-fit" src="/assets/images/habitacion-hotel-valle-del-volcan.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-box">
                <div className="service-wrapper">
                  <div className="service-text">
                    <h5>Entretenimiento</h5>
                    <p>
                      Club Hotel Valle del Volcán ofrece conciertos de guitarra,
                      música en general, bingo, torneos de cartas, o puedes
                      hacer uso de nuestra sala de usos múltiples equipada con
                      mesa de pool, ping pong, aparatos de gimnasia y
                      colchonetas.
                    </p>
                  </div>
                  <div className="service-img">
                    <img className="image-fit" src="/assets/images/entretenimiento-hotel-valle-del-volcan.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-box">
                <div className="service-wrapper">
                  <div className="service-text">
                    <h5>Actividades al aire libre</h5>
                    <p>
                      La naturaleza de Copahue ofrece paseos a caballo,
                      senderismo, visitas a cascadas, ascenso al volcán Copahue,
                      avistaje de Laguna Las Mellizas y muchísimas cosas más a
                      parte de la bellisima actividad termal que es el atractivo
                      principal del lugar.
                    </p>
                  </div>
                  <div className="service-img">
                    <img className="image-fit" src="/assets/images/actividades-hotel-valle-del-volcan.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-box">
                <div className="service-wrapper">
                  <div className="service-text">
                    <h5>Restaurante</h5>
                    <p>
                      Nuestras comidas se realizan de forma casera y contamos
                      con un menú fijo y/o dietas especiales a pedido de
                      nuestros clientes. Ofrecemos desayuno continental con
                      panes caseros y mermeladas caseras, tostadas, jugo de
                      naranjas, frutas, medialunas y cafetería de primera
                      calidad.
                    </p>
                  </div>
                  <div className="service-img">
                    <img className="image-fit" src="/assets/images/comedor-hotel-valle-del-volcan.jpeg" alt="" />
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

export default OurServices;
