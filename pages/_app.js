import React from 'react';
// import App, { Container } from 'next/app';
//import Sider from '../components/Sider';
//import Header from '../components/Header';
// import '../styles/style.css';
import 'antd/dist/antd.min.css';

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;                                             