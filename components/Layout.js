import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" />
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
  </div>
);

export default Layout;