import type { AppProps } from "next/app";
import axios from "axios";
import { Navigation } from "../components/Navigation";
import { ProviderApp } from "../context/state";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderApp computers={pageProps.computers}>
      <div className="h-full flex flex-col justify-between w-11/12 bg-bg mx-auto py-2 px-6 rounded-xl">
        <Component />
        <Navigation />
      </div>
    </ProviderApp>
  );
}

App.getInitialProps = async () => {
  const pageProps = { computers: [] };
  try {
    const response = await axios.get("http://localhost:3001/computers");
    pageProps.computers = response.data;
    return { pageProps };
  } catch (e) {
    console.log("Error" + e);
    return { pageProps };
  }
};

export default App;
