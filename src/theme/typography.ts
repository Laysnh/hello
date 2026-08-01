import type { TypographyOptions } from '@mui/material/styles';

export const typography: TypographyOptions = {
  fontFamily: 'Inter, Arial, sans-serif',
  h1: { fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 700, lineHeight: 1.15 },
  h2: { fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700 },
  h3: { fontFamily: 'Poppins, sans-serif', fontSize: '1.25rem', fontWeight: 600 },
  h4: { fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 600 },
  button: { fontWeight: 700, textTransform: 'none' },
};
