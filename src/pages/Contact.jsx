import {ContactForm} from "../components/ContactForm";
import { FaPhone, FaMailBulk, FaSearchLocation } from 'react-icons/fa'

const Contact = () => {
  return (    
    <>
      <section className="contact__hero">
        <h2>Contact Us</h2>
        <hr />
      </section>
      <main className="main">        
        <h2 className="big-text">Get in Touch</h2>
        <p className="">We’d love to hear from you. Whether you’re looking for bookkeeping, VAT support, or full accounting management, we’re ready to help.</p>
        <p className="">We work with businesses across the UK and are happy to discuss your requirements and answer any questions you may have. </p>

        <section className="contact__section">
          <h2 className="big-text">Contact Details</h2>
          <p><strong><FaSearchLocation />Location:</strong> Manchester, UK(serving clients nationwide)</p>
          <p><strong><FaPhone />Phone:</strong> <a href="tel:447438155154">+447438155154</a></p>
          <p><strong><FaMailBulk />Email:</strong><a href="mailto:info@meksaccountingservices.com"> info@meksaccountingservices.com</a></p>
        </section>

        <section className="contact__section">
          <h2 className="big-text">Send Us a Message</h2>
          <p>Please complete the form below and we will get back to you as soon as possible.</p>
        </section>
        <ContactForm />
        <p>All enquiries are handled confidentially and with no obligation.</p>
      </main>
    </>    
  )
}

export default Contact
