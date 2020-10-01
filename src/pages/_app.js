import '../styles/globals.css'
import Theme from "../styles/Theme";
import Header from "../Components/Header";
import styled from "styled-components"

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Header />
      <Component {...pageProps} />
    </Theme>
  );
};

export default MyApp
