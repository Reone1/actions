import { Box, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Story />
      </Box>
    </ThemeProvider>
  ),
];
