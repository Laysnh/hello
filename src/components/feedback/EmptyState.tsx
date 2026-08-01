import InboxRounded from '@mui/icons-material/InboxRounded';
import { Stack, Typography } from '@mui/material';

export function EmptyState({ title = 'Aucune donnée', message = 'Les informations apparaîtront ici.' }: { title?: string; message?: string }) {
  return <Stack alignItems="center" textAlign="center" spacing={1} sx={{ py: 6 }}><InboxRounded color="disabled" sx={{ fontSize: 48 }} /><Typography variant="h3">{title}</Typography><Typography color="text.secondary">{message}</Typography></Stack>;
}
