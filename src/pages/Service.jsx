import {cbp, vts, aap, cfp, bsr, serviceHero} from '../assets/image';
import { FaPhoneAlt, FaComments } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
      <section className="service__hero">
        <h2 className="h2">Our Professional Accounting Services</h2>
        <p>We offer a comprehensive range of accounting and bookkeeping services designed to support start-ups and small to medium-sized businesses. Our services help you stay financially organised, compliant with HMRC requirements, and confident in your financial decision-making.</p>
      </section>
      <main className="main">
        <section className="service__section">
          <h2 className="service__h2">Computerised Bookkeeping & Payroll</h2>
          <p className="section__p">Accurate and up-to-date bookkeeping is the foundation of a successful business. At <strong>Meks Accounting Services</strong>, we provide reliable computerised bookkeeping services using trusted accounting software to ensure your financial records are always accurate and compliant.</p>
          <p className="section__p">Our bookkeeping services include:</p>
          <ul className="service__ul">
            <li>Recording and categorising all business transactions</li>
            <li>Sales invoicing and purchase invoice management</li>
            <li>Bank and credit card reconciliations </li>
            <li>Expense tracking and control </li>
            <li>Real-time financial reporting and management information</li>
            <li>Payroll processing, payslips, and RTI submissions to HMRC</li>
          </ul>
          <figure className="service__figure">
            <img src={cbp} alt="computerised bookkeeping" />
            <figcaption className="service__figcaption">By keeping your books accurate and up to date, we give you clear visibility over your finances and free up your time to focus on running and growing your business.</figcaption>
          </figure>
        </section>

        <section className="service__section">
          <h2 className="service__h2">VAT & Tax Services</h2>
          <p className="service__p">VAT can be complex and time-consuming if not handled correctly. We provide full VAT support to ensure your business remains compliant and avoids unnecessary penalties. </p>
          <p className="service__P">Our VAT and tax services include:</p>
          <ul className="service__ul">
            <li>VAT registration and deregistration </li>
            <li>Preparation and submission of quarterly VAT returns</li>
            <li>Advice on VAT schemes (Flat Rate Scheme, Cash Accounting, etc.)</li>
            <li>Ensuring VAT records comply with <strong>Making Tax Digital (MTD) </strong> requirements.</li>
            <li>Preparation of self-assessment tax returns for individuals and business owners.</li>
          </ul>
          <figure className="service__figure">
            <img src={vts} alt="Vat and Tax services" />
            <figcaption className="service__figcaption">We ensure all figures are accurately reported to HMRC and submitted on time, giving you confidence and peace of mind.</figcaption>
          </figure>
        </section>

        <section className="service__section">
          <h2 className="service__h2">Annual Accounts Preparation</h2>
          <p className="service__p">We prepare statutory annual accounts in line with UK accounting standards and regulatory requirements. Our service ensures your business meets its obligations while providing a clear picture of financial performance.</p>
          <p className="service__P">Our annual accounts services include: </p>
          <ul className="service__ul">
            <li>Preparation of profit and loss statements</li>
            <li>Balance sheets and supporting notes </li>
            <li>Cash flow statements </li>
            <li>Filing accounts with <strong>Companies House</strong> and <strong>HMRC</strong></li>
            <li>Preparation of self-assessment tax returns for individuals and business owners.</li>
            <li>Liaising with HMRC where required.</li>
          </ul>
          <figure className="service__figure">
            <img src={aap} alt="Annual Accounts Preparation" />
          </figure>
        </section>

        <section className="service__section">
          <h2 className="service__h2">Cash Flow Projections & Financial Planning</h2>
          <p className="service__p">Effective cash flow management is essential for business stability and growth. We prepare cash flow projections that help you anticipate future inflows and outflows and plan ahead with confidence.</p>
          <p className="service__P">Our cash flow services help you: </p>
          <ul className="service__ul">
            <li>Identify potential cash shortages or surpluses</li>
            <li>Plan for tax payments, investments, and growth</li>
            <li>Make informed financial decisions</li>
            <li>Reduce the risk of unexpected financial pressure</li>
          </ul>
          <figure className="service__figure">
            <img src={cfp} alt="Financial Planning" />
          </figure>
        </section>

        <section className="service__section">
          <h2 className="service__h2">Business Set-Up & Registration</h2>
          <p className="service__p">We support start-ups and new business owners with setting up their business correctly from day one.</p>
          <p className="service__P">Our business set-up services include:</p>
          <ul className="service__ul">
            <li>Advice on business structure (sole trader, partnership, or limited company)</li>
            <li>Registration with <strong>Companies House</strong> and <strong>HMRC</strong></li>
            <li>VAT and PAYE registration where required</li>
            <li>Setting up bookkeeping systems and processes</li>
            <li>Ensuring early compliance with tax and regulatory obligations</li>
          </ul>
          <figure className="service__figure">
            <img src={bsr} alt="Business Set-Up" />
          </figure>
        </section>

        <section className='service__section'>
          <h3>Ready to streamline Your Accounting?</h3>
          <p>Let us take the stress out of bookkeeping, VAT, and compliance so you can focus on growing your business.</p>
          <p className='big-text'>
            <a href="tel:447438155154"><FaPhoneAlt />Call Us</a> &nbsp; | &nbsp;
            <Link to="contact"><FaComments />Contact Us</Link>
          </p>
        </section>
      </main>
    </>
    
  )
}

export default Service
