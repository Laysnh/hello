import { Chip, type ChipProps } from '@mui/material';

type StatusTone = 'success' | 'warning' | 'error' | 'info' | 'default';
interface StatusBadgeProps extends Omit<ChipProps, 'color' | 'label'> { label: string; tone?: StatusTone; }

/** Compact semantic state label; never relies on colour alone. */
export function StatusBadge({ label, tone = 'default', ...props }: StatusBadgeProps) {
  return <Chip label={label} color={tone} size="small" {...props} sx={{ fontWeight: 700, ...props.sx }} />;
}
