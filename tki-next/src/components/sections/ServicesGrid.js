import Link from 'next/link';

export default function ServicesGrid() {
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-1.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>custom manufacturing solution</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-2.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>industrial automation and robotics</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-3.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>product design and prototyping</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-4.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>equipment maintenance support</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-5.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>research and development</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-6.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>regulatory compliance consulting</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-7.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>quality control and testing</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>

          <div className="col-lg-3 col-md-6">
            {/* Service Item Start */}
            <div className="service-item">
              <div className="icon-box">
                <img src="/images/icon-service-8.svg" alt="" />
              </div>

              <div className="service-body">
                <h3>supply chain and management</h3>
              </div>

              <div className="service-footer">
                <Link href="#" className="service-btn">
                  <img src="/images/arrow-dark.svg" alt="" />
                </Link>
              </div>
            </div>
            {/* Service Item End */}
          </div>
        </div>
      </div>
    </div>
  );
}
