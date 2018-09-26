import Link from 'next/link';

const Header = () => (
  <div className="container">
    <style jsx>
      {`
        .container {
          background-color: white;
          margin-bottom: 15;
          display: flex;
          justify-content: space-around;
          overflow: hidden;
          padding: 10px 10px;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 99;
        }
        a {
          float: left;
          color: black;
          padding: 10px;
          text-decoration: none;
          line-height: 25px;
          border-radius: 4px;
          font-size: 125%;
          transition: 0.4s;
        }
        .navbar a {
          text-align: center;
          margin-right: 15px;
        }
        a:hover {
          color: #a3a3a3;
        }
        .logo {
          font-size: 130%;
          font-weight: bold;
          transition: 0.4s;
          text-decoration: none;
        }
        `}
    </style>
    <Link href="/">
      <a className="logo">My Fetchers</a>
    </Link>
    <div className="navbar">
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
);

export default Header;
