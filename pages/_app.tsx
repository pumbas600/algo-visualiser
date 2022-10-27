import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';
import CategoryContextProvider from '../state/providers/CategoryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CategoryContextProvider>
      <CssBaseline />
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </CategoryContextProvider>
  );
}

export default MyApp;
