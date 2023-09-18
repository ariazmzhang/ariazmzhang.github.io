// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
