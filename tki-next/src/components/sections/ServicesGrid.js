import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesGrid() {
  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-3 col-md-6" key={service.id}>
              {/* Service Item Start */}
              <div className="service-item">
                <div className="icon-box">
                  <img src={service.icon} alt={service.title} />
                </div>

                <div className="service-body">
                  <h3>{service.title}</h3>
                </div>

                <div className="service-footer">
                  <Link href={`/services/${service.slug}`} className="service-btn">
                    <img src="/images/arrow-dark.svg" alt="" />
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
