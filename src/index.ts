import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cache } from 'hono/cache';
import { OpenCollectiveService } from './services/opencollective.js';
import { RSSService } from './services/rss.js';

const app = new Hono();
const openCollectiveService = new OpenCollectiveService();
const rssService = new RSSService(process.env.BASE_URL || 'https:/opencollective.com');

app.get(
  '/:accountSlug/updates.rss',
  cache({ cacheName: 'opencollective-updates', cacheControl: 'max-age=3600' }),
  async (c) => {
    const accountSlug = c.req.param('accountSlug');

    try {
      const account = await openCollectiveService.fetchUpdatesForAccount(accountSlug);
      if (!account) {
        return c.text('Account not found', 404);
      }

      const feed = rssService.generateAccountUpdatesFeed(account);
      return c.text(feed, 200, {
        'Content-Type': 'application/xml',
      });
    } catch (error) {
      console.error('Error fetching updates:', error);
      return c.text('Error fetching updates', 500);
    }
  }
);

const port = parseInt(process.env.PORT || '3000', 10);

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export { app };
