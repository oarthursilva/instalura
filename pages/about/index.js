import AboutScreen from '../../src/components/screen/AboutScreen';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});
