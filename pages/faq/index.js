import React from 'react';
import WebsitePageWrapper from '../../src/components/wrapper/WebsitePage';
import FAQScreen from '../../src/components/screen/FAQScreen';

// eslint-disable-next-line react/prop-types
export default function FAQPage({ faqCategories }) {
  return (
    <WebsitePageWrapper
      seoProps={{ headerTitle: 'FAQ' }}
    >
      <FAQScreen
        faqCategories={faqCategories}
      />
    </WebsitePageWrapper>
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
