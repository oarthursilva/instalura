import ProfileScreen from '../../src/components/screen/ProfileScreen';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';

export default websitePageHOC(ProfileScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Profile',
    },
    menuProps: {
      display: false,
    },
  },
});
