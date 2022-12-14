import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {wrapper} from "../store";
import {ThemeProvider} from "@mui/system";
import theme from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp);
