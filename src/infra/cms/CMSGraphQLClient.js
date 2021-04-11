import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';
import PropTypes from 'prop-types';

export const gql = GraphQLTag;

export function CMSGraphQLClient(
  { preview } = { preview: false }, GraphQLClientModule = GraphQLClient,
) {
  const DatoCMSURL = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';
  const TOKEN = process.env.DATO_CMS_TOKEN;
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

CMSGraphQLClient.propTypes = {
  preview: PropTypes.bool,
};
