import React from 'react';
import FAQScreen from '../../src/components/screen/FAQScreen';

// eslint-disable-next-line react/prop-types
export default function FAQPage({ faqCategories }) {
  return (
    <FAQScreen
      faqCategories={faqCategories}
    />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((res) => res.json())
    .then((convertedData) => convertedData.data);

  return {
    props: {
      faqCategories,
    },
  };
}
