import { CMSGraphQLClient, gql } from '../../../infra/cms/CMSGraphQLClient';

export async function getContent() {
  const query = gql`
    query {
      pageAbout {
        pageTitle
        pageDescription
      }
    }
  `;

  const client = CMSGraphQLClient();

  const response = await client.query({ query });
  return response.data.messages;
}
