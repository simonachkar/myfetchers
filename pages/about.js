import Layout from '../components/Layout';
import ContactUs from '../components/other/ContactUs';

const About = () => (
  <div>
    <Layout>
      <div className="container">
        <h2>About Us</h2>
        <div className="section">
          <p>
            My Fetchers is all about the power of people to connect and
            eliminate distances.
          </p>
          <p>
            It is created to accomplish what is now
            unreachable and impossible.
          </p>
          <p>
            It enables people (Taskers) to
            be in places and do accomplish tasks through their proxies,
            their Fetchers.
          </p>
          <p>
            It’s all about FETCHING and accomplishing what
            is not currently listed in ecommerce sites.  What is not currently
            available for sale.
          </p>
          <p>
            Whether it is a small symbolic task of Fetching
            a photo of favorite place abroad or a box of sweets from Florida US,
            MYFETCHERS makes it possible. Without your physical presence,
            YOUR FETCHERS will deliver to you ANYTHING from ANYWHRE.
          </p>
        </div>
      </div>
      <ContactUs />
      <style jsx>
        {`
          .container {
            padding: 30px;
          }
          .section {
            padding: 10px 10px 0px 10px;
          }
          p {
            padding-top: 20px;
          }
        `}
      </style>
    </Layout>
  </div>
);

export default About;
