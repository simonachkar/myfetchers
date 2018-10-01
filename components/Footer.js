import Link from 'next/link';

const Footer = () => (
  <section>
    <div className="flex padding">
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
        .padding {

        }
        a {
          float: left;
          color: white;
          text-decoration: none;
          line-height: 25px;
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
      `}
    </style>
  </section>
);

export default Footer;
