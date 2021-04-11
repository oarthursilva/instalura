import { CMSGraphQLClient, gql } from './CMSGraphQLClient';

describe('CMSGraphQLClient()', () => {
  describe('query', () => {
    describe('when the data is requested', () => {
      const query = gql`
        query {
          test {
            testData
          }
        }
      `;
      const mockGraphQLClientModule = ({ messages }) => jest
        .fn()
        .mockImplementation(() => ({
          request: jest.fn().mockImplementation(() => (messages)),
        }));

      const mockGraphQLClientModuleError = jest
        .fn()
        .mockImplementation(() => ({
          request: jest.fn().mockImplementation(() => { throw new Error('raise exception'); }),
        }));

      test('and it succeed', async () => {
        const responseExp = { messages: 'test successful' };
        // const GraphQLClientModule = mockGraphQLClientModule(responseExp);
        const client = CMSGraphQLClient({}, mockGraphQLClientModule(responseExp));
        const response = await client.query(query);

        expect(response.data).toEqual(responseExp);
      });

      test('and it fails', async () => {
        // const GraphQLClientModule = ;
        const client = CMSGraphQLClient({}, mockGraphQLClientModuleError);

        await expect(client.query(query))
          .rejects
          .toThrow('Could not fetch data from server');
      });
    });
  });
});
