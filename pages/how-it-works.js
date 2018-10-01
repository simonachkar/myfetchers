import Layout from '../components/Layout';

const HowItWorks = () => (
  <Layout>
    <div className="container">
      <h2>How it Works... Very Simple!</h2>
      <div className="section">
        <h3>Place your task!</h3>
        <p>
          <ol>
            <li>Visit Myfetchers.com and register online</li>
            <li>Once registration is complete and he user profile is verified,
            the User Panel is activated.
            </li>
            <li>Each User can be a Tasker, (i.e. the person requesting an item)
            or a Fetcher (the person responsible for acquiring and delivering a task).
            </li>
            <li>Place your request, making sure you give as much details as
            possible regarding the task to be accomplished.
            </li>
            <li>All Bids (i.e. proposals by corresponding and authenticating
            Fetchers) will appear at your Taskers panel.
            </li>
            <li>Accept the best Bid (proposal) and proceed to payment.</li>
            <li>Further details can be accomplished by communicating with the
            successful Fetcher via Myfetchers.com messaging system.
            </li>
            <li>The Fee agreed is paid temporarily to MyFetchers.com for the
            safekeeping and guaranteed of the transaction.
            </li>
            <li>Once the task is accomplished and verified by the TASKER in the
            panel, the fee is deposited to the Fetchers account.
            </li>
          </ol>
          <p className="message">HAPPY TASKING!</p>
        </p>
      </div>
      <div className="section">
        <h3>Fetch a task!</h3>
        <p>
          <ol>
            <li>Visit Myfetchers.com and register online</li>
            <li>Once registration is complete and he user profile is verified,
            the User Panel is activated.
            </li>
            <li>Each User can be a Tasker, (i.e. the person requesting an item)
            or a Fetcher (the person responsible for acquiring and delivering a task).
            </li>
            <li>Using our filters, scroll down the tasks that you feel you may
            accomplish, i.e. near your hometown, an item or task you already trade.
            </li>
            <li>Place your BID (offer for fetching the task).</li>
            <li>Once the TASKER accepts your BID you may communicate with the
            TASKER direct for further details if there is a need.
            </li>
            <li>Once the TASKER makes a payment to MYFETCHERS.COM regarding your
            FETCH, you can start accomplishing the Fetching.
            </li>
            <li>Once the task is accomplished and verified by the TASKER in the
            panel, the fee is deposited to the Fetchers account.
            </li>
          </ol>
        </p>
        <p className="message">HAPPY FETCHING!</p>
      </div>
    </div>
    <style jsx>
      {`
        .container {
          padding: 30px;
        }
        .section {
          padding: 30px 10px 0px 10px;
        }
        /* Reset the style of list */
        ol {
          position: relative;
          list-style: none;
          padding: 0;
        }
        /* Add indentation of nested lists and remove bottom margin */
        ol ol {
          margin: 0;
        }
        /* Add general display for bullets and numbers */
        ol li {
          padding-left: 1em;
          margin: .25em 0;
        }
        ol li:before {
          position: absolute;
          left: 0;
          color: #0059bf;
          font-weight: bold;
        }
        /* Reset counter for  list */
        ol {
          counter-reset: listitem;
        }
        ol li {
          padding-left: 1.3em;
        }
        /* Style for numbered lists. Increment counter for each list item */
        ol li:before {
          counter-increment: listitem;
          content: counters(listitem, '.') '.';
        }
        ol, ol li:before {
          padding-left: 1em;
        }
        .message {
          font-weight: 600;
          padding: 10px;
        }
        @media only screen and (max-width: 800px) {
          .container {
            padding: 20px;
          }
          .section {
            padding: 10px 5px;
          }
          ol, ol li:before {
            padding-left: .5em;
          }
          h2 {
            padding: 1em 0;
            text-align: center;
          }
        }
      `}
    </style>
  </Layout>
);

export default HowItWorks;
