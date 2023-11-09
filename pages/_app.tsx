import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans text-gray-900 antialiased bg-gray-200">
      <Component {...pageProps} />
    </div>
  )
}