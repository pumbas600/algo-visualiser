import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </Box>
  );
}

export default MyApp;
