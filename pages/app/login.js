import LoginScreen from '../../src/components/screen/LoginScreen';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
