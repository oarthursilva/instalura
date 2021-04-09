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
      function mockGraphQLClientModule({ messages }) {
        return jest
          .fn()
          .mockImplementation(() => ({
            request: jest.fn().mockImplementation(() => (messages)),
          }));
      }
      function mockGraphQLClientModuleError() {
        return jest
          .fn()
          .mockImplementation(() => ({
            request: jest.fn().mockImplementation(() => { throw new Error('raise exception'); }),
          }));
      }

      test('and it succeed', async () => {
        const responseExp = { messages: 'test successful' };
        const client = CMSGraphQLClient(mockGraphQLClientModule(responseExp));
        const response = await client.query(query);

        expect(response.data).toEqual(responseExp);
      });

      test('and it fails', async () => {
        const client = CMSGraphQLClient(mockGraphQLClientModuleError());

        await expect(client.query(query))
          .rejects
          .toThrow('Could not fetch data from server');
      });
    });
  });
});
