import { Button, type ButtonProps } from '@mui/material';

export function PrimaryButton(props: ButtonProps) {
  return <Button variant="contained" color="primary" {...props} />;
}
