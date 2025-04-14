import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
  <link rel="manifest" href="/manifest.json" />
  <link rel="icon" href="/icon-192.png" />
  <meta name="theme-color" content="#2563eb" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="Convo Coach" />
  <link rel="apple-touch-icon" sizes="180x180" href="/icon-180.png" />

</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
