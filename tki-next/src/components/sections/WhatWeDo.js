import { whatWeDo } from '@/data/services';

export default function WhatWeDo() {
  // Split the data into two columns for the layout
  const col1 = whatWeDo.slice(0, 3);
  const col2 = whatWeDo.slice(3, 6);

  return (
    <div className="what-we-do">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            {/* What We Do Content Start */}
            <div className="what-we-do-content">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">what we do</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">Innovative factory and industry <span>solutions today</span></h2>
              </div>
              {/* Section Title End */}

              {/* What We Do List Start */}
              <div className="what-we-do-list">
                <div className="what-we-do-list-box-1">
                  {col1.map((item) => (
                    <div className="what-we-do-item" key={item.id}>
                      <div className="icon-box">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="what-we-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="what-we-do-list-box-2">
                  {col2.map((item) => (
                    <div className="what-we-do-item" key={item.id}>
                      <div className="icon-box">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="what-we-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* What We Do List End */}

              {/* What We Do Footer Start */}
              <div className="what-we-do-footer">
                <p>Lorem ipsum is a placeholder text commonly used <span>to demonstrate</span></p>
              </div>
              {/* What We Do Footer End */}
            </div>
            {/* What We Do Content End */}
          </div>

          <div className="col-lg-6">
            {/* What We Do Image Start */}
            <div className="what-we-do-image">
              <figure className="image-anime">
                <img src="/images/what-we-do-image.jpg" alt="" />
              </figure>

              {/* Contact Now Circle Start */}
              <div className="contact-now-circle">
                <img src="/images/contact-now-circle.svg" alt="" />
              </div>
              {/* Contact Now Circle End */}
            </div>
            {/* What We Do Image End */}
          </div>
        </div>
      </div>
    </div>
  );
}
