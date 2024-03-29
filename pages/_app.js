import Layout from '../Layout/Layout'
import '../styles/globals.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout><Component {...pageProps}/></Layout>
  )
}

export default MyApp
