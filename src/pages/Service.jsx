import {cbp, vts, aap, cfp} from '../assets/image';
import { FaPhoneAlt, FaComments } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <main className="main">
       <section id="service" className="service">
          <h2 className="h2">Our Services</h2>
          <div className="service__div">
            <p className="big-text">Our Professional Accounting Services</p>
            <p>We offer a comprehensive range of services to help small and medium-sized businesses stay financially organized and compliant.</p>
          </div>

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
    </main>
  )
}

export default Service
