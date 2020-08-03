import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

theme.typography.body1 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

export default function CustomResponsiveFontSizes({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body1">{data}</Typography>
    </ThemeProvider>
  );
};
