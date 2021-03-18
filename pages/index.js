import React from 'react';

import HomeScreen from '../src/components/screen/HomeScreen';
import WebsitePageWrapper from '../src/components/wrapper/WebsitePage';

export default function Home() {
  return (
    <WebsitePageWrapper
      seoProps={{ headerTitle: 'Home' }}
    >
      <HomeScreen />
    </WebsitePageWrapper>
  );
}
