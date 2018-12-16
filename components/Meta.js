import Head from 'next/head';
import { description } from '../package.json';

const Meta = () => (
  <Head>
    <html lang="en" />
    <title>MyFetchers - Reach the Unreachable</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#0059BF" />
    <meta charSet="utf-8" />
    <link rel="icon" href="/static/favicon.png" />
  </Head>
);

export default Meta;
