import { createTheme } from '@mui/material/styles';
import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';

export const appTheme = createTheme({
  palette,
  typography,
  components,
  shape: { borderRadius: 12 },
  spacing: 8,
});
