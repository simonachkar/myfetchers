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
      </div>
    </div>
    <hr />
    <div className="flex">
      <p>Copyright &copy; {(new Date()).getFullYear()} My Fetchers</p>
      <div stlye={{ display: 'flex' }} className="bottom">
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        section {
          background-color: #f5f5f5;
        }
        .flex {
          padding: 20px 80px;
          display: flex;
          justify-content: space-between;
        }
        .logo {
          color: #0059bf;
          font-size: 140% !important;
          font-weight: bold;
          text-decoration: none;
        }
        a {
          float: left;
          color: black;
          text-decoration: none;
          border-radius: 4px;
          transition: 0.4s;
        }
        a:hover {
          color: #0059bf;
        }
        .navbar a {
          text-align: center;
          margin-left: 20px;
        }
        hr {
        border: 0 none;
        height: .5px;
        color: #e8e8ea; /* old IE */
        background-color: #e8e8ea; /* Modern Browsers */
        }
        .bottom a {
          text-align: center;
          margin-left: 20px;
        }
        p {
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
