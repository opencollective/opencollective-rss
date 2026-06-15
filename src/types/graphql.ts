/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type CollectiveFeatureStatus =
  /** The feature is enabled and is actively used */
  | 'ACTIVE'
  /** The feature is enabled, but there is no data for it */
  | 'AVAILABLE'
  /** The feature is disabled, but can be enabled by an admin */
  | 'DISABLED'
  /** The feature is disabled and cannot be activated for this account */
  | 'UNSUPPORTED';

export type GetUpdatesQueryVariables = Exact<{
  accountSlug: string;
}>;


export type GetUpdatesQuery = { account:
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
    | { id: string, name: string | null, slug: string, features: { UPDATES: CollectiveFeatureStatus | null }, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } }
   | null };
