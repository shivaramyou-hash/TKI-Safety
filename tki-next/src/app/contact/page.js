
import PageHeader from '@/components/layout/PageHeader';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactForm from '@/components/sections/ContactForm';
import GoogleMap from '@/components/sections/GoogleMap';

export const metadata = {
  title: 'Contact Us | TKI Safety - Factory & Industry HTML Template',
  description: 'Contact TKI Safety Factory & Industry',
}

export default function Contact() {
  return (
    <>
      <PageHeader title={<>Contact <span>us</span></>} activePage="contact us" />

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <ContactInfo />
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div> 
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}

      <GoogleMap />
    </>
  );
}
