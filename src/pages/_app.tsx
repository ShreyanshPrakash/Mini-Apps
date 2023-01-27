import { Header } from "@/components";
import { store } from "@/store";
import { GlobalStyles } from "@/styles/globalStyles";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { CustomHead, NavigationHeader } from "uiLibrary";
// import { StyledAppContainer } from "uiLibrary/StyledComponents";
// import { GlobalStyle, YTDTheme } from "styles";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* // <StyledAppContainer className="app"> */}
        <ThemeProvider theme={{}}>
          <Header />
          <GlobalStyles />
          {/* <CustomHead /> */}
          {/* <NavigationHeader /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      {/* // </StyledAppContainer> */}
      </Provider>
  );
}

export default MyApp;
