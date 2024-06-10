import Head from "next/head";
import "../styles/globals.css";

import Layout from "./layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Olamide Mosoobalaje | Frontend Engineer</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="image" content="/favicon.png" />
        <meta
          name="description"
          content="Olamide Mosobalaje, an experienced Frontend Developer based in Nigeria"
        />
        <meta
          name="keywords"
          content="Frontend Developer, frontend engineer, african frontend developer, african frontend engineer, frontend developer in nigeria, React developer, next.js developer, react developer nigeria"
        />
        <meta name="author" content="Olamide Mosobalaje" />
        <meta name="title" content="Olamide Mosobalaje | Frontend Developer" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
