import React from "react";
import './BlogSection.css'

interface BlogSectionProps {}

const BlogSection: React.FC<BlogSectionProps> = () => {
  return (
    <div id="blog">
      <section className="blog-section">
        <div className="container">
          <h2 className="blog-title">Blog</h2>
          <div className="line"></div>
          <div className="row">
            <div className="blog-content">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="substance">
                  <div className="date">
                    <div className="day">25</div>
                    <div className="year">
                      AUGUST <br />
                      2017
                    </div>
                  </div>
                  <div className="text">
                    <a href="http://landing.engotheme.com/html/skyline/demo/index.html#">
                      Update menu food in Skyline Hotel
                    </a>
                  </div>
                  <a
                    href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                    className="read-more"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="substance">
                  <div className="date">
                    <div className="day">22</div>
                    <div className="year">
                      AUGUST <br />
                      2017
                    </div>
                  </div>
                  <div className="text">
                    <a href="http://landing.engotheme.com/html/skyline/demo/index.html#">
                      Las Maquinas on Tragamonedas
                    </a>
                  </div>
                  <a
                    href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                    className="read-more"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="substance">
                  <div className="date">
                    <div className="day">06</div>
                    <div className="year">
                      AUGUST <br />
                      2017
                    </div>
                  </div>
                  <div className="text">
                    <a href="http://landing.engotheme.com/html/skyline/demo/index.html#">
                      Mother Earth Hosts Our Travels
                    </a>
                  </div>
                  <a
                    href="http://landing.engotheme.com/html/skyline/demo/index.html#"
                    className="read-more"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;