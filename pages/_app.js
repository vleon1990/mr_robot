import {LinksProvider} from '../context/linkContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <LinksProvider>
      <Component {...pageProps} />
    </LinksProvider>
  )
}

export default MyApp