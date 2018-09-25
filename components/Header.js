import Link from 'next/link';

// const container = {
//   backgroundColor: 'white',
//   marginBottom: 15,
//   display: 'flex',
//   justifyContent: 'space-around',
//   overflow: 'hidden',
//   padding: '20px 10px', /* Large padding which will shrink on scroll (using JS) */
//   transition: '0.4s', /* Adds a transition effect when the padding is decreased */
//   position: 'fixed', /* Sticky/fixed navbar */
//   width: '100%',
//   top: 0, /* At the top */
//
// };

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
          top: 0
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
