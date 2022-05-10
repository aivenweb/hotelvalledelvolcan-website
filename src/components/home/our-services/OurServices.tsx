import React from 'react';
import './OurServices.css'

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
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem fuga eligendi laudantium sunt beatae excepturi, sint, velit repellendus facere libero odit a soluta reprehenderit, fugit placeat! Unde quo accusantium deserunt?</p>
                            </div>
                        </div>
                        <div className="section-btn">
                            <a>Ver todos</a>
                        </div>
                    </div>
                    <div className="services-row">
                        <div className="col-lg-6">
                            <div className="service-box">
                                <div className="service-wrapper">
                                    <div className="service-text">
                                        <h5>Restaurant</h5>
                                        <p>Lorem ipsi, is simply lñablablablabla</p>
                                    </div>
                                    <div className="service-img">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-box">
                                <div className="service-wrapper">
                                    <div className="service-text">
                                        <h5>Restaurant</h5>
                                        <p>Lorem ipsi, is simply lñablablablabla</p>
                                    </div>
                                    <div className="service-img">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-box">
                                <div className="service-wrapper">
                                    <div className="service-text">
                                        <h5>Restaurant</h5>
                                        <p>Lorem ipsi, is simply lñablablablabla</p>
                                    </div>
                                    <div className="service-img">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-box">
                                <div className="service-wrapper">
                                    <div className="service-text">
                                        <h5>Restaurant</h5>
                                        <p>Lorem ipsi, is simply lñablablablabla</p>
                                    </div>
                                    <div className="service-img">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurServices;