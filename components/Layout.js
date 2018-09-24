import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" />
    <style global jsx>
      {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Signika', sans-serif;
        }
      `}
    </style>
    <Header />
    {children}
  </div>
);

export default Layout;
