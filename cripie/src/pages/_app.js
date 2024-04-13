import "@/styles/globals.css";
import { Provider } from "@/store";
import AppWrapper from "@/store/AppWrapper";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}
