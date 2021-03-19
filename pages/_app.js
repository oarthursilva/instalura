import React from 'react';
import { Head } from '../src/components/commons/Head';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
