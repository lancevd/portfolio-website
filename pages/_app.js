import "../styles/globals.css";

import Layout from "./layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const metadata = {
  title: "Olamide Mosoobalaje",
  description:
    "Olamide Mosobalaje, an experienced Frontend Developer based in Nigeria",
  author: "Olamide Winner Mosobalaje",
  keywords:
    "Frontend Developer, frontend engineer, african frontend developer, african frontend engineer, frontend developer in nigeria",
  favicon: "/favicon.png",
};

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
