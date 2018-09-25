import Grid from '@material-ui/core/Grid';

const BreifDescription = () => (
  <section style={{ flexGrow: 1 }}>
    <h1>How it works ?</h1>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={40}
    >
      <Grid item sm={6} xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={3}>
            <h2>Tasker</h2>
          </Grid>
          <Grid item xs={9}>
            <ul>
              <li>Post a Task</li>
              <li>Wait for fetchers to place their bids</li>
              <li>Accept the best bid</li>
              <li>Get things done!</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={3}>
            <h2>Fetcher</h2>
          </Grid>
          <Grid item xs={9}>
            <ul>
              <li>Find tasks to Fetch</li>
              <li>Place your bid</li>
              <li>Get accepted</li>
              <li>Get Paid!</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <style jsx>
      {`
        section {
          padding: 50px 100px;
        }
        h1 {
          text-align: center;
          margin-bottom: 40px;
        }
        h2 {
          margin-bottom: 10px;
        }
        ul {
          list-style: none;
        }
        ul li:before {
          content: '✓';
          margin-right: 10px;
        }
      `}
    </style>

  </section>
);

export default BreifDescription;
