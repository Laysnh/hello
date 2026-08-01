import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface PageHeaderProps { title: string; description?: string; action?: ReactNode; }

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2, mb: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
      <Box><Typography variant="h2" component="h1">{title}</Typography>{description && <Typography color="text.secondary" sx={{ mt: 0.75 }}>{description}</Typography>}</Box>
      {action}
    </Box>
  );
}
