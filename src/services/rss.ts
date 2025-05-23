import RSS from 'rss';
import type { GetUpdatesQuery } from '../types/graphql.js';

export class RSSService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public generateAccountUpdatesFeed(account: NonNullable<GetUpdatesQuery['account']>): string {
    const feed = new RSS({
      title: `${account.name || account.slug} - Open Collective Updates`,
      description: `Latest updates from ${account.name} on Open Collective`,
      feed_url: `${this.baseUrl}/${account.slug}/updates.rss`,
      site_url: `https://opencollective.com/${account.slug}`,
      language: 'en',
      pubDate: new Date(),
    });

    if (account.updates.nodes) {
      for (const update of account.updates.nodes) {
        if (!update) continue;
        feed.item({
          title: update.title,
          description: update.html || '',
          url: `https://opencollective.com/${account.slug}/updates/${update.slug}`,
          guid: update.id,
          date: new Date(update.publishedAt || update.createdAt),
        });
      }
    }

    return feed.xml();
  }
}
