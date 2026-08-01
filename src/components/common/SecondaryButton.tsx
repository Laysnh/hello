import { Button, type ButtonProps } from '@mui/material';

export function SecondaryButton(props: ButtonProps) {
  return <Button variant="outlined" color="primary" {...props} />;
}
