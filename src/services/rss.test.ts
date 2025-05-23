import { describe, it, expect } from 'vitest';
import { RSSService } from './rss.js';

describe('RSSService', () => {
  const baseUrl = 'http://localhost:3000';
  const service = new RSSService(baseUrl);

  it('should generate valid RSS feed', () => {
    const account = {
      id: '1',
      name: 'Test Account',
      slug: 'test-account',
      updates: {
        totalCount: 1,
        nodes: [
          {
            id: '1',
            title: 'Test Update',
            html: '<p>Test content</p>',
            createdAt: new Date('2024-01-01T00:00:00Z').toISOString(),
            publishedAt: new Date('2024-01-01T00:00:00Z').toISOString(),
            slug: 'test-update',
            __typename: 'Update' as const,
          },
        ],
      },
    };

    const feed = service.generateAccountUpdatesFeed(account);

    expect(feed).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(feed).toContain('<title><![CDATA[Test Account - Open Collective Updates]]></title>');
    expect(feed).toContain('<item>');
    expect(feed).toContain('<title><![CDATA[Test Update]]></title>');
    expect(feed).toContain('<description><![CDATA[<p>Test content</p>]]></description>');
  });
});
