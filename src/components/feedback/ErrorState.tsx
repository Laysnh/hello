import ErrorOutlineRounded from '@mui/icons-material/ErrorOutlineRounded';
import { Stack, Typography } from '@mui/material';
import { PrimaryButton } from '../common/PrimaryButton';

interface ErrorStateProps { title?: string; message?: string; onRetry?: () => void; }
export function ErrorState({ title = 'Une erreur est survenue', message = 'Veuillez réessayer dans quelques instants.', onRetry }: ErrorStateProps) {
  return <Stack role="alert" alignItems="center" textAlign="center" spacing={1.5} sx={{ py: 6 }}><ErrorOutlineRounded color="error" sx={{ fontSize: 48 }} /><Typography variant="h3">{title}</Typography><Typography color="text.secondary">{message}</Typography>{onRetry && <PrimaryButton onClick={onRetry}>Réessayer</PrimaryButton>}</Stack>;
}
