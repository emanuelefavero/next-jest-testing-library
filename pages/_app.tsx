import '@/styles/global.css'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Header } from '@/components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Jest Testing Library</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      {/* React Bootstrap */}
      {/* @see https://react-bootstrap.github.io/getting-started/introduction */}
      <Script
        src='https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
        crossOrigin='anonymous'
      />
      <Script
        src='https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
        crossOrigin='anonymous'
      />
      <Script
        src='https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js'
        crossOrigin='anonymous'
      />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
