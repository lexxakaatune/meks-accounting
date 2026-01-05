import { useState } from "react";
import { FaUserGraduate, FaMicrochip, FaHandsHelping, FaBalanceScale, FaPhoneAlt, FaComments} from "react-icons/fa";
import { Link } from "react-router-dom";
import {hero1, hero2, hero3, aboutBig, aboutSmall, cbp, vts, aap, cfp} from "../assets/image";
import {ContactForm} from "../components/ContactForm";

const Home = () => {
  const images = [
    {
      ID: 0,
      imageSrc: hero1,
      imageAlt: 'Mr.Robert Davis photo',
      name: 'Mr. another',
      work: 'another Supervisor'
    },
    {
      ID: 1,
      imageSrc: hero2,
      imageAlt: 'Mr.Robert Davis photo',
      name: 'Mr. another',
      work: 'another Supervisor'
    },
    {
      ID: 2,
      imageSrc: hero3,
      imageAlt: 'another photo',
      name: 'Mr.Robert Davis',
      work: 'Field Supervisor'
    }
  ]
  const [image, setImage] = useState(images[0]);

  const toggleImg = (e) => {
    const ID = e.target.id;
    console.log(ID)
    setImage(images[ID]);
  }
  
  return (
    <>
      <section className="hero">
        <div className="hero__div">
          <h2 className="h2"> MEKS Accounting</h2>
          <p className="hero__p hero__big-text"> <span className="nowrap">Your Trusted Partner for</span> <span className="nowrap">Stress-Free Accounting</span></p>
          <p className="hero__p">
            <small>At Meks Accounting Services, we provide reliable bookkeeping, VAT, and accounting solutions that help small and medium-sized businesses stay financially organized and compliant. Whether you’re a start-up or a growing business, we’re here to make your finances simpler, smarter, and more transparent.</small>
          </p>
          <p className="hero__p">
            <Link to="/Contact" className="none active yes btn">Request a Free Consultation</Link>
          </p>
        </div>
        <figure className="hero__figure">
          <img id="heroImg" src={image.imageSrc} className="hero__figure_img" alt="join tester" title="join" width="100" height="100" />
          <figcaption className="hero__figcaption">
            {images.map((image) => (
              <img
                key={image.ID}
                id={image.ID}
                onClick={ (e) => toggleImg(e)} 
                className="img-icon active yes" 
                src={image.imageSrc} 
                alt={image.imageAlt} 
              />
            ))}
          </figcaption>
        </figure>    
      </section>

      <main className="main">
        <section className="about">
          <figure className="about__figure">
            <img src={aboutBig} alt="security guard" />
            <figcaption className="about__figcaption">
              <span className="nowrap"><b>25</b></span>
              <small className="nowrap">years of</small>
              <small className="nowrap">experience</small> 
            </figcaption>
            <img src={aboutSmall} alt="security guard" />
          </figure>
          <aside className="about__aside">
            <h2 className="h2">About Meks Accounting Services</h2>
            <p className="about__p big-text">
              Financial clarity and peace of mind.
            </p>
            <p className="about__p">
              We are a UK-based accounting firm committed to helping businesses achieve financial clarity and peace of mind. Our team combines professional expertise with modern technology to deliver bookkeeping, VAT, and reporting solutions that empower better business decisions. We pride ourselves on accuracy, reliability, and a client-first approach.
            </p>
            <Link to="/about">Learn More</Link>
          </aside>
        </section>

        <section className="why"> 
          <div className="why__div">
            <h2 className="h2 nowrap">Why Choose Us</h2>
            <p className="big-text">Choose Smart Bookkeeping with us</p>
          </div>
          <fieldset className="why__fieldset">
            <legend><FaUserGraduate /></legend>
            <h3>Experienced & Qualified </h3>
            <p>Over 15 years of professional accounting experience.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend><FaMicrochip /></legend>
            <h3>Technology-Driven</h3>
            <p>We use modern accounting software for efficiency and accuracy.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend><FaHandsHelping /></legend>
            <h3>Personalised Support</h3>
            <p>Every client receives one-to-one service tailored to their needs.</p>
          </fieldset>
          <fieldset className="why__fieldset">
            <legend><FaBalanceScale /></legend>
            <h3>Transparent Fees</h3>
            <p>Clear, fair, and upfront pricing — no hidden surprises.</p>
          </fieldset>
        </section>

        <section id="service" className="service">
          <h2 className="h2">Our Services</h2>
          <div className="service__div">
            <p className="big-text">Our Professional Accounting Services</p>
            <p>We offer a comprehensive range of services to help small and medium-sized businesses stay financially organized and compliant.</p>
          </div>
          <p className="service__p">
            <Link className="btn none service-link" to="service">Services</Link>
          </p>          

          <div className="service__div">
            <figure className="service__figure">
              <img src={cbp} alt="personal protection" />
              <figcaption className="service__figcaption">
                <h3>Computerized Bookkeeping & Payroll</h3>
                <small>Our bookkeeping service ensures that every transaction is recorded accurately using trusted accounting software. We manage invoicing, bank reconciliations, expense tracking, and payroll processing — giving you real-time insights into your business performance.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={vts} alt="commercial security" />
              <figcaption className="service__figcaption">
                <h3>VAT & Tax Services</h3>
                <small>We handle VAT registration, quarterly VAT returns, and file them promptly with HMRC. For individuals and small businesses. We prepare self-assessment tax returns, ensuring all income and allowable expenses are correctly reported.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={aap} alt="Object protection" />
              <figcaption className="service__figcaption">
                <h3>Annual Accounts Preparation</h3>
                <small>We compile and prepare your annual accounts, including your balance sheet, profit and loss statement, and cash flow statement, ensuring your business remains compliant with all statutory requirements.</small>
              </figcaption>
            </figure>
            <figure className="service__figure">
              <img src={cfp} alt="security consulting" />
              <figcaption className="service__figcaption">
                <h3>Cash Flow Projections</h3>
                <small>We help you understand and plan your cash flow, so your business stays healthy. Our projections identify potential shortfalls or surpluses and guide you in making timely financial decisions.</small>
              </figcaption>
            </figure>
          </div>
          <p className="center big-text">Ready to streamline your accounting? <br /> <a href="tel:+447438155154"><FaPhoneAlt /> Call Us</a> or <Link to="contact"><FaComments /> Contact Us</Link></p>
        </section>

        <section id="contact" className="contact">
          <div className="home contact__div">
            <ContactForm position='true' />
          </div>

          <figure className="contact__figure"></figure>
        </section>

      </main>
    </>
  )
}

export default Home;