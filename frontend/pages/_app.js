import Head from 'next/head';
import '../styles/global.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontSize: 12,
    h1: {
      fontFamily: "Inter",
      fontSize: 40,
      color: '#FFFFFF',
      fontWeight: "bold",
      // fontStyle: "italic",
      transform: "skew(-9deg) translateX(5px)",
      maxWidth: "450px",
      lineHeight: "50px",
      letterSpacing: "1px"
    },
    h2: {
      fontFamily: "Inter",
      fontSize: "24px",
      color: '#FFFFFF',
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "Inter",
      fontSize: "14px",
      color: '#FFFFFF',
      fontWeight: "bold",
      lineHeight: "24px"
    },
    h4: {
      fontFamily: "Inter",
      fontSize: "12px",
      color: '#FFFFFF',
      fontWeight: "normal",
    },
    p: {
      fontFamily: "Inter",
      fontSize: "14px",
      color: '#FFFFFF',
      fontWeight: "normal",
      lineHeight: "30px",

    },
  },
  colors: {
    orange: "#FF7A00",
    yellow: "#FFC700",
    white: "#FFFFFF",
    lightGray: "#878787",
    gray: "#1B1B1B",
    darkGray: "#0D0D0D"
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Wuthering Heights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}