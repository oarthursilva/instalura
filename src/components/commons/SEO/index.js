import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Instalura Bootcamp JAMStack';
  const title = hasHeadTitle
    ? `${headTitle} | ${baseTitle}`
    : baseTitle;

  const description = 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!';
  const image = 'https://www.alura.com.br/assets/img/alura-share.1571848411.png';
  const urlBase = 'https://instalura-oarthursilva.vercel.app/';
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
};
