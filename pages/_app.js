import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/property.css'
import '../styles/propertydetail.css'
import '../styles/form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "react-slick"; 
import "react-slick";
import Head from 'next/head';
import Layout from '../components/layout';


function MyApp({ Component, pageProps }) {

  return(  <>
  <Head>
    
    </Head>
    <Layout>
    <Component {...pageProps} />
  </Layout> </>) 
}

export default MyApp

