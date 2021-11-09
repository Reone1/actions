import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <RecoilRoot>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line */}
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  </>
);

export default MyApp;
