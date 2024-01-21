import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.css';
import '../styles/index.css';
import Layout from "./components/layout";
import { useSSR } from '@nextui-org/react'



const MyApp = ({ Component, pageProps }) => {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  )
}

export default MyApp
