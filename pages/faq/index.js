import React from 'react';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';
import FAQScreen from '../../src/components/screen/FAQScreen';

// eslint-disable-next-line react/prop-types
export function FAQPage({ faqCategories }) {
  return (
    <FAQScreen
      faqCategories={faqCategories}
    />
  );
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headerTitle: 'FAQ',
    },
  },
});

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
