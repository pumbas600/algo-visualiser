import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <CssBaseline />
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </Box>
  );
}

export default MyApp;
