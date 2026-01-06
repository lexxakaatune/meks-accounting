import { Link } from 'react-router-dom';
import { aboutBig, aboutSmall } from '../assets/image';

const About = () => {
  return (
    <>
      <section className="about about__hero">
        <figure className="about__figure">
          <img src={aboutBig} alt="security" />
          <figcaption className="about__figcaption">
            <span className="nowrap"><b>25</b></span>
            <small className="nowrap">years of</small>
            <small className="nowrap">experience</small> 
          </figcaption>
          <img src={aboutSmall} alt="another" />
        </figure>
        <aside className="about__aside">
          <h2 className="h2">About Meks Accounting Services</h2>
          <p className="about__p">
            At Meks Accounting Services, we provide professional accounting support designed to simplify your financial management. Based in Manchester and serving clients across the UK, we help businesses maintain accurate books, manage taxes, and meet all compliance obligations.
          </p>
        </aside>
      </section>

      <main className="main">
        <h2 className="h2">About Meks Accounting Services</h2>
        <p className="about__p big-text"> Empower Your Financial Journey Everyday</p>
        <p className="about__p">At Meks Accounting Services, we provide professional accounting support designed to simplify financial management for businesses and individuals. Based in Manchester and serving clients across the UK, we help businesses maintain accurate financial records, manage tax obligations, and remain fully compliant with regulatory requirements.</p>

        <section className="about__section">
          <h2 className="about__h2">Our Mission</h2>
          <p className="about__p">To empower business owners with financial clarity, compliance, confidence, and peace of mind through accurate, efficient, and technology-led accounting services.</p>
        </section>
        

        <section className='about__section'>
          <h2 className="about__h2">Our Approach</h2>
          <p className="about__p">We believe that good accounting is about more than numbers. It’s about trust, transparency, and ethical responsibility. We take the time to understand each client’s business and provide tailored financial solutions that support informed decision-making, long-term sustainability, and regulatory compliance. </p><br />
          <p className='about__P'>Our work is guided by the ethical principles promoted by the <strong>Association of Chartered Certified Accountants (ACCA)</strong>, ensuring that our services are delivered with integrity, objectivity, and professional competence always.</p>
        </section>

        <section className='about__section'>
          <h2 className="about__h2 center">Our Values</h2>
          <ul className=' about__ul none'>
            <li>
              <h3>Integrity </h3>
              <p>We act honestly and transparently in all our professional relationships.</p>
            </li>
            <li>
              <h3>Professionalism </h3>
              <p>We maintain high standards of competence, care, and ethical conduct.</p>
            </li>
            <li>
              <h3>Objectivity & Reliability </h3>
              <p>We provide accurate, unbiased financial information that clients can depend on. </p>
            </li>
            <li>
              <h3>Confidentiality </h3>
              <p>All client information is handled with discretion, security, and respect.</p>
            </li>
            <li>
              <h3>Innovation</h3>
              <p>We embrace modern tools and technology to deliver efficient, forward-thinking solutions.</p>
            </li>
          </ul>
        </section>        

        

        <section className='about__section'>
          <h2>Let's Work Together</h2>
          <p>Partner with Meks Accounting Services today and experience a smooth, stress-free approach to managing your business finances.</p>
          <Link className='btn none active yes' to="contact">Contact Us</Link>
        </section>
      </main>
    </>
  )
}

export default About;
