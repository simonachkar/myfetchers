import React from 'react';

const Hero = () => (
  <div className="hero-image">
    <div className="hero-text">
      <h1 style={{ fontSize: '40px' }}>
        Without your physical presence,
        <b> your fetcher</b> will deliver to you <b>anything</b> from <b>anywhere</b>.
      </h1>
    </div>
    <style jsx>
      {`
        b {
          font-size: 43px;
          font-weight: 600;
        }
        .hero-image {
          width: 100%;
          height: auto;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/static/bg.jpg");
          height: 600px;
          background-position: left 20%;
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .hero-text {
          text-align: right;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-10%, -50%);
          color: white;
      }
    `}
    </style>
  </div>
);

export default Hero;
