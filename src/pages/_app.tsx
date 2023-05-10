import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, styled, useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../src/Components/core/Layout'
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
export default function App({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return <ThemeProvider theme={darkTheme}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <ToastContainer position="bottom-right" newestOnTop />
    </ThemeProvider>
}
