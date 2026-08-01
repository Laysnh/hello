import type { ReactNode } from 'react';
import { Container } from '@mui/material';

interface PageContainerProps { children: ReactNode; maxWidth?: 'lg' | 'xl'; }

/** Constrains page content while preserving comfortable tablet gutters. */
export function PageContainer({ children, maxWidth = 'xl' }: PageContainerProps) {
  return <Container component="main" maxWidth={maxWidth} sx={{ py: { xs: 3, md: 5 }, px: { xs: 2, sm: 3 } }}>{children}</Container>;
}
