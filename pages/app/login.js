import React from 'react';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';

export function Login() {
  return (
    <div>
      Under construction
    </div>
  );
}

export default websitePageHOC(Login, {
  pageWrapperProps: {
    seoProps: {
      headerTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {},
  },
});
