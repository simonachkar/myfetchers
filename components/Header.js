import Link from 'next/link';

const container = {
  marginBottom: 15,
  display: 'flex',
  justifyContent: 'space-around',
  overflow: 'hidden',
  padding: '20px 10px', /* Large padding which will shrink on scroll (using JS) */
  transition: '0.4s', /* Adds a transition effect when the padding is decreased */
  position: 'fixed', /* Sticky/fixed navbar */
  width: '100%',
  top: 0, /* At the top */
  zIndex: 99,
};

const Header = () => (
  <div style={container}>
    <style jsx>
      {`
        a {
          float: left;
          color: white;
          padding: 12px;
          text-decoration: none;
          line-height: 25px;
          border-radius: 4px;
          font-size: 120%;
        }
        .navbar a {
          text-align: center;
          margin-right: 15px;
        }
        a:hover {
          color: #eee;
        }
        .logo {
          font-size: 18px;
          font-size: 20px;
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
