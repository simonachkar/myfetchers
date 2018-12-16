import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const Layout = ({ children }) => (
  <div>
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
    <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" />
    <Meta />
    <style global jsx>
      {`
        h1 {
          font-size: 40px;
        }
        h2 {
          font-size: 30px;
        }
        p, li {
          font-size: 20px;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Signika', sans-serif;
        }
        @media only screen and (max-width: 800px) {
          h1 {
            font-size: 30px;
          }
          h2 {
            font-size: 20px;
          }
          p, li {
            font-size: 16px;
          }
        }
      `}
    </style>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
