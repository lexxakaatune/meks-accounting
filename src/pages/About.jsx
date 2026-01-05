import { Link } from 'react-router-dom';
import { aboutBig, aboutSmall, explore, bearBull, mecha, roboHand } from '../assets/image';

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
          <p className="about__p big-text">
            Empower Your Financial Journey Everyday
          </p>
          <p className="about__p">
            At Meks Accounting Services, we provide professional accounting support designed to simplify your financial management. Based in Manchester and serving clients across the UK, we help businesses maintain accurate books, manage taxes, and meet all compliance obligations.
          </p>
        </aside>
      </section>

      <main className="main">
        <h2 className="about__h2">Our Mission</h2>
        <p className="big-text">To empower business owners with financial clarity, compliance, confidence, and peace of mind through accurate, efficient, and technology-led accounting services.</p>

        <article className="about__article">
          <h2 className="about__h2">We believe that good accounting is about more than numbers. It’s about trust, transparency, and ethical responsibility. We take the time to understand your business and provide tailored financial solutions that support informed decision-making, long-term sustainability, and full compliance with professional and regulatory standards.</h2>

          <p className="big-text">Our work is guided by the ethical principles promoted by the Association of Chartered Certified Accountants (ACCA), ensuring that our services are delivered with integrity, objectivity, and professional competence always.</p>

          <section className="about about__section">
            <figure>
              <img src={explore} alt="explore"/>
            </figure>
            <aside className="about__aside">
              <h3>Integrity </h3>
              <p>We act honestly and transparently in all our dealings.</p>
            </aside>
          </section>
          <section className="about about__section">
            <aside className="about__aside">
              <h3>Professionalism </h3>
              <p>We maintain high standards of competence, care, and conduct.</p> 
            </aside>
            <figure>
                <img src={bearBull} alt="bear and bulls"/>
            </figure>      
          </section>
          <section className="about about__section">
            <figure>
                <img src={mecha} alt="mecha"/>
            </figure>
            <aside className="about__aside">
              <h3>Objectivity & Reliability </h3>
              <p>We provide accurate, unbiased financial information you can trust.</p>
            </aside>
          </section>
          <section className="about about__section">
            <aside className="about__aside">
              <h3>Confidentiality </h3>
              <p>Your financial information is handled with discretion and respect.</p>
            </aside>
            <figure>
              <img src={roboHand} alt="robo hand"/>
            </figure>
          </section>
          <section className="about about__section">
            <figure>
                <img src={mecha} alt="mecha"/>
            </figure>
            <aside className="about__aside">
              <h3>Innovation</h3>
              <p>We embrace modern tools and technology to deliver efficient, forward-thinking solutions.</p>
            </aside>
          </section>
        </article>

        <section className="center">
          <h2>Let's Work Together</h2>
          <p>Partner with Meks Accounting Services today and experience a smooth, stress-free approach to managing your business finances.</p>
          <Link to="contact">Contact Us</Link>
        </section>
      </main>
    </>
  )
}

export default About;
