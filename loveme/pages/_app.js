// import '@/styles/globals.css'
// import '@/assets/css/animate.css'
// import '@/assets/css/boo'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return <Component {...pageProps} />
}
