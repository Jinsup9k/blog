import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="My First Static Website"/>
                    <meta name="keywords" content="nextjs,static,website" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css" />
                    <style global jsx>
                        {`
                            html, body, #__next {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                            }
                        `}
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}