import type { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: { root: { minHeight: 48, borderRadius: 12, paddingInline: 22 } },
  },
  MuiTextField: { defaultProps: { fullWidth: true, size: 'medium' } },
  MuiOutlinedInput: { styleOverrides: { root: { minHeight: 52, borderRadius: 12 } } },
  MuiCard: {
    styleOverrides: { root: { border: '1px solid #E3E8EF', borderRadius: 18, boxShadow: '0 8px 28px rgba(0, 58, 105, 0.07)' } },
  },
  MuiLink: { styleOverrides: { root: { fontWeight: 600 } } },
};
