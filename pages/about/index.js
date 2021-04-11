import AboutScreen, { getContent } from '../../src/components/screen/AboutScreen';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});
