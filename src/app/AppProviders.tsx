import { useState, type ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { appTheme } from '../theme/theme';

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, retry: 1 } } }));
  return <QueryClientProvider client={queryClient}><ThemeProvider theme={appTheme}><CssBaseline /><BrowserRouter>{children}</BrowserRouter></ThemeProvider></QueryClientProvider>;
}
