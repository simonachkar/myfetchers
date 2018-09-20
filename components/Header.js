import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>My Fetchers</a>
    </Link>
    <Link href="/how-it-works">
      <a style={linkStyle}>How It Works</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About Us</a>
    </Link>
    <Link href="/contact-us">
      <a style={linkStyle}>Contact Us</a>
    </Link>
  </div>
);

export default Header;
