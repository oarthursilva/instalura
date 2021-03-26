import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export function SEO({ headerTitle }) {
  const hasHeaderTitle = Boolean(headerTitle);
  const baseTitle = 'Instalura Bootcamp JAMStack';
  const title = hasHeaderTitle
    ? `${headerTitle} | ${baseTitle}`
    : baseTitle;

  const description = 'Pronto para saber da vida dos outros? Entre já e fique sabendo tudo que está rolando no seu bairro e no mundo!';
  const image = 'https://instalura-oarthursilva.vercel.app/images/instalura.png';
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
  headerTitle: PropTypes.string,
};

SEO.defaultProps = {
  headerTitle: '',
};
