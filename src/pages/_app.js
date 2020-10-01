import "../styles/globals.css";
import Theme from "../styles/Theme";
import Header from "../Components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import { Container } from "./_styled";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Theme>
  );
};

export default MyApp;
