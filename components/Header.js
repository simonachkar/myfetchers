import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = () => (
  // TODO: Mobile Menu
  <div style={{ flexGrow: 1 }}>
    <AppBar position="static" color="default">
      <Toolbar style={{ padding: '0px 100px' }}>
        <Link href="/">
          <a className="logo">My Fetchers</a>
        </Link>
        <div style={{ flexGrow: 1 }}>
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
        <Button size="medium" style={{ marginRight: 30 }} color="inherit">Sign Up</Button>
        <Button size="medium" avariant="contained" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <style jsx>
      {`
        a {
       float: left;
       color: black;
       padding: 15px;
       text-decoration: none;
       line-height: 25px;
       border-radius: 4px;
       font-size: 120%;
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
       margin-left: -12px;
       margin-right: 30px;
       font-size: 130%;
       font-weight: bold;
       transition: 0.4s;
       text-decoration: none;
     }
      `}
    </style>
  </div>

);

export default Header;
