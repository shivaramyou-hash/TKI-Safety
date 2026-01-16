import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Coming Soon | TKI Safety',
  description: 'This page is under construction.',
}

export default function ComingSoon() {
  return (
    <>

      {/* Coming Soon Section Start */}
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
             
              <div className="error-page-content">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.25s">Under <span>Construction</span></h2>
                </div>
                <div className="error-page-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.5s">We are currently working very hard to bring you this page. Stay tuned!</p>
                  <Link className="btn-default wow fadeInUp" data-wow-delay="0.75s" href="/"><span>back to home</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Coming Soon Section End */}
    </>
  );
}
