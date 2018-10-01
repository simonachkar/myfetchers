import Grid from '@material-ui/core/Grid';

const BreifDescription = () => (
  <section>
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
          justify="space-around"
          alignItems="center"
          spacing={8}
        >
          <Grid item sm={4} xs={12}>
            <h2>Fetchers</h2>
          </Grid>
          <Grid item sm={8} xs={12}>
            <ul>
              <li>Find tasks to Fetch</li>
              <li>Place your bid</li>
              <li>Get accepted</li>
              <li>Get Paid!</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Grid
          container
          direction="row"
          ustify="space-around"
          alignItems="center"
          spacing={8}
        >
          <Grid item sm={4} xs={12}>
            <h2>Tasker</h2>
          </Grid>
          <Grid item sm={8} xs={12}>
            <ul>
              <li>Post a Task</li>
              <li>Wait for fetchers to place their bids</li>
              <li>Accept the best bid</li>
              <li>Get things done!</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <style jsx>
      {`
        section {
          padding: 80px 40px 100px 40px;
        }
        h1 {
          text-align: center;
          margin-bottom: 30px;
        }
        h2 {
          text-align: center;
          margin-bottom: 10px;
        }
        ul {
          list-style: none;
        }
        ul li:before {
          color: #0059bf;
          content: '✓';
          margin-right: 10px;
        }
      `}
    </style>

  </section>
);

export default BreifDescription;
