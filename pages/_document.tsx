import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { ServerStyleSheet } from 'styled-components';

const MyDocument = () => (
  <Html lang='ko'>
    <Head>
      <meta charSet='utf-8' />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentsSheet = new ServerStyleSheet();
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          // eslint-disable-next-line
          styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {' '}
          {initialProps.styles} {materialSheets.getStyleElement()} {styledComponentsSheet.getStyleElement()}{' '}
        </>
      ),
    };
  } finally {
    styledComponentsSheet.seal();
  }
};

export default MyDocument;
