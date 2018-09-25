const BreifDescription = () => (
  <section>

    <h1>How it works ?</h1>
    <div className="wrapper">
      <div className="left-column">
        <h2>Tasker</h2>
        <ul>
          <li>Post a Task</li>
          <li>Wait for fetchers to place their bids</li>
          <li>Accept the best bid</li>
          <li>Get things done!</li>
        </ul>
      </div>
      <div className="right-column">
        <h2>Fetcher</h2>
        <ul>
          <li>Find tasks to Fetch</li>
          <li>Place your bid</li>
          <li>Get accepted</li>
          <li>Get Paid!</li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        section {
          padding: 50px 70px;
          position: relative;
        }
        h1 {
          text-align: center;
          margin-bottom: 40px;
        }
        h2 {
          margin-bottom: 10px;
        }
        .wrapper {
          padding: 10px;
          display: flex;
          align-self: center;
          justify-content: space-around;
        }
        .left-column {
          display: flex;
          align-items: center;
          float: left;
        }
        .right-column {
          display: flex;
          align-items: center;
          right: 10%;
        }
        ul {
          list-style: none;
        }
        ul li:before {
          content: '✓';
          margin-right: 10px;
        }
        li {
          padding-left: 30px;
        }
      `}
    </style>

  </section>
);

export default BreifDescription;
