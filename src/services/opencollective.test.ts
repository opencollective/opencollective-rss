import { describe, it, expect, vi, beforeEach } from 'vitest';
import { OpenCollectiveService } from './opencollective.js';
import { GraphQLClient } from 'graphql-request';

vi.mock('graphql-request', () => ({
  GraphQLClient: vi.fn().mockImplementation(() => ({
    request: vi.fn(),
  })),
  gql: vi.fn((strings) => strings.join('')),
}));

describe('OpenCollectiveService', () => {
  let service: OpenCollectiveService;
  let mockRequest: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new OpenCollectiveService();
    mockRequest = (GraphQLClient as unknown as ReturnType<typeof vi.fn>).mock.results[0].value
      .request;
  });

  it('should return null when no updates are found', async () => {
    mockRequest.mockResolvedValueOnce({
      account: null,
    });

    const updates = await service.fetchUpdatesForAccount('non-existent');
    expect(updates).toEqual(null);
  });

  it('should handle 404 responses when account is not found', async () => {
    mockRequest.mockRejectedValueOnce({
      response: {
        status: 404,
        errors: [{ message: 'Account not found' }],
      },
    });

    await expect(service.fetchUpdatesForAccount('non-existent')).rejects.toThrow(
      'Account not found'
    );
  });

  it('should handle network errors gracefully', async () => {
    mockRequest.mockRejectedValueOnce(new Error('Network error'));

    await expect(service.fetchUpdatesForAccount('test-account')).rejects.toThrow('Network error');
  });
});
