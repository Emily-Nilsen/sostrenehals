import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="antialiased bg-white" lang="en">
      <Head>
        
        <link
          rel="stylesheet"
          href="https://use.typekit.net/dzz8hhf.css"
        />
        <link
          rel="icon"
          href="/nutmegLogo.svg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
