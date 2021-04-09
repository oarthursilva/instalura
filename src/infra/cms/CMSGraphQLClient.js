import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient(GraphQLClientModule = GraphQLClient) {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const client = new GraphQLClientModule(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query({ query, variables }) {
      try {
        const messages = await client.request(query, variables);
        return {
          data: {
            messages,
          },
        };
      } catch (error) {
        throw new Error('Could not fetch data from server');
      }
    },
  };
}
