import { CircularProgress, Stack, Typography } from '@mui/material';

export function LoadingScreen({ label = 'Chargement…' }: { label?: string }) {
  return <Stack role="status" alignItems="center" justifyContent="center" spacing={2} sx={{ minHeight: '50vh' }}><CircularProgress /><Typography>{label}</Typography></Stack>;
}
