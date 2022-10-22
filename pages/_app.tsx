import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';
import SidebarProvider from '../context/providers/SidebarProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Box>
        <CssBaseline />
        <Sidebar />
        <Component {...pageProps} />
      </Box>
    </SidebarProvider>
  );
}

export default MyApp;
