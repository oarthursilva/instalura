import HomeScreen from '../src/components/screen/HomeScreen';
import { websitePageHOC } from '../src/components/wrapper/WebsitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
