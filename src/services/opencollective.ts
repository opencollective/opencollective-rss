import { gql, GraphQLClient } from 'graphql-request';
import type { GetUpdatesQuery, GetUpdatesQueryVariables } from '../types/graphql.js';

const updatesQuery = gql`
  query GetUpdates($accountSlug: String!) {
    account(slug: $accountSlug, throwIfMissing: false) {
      id
      name
      slug
      updates(
        limit: 300
        onlyPublishedUpdates: true
        orderBy: { field: PUBLISHED_AT, direction: DESC }
      ) {
        nodes {
          id
          title
          html
          createdAt
          publishedAt
          slug
        }
      }
    }
  }
`;

export class OpenCollectiveService {
  private readonly client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient('https://api.opencollective.com/graphql');
  }

  public async fetchUpdatesForAccount(accountSlug: string) {
    try {
      const response = await this.client.request<GetUpdatesQuery, GetUpdatesQueryVariables>(
        updatesQuery,
        { accountSlug }
      );
      return response.account;
    } catch (error: any) {
      if (
        error?.response?.status === 404 ||
        error?.response?.errors?.some((e: any) => e.message === 'Account not found')
      ) {
        throw new Error('Account not found');
      }
      throw error;
    }
  }
}
