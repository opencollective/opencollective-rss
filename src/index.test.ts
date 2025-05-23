import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Hono } from 'hono';
import * as openCollectiveModule from './services/opencollective.js';
import * as rssModule from './services/rss.js';
import type { GetUpdatesQuery } from './types/graphql.js';

describe('GET /:accountSlug/updates.rss', () => {
  let app: Hono;
  let fetchUpdatesForAccount: ReturnType<typeof vi.fn>;
  let generateAccountUpdatesFeed: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Create a fresh app instance for each test
    app = new Hono();

    // Setup mocks
    fetchUpdatesForAccount = vi.fn();
    generateAccountUpdatesFeed = vi.fn();

    // Mock the services
    vi.spyOn(openCollectiveModule, 'OpenCollectiveService').mockImplementation(
      () =>
        ({
          fetchUpdatesForAccount,
        }) as unknown as openCollectiveModule.OpenCollectiveService
    );
    vi.spyOn(rssModule, 'RSSService').mockImplementation(
      () =>
        ({
          generateAccountUpdatesFeed,
        }) as unknown as rssModule.RSSService
    );

    // Define the route in the test app
    app.get('/:accountSlug/updates.rss', async (c) => {
      const accountSlug = c.req.param('accountSlug');

      try {
        const account = await fetchUpdatesForAccount(accountSlug);
        if (!account) {
          return c.text('Account not found', 404);
        }

        const feed = generateAccountUpdatesFeed(account);
        return c.text(feed, 200, {
          'Content-Type': 'application/xml',
        });
      } catch (error) {
        console.error('Error fetching updates:', error);
        return c.text('Error fetching updates', 500);
      }
    });
  });

  it('should return formatted RSS feed for a valid account', async () => {
    const mockAccount: NonNullable<GetUpdatesQuery['account']> = {
      id: '1',
      name: 'Test',
      slug: 'test',
      updates: {
        nodes: [
          {
            id: '1',
            title: 'Test Update',
            html: '<p>Test content</p>',
            createdAt: '2024-01-01T00:00:00Z',
            publishedAt: '2024-01-01T00:00:00Z',
            slug: 'test-update',
          },
        ],
      },
    };
    const mockFeed = '<xml>rss</xml>';

    fetchUpdatesForAccount.mockResolvedValue(mockAccount);
    generateAccountUpdatesFeed.mockReturnValue(mockFeed);

    const res = await app.request('/test/updates.rss');

    expect(res.status).toBe(200);
    expect(await res.text()).toBe(mockFeed);
    expect(res.headers.get('content-type')).toContain('application/xml');
    expect(fetchUpdatesForAccount).toHaveBeenCalledWith('test');
    expect(generateAccountUpdatesFeed).toHaveBeenCalledWith(mockAccount);
  });

  it('should return 404 if account is not found', async () => {
    fetchUpdatesForAccount.mockResolvedValue(null);

    const res = await app.request('/notfound/updates.rss');

    expect(res.status).toBe(404);
    expect(await res.text()).toBe('Account not found');
    expect(fetchUpdatesForAccount).toHaveBeenCalledWith('notfound');
  });

  it('should return 500 on fetchUpdatesForAccount error', async () => {
    fetchUpdatesForAccount.mockRejectedValue(new Error('Network error'));

    const res = await app.request('/error/updates.rss');

    expect(res.status).toBe(500);
    expect(await res.text()).toBe('Error fetching updates');
    expect(fetchUpdatesForAccount).toHaveBeenCalledWith('error');
  });
});
