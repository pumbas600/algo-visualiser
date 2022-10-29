import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, createTheme, CssBaseline, Theme } from '@mui/material';
import Sidebar from '../components/Sidebar';
import CategoryContextProvider from '../state/providers/CategoryProvider';
import Header from '../components/Header';
import { ThemeProvider } from '@mui/system';
import { useMemo } from 'react';
import useCategoryContext from '../state/contexts/CategoryContext';

function MyApp({ Component, pageProps }: AppProps) {
  const App = () => {
    const category = useCategoryContext();
    const theme = useMemo<Theme>(
      () =>
        createTheme({
          palette: {
            primary: {
              main: category.current.colour,
            },
          },
        }),
      [category],
    );

    return (
      <ThemeProvider theme={theme}>
        <Sidebar>
          <Header />
          <Component {...pageProps} />
        </Sidebar>
      </ThemeProvider>
    );
  };

  return (
    <CategoryContextProvider>
      <CssBaseline />
      <App />
    </CategoryContextProvider>
  );
}

export default MyApp;
