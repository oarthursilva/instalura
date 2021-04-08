import { GraphQLClient, gql } from 'graphql-request';

import AboutScreen from '../../src/components/screen/AboutScreen';
import { websitePageHOC } from '../../src/components/wrapper/WebsitePage/hoc';

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});

export async function getStaticProps() {
  const TOKEN = 'fdd5e9b5aa84cafe513a50facc17f7';
  const DatoCMSURL = 'https://graphql.datocms.com/';

  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const query = gql`
    query {
      pageAbout {
        pageTitle
        pageDescription
      }
    }
  `;

  const messages = await client.request(query);

  return {
    props: {
      messages,
    },
  };
}
