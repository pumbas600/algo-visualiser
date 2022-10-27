import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';
import CategoryContextProvider from '../state/providers/CategoryProvider';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CategoryContextProvider>
      <CssBaseline />
      <Sidebar>
        <Header />
        <Component {...pageProps} />
      </Sidebar>
    </CategoryContextProvider>
  );
}

export default MyApp;
