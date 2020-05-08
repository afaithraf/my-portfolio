import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
		    <link href="https://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet" />
		    <link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet" />
		    <link href="https://fonts.googleapis.com/css?family=Raleway:300" rel="stylesheet" />
		    <link href="https://fonts.googleapis.com/css?family=Raleway:400" rel="stylesheet" />
		    <link href="https://fonts.googleapis.com/css?family=Raleway:500" rel="stylesheet" />
		    <link href="https://fonts.googleapis.com/css?family=Raleway:600" rel="stylesheet" />
		    <link href="https://fonts.googleapis.com/css?family=Raleway:700" rel="stylesheet" />
		    <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet" />
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