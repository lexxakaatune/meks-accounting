import {ContactForm, Socials} from "../components/ContactForm";
import { FaPhone, FaMailBulk } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <section className="contactHeroSection">
        <h2 className="center">Get in Touch</h2>
        <p className="center">We’d love to hear from you. Whether you’re looking for bookkeeping, VAT support, or full accounting management, we’re ready to help.</p>
        <div className="contact__div flex center big-text">
          <p>
            <FaPhone />
            <a href="tel:+447438155154">Call Us</a>
          </p>
          <p>
            <FaMailBulk />
            <a href="mailto:info@meksaccountingservices.com">Email Us</a>
          </p>
        </div>
      </section>
      <main className="main">
        <section className="location">
          <ContactForm />
           <Socials />
        </section>        
      </main>
    </>
  )
}

export default Contact
