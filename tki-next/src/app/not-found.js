import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Page Not Found | Toplax',
  description: 'Page not found',
}

export default function NotFound() {
  return (
    <>
      <PageHeader title={<>Page not <span>found</span></>} activePage="Page not found" />

      {/* error section start */}
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-page-image wow fadeInUp">
                <Image 
                  src="/images/404-error-img.png" 
                  alt="404 Error" 
                  width={800} 
                  height={600}
                  priority
                  style={{ width: 'auto', height: 'auto', maxWidth: '80%' }}
                />
              </div>
              <div className="error-page-content">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.25s">Oops! page <span>not found</span></h2>
                </div>
                <div className="error-page-content-body">
                  <p className="wow fadeInUp" data-wow-delay="0.5s">The page you are looking for does not exist</p>
                  <Link className="btn-default wow fadeInUp" data-wow-delay="0.75s" href="/"><span>back to home</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* error section end */}
    </>
  );
}
