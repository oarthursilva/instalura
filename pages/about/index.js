import React from 'react';
import WebsitePageWrapper from '../../src/components/wrapper/WebsitePage';
import AboutScreen from '../../src/components/screen/AboutScreen';

export default function About() {
  return (
    <WebsitePageWrapper
      seoProps={{ headerTitle: 'About' }}
    >
      <AboutScreen />
    </WebsitePageWrapper>
  );
}
