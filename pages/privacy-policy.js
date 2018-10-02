import Layout from '../components/Layout';

const PrivacyPolicy = () => (
  <Layout>
    <div className="container">
      <h2>Privacy Policy</h2>
      <div className="section">
        <h3>Money Guarantee Process.</h3>
        <p>
          <ol>
            <li>
              All payments and money transactions are done through
              myfetchers.com. Once an agreement has been reached between
              a Fetcher (person responsible for acquiring and delivering a task)
              and a Tasker (person requesting a task) the payment procedure initiates.
            </li>
            <li>
              The Tasker pays the agreed fee from their registered myfetchers.com
              account for the transaction to myfetchers.com account for the
              benefit of the Fetcher.
            </li>
            <li>
              The Fetcher can then start the procedure of fetching the task as
              their fee is guaranteed as long as the fetching is successful.
            </li>
            <li>
              Once the task has been accomplished, (i.e. delivered to the Tasker)
              the fee is deposited to the Fetcher Account.
            </li>
            <li>
              In case of a dispute or withdrawal or failure to deliver the task,
              the money is bank redeposited to the Taskers account.
            </li>
            <li>
              Both accounts are guaranteed of their transactions.
              Happy tasking and Fetching.
            </li>
          </ol>
        </p>
      </div>
      <div className="section costs">
        <h3>Fees & Costs</h3>
        <p>
          Once a TASK is achieved you pay 6% of the final transaction value,
          including postage if applicable.  Hence if the value of the transaction is $10,
          your total fee would be calculated and invoiced at $10.60.
        </p>
        <p>
          This is the final fee.
        </p>
        <p>
          If the task is not accomplished, the final fee is returned to your
          account 100% with no administrative  deductions.
        </p>
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
        h3 {
          padding-bottom: 1em;
        }
        .costs p {
          padding-top: 20px;
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

export default PrivacyPolicy;
