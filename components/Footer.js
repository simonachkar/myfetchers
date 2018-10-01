import Link from 'next/link';

const Footer = () => (
  <section>
    <div className="flex">
      <Link href="/">
        <a className="logo">My Fetchers</a>
      </Link>
      <div stlye={{ display: 'flex' }} className="navbar">
        <Link href="/how-it-works">
          <a>How It Works</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
    <hr />
    <div className="flex">
      <p>Copyright &copy; {(new Date()).getFullYear()} My Fetchers</p>
      <div stlye={{ display: 'flex' }} className="bottom">
        <Link href="/terms-of-use">
          <a>Terms of Use</a>
        </Link>
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        section {
          background-color: #0059bf;
        }
        .flex {
          padding: 20px 80px;
          display: flex;
         justify-content: space-between;
        }
        a {
          float: left;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: 0.4s;
        }
        a:hover {
          color: #ededed;
        }
        .logo {
          font-size: 140% !important;
          font-weight: bold;
          text-decoration: none;
        }
        .navbar a {
          text-align: center;
          margin-left: 20px;
        }
        hr {
        border: 0 none;
        height: .5px;
        color: #006ce8; /* old IE */
        background-color: #006ce8; /* Modern Browsers */
        }
        .bottom a {
          text-align: center;
          margin-left: 20px;
        }
        p {
          color: white;
          font-size: 90%;
        }
        @media only screen and (max-width: 800px) {
          .flex {
            padding: 20px 10px;
          }
          a, p {
            text-align: center;
            font-size: 80%;
          }
          .logo {
            font-size: 100% !important;
          }
        }
      `}
    </style>
  </section>
);

export default Footer;
