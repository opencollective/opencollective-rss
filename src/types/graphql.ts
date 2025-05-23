export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountSettingsKey: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: string; output: string; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: Record<string, any>; output: Record<string, any>; }
  JSONObject: { input: Record<string, any>; output: Record<string, any>; }
  Locale: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  StrictPercentage: { input: any; output: any; }
  URL: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AccountCacheType =
  | 'CLOUDFLARE'
  | 'CONTRIBUTORS'
  | 'GRAPHQL_QUERIES';

export type AccountFreezeAction =
  | 'FREEZE'
  | 'UNFREEZE';

/** Account orders filter (INCOMING or OUTGOING) */
export type AccountOrdersFilter =
  | 'INCOMING'
  | 'OUTGOING';

export type AccountReferenceInput = {
  /** The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The slug identifying the account (ie: babel for https://opencollective.com/babel) */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** All account types */
export type AccountType =
  | 'BOT'
  | 'COLLECTIVE'
  | 'EVENT'
  | 'FUND'
  | 'INDIVIDUAL'
  | 'ORGANIZATION'
  | 'PROJECT'
  | 'VENDOR';

export type AccountUpdateInput = {
  currency: InputMaybe<Currency>;
  /** The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: Scalars['String']['input'];
};

export type AccountingCategoryAppliesTo =
  | 'HOST'
  | 'HOSTED_COLLECTIVES';

/** Input for creating or updating an account category */
export type AccountingCategoryInput = {
  /** If the category is applicable to the Host or Hosted Collectives, or both if null */
  appliesTo: InputMaybe<AccountingCategoryAppliesTo>;
  /** The code of the accounting category */
  code: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** If meant for expenses, the types of expenses this category applies to */
  expensesTypes: InputMaybe<Array<InputMaybe<ExpenseType>>>;
  /** A friendly name for non-accountants (i.e. expense submitters and collective admins) */
  friendlyName: InputMaybe<Scalars['String']['input']>;
  /** Whether this category is only meant for the host admins */
  hostOnly: Scalars['Boolean']['input'];
  /** The ID of the accounting category to edit */
  id: InputMaybe<Scalars['NonEmptyString']['input']>;
  instructions: InputMaybe<Scalars['String']['input']>;
  kind: AccountingCategoryKind;
  /** The technical name of the accounting category */
  name: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type AccountingCategoryKind =
  | 'ADDED_FUNDS'
  | 'CONTRIBUTION'
  | 'EXPENSE';

/** Reference to an accounting category */
export type AccountingCategoryReferenceInput = {
  /** The ID of the accounting category */
  id: Scalars['NonEmptyString']['input'];
};

export type ActivityAndClassesType =
  | 'ACCOUNTING_CATEGORIES_EDITED'
  | 'ACTIVATED_COLLECTIVE_AS_HOST'
  | 'ACTIVATED_COLLECTIVE_AS_INDEPENDENT'
  | 'ACTIVITIES_UPDATES'
  | 'ACTIVITY_ALL'
  | 'ADDED_FUNDS_EDITED'
  | 'ADDED_FUND_TO_ORG'
  | 'AGREEMENT_CREATED'
  | 'AGREEMENT_DELETED'
  | 'AGREEMENT_EDITED'
  | 'BACKYOURSTACK_DISPATCH_CONFIRMED'
  | 'COLLECTIVE'
  | 'COLLECTIVE_APPLY'
  | 'COLLECTIVE_APPROVED'
  | 'COLLECTIVE_COMMENT_CREATED'
  | 'COLLECTIVE_CONTACT'
  | 'COLLECTIVE_CONVERSATION_CREATED'
  | 'COLLECTIVE_CORE_MEMBER_ADDED'
  | 'COLLECTIVE_CORE_MEMBER_EDITED'
  | 'COLLECTIVE_CORE_MEMBER_INVITATION_DECLINED'
  | 'COLLECTIVE_CORE_MEMBER_INVITED'
  | 'COLLECTIVE_CORE_MEMBER_REMOVED'
  | 'COLLECTIVE_CREATED'
  | 'COLLECTIVE_CREATED_GITHUB'
  | 'COLLECTIVE_DELETED'
  | 'COLLECTIVE_EDITED'
  | 'COLLECTIVE_EXPENSE_APPROVED'
  | 'COLLECTIVE_EXPENSE_CREATED'
  | 'COLLECTIVE_EXPENSE_DELETED'
  | 'COLLECTIVE_EXPENSE_ERROR'
  | 'COLLECTIVE_EXPENSE_INVITE_DECLINED'
  | 'COLLECTIVE_EXPENSE_INVITE_DRAFTED'
  | 'COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE'
  | 'COLLECTIVE_EXPENSE_MARKED_AS_SPAM'
  | 'COLLECTIVE_EXPENSE_MARKED_AS_UNPAID'
  | 'COLLECTIVE_EXPENSE_MISSING_RECEIPT'
  | 'COLLECTIVE_EXPENSE_MOVED'
  | 'COLLECTIVE_EXPENSE_PAID'
  | 'COLLECTIVE_EXPENSE_PROCESSING'
  | 'COLLECTIVE_EXPENSE_PUT_ON_HOLD'
  | 'COLLECTIVE_EXPENSE_RECURRING_DRAFTED'
  | 'COLLECTIVE_EXPENSE_REJECTED'
  | 'COLLECTIVE_EXPENSE_RELEASED_FROM_HOLD'
  | 'COLLECTIVE_EXPENSE_RE_APPROVAL_REQUESTED'
  | 'COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT'
  | 'COLLECTIVE_EXPENSE_UNAPPROVED'
  | 'COLLECTIVE_EXPENSE_UNSCHEDULED_FOR_PAYMENT'
  | 'COLLECTIVE_EXPENSE_UPDATED'
  | 'COLLECTIVE_FROZEN'
  | 'COLLECTIVE_MEMBER_CREATED'
  | 'COLLECTIVE_MEMBER_INVITED'
  | 'COLLECTIVE_MONTHLY_REPORT'
  | 'COLLECTIVE_REJECTED'
  | 'COLLECTIVE_TRANSACTION_CREATED'
  | 'COLLECTIVE_TRANSACTION_PAID'
  | 'COLLECTIVE_UNFROZEN'
  | 'COLLECTIVE_UNHOSTED'
  | 'COLLECTIVE_UPDATE_CREATED'
  | 'COLLECTIVE_UPDATE_PUBLISHED'
  | 'COLLECTIVE_USER_ADDED'
  | 'COLLECTIVE_VIRTUAL_CARD_ADDED'
  | 'COLLECTIVE_VIRTUAL_CARD_ASSIGNED'
  | 'COLLECTIVE_VIRTUAL_CARD_CREATED'
  | 'COLLECTIVE_VIRTUAL_CARD_DELETED'
  | 'COLLECTIVE_VIRTUAL_CARD_MISSING_RECEIPTS'
  | 'COLLECTIVE_VIRTUAL_CARD_REQUEST_APPROVED'
  | 'COLLECTIVE_VIRTUAL_CARD_REQUEST_REJECTED'
  | 'COLLECTIVE_VIRTUAL_CARD_RESUMED'
  | 'COLLECTIVE_VIRTUAL_CARD_SUSPENDED'
  | 'COLLECTIVE_VIRTUAL_CARD_SUSPENDED_DUE_TO_INACTIVITY'
  | 'CONNECTED_ACCOUNT_CREATED'
  | 'CONNECTED_ACCOUNT_ERROR'
  | 'CONNECTED_ACCOUNT_REMOVED'
  | 'CONTRIBUTIONS'
  | 'CONTRIBUTION_REJECTED'
  | 'CONVERSATION_COMMENT_CREATED'
  | 'DEACTIVATED_COLLECTIVE_AS_HOST'
  | 'EXPENSES'
  | 'EXPENSE_COMMENT_CREATED'
  | 'FUND_EVENTS'
  | 'HOST_APPLICATION_COMMENT_CREATED'
  | 'HOST_APPLICATION_CONTACT'
  | 'OAUTH_APPLICATION_AUTHORIZED'
  | 'ORDERS_SUSPICIOUS'
  | 'ORDER_CANCELED_ARCHIVED_COLLECTIVE'
  | 'ORDER_COMMENT_CREATED'
  | 'ORDER_DISPUTE_CLOSED'
  | 'ORDER_DISPUTE_CREATED'
  | 'ORDER_PAYMENT_FAILED'
  | 'ORDER_PENDING'
  | 'ORDER_PENDING_CONTRIBUTION_NEW'
  | 'ORDER_PENDING_CONTRIBUTION_REMINDER'
  | 'ORDER_PENDING_CREATED'
  | 'ORDER_PENDING_CRYPTO'
  | 'ORDER_PENDING_EXPIRED'
  | 'ORDER_PENDING_FOLLOWUP'
  | 'ORDER_PENDING_RECEIVED'
  | 'ORDER_PROCESSED'
  | 'ORDER_PROCESSING'
  | 'ORDER_REVIEW_CLOSED'
  | 'ORDER_REVIEW_OPENED'
  | 'ORDER_UPDATED'
  | 'ORGANIZATION_COLLECTIVE_CREATED'
  | 'PAYMENT_CREDITCARD_CONFIRMATION'
  | 'PAYMENT_CREDITCARD_EXPIRING'
  | 'PAYMENT_FAILED'
  | 'REPORTS'
  | 'SUBSCRIPTION_ACTIVATED'
  | 'SUBSCRIPTION_CANCELED'
  | 'SUBSCRIPTION_CONFIRMED'
  | 'SUBSCRIPTION_PAUSED'
  | 'SUBSCRIPTION_READY_TO_BE_RESUMED'
  | 'SUBSCRIPTION_RESUMED'
  | 'TAXFORM_INVALIDATED'
  | 'TAXFORM_RECEIVED'
  | 'TAXFORM_REQUEST'
  | 'TICKET_CONFIRMED'
  | 'TRANSACTIONS_IMPORT_CREATED'
  | 'TRANSACTIONS_IMPORT_ROW_UPDATED'
  | 'TWO_FACTOR_CODE_REQUESTED'
  | 'TWO_FACTOR_METHOD_ADDED'
  | 'TWO_FACTOR_METHOD_DELETED'
  | 'UPDATE_COMMENT_CREATED'
  | 'USER_CARD_CLAIMED'
  | 'USER_CARD_INVITED'
  | 'USER_CHANGE_EMAIL'
  | 'USER_CREATED'
  | 'USER_NEW_TOKEN'
  | 'USER_PASSWORD_SET'
  | 'USER_PAYMENT_METHOD_CREATED'
  | 'USER_RESET_PASSWORD'
  | 'USER_SIGNIN'
  | 'VENDOR_CREATED'
  | 'VENDOR_DELETED'
  | 'VENDOR_EDITED'
  | 'VIRTUAL_CARDS'
  | 'VIRTUAL_CARD_CHARGE_DECLINED'
  | 'VIRTUAL_CARD_PURCHASE'
  | 'VIRTUAL_CARD_REQUESTED'
  | 'WEBHOOK_PAYPAL_RECEIVED'
  | 'WEBHOOK_STRIPE_RECEIVED';

/** All supported Activity channels we can broadcast to */
export type ActivityChannel =
  | 'email'
  | 'slack'
  | 'twitter'
  | 'webhook';

export type ActivityClassType =
  | 'ACTIVITIES_UPDATES'
  | 'COLLECTIVE'
  | 'CONTRIBUTIONS'
  | 'EXPENSES'
  | 'FUND_EVENTS'
  | 'REPORTS'
  | 'VIRTUAL_CARDS';

export type ActivityType =
  | 'ACCOUNTING_CATEGORIES_EDITED'
  | 'ACTIVATED_COLLECTIVE_AS_HOST'
  | 'ACTIVATED_COLLECTIVE_AS_INDEPENDENT'
  | 'ACTIVITY_ALL'
  | 'ADDED_FUNDS_EDITED'
  | 'ADDED_FUND_TO_ORG'
  | 'AGREEMENT_CREATED'
  | 'AGREEMENT_DELETED'
  | 'AGREEMENT_EDITED'
  | 'BACKYOURSTACK_DISPATCH_CONFIRMED'
  | 'COLLECTIVE_APPLY'
  | 'COLLECTIVE_APPROVED'
  | 'COLLECTIVE_COMMENT_CREATED'
  | 'COLLECTIVE_CONTACT'
  | 'COLLECTIVE_CONVERSATION_CREATED'
  | 'COLLECTIVE_CORE_MEMBER_ADDED'
  | 'COLLECTIVE_CORE_MEMBER_EDITED'
  | 'COLLECTIVE_CORE_MEMBER_INVITATION_DECLINED'
  | 'COLLECTIVE_CORE_MEMBER_INVITED'
  | 'COLLECTIVE_CORE_MEMBER_REMOVED'
  | 'COLLECTIVE_CREATED'
  | 'COLLECTIVE_CREATED_GITHUB'
  | 'COLLECTIVE_DELETED'
  | 'COLLECTIVE_EDITED'
  | 'COLLECTIVE_EXPENSE_APPROVED'
  | 'COLLECTIVE_EXPENSE_CREATED'
  | 'COLLECTIVE_EXPENSE_DELETED'
  | 'COLLECTIVE_EXPENSE_ERROR'
  | 'COLLECTIVE_EXPENSE_INVITE_DECLINED'
  | 'COLLECTIVE_EXPENSE_INVITE_DRAFTED'
  | 'COLLECTIVE_EXPENSE_MARKED_AS_INCOMPLETE'
  | 'COLLECTIVE_EXPENSE_MARKED_AS_SPAM'
  | 'COLLECTIVE_EXPENSE_MARKED_AS_UNPAID'
  | 'COLLECTIVE_EXPENSE_MISSING_RECEIPT'
  | 'COLLECTIVE_EXPENSE_MOVED'
  | 'COLLECTIVE_EXPENSE_PAID'
  | 'COLLECTIVE_EXPENSE_PROCESSING'
  | 'COLLECTIVE_EXPENSE_PUT_ON_HOLD'
  | 'COLLECTIVE_EXPENSE_RECURRING_DRAFTED'
  | 'COLLECTIVE_EXPENSE_REJECTED'
  | 'COLLECTIVE_EXPENSE_RELEASED_FROM_HOLD'
  | 'COLLECTIVE_EXPENSE_RE_APPROVAL_REQUESTED'
  | 'COLLECTIVE_EXPENSE_SCHEDULED_FOR_PAYMENT'
  | 'COLLECTIVE_EXPENSE_UNAPPROVED'
  | 'COLLECTIVE_EXPENSE_UNSCHEDULED_FOR_PAYMENT'
  | 'COLLECTIVE_EXPENSE_UPDATED'
  | 'COLLECTIVE_FROZEN'
  | 'COLLECTIVE_MEMBER_CREATED'
  | 'COLLECTIVE_MEMBER_INVITED'
  | 'COLLECTIVE_MONTHLY_REPORT'
  | 'COLLECTIVE_REJECTED'
  | 'COLLECTIVE_TRANSACTION_CREATED'
  | 'COLLECTIVE_TRANSACTION_PAID'
  | 'COLLECTIVE_UNFROZEN'
  | 'COLLECTIVE_UNHOSTED'
  | 'COLLECTIVE_UPDATE_CREATED'
  | 'COLLECTIVE_UPDATE_PUBLISHED'
  | 'COLLECTIVE_USER_ADDED'
  | 'COLLECTIVE_VIRTUAL_CARD_ADDED'
  | 'COLLECTIVE_VIRTUAL_CARD_ASSIGNED'
  | 'COLLECTIVE_VIRTUAL_CARD_CREATED'
  | 'COLLECTIVE_VIRTUAL_CARD_DELETED'
  | 'COLLECTIVE_VIRTUAL_CARD_MISSING_RECEIPTS'
  | 'COLLECTIVE_VIRTUAL_CARD_REQUEST_APPROVED'
  | 'COLLECTIVE_VIRTUAL_CARD_REQUEST_REJECTED'
  | 'COLLECTIVE_VIRTUAL_CARD_RESUMED'
  | 'COLLECTIVE_VIRTUAL_CARD_SUSPENDED'
  | 'COLLECTIVE_VIRTUAL_CARD_SUSPENDED_DUE_TO_INACTIVITY'
  | 'CONNECTED_ACCOUNT_CREATED'
  | 'CONNECTED_ACCOUNT_ERROR'
  | 'CONNECTED_ACCOUNT_REMOVED'
  | 'CONTRIBUTION_REJECTED'
  | 'CONVERSATION_COMMENT_CREATED'
  | 'DEACTIVATED_COLLECTIVE_AS_HOST'
  | 'EXPENSE_COMMENT_CREATED'
  | 'HOST_APPLICATION_COMMENT_CREATED'
  | 'HOST_APPLICATION_CONTACT'
  | 'OAUTH_APPLICATION_AUTHORIZED'
  | 'ORDERS_SUSPICIOUS'
  | 'ORDER_CANCELED_ARCHIVED_COLLECTIVE'
  | 'ORDER_COMMENT_CREATED'
  | 'ORDER_DISPUTE_CLOSED'
  | 'ORDER_DISPUTE_CREATED'
  | 'ORDER_PAYMENT_FAILED'
  | 'ORDER_PENDING'
  | 'ORDER_PENDING_CONTRIBUTION_NEW'
  | 'ORDER_PENDING_CONTRIBUTION_REMINDER'
  | 'ORDER_PENDING_CREATED'
  | 'ORDER_PENDING_CRYPTO'
  | 'ORDER_PENDING_EXPIRED'
  | 'ORDER_PENDING_FOLLOWUP'
  | 'ORDER_PENDING_RECEIVED'
  | 'ORDER_PROCESSED'
  | 'ORDER_PROCESSING'
  | 'ORDER_REVIEW_CLOSED'
  | 'ORDER_REVIEW_OPENED'
  | 'ORDER_UPDATED'
  | 'ORGANIZATION_COLLECTIVE_CREATED'
  | 'PAYMENT_CREDITCARD_CONFIRMATION'
  | 'PAYMENT_CREDITCARD_EXPIRING'
  | 'PAYMENT_FAILED'
  | 'SUBSCRIPTION_ACTIVATED'
  | 'SUBSCRIPTION_CANCELED'
  | 'SUBSCRIPTION_CONFIRMED'
  | 'SUBSCRIPTION_PAUSED'
  | 'SUBSCRIPTION_READY_TO_BE_RESUMED'
  | 'SUBSCRIPTION_RESUMED'
  | 'TAXFORM_INVALIDATED'
  | 'TAXFORM_RECEIVED'
  | 'TAXFORM_REQUEST'
  | 'TICKET_CONFIRMED'
  | 'TRANSACTIONS_IMPORT_CREATED'
  | 'TRANSACTIONS_IMPORT_ROW_UPDATED'
  | 'TWO_FACTOR_CODE_REQUESTED'
  | 'TWO_FACTOR_METHOD_ADDED'
  | 'TWO_FACTOR_METHOD_DELETED'
  | 'UPDATE_COMMENT_CREATED'
  | 'USER_CARD_CLAIMED'
  | 'USER_CARD_INVITED'
  | 'USER_CHANGE_EMAIL'
  | 'USER_CREATED'
  | 'USER_NEW_TOKEN'
  | 'USER_PASSWORD_SET'
  | 'USER_PAYMENT_METHOD_CREATED'
  | 'USER_RESET_PASSWORD'
  | 'USER_SIGNIN'
  | 'VENDOR_CREATED'
  | 'VENDOR_DELETED'
  | 'VENDOR_EDITED'
  | 'VIRTUAL_CARD_CHARGE_DECLINED'
  | 'VIRTUAL_CARD_PURCHASE'
  | 'VIRTUAL_CARD_REQUESTED'
  | 'WEBHOOK_PAYPAL_RECEIVED'
  | 'WEBHOOK_STRIPE_RECEIVED';

export type AgreementReferenceInput = {
  /** The public id identifying the agreement (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The internal id of the agreement (ie: 580) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** Input type for an amount with the value and currency */
export type AmountInput = {
  /** The currency string */
  currency: InputMaybe<Currency>;
  /** If the amount was generated from a currency conversion, this field can be used to provide details about the conversion */
  exchangeRate: InputMaybe<CurrencyExchangeRateInput>;
  /** The value in plain */
  value: InputMaybe<Scalars['Float']['input']>;
  /** The value in cents */
  valueInCents: InputMaybe<Scalars['Int']['input']>;
};

/** Input type for an amount range with the value and currency */
export type AmountRangeInput = {
  /** The minimum amount (inclusive) */
  gte: InputMaybe<AmountInput>;
  /** The maximum amount (inclusive) */
  lte: InputMaybe<AmountInput>;
};

/** Input type for Application */
export type ApplicationCreateInput = {
  /** The account to use as the owner of the application. Defaults to currently logged in user. */
  account: InputMaybe<AccountReferenceInput>;
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  redirectUri: InputMaybe<Scalars['URL']['input']>;
  type: ApplicationType;
};

export type ApplicationReferenceInput = {
  /** The clientId for the application. */
  clientId: InputMaybe<Scalars['String']['input']>;
  /** The public id identifying the application (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the application (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** All application types */
export type ApplicationType =
  | 'API_KEY'
  | 'OAUTH';

/** Input type for Application */
export type ApplicationUpdateInput = {
  /** The clientId for the application. */
  clientId: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  /** The public id identifying the application (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the application (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  redirectUri: InputMaybe<Scalars['URL']['input']>;
};

/** The period over which the average is calculated */
export type AveragePeriod =
  | 'MONTH'
  | 'YEAR';

/** Captcha related information */
export type CaptchaInput = {
  /** Catpcha provider */
  provider: CaptchaProvider;
  /** Captcha validation token */
  token: Scalars['String']['input'];
};

/** Implemented Captcha Providers */
export type CaptchaProvider =
  | 'HCAPTCHA'
  | 'RECAPTCHA'
  | 'TURNSTILE';

/** Input to order results chronologically */
export type ChronologicalOrderInput = {
  /** Ordering direction. */
  direction: OrderDirection;
  /** Field to chronologically order by. */
  field: DateTimeField;
};

export type CollectiveCreateInput = {
  /** The profile background image, for the banner and social media sharing */
  backgroundImage: InputMaybe<Scalars['Upload']['input']>;
  description: Scalars['String']['input'];
  /** The profile avatar image */
  image: InputMaybe<Scalars['Upload']['input']>;
  location: InputMaybe<LocationInput>;
  name: Scalars['String']['input'];
  settings: InputMaybe<Scalars['JSON']['input']>;
  slug: Scalars['String']['input'];
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CollectiveFeatureStatus =
  /** The feature is enabled and is actively used */
  | 'ACTIVE'
  /** The feature is enabled, but there is no data for it */
  | 'AVAILABLE'
  /** The feature is disabled, but can be enabled by an admin */
  | 'DISABLED'
  /** The feature is disabled and cannot be activated for this account */
  | 'UNSUPPORTED';

/** Input to create a comment. You can only specify one entity type: expense, conversation, update or host application */
export type CommentCreateInput = {
  conversation: InputMaybe<ConversationReferenceInput>;
  /** If your comment is linked to an expense, set it here */
  expense: InputMaybe<ExpenseReferenceInput>;
  /** If your comment is linked to an host application, set it here */
  hostApplication: InputMaybe<HostApplicationReferenceInput>;
  html: InputMaybe<Scalars['String']['input']>;
  /** If your comment is linked to an order, set it here */
  order: InputMaybe<OrderReferenceInput>;
  /** The type of the comment */
  type: InputMaybe<CommentType>;
  update: InputMaybe<UpdateReferenceInput>;
};

export type CommentReferenceInput = {
  /** The public id identifying the comment */
  id: InputMaybe<Scalars['String']['input']>;
};

/** All supported comment contexts */
export type CommentType =
  /** Default regular comment */
  | 'COMMENT'
  /** Comment is visible only to host admins */
  | 'PRIVATE_NOTE';

export type CommentUpdateInput = {
  html: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type ConnectedAccountCreateInput = {
  /** Optional Client ID for the token or secret */
  clientId: InputMaybe<Scalars['String']['input']>;
  /** Private data related to the connected account */
  data: InputMaybe<Scalars['JSON']['input']>;
  /** Refresh token for the connected account */
  refreshToken: InputMaybe<Scalars['String']['input']>;
  /** Service which the connected account belongs to */
  service: InputMaybe<ConnectedAccountService>;
  /** Public data related to the connected account */
  settings: InputMaybe<Scalars['JSON']['input']>;
  /** Secret token used to call service */
  token: InputMaybe<Scalars['String']['input']>;
  /** Optional username for the connected account */
  username: InputMaybe<Scalars['String']['input']>;
};

export type ConnectedAccountReferenceInput = {
  /** The public id identifying the connected account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The internal id of the account (ie: 580) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** All supported services a user can connect with */
export type ConnectedAccountService =
  | 'github'
  | 'meetup'
  | 'paypal'
  | 'plaid'
  | 'privacy'
  | 'stripe'
  | 'stripe_customer'
  | 'thegivingblock'
  | 'transferwise'
  | 'twitter';

export type ContributionFrequency =
  | 'MONTHLY'
  | 'ONETIME'
  | 'YEARLY';

export type ConversationReferenceInput = {
  /** The public id identifying the conversation */
  id: InputMaybe<Scalars['String']['input']>;
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** Two-letters country code following ISO3166_1 */
export type CountryIso =
  /** Andorra */
  | 'AD'
  /** The United Arab Emirates */
  | 'AE'
  /** Afghanistan */
  | 'AF'
  /** Antigua and Barbuda */
  | 'AG'
  /** Anguilla */
  | 'AI'
  /** Albania */
  | 'AL'
  /** Armenia */
  | 'AM'
  /** Angola */
  | 'AO'
  /** Antarctica */
  | 'AQ'
  /** Argentina */
  | 'AR'
  /** American Samoa */
  | 'AS'
  /** Austria */
  | 'AT'
  /** Australia */
  | 'AU'
  /** Aruba */
  | 'AW'
  /** Åland Islands */
  | 'AX'
  /** Azerbaijan */
  | 'AZ'
  /** Bosnia and Herzegovina */
  | 'BA'
  /** Barbados */
  | 'BB'
  /** Bangladesh */
  | 'BD'
  /** Belgium */
  | 'BE'
  /** Burkina */
  | 'BF'
  /** Bulgaria */
  | 'BG'
  /** Bahrain */
  | 'BH'
  /** Burundi */
  | 'BI'
  /** Benin */
  | 'BJ'
  /** Saint Barthélemy */
  | 'BL'
  /** Bermuda */
  | 'BM'
  /** Brunei */
  | 'BN'
  /** Bolivia */
  | 'BO'
  /** Bonaire, Sint Eustatius and Saba */
  | 'BQ'
  /** Brazil */
  | 'BR'
  /** The Bahamas */
  | 'BS'
  /** Bhutan */
  | 'BT'
  /** Bouvet Island */
  | 'BV'
  /** Botswana */
  | 'BW'
  /** Belarus */
  | 'BY'
  /** Belize */
  | 'BZ'
  /** Canada */
  | 'CA'
  /** Cocos Islands */
  | 'CC'
  /** The Democratic Republic of the Congo */
  | 'CD'
  /** The Central African Republic */
  | 'CF'
  /** The Congo */
  | 'CG'
  /** Switzerland */
  | 'CH'
  /** Côte d'Ivoire */
  | 'CI'
  /** Cook Islands */
  | 'CK'
  /** Chile */
  | 'CL'
  /** Cameroon */
  | 'CM'
  /** China */
  | 'CN'
  /** Colombia */
  | 'CO'
  /** Costa Rica */
  | 'CR'
  /** Cuba */
  | 'CU'
  /** Cape Verde */
  | 'CV'
  /** Curaçao */
  | 'CW'
  /** Christmas Island */
  | 'CX'
  /** Cyprus */
  | 'CY'
  /** The Czech Republic */
  | 'CZ'
  /** Germany */
  | 'DE'
  /** Djibouti */
  | 'DJ'
  /** Denmark */
  | 'DK'
  /** Dominica */
  | 'DM'
  /** The Dominican Republic */
  | 'DO'
  /** Algeria */
  | 'DZ'
  /** Ecuador */
  | 'EC'
  /** Estonia */
  | 'EE'
  /** Egypt */
  | 'EG'
  /** Western Sahara */
  | 'EH'
  /** Eritrea */
  | 'ER'
  /** Spain */
  | 'ES'
  /** Ethiopia */
  | 'ET'
  /** Finland */
  | 'FI'
  /** Fiji */
  | 'FJ'
  /** Falkland Islands */
  | 'FK'
  /** Micronesia */
  | 'FM'
  /** Faroe Islands */
  | 'FO'
  /** France */
  | 'FR'
  /** Gabon */
  | 'GA'
  /** The United Kingdom */
  | 'GB'
  /** Grenada */
  | 'GD'
  /** Georgia */
  | 'GE'
  /** French Guiana */
  | 'GF'
  /** Guernsey */
  | 'GG'
  /** Ghana */
  | 'GH'
  /** Gibraltar */
  | 'GI'
  /** Greenland */
  | 'GL'
  /** The Gambia */
  | 'GM'
  /** Guinea */
  | 'GN'
  /** Guadeloupe */
  | 'GP'
  /** Equatorial Guinea */
  | 'GQ'
  /** Greece */
  | 'GR'
  /** South Georgia and The South Sandwich Islands */
  | 'GS'
  /** Guatemala */
  | 'GT'
  /** Guam */
  | 'GU'
  /** Guinea-Bissau */
  | 'GW'
  /** Guyana */
  | 'GY'
  /** Hong Kong */
  | 'HK'
  /** Heard Island and McDonald Islands */
  | 'HM'
  /** Honduras */
  | 'HN'
  /** Croatia */
  | 'HR'
  /** Haiti */
  | 'HT'
  /** Hungary */
  | 'HU'
  /** Indonesia */
  | 'ID'
  /** Ireland */
  | 'IE'
  /** Israel */
  | 'IL'
  /** Isle of Man */
  | 'IM'
  /** India */
  | 'IN'
  /** The British Indian Ocean Territory */
  | 'IO'
  /** Iraq */
  | 'IQ'
  /** Iran */
  | 'IR'
  /** Iceland */
  | 'IS'
  /** Italy */
  | 'IT'
  /** Jersey */
  | 'JE'
  /** Jamaica */
  | 'JM'
  /** Jordan */
  | 'JO'
  /** Japan */
  | 'JP'
  /** Kenya */
  | 'KE'
  /** Kyrgyzstan */
  | 'KG'
  /** Cambodia */
  | 'KH'
  /** Kiribati */
  | 'KI'
  /** The Comoros */
  | 'KM'
  /** Saint Kitts and Nevis */
  | 'KN'
  /** The Democratic People's Republic of Korea */
  | 'KP'
  /** The Republic of Korea */
  | 'KR'
  /** Kuwait */
  | 'KW'
  /** Cayman Islands */
  | 'KY'
  /** Kazakhstan */
  | 'KZ'
  /** Laos */
  | 'LA'
  /** Lebanon */
  | 'LB'
  /** Saint Lucia */
  | 'LC'
  /** Liechtenstein */
  | 'LI'
  /** Sri Lanka */
  | 'LK'
  /** Liberia */
  | 'LR'
  /** Lesotho */
  | 'LS'
  /** Lithuania */
  | 'LT'
  /** Luxembourg */
  | 'LU'
  /** Latvia */
  | 'LV'
  /** Libya */
  | 'LY'
  /** Morocco */
  | 'MA'
  /** Monaco */
  | 'MC'
  /** Moldova */
  | 'MD'
  /** Montenegro */
  | 'ME'
  /** Saint Martin */
  | 'MF'
  /** Madagascar */
  | 'MG'
  /** The Marshall Islands */
  | 'MH'
  /** Macedonia */
  | 'MK'
  /** Mali */
  | 'ML'
  /** Myanmar */
  | 'MM'
  /** Mongolia */
  | 'MN'
  /** Macao */
  | 'MO'
  /** Northern Mariana Islands */
  | 'MP'
  /** Martinique */
  | 'MQ'
  /** Mauritania */
  | 'MR'
  /** Montserrat */
  | 'MS'
  /** Malta */
  | 'MT'
  /** Mauritius */
  | 'MU'
  /** Maldives */
  | 'MV'
  /** Malawi */
  | 'MW'
  /** Mexico */
  | 'MX'
  /** Malaysia */
  | 'MY'
  /** Mozambique */
  | 'MZ'
  /** Namibia */
  | 'NA'
  /** New Caledonia */
  | 'NC'
  /** The Niger */
  | 'NE'
  /** Norfolk Island */
  | 'NF'
  /** Nigeria */
  | 'NG'
  /** Nicaragua */
  | 'NI'
  /** The Netherlands */
  | 'NL'
  /** Norway */
  | 'NO'
  /** Nepal */
  | 'NP'
  /** Nauru */
  | 'NR'
  /** Niue */
  | 'NU'
  /** New Zealand */
  | 'NZ'
  /** Oman */
  | 'OM'
  /** Panama */
  | 'PA'
  /** Peru */
  | 'PE'
  /** French Polynesia */
  | 'PF'
  /** Papua New Guinea */
  | 'PG'
  /** The Philippines */
  | 'PH'
  /** Pakistan */
  | 'PK'
  /** Poland */
  | 'PL'
  /** Saint Pierre and Miquelon */
  | 'PM'
  /** Pitcairn */
  | 'PN'
  /** Puerto Rico */
  | 'PR'
  /** The Occupied Palestinian Territory */
  | 'PS'
  /** Portugal */
  | 'PT'
  /** Palau */
  | 'PW'
  /** Paraguay */
  | 'PY'
  /** Qatar */
  | 'QA'
  /** Réunion */
  | 'RE'
  /** Romania */
  | 'RO'
  /** Serbia */
  | 'RS'
  /** Russia */
  | 'RU'
  /** Rwanda */
  | 'RW'
  /** Saudi Arabia */
  | 'SA'
  /** Solomon Islands */
  | 'SB'
  /** Seychelles */
  | 'SC'
  /** The Sudan */
  | 'SD'
  /** Sweden */
  | 'SE'
  /** Singapore */
  | 'SG'
  /** Saint Helena */
  | 'SH'
  /** Slovenia */
  | 'SI'
  /** Svalbard and Jan Mayen */
  | 'SJ'
  /** Slovakia */
  | 'SK'
  /** Sierra Leone */
  | 'SL'
  /** San Marino */
  | 'SM'
  /** Senegal */
  | 'SN'
  /** Somalia */
  | 'SO'
  /** Suriname */
  | 'SR'
  /** South Sudan */
  | 'SS'
  /** Sao Tome and Principe */
  | 'ST'
  /** El Salvador */
  | 'SV'
  /** Sint Maarten */
  | 'SX'
  /** Syria */
  | 'SY'
  /** Swaziland */
  | 'SZ'
  /** Turks and Caicos Islands */
  | 'TC'
  /** Chad */
  | 'TD'
  /** The French Southern Territories */
  | 'TF'
  /** Togo */
  | 'TG'
  /** Thailand */
  | 'TH'
  /** Tajikistan */
  | 'TJ'
  /** Tokelau */
  | 'TK'
  /** Timor-Leste */
  | 'TL'
  /** Turkmenistan */
  | 'TM'
  /** Tunisia */
  | 'TN'
  /** Tonga */
  | 'TO'
  /** Turkey */
  | 'TR'
  /** Trinidad and Tobago */
  | 'TT'
  /** Tuvalu */
  | 'TV'
  /** Taiwan */
  | 'TW'
  /** Tanzania */
  | 'TZ'
  /** Ukraine */
  | 'UA'
  /** Uganda */
  | 'UG'
  /** United States Minor Outlying Islands */
  | 'UM'
  /** The United States */
  | 'US'
  /** Uruguay */
  | 'UY'
  /** Uzbekistan */
  | 'UZ'
  /** The Holy See */
  | 'VA'
  /** Saint Vincent and The Grenadines */
  | 'VC'
  /** Venezuela */
  | 'VE'
  /** British Virgin Islands */
  | 'VG'
  /** US Virgin Islands */
  | 'VI'
  /** Viet Nam */
  | 'VN'
  /** Vanuatu */
  | 'VU'
  /** Wallis and Futuna */
  | 'WF'
  /** Samoa */
  | 'WS'
  /** Yemen */
  | 'YE'
  /** Mayotte */
  | 'YT'
  /** South Africa */
  | 'ZA'
  /** Zambia */
  | 'ZM'
  /** Zimbabwe */
  | 'ZW';

export type CreditCardCreateInput = {
  token: Scalars['String']['input'];
  zip: InputMaybe<Scalars['String']['input']>;
};

/** All supported currencies */
export type Currency =
  /** UAE Dirham */
  | 'AED'
  /** Afghani */
  | 'AFN'
  /** Lek */
  | 'ALL'
  /** Armenian Dram */
  | 'AMD'
  /** Netherlands Antillean Guilder */
  | 'ANG'
  /** Kwanza */
  | 'AOA'
  /** Argentine Peso */
  | 'ARS'
  /** Australian Dollar */
  | 'AUD'
  /** Aruban Florin */
  | 'AWG'
  /** Azerbaijanian Manat */
  | 'AZN'
  /** Convertible Mark */
  | 'BAM'
  /** Barbados Dollar */
  | 'BBD'
  /** Taka */
  | 'BDT'
  /** Bulgarian Lev */
  | 'BGN'
  /** Burundi Franc */
  | 'BIF'
  /** Bermudian Dollar */
  | 'BMD'
  /** Brunei Dollar */
  | 'BND'
  /** Boliviano */
  | 'BOB'
  /** Brazilian Real */
  | 'BRL'
  /** Bahamian Dollar */
  | 'BSD'
  /** Pula */
  | 'BWP'
  /** Belarussian Ruble */
  | 'BYN'
  /** Belize Dollar */
  | 'BZD'
  /** Canadian Dollar */
  | 'CAD'
  /** Congolese Franc */
  | 'CDF'
  /** Swiss Franc */
  | 'CHF'
  /** Chilean Peso */
  | 'CLP'
  /** Yuan Renminbi */
  | 'CNY'
  /** Colombian Peso */
  | 'COP'
  /** Costa Rican Colon */
  | 'CRC'
  /** Cabo Verde Escudo */
  | 'CVE'
  /** Czech Koruna */
  | 'CZK'
  /** Djibouti Franc */
  | 'DJF'
  /** Danish Krone */
  | 'DKK'
  /** Dominican Peso */
  | 'DOP'
  /** Algerian Dinar */
  | 'DZD'
  /** Egyptian Pound */
  | 'EGP'
  /** Ethiopian Birr */
  | 'ETB'
  /** Euro */
  | 'EUR'
  /** Fiji Dollar */
  | 'FJD'
  /** Falkland Islands Pound */
  | 'FKP'
  /** Pound Sterling */
  | 'GBP'
  /** Lari */
  | 'GEL'
  /** Gibraltar Pound */
  | 'GIP'
  /** Dalasi */
  | 'GMD'
  /** Guinea Franc */
  | 'GNF'
  /** Quetzal */
  | 'GTQ'
  /** Guyana Dollar */
  | 'GYD'
  /** Hong Kong Dollar */
  | 'HKD'
  /** Lempira */
  | 'HNL'
  /** Kuna */
  | 'HRK'
  /** Gourde */
  | 'HTG'
  /** Forint */
  | 'HUF'
  /** Rupiah */
  | 'IDR'
  /** New Israeli Sheqel */
  | 'ILS'
  /** Indian Rupee */
  | 'INR'
  /** Iceland Krona */
  | 'ISK'
  /** Jamaican Dollar */
  | 'JMD'
  /** Yen */
  | 'JPY'
  /** Kenyan Shilling */
  | 'KES'
  /** Som */
  | 'KGS'
  /** Riel */
  | 'KHR'
  /** Comoro Franc */
  | 'KMF'
  /** Won */
  | 'KRW'
  /** Cayman Islands Dollar */
  | 'KYD'
  /** Tenge */
  | 'KZT'
  /** Kip */
  | 'LAK'
  /** Lebanese Pound */
  | 'LBP'
  /** Sri Lanka Rupee */
  | 'LKR'
  /** Liberian Dollar */
  | 'LRD'
  /** Loti */
  | 'LSL'
  /** Moroccan Dirham */
  | 'MAD'
  /** Moldovan Leu */
  | 'MDL'
  /** Malagasy Ariary */
  | 'MGA'
  /** Denar */
  | 'MKD'
  /** Kyat */
  | 'MMK'
  /** Tugrik */
  | 'MNT'
  /** Pataca */
  | 'MOP'
  /** Mauritius Rupee */
  | 'MUR'
  /** Rufiyaa */
  | 'MVR'
  /** Kwacha */
  | 'MWK'
  /** Mexican Peso */
  | 'MXN'
  /** Malaysian Ringgit */
  | 'MYR'
  /** Mozambique Metical */
  | 'MZN'
  /** Namibia Dollar */
  | 'NAD'
  /** Naira */
  | 'NGN'
  /** Cordoba Oro */
  | 'NIO'
  /** Norwegian Krone */
  | 'NOK'
  /** Nepalese Rupee */
  | 'NPR'
  /** New Zealand Dollar */
  | 'NZD'
  /** Balboa */
  | 'PAB'
  /** Nuevo Sol */
  | 'PEN'
  /** Kina */
  | 'PGK'
  /** Philippine Peso */
  | 'PHP'
  /** Pakistan Rupee */
  | 'PKR'
  /** Zloty */
  | 'PLN'
  /** Guarani */
  | 'PYG'
  /** Qatari Rial */
  | 'QAR'
  /** Romanian Leu */
  | 'RON'
  /** Serbian Dinar */
  | 'RSD'
  /** Russian Ruble */
  | 'RUB'
  /** Rwanda Franc */
  | 'RWF'
  /** Saudi Riyal */
  | 'SAR'
  /** Solomon Islands Dollar */
  | 'SBD'
  /** Seychelles Rupee */
  | 'SCR'
  /** Swedish Krona */
  | 'SEK'
  /** Singapore Dollar */
  | 'SGD'
  /** Saint Helena Pound */
  | 'SHP'
  /** Leone */
  | 'SLL'
  /** Somali Shilling */
  | 'SOS'
  /** Surinam Dollar */
  | 'SRD'
  /** Lilangeni */
  | 'SZL'
  /** Baht */
  | 'THB'
  /** Somoni */
  | 'TJS'
  /** Pa’anga */
  | 'TOP'
  /** Turkish Lira */
  | 'TRY'
  /** Trinidad and Tobago Dollar */
  | 'TTD'
  /** New Taiwan Dollar */
  | 'TWD'
  /** Tanzanian Shilling */
  | 'TZS'
  /** Hryvnia */
  | 'UAH'
  /** Uganda Shilling */
  | 'UGX'
  /** US Dollar */
  | 'USD'
  /** Peso Uruguayo */
  | 'UYU'
  /** Uzbekistan Sum */
  | 'UZS'
  /** Dong */
  | 'VND'
  /** Vatu */
  | 'VUV'
  /** Tala */
  | 'WST'
  /** CFA Franc BEAC */
  | 'XAF'
  /** East Caribbean Dollar */
  | 'XCD'
  /** CFA Franc BCEAO */
  | 'XOF'
  /** CFP Franc */
  | 'XPF'
  /** Yemeni Rial */
  | 'YER'
  /** Rand */
  | 'ZAR'
  /** Zambian Kwacha */
  | 'ZMW';

/** Fields for a currency exchange rate */
export type CurrencyExchangeRateInput = {
  /** Date of the FX rate */
  date: Scalars['DateTime']['input'];
  fromCurrency: Currency;
  /** Where does the FX rate comes from */
  source: CurrencyExchangeRateSourceType;
  toCurrency: Currency;
  /** Exchange rate value as a float (e.g 1.15 or 0.86) */
  value: Scalars['Float']['input'];
};

/** Request for a currency exchange rate */
export type CurrencyExchangeRateRequest = {
  /** Date of the exchange rate. Defaults to now. */
  date: InputMaybe<Scalars['DateTime']['input']>;
  /** Currency to convert from */
  fromCurrency: Currency;
  /** Currency to convert to */
  toCurrency: Currency;
};

/** Where does the FX rate come from */
export type CurrencyExchangeRateSourceType =
  /** Open Collective internal system, relying on caching and 3rd party APIs */
  | 'OPENCOLLECTIVE'
  /** PayPal API */
  | 'PAYPAL'
  /** User-provided exchange rate */
  | 'USER'
  /** Wise API */
  | 'WISE';

/** All possible DateTime fields for a resource */
export type DateTimeField =
  /** The creation time of a resource */
  | 'CREATED_AT'
  /** Transactions only: The date when a transaction was cleared by the payment processor */
  | 'EFFECTIVE_DATE'
  /** Orders only: The date when an order was last charged, defaults to createdAt if never charged */
  | 'LAST_CHARGED_AT';

/** Which data should be copied when duplicating the account */
export type DuplicateAccountDataTypeInput = {
  admins: Scalars['Boolean']['input'];
  events: Scalars['Boolean']['input'];
  projects: Scalars['Boolean']['input'];
  tiers: Scalars['Boolean']['input'];
};

export type EventCreateInput = {
  /** The profile background image, for the banner and social media sharing */
  backgroundImage: InputMaybe<Scalars['Upload']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  /** The Event end date and time */
  endsAt: Scalars['DateTime']['input'];
  /** The profile avatar image */
  image: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  settings: InputMaybe<Scalars['JSON']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  /** The Event start date and time */
  startsAt: Scalars['DateTime']['input'];
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Timezone of the Event (TZ database format, e.g. UTC or Europe/Berlin) */
  timezone: Scalars['String']['input'];
};

/** Expected funds filter (ALL_EXPECTED_FUNDS, ONLY_PENDING, ONLY_MANUAL) */
export type ExpectedFundsFilter =
  | 'ALL_EXPECTED_FUNDS'
  | 'ONLY_MANUAL'
  | 'ONLY_PENDING';

export type ExpenseAttachedFileInput = {
  /** ID of the file */
  id: InputMaybe<Scalars['String']['input']>;
  /** URL of the file */
  url: Scalars['URL']['input'];
};

export type ExpenseCreateInput = {
  /** The accounting category this expense belongs to */
  accountingCategory: InputMaybe<AccountingCategoryReferenceInput>;
  /** (Optional) A list of files that you want to attach to this expense */
  attachedFiles: InputMaybe<Array<ExpenseAttachedFileInput>>;
  /** Currency that should be used for the payout. Defaults to the account currency */
  currency: InputMaybe<Currency>;
  /** Custom data to be stored in the expense */
  customData: InputMaybe<Scalars['JSON']['input']>;
  /** Main title of the expense */
  description: Scalars['String']['input'];
  /** (Optional - applicable to invoice expense only) The invoice file for this expense */
  invoiceFile: InputMaybe<ExpenseAttachedFileInput>;
  /** Custom information to print on the invoice */
  invoiceInfo: InputMaybe<Scalars['String']['input']>;
  /** The list of items for this expense. Total amount will be computed from them. */
  items: InputMaybe<Array<InputMaybe<ExpenseItemCreateInput>>>;
  /** Longer text to attach to the expense */
  longDescription: InputMaybe<Scalars['String']['input']>;
  /** Account to reimburse */
  payee: AccountReferenceInput;
  /** The address of the payee */
  payeeLocation: InputMaybe<LocationInput>;
  /** The payout method that will be used to reimburse the expense */
  payoutMethod: PayoutMethodInput;
  /** A private note that will be attached to your invoice, as HTML. Only visible to the payee and the collective/host admins. */
  privateMessage: InputMaybe<Scalars['String']['input']>;
  /** User-provided reference number or any other identifier that references the invoice */
  reference: InputMaybe<Scalars['String']['input']>;
  /** Tags associated to the expense (ie. Food, Engineering...) */
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The list of taxes that should be applied to the expense (VAT, GST, etc...) */
  tax: InputMaybe<Array<InputMaybe<ExpenseTaxInput>>>;
  /** The type of the expense */
  type: ExpenseType;
};

/** All supported expense currency sources */
export type ExpenseCurrencySource =
  /** The expense currency expressed as the account currency */
  | 'ACCOUNT'
  /** The expense currency expressed as the expense currency */
  | 'CREATED_BY_ACCOUNT'
  /** The expense currency expressed as the expense currency */
  | 'EXPENSE'
  /** The expense currency expressed as the host currency */
  | 'HOST';

/** Describes the role in which an account is involved in an expense. This is used to filter */
export type ExpenseDirection =
  /** Received: The account is the one who received the expense and the one who's paying for it. */
  | 'RECEIVED'
  /** Submitted: The account is the one who submitted the expense and possibly the beneficiary. */
  | 'SUBMITTED';

export type ExpenseInviteDraftInput = {
  /** The accounting category this expense belongs to */
  accountingCategory: InputMaybe<AccountingCategoryReferenceInput>;
  /** (Optional) A list of files that you want to attach to this expense */
  attachedFiles: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  /** Currency that should be used for the payout. Defaults to the account currency */
  currency: InputMaybe<Currency>;
  /** Custom data to be stored in the expense */
  customData: InputMaybe<Scalars['JSON']['input']>;
  /** Main title of the expense */
  description: InputMaybe<Scalars['String']['input']>;
  /** (Optional - applicable to invoice expense only) The invoice file for this expense */
  invoiceFile: InputMaybe<Scalars['JSON']['input']>;
  /** Custom information to print on the invoice */
  invoiceInfo: InputMaybe<Scalars['String']['input']>;
  /** The list of items for this expense. Total amount will be computed from them. */
  items: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  /** Longer text to attach to the expense */
  longDescription: InputMaybe<Scalars['String']['input']>;
  /** Account to reimburse */
  payee: ExpenseInvitee;
  /** The address of the payee */
  payeeLocation: InputMaybe<LocationInput>;
  /** The payout method that will be used to reimburse the expense */
  payoutMethod: InputMaybe<PayoutMethodInput>;
  /** A private note that will be attached to your invoice, as HTML. Only visible to the payee and the collective/host admins. */
  privateMessage: InputMaybe<Scalars['String']['input']>;
  /** Note to be sent to the invited user through email. */
  recipientNote: InputMaybe<Scalars['String']['input']>;
  /** User-provided reference number or any other identifier that references the invoice */
  reference: InputMaybe<Scalars['String']['input']>;
  /** Tags associated to the expense (ie. Food, Engineering...) */
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The list of taxes that should be applied to the expense (VAT, GST, etc...) */
  tax: InputMaybe<Array<InputMaybe<ExpenseTaxInput>>>;
  /** The type of the expense */
  type: ExpenseType;
};

export type ExpenseInvitee = {
  email: InputMaybe<Scalars['String']['input']>;
  isInvite: InputMaybe<Scalars['Boolean']['input']>;
  legacyId: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  organization: InputMaybe<ExpenseInviteeOrganizationInput>;
  slug: InputMaybe<Scalars['String']['input']>;
};

export type ExpenseInviteeOrganizationInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type ExpenseItemCreateInput = {
  /** Amount */
  amountV2: InputMaybe<AmountInput>;
  /** What is this item about? */
  description: Scalars['String']['input'];
  /** When was the money spent? */
  incurredAt: InputMaybe<Scalars['DateTime']['input']>;
  /** URL of the file linked to this item. Must be provided if the expense type is RECEIPT. */
  url: InputMaybe<Scalars['URL']['input']>;
};

export type ExpenseItemInput = {
  /** Amount */
  amountV2: InputMaybe<AmountInput>;
  /** What is this item about? */
  description: InputMaybe<Scalars['String']['input']>;
  /** ID of the item */
  id: InputMaybe<Scalars['String']['input']>;
  /** When was the money spent? */
  incurredAt: InputMaybe<Scalars['DateTime']['input']>;
  /** URL of the file linked to this item. Must be provided if the expense type is RECEIPT. */
  url: InputMaybe<Scalars['URL']['input']>;
};

/** All fields that can be locked on an expense draft */
export type ExpenseLockableFields =
  /** Locks items' amount and currency, and it also blocks the hability to add new items. */
  | 'AMOUNT'
  /** Locks the description field. */
  | 'DESCRIPTION'
  /** Locks the payee field, if the user is not on the platform it locks its email. */
  | 'PAYEE'
  /** Locks the type field. */
  | 'TYPE';

/** All supported expense types */
export type ExpenseProcessAction =
  /** To mark the expense as approved */
  | 'APPROVE'
  /** To decline an invited expense */
  | 'DECLINE_INVITED_EXPENSE'
  /** To put the expense on hold */
  | 'HOLD'
  /** To mark the expense as incomplete and notify the payee it requires more information */
  | 'MARK_AS_INCOMPLETE'
  /** To mark the expense as spam */
  | 'MARK_AS_SPAM'
  /** To mark the expense as unpaid (marks the transaction as refunded) */
  | 'MARK_AS_UNPAID'
  /** To trigger the payment */
  | 'PAY'
  /** To mark the expense as rejected */
  | 'REJECT'
  /** To release the expense from hold */
  | 'RELEASE'
  /** To request re-approval of the expense, marking it as pending. */
  | 'REQUEST_RE_APPROVAL'
  /** To schedule the expense for payment */
  | 'SCHEDULE_FOR_PAYMENT'
  /** To mark the expense as pending after it has been approved */
  | 'UNAPPROVE'
  /** To unschedule the expense payment */
  | 'UNSCHEDULE_PAYMENT';

export type ExpenseReferenceInput = {
  /** The public id identifying the expense (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The internal id of the expense (ie: 580) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

export type ExpenseStatus =
  | 'APPROVED'
  | 'CANCELED'
  | 'DRAFT'
  | 'ERROR'
  | 'INCOMPLETE'
  | 'INVITE_DECLINED'
  | 'PAID'
  | 'PENDING'
  | 'PROCESSING'
  | 'REJECTED'
  | 'SCHEDULED_FOR_PAYMENT'
  | 'SPAM'
  | 'UNVERIFIED';

/** Describes the values allowed to filter expenses, namely all the expense statuses and the special "READY_TO_PAY" value. */
export type ExpenseStatusFilter =
  | 'APPROVED'
  | 'CANCELED'
  | 'DRAFT'
  | 'ERROR'
  | 'INCOMPLETE'
  | 'INVITE_DECLINED'
  /** Only expenses that are on hold */
  | 'ON_HOLD'
  | 'PAID'
  | 'PENDING'
  | 'PROCESSING'
  /** Only expenses that are ready to be paid (must be approved, have the sufficiant balance and have the tax forms completed) */
  | 'READY_TO_PAY'
  | 'REJECTED'
  | 'SCHEDULED_FOR_PAYMENT'
  | 'SPAM'
  | 'UNVERIFIED';

/** Input to set taxes for an expense */
export type ExpenseTaxInput = {
  /** Tax identification number, if any */
  idNumber: InputMaybe<Scalars['String']['input']>;
  /** Tax rate as a float number between 0 and 1 */
  rate: Scalars['Float']['input'];
  type: TaxType;
};

/** All supported expense types */
export type ExpenseType =
  /** Credit Card Charge: Payment done using an issued (virtual) credit card issued by your Fiscal Host. */
  | 'CHARGE'
  /** Funding Request: Request funding for a project or initiative. */
  | 'FUNDING_REQUEST'
  /** Grant: Request funding for a project or initiative. */
  | 'GRANT'
  /** Invoice: Charge for your time or get paid in advance. */
  | 'INVOICE'
  /** Receipt: Get paid back for a purchase already made. */
  | 'RECEIPT'
  /** Settlement: expense generated by Open Collective to collect money owed by Fiscal Hosts. */
  | 'SETTLEMENT'
  /** Unclassified expense */
  | 'UNCLASSIFIED';

export type ExpenseUpdateInput = {
  /** The accounting category this expense belongs to */
  accountingCategory: InputMaybe<AccountingCategoryReferenceInput>;
  /** (Optional) A list of files that you want to attach to this expense */
  attachedFiles: InputMaybe<Array<ExpenseAttachedFileInput>>;
  /** @deprecated 2020-04-08: Please use the items field - The list of items for this expense. Total amount will be computed from them. */
  attachments: InputMaybe<Array<InputMaybe<ExpenseItemInput>>>;
  /** Currency that should be used for the payout. Defaults to the account currency */
  currency: InputMaybe<Currency>;
  /** Custom data to be stored in the expense */
  customData: InputMaybe<Scalars['JSON']['input']>;
  /** Main title of the expense */
  description: InputMaybe<Scalars['String']['input']>;
  /** ID of the expense that you are trying to edit */
  id: Scalars['String']['input'];
  /** (Optional - applicable to invoice expense only) The invoice file for this expense */
  invoiceFile: InputMaybe<ExpenseAttachedFileInput>;
  /** Tax ID, VAT number...etc This information will be printed on your invoice. */
  invoiceInfo: InputMaybe<Scalars['String']['input']>;
  /** The list of items for this expense. Total amount will be computed from them. */
  items: InputMaybe<Array<InputMaybe<ExpenseItemInput>>>;
  /** Longer text to attach to the expense */
  longDescription: InputMaybe<Scalars['String']['input']>;
  /** Account to reimburse */
  payee: InputMaybe<NewAccountOrReferenceInput>;
  /** The address of the payee */
  payeeLocation: InputMaybe<LocationInput>;
  /** The payout method that will be used to reimburse the expense */
  payoutMethod: InputMaybe<PayoutMethodInput>;
  /** A private note that will be attached to your invoice, as HTML */
  privateMessage: InputMaybe<Scalars['String']['input']>;
  /** User-provided reference number or any other identifier that references the invoice */
  reference: InputMaybe<Scalars['String']['input']>;
  /** Tags associated to the expense (ie. Food, Engineering...) */
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The list of taxes that should be applied to the expense (VAT, GST, etc...) */
  tax: InputMaybe<Array<InputMaybe<ExpenseTaxInput>>>;
  /** The type of the expense */
  type: InputMaybe<ExpenseType>;
};

/** All supported expense types */
export type FeesPayer =
  /** The collective will be responsible for paying the fees */
  | 'COLLECTIVE'
  /** The payee will be responsible for paying the fees (they'll be deduced from the total amount) */
  | 'PAYEE';

export type FundCreateInput = {
  /** The profile background image, for the banner and social media sharing */
  backgroundImage: InputMaybe<Scalars['Upload']['input']>;
  description: Scalars['String']['input'];
  /** The profile avatar image */
  image: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  settings: InputMaybe<Scalars['JSON']['input']>;
  slug: Scalars['String']['input'];
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Input type for guest contributions */
export type GuestInfoInput = {
  /** Captcha validation for creating an order */
  captcha: InputMaybe<CaptchaInput>;
  /** Contributor's email */
  email: Scalars['EmailAddress']['input'];
  /** Legal name of the user */
  legalName: InputMaybe<Scalars['String']['input']>;
  /** Address of the user, mandatory when amount is above $5000. */
  location: InputMaybe<LocationInput>;
  /** Display name of the user */
  name: InputMaybe<Scalars['String']['input']>;
};

export type HostApplicationReferenceInput = {
  /** The public id identifying the host application (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
};

export type HostApplicationStatus =
  | 'APPROVED'
  | 'EXPIRED'
  | 'PENDING'
  | 'REJECTED';

/** All supported expense types */
export type HostFeeStructure =
  /** Custom fee for this Collective only */
  | 'CUSTOM_FEE'
  /** Use global host fees */
  | 'DEFAULT'
  /** Set a monthly retainer for this Collective */
  | 'MONTHLY_RETAINER';

export type ImageFormat =
  | 'gif'
  | 'jpg'
  | 'png'
  | 'svg'
  | 'txt';

export type IndividualCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type InviteMemberInput = {
  description: InputMaybe<Scalars['String']['input']>;
  /** Reference to an account for the invitee */
  memberAccount: InputMaybe<AccountReferenceInput>;
  /** Email and name of the invitee if no reference. */
  memberInfo: InputMaybe<IndividualCreateInput>;
  /** Role of the invitee */
  role: MemberRole;
  since: InputMaybe<Scalars['DateTime']['input']>;
};

/** Defines role of the last comment author */
export type LastCommentBy =
  /** Collective Admin */
  | 'COLLECTIVE_ADMIN'
  /** Fiscal Host Admin */
  | 'HOST_ADMIN'
  /** Not a Fiscal Host Admin */
  | 'NON_HOST_ADMIN'
  /** Expense Submitter */
  | 'USER';

/** Status for a legal document */
export type LegalDocumentRequestStatus =
  | 'ERROR'
  | 'INVALID'
  | 'NOT_REQUESTED'
  | 'RECEIVED'
  | 'REQUESTED';

/** Type for a required legal document */
export type LegalDocumentService =
  | 'DROPBOX_FORMS'
  | 'OPENCOLLECTIVE';

/** Type for a required legal document */
export type LegalDocumentType =
  /** US tax form (W9, W8BEN, W8BEN-E) */
  | 'US_TAX_FORM';

/** Input type for Geographic location */
export type LocationInput = {
  /** Postal address without country (eg. 12 opensource avenue, 7500 Paris) */
  address: InputMaybe<Scalars['String']['input']>;
  /** Two letters country code (eg. FR, BE...etc) */
  country: InputMaybe<CountryIso>;
  /** Latitude */
  lat: InputMaybe<Scalars['Float']['input']>;
  /** Longitude */
  long: InputMaybe<Scalars['Float']['input']>;
  /** A short name for the location (eg. Open Collective Headquarters) */
  name: InputMaybe<Scalars['String']['input']>;
  /** Structured JSON address */
  structured: InputMaybe<Scalars['JSON']['input']>;
};

export type MarkAsUnPaidExpenseStatus =
  | 'APPROVED'
  | 'ERROR'
  | 'INCOMPLETE';

export type MemberInvitationReferenceInput = {
  /** The public id identifying the member invitation (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The internal id of the invitation (ie: 580) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** All member roles */
export type MemberRole =
  | 'ACCOUNTANT'
  | 'ADMIN'
  | 'ATTENDEE'
  | 'BACKER'
  | 'COMMUNITY_MANAGER'
  | 'CONNECTED_ACCOUNT'
  | 'CONTRIBUTOR'
  | 'FOLLOWER'
  | 'FUNDRAISER'
  | 'HOST'
  | 'MEMBER';

export type NewAccountOrReferenceInput = {
  email: InputMaybe<Scalars['String']['input']>;
  /** The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  legalName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  newsletterOptIn: InputMaybe<Scalars['Boolean']['input']>;
  organization: InputMaybe<NewAccountOrganizationInput>;
  /** The slug identifying the account (ie: babel for https://opencollective.com/babel) */
  slug: InputMaybe<Scalars['String']['input']>;
};

export type NewAccountOrganizationInput = {
  description: InputMaybe<Scalars['String']['input']>;
  legalName: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  website: InputMaybe<Scalars['String']['input']>;
};

export type OAuthAuthorizationReferenceInput = {
  /** The id identifying the OAuth Authorization (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
};

/** All supported OAuth scopes */
export type OAuthScope =
  /** Manage your account, collectives and organizations. */
  | 'account'
  /** Create and manage OAuth applications. */
  | 'applications'
  /** Create and manage connected accounts. */
  | 'connectedAccounts'
  /** Create and manage conversations. */
  | 'conversations'
  /** Access your email address. */
  | 'email'
  /** Create and manage expenses, payout methods. */
  | 'expenses'
  /** Administrate fiscal hosts. */
  | 'host'
  /** Access your incognito account. */
  | 'incognito'
  /** Create and manage contributions, payment methods. */
  | 'orders'
  /** Perform critical administrative operations.  */
  | 'root'
  /** Refund and reject recorded transactions. */
  | 'transactions'
  /** Create and manage updates. */
  | 'updates'
  /** Create and manage virtual cards. */
  | 'virtualCards'
  /** Create and manage webhooks */
  | 'webhooks';

/** To configure the OCR parsing */
export type OcrParsingOptionsInput = {
  /** The currency that you'd like to use for the amounts */
  currency: InputMaybe<Currency>;
};

/** Possible fields you can use to order by */
export type OrderByFieldType =
  /** The financial activity of the collective (number of transactions) */
  | 'ACTIVITY'
  | 'BALANCE'
  | 'CREATED_AT'
  /** Order by end date */
  | 'ENDS_AT'
  | 'HOSTED_COLLECTIVES_COUNT'
  | 'HOST_RANK'
  | 'LAST_CHARGED_AT'
  | 'MEMBER_COUNT'
  | 'NAME'
  | 'RANK'
  /** Order by start date */
  | 'STARTS_AT'
  | 'TOTAL_CONTRIBUTED'
  /** Order by the date the collective was unhosted */
  | 'UNHOSTED_AT';

/** Input to order collection */
export type OrderByInput = {
  /** Ordering direction. */
  direction: OrderDirection;
  /** Field to order by. */
  field: OrderByFieldType;
};

/** Some context about how an order was created */
export type OrderContextInput = {
  /** Whether this order was created using the embedded contribution flow */
  isEmbed: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether this order was created using the new platform tip flow */
  isNewPlatformTipFlow: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input to create a new order */
export type OrderCreateInput = {
  /** The contribution amount for 1 quantity, without platform contribution and taxes */
  amount: AmountInput;
  /** Some context about how this order was created */
  context: InputMaybe<OrderContextInput>;
  /** If the tier has some "customFields", use this field to set their values */
  customData: InputMaybe<Scalars['JSON']['input']>;
  /** Data related to this order */
  data: InputMaybe<Scalars['JSON']['input']>;
  frequency: ContributionFrequency;
  /** The profile making the order. Can be null for guest contributions. */
  fromAccount: InputMaybe<AccountReferenceInput>;
  /** Additional information about the contributing profile */
  fromAccountInfo: InputMaybe<OrderFromAccountInfo>;
  /** Use this when fromAccount is null to pass the guest info */
  guestInfo: InputMaybe<GuestInfoInput>;
  /** Whether this is transferring the remaining balance from a project/event/collective */
  isBalanceTransfer: InputMaybe<Scalars['Boolean']['input']>;
  /** The payment method used for this order */
  paymentMethod: InputMaybe<PaymentMethodInput>;
  /** Platform tip attached to this order */
  platformTipAmount: InputMaybe<AmountInput>;
  quantity: Scalars['Int']['input'];
  /** Tags associated to the order */
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The tax to apply to the order */
  tax: InputMaybe<TaxInput>;
  /** The tier you are contributing to */
  tier: InputMaybe<TierReferenceInput>;
  /** The profile you want to contribute to */
  toAccount: AccountReferenceInput;
};

/** Possible directions in which to order a list of items */
export type OrderDirection =
  | 'ASC'
  | 'DESC';

/** Some context about how an order was created */
export type OrderFromAccountInfo = {
  email: InputMaybe<Scalars['String']['input']>;
  legalName: InputMaybe<Scalars['String']['input']>;
  /** The location of the contributor. Account location will be updated with this address if different from the existing one. */
  location: InputMaybe<LocationInput>;
  name: InputMaybe<Scalars['String']['input']>;
};

/** The user or system that paused the order */
export type OrderPausedBy =
  /** The collective */
  | 'COLLECTIVE'
  /** The host of the collective */
  | 'HOST'
  /** The platform */
  | 'PLATFORM'
  /** Individual who administers the account for this contribution */
  | 'USER';

export type OrderReferenceInput = {
  /** The public id identifying the order (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the order (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** All order statuses */
export type OrderStatus =
  | 'ACTIVE'
  | 'CANCELLED'
  | 'DISPUTED'
  | 'ERROR'
  | 'EXPIRED'
  | 'IN_REVIEW'
  | 'NEW'
  | 'PAID'
  | 'PAUSED'
  | 'PENDING'
  | 'PROCESSING'
  | 'REFUNDED'
  | 'REJECTED'
  | 'REQUIRE_CLIENT_CONFIRMATION';

/** Input to set taxes for an order */
export type OrderTaxInput = {
  amount: AmountInput;
  /** Country of the account ordering, to know from where to apply the tax */
  country: InputMaybe<CountryIso>;
  /** Tax identification number, if any */
  idNumber: InputMaybe<Scalars['String']['input']>;
  type: TaxType;
};

export type OrderUpdateInput = {
  /** Amount received by collective, excluding any tips, taxes or fees */
  amount: InputMaybe<AmountInput>;
  /** Host fee percent to be applied to the order */
  hostFeePercent: InputMaybe<Scalars['Float']['input']>;
  /** The public id identifying the order (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the order (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
  /** Amount paid in fees for the payment processor */
  paymentProcessorFee: InputMaybe<AmountInput>;
  /** Amount intended as tip for the platform */
  platformTip: InputMaybe<AmountInput>;
  /** Date the funds were received */
  processedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** The tax to apply to the order */
  tax: InputMaybe<TaxInput>;
  /** Reference to the transaction import row to link the order to */
  transactionsImportRow: InputMaybe<TransactionsImportRowReferenceInput>;
};

export type OrganizationCreateInput = {
  /** The profile background image, for the banner and social media sharing */
  backgroundImage: InputMaybe<Scalars['Upload']['input']>;
  description: Scalars['String']['input'];
  /** The profile avatar image */
  image: InputMaybe<Scalars['Upload']['input']>;
  legalName: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  settings: InputMaybe<Scalars['JSON']['input']>;
  slug: Scalars['String']['input'];
};

/** Input to create a Stripe payment intent */
export type PaymentIntentInput = {
  amount: AmountInput;
  frequency: InputMaybe<ContributionFrequency>;
  fromAccount: InputMaybe<AccountReferenceInput>;
  toAccount: AccountReferenceInput;
};

/** An input to use for creating or retrieving payment methods */
export type PaymentMethodInput = {
  /** When creating a credit card, use this field to set its info */
  creditCardInfo: InputMaybe<CreditCardCreateInput>;
  /** The id assigned to the payment method */
  id: InputMaybe<Scalars['String']['input']>;
  /** Whether this payment method should be saved for future payments */
  isSavedForLater: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of this payment method */
  name: InputMaybe<Scalars['String']['input']>;
  /** The Payment Intent ID used in this checkout */
  paymentIntentId: InputMaybe<Scalars['String']['input']>;
  /** To pass when type is PAYPAL */
  paypalInfo: InputMaybe<PaypalPaymentInput>;
  /** Service of this payment method */
  service: InputMaybe<PaymentMethodService>;
  /** Type of this payment method */
  type: InputMaybe<PaymentMethodType>;
};

export type PaymentMethodLegacyType =
  | 'ACCOUNT_BALANCE'
  | 'ADDED_FUNDS'
  | 'ALIPAY'
  | 'BACS_DEBIT'
  | 'BANCONTACT'
  | 'BANK_TRANSFER'
  | 'CREDIT_CARD'
  | 'CRYPTO'
  | 'GIFT_CARD'
  | 'PAYMENT_INTENT'
  | 'PAYPAL'
  | 'PREPAID_BUDGET'
  | 'SEPA_DEBIT'
  | 'US_BANK_ACCOUNT';

export type PaymentMethodReferenceInput = {
  /** The id assigned to the payment method */
  id: InputMaybe<Scalars['String']['input']>;
};

export type PaymentMethodService =
  | 'OPENCOLLECTIVE'
  | 'PAYPAL'
  | 'STRIPE'
  | 'THEGIVINGBLOCK'
  | 'WISE';

export type PaymentMethodType =
  | 'ADAPTIVE'
  | 'ALIPAY'
  | 'BACS_DEBIT'
  | 'BANCONTACT'
  | 'BANK_TRANSFER'
  | 'COLLECTIVE'
  | 'CREDITCARD'
  | 'CRYPTO'
  | 'DEFAULT'
  | 'GIFTCARD'
  | 'HOST'
  | 'LINK'
  | 'MANUAL'
  | 'PAYMENT'
  | 'PAYMENT_INTENT'
  | 'PAYOUT'
  | 'PREPAID'
  | 'SEPA_DEBIT'
  | 'SUBSCRIPTION'
  | 'SWISH'
  | 'US_BANK_ACCOUNT'
  | 'VIRTUAL_CARD'
  | 'adaptive'
  | 'alipay'
  | 'bacs_debit'
  | 'bancontact'
  | 'bank_transfer'
  | 'collective'
  | 'creditcard'
  | 'crypto'
  | 'default'
  | 'giftcard'
  | 'host'
  | 'link'
  | 'manual'
  | 'payment'
  | 'paymentintent'
  | 'payout'
  | 'prepaid'
  | 'sepa_debit'
  | 'subscription'
  | 'swish'
  | 'us_bank_account'
  | 'virtual_card';

export type PayoutMethodInput = {
  /** Additional data specific to the payout method type. For custom payout methods (type=OTHER), must contain only `content` (string) and `currency` fields. For other types, may contain type-specific details (e.g., bank account details, PayPal email) */
  data: InputMaybe<Scalars['JSON']['input']>;
  /** The unique identifier of the payout method */
  id: InputMaybe<Scalars['String']['input']>;
  /** Whether this payout method should be saved for future use */
  isSaved: InputMaybe<Scalars['Boolean']['input']>;
  /** The legacy identifier used in older systems */
  legacyId: InputMaybe<Scalars['Int']['input']>;
  /** A human-readable name for the payout method */
  name: InputMaybe<Scalars['String']['input']>;
  /** The type of payout method (e.g., PayPal, bank transfer) */
  type: InputMaybe<PayoutMethodType>;
};

export type PayoutMethodReferenceInput = {
  /** The id assigned to the payout method */
  id: InputMaybe<Scalars['String']['input']>;
};

export type PayoutMethodType =
  | 'ACCOUNT_BALANCE'
  | 'BANK_ACCOUNT'
  | 'CREDIT_CARD'
  | 'OTHER'
  | 'PAYPAL';

export type PaypalPaymentInput = {
  data: InputMaybe<Scalars['JSON']['input']>;
  orderId: InputMaybe<Scalars['String']['input']>;
  subscriptionId: InputMaybe<Scalars['String']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
};

/** Input to create a new pending order */
export type PendingOrderCreateInput = {
  /** The accounting category of this order */
  accountingCategory: InputMaybe<AccountingCategoryReferenceInput>;
  /** The contribution amount, without platform contribution and taxes */
  amount: AmountInput;
  /** Public order description */
  description: InputMaybe<Scalars['String']['input']>;
  /** When is the money expected? */
  expectedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** The profile making the contribution. */
  fromAccount: AccountReferenceInput;
  /** Additional information about the contributing profile */
  fromAccountInfo: InputMaybe<OrderFromAccountInfo>;
  /** Custom Host fee percent for this order */
  hostFeePercent: InputMaybe<Scalars['Float']['input']>;
  /** Private memo for the host */
  memo: InputMaybe<Scalars['String']['input']>;
  /** Payment method expected for this order */
  paymentMethod: InputMaybe<Scalars['String']['input']>;
  /** External identifier for the order */
  ponumber: InputMaybe<Scalars['String']['input']>;
  /** The tax to apply to the order */
  tax: InputMaybe<TaxInput>;
  /** The tier you are contributing to */
  tier: InputMaybe<TierReferenceInput>;
  /** The collective you want to contribute to */
  toAccount: AccountReferenceInput;
};

/** Input to edit an existing pending order */
export type PendingOrderEditInput = {
  /** The accounting category of this order */
  accountingCategory: InputMaybe<AccountingCategoryReferenceInput>;
  /** The contribution amount, without platform contribution and taxes */
  amount: AmountInput;
  /** Public order description */
  description: InputMaybe<Scalars['String']['input']>;
  /** When is the money expected? */
  expectedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** The profile making the contribution. */
  fromAccount: InputMaybe<AccountReferenceInput>;
  /** Additional information about the contributing profile */
  fromAccountInfo: InputMaybe<OrderFromAccountInfo>;
  /** Custom Host fee percent for this order */
  hostFeePercent: InputMaybe<Scalars['Float']['input']>;
  /** The public id identifying the order (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the order (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
  /** Private memo for the host */
  memo: InputMaybe<Scalars['String']['input']>;
  /** Payment method expected for this order */
  paymentMethod: InputMaybe<Scalars['String']['input']>;
  /** Platform tip attached to this order */
  platformTipAmount: InputMaybe<AmountInput>;
  /** External identifier for the order */
  ponumber: InputMaybe<Scalars['String']['input']>;
  /** The tax to apply to the order */
  tax: InputMaybe<TaxInput>;
  /** The tier you are contributing to */
  tier: InputMaybe<TierReferenceInput>;
};

/** Input type for PersonalToken */
export type PersonalTokenCreateInput = {
  /** The account to use as the owner of the application. Defaults to currently logged in user. */
  account: InputMaybe<AccountReferenceInput>;
  expiresAt: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  /** Whether this token is allowed to directly use operations that would normally require 2FA */
  preAuthorize2FA: InputMaybe<Scalars['Boolean']['input']>;
  scope: InputMaybe<Array<InputMaybe<OAuthScope>>>;
};

export type PersonalTokenReferenceInput = {
  /** The public id identifying the personal-token (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the personal-token (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** Input type for PersonalToken */
export type PersonalTokenUpdateInput = {
  expiresAt: InputMaybe<Scalars['String']['input']>;
  /** The public id identifying the personal-token (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the personal-token (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  /** Whether this token is allowed to directly use operations that would normally require 2FA */
  preAuthorize2FA: InputMaybe<Scalars['Boolean']['input']>;
  scope: InputMaybe<Array<InputMaybe<OAuthScope>>>;
};

export type PlaidAccountType =
  /** Brokerage */
  | 'brokerage'
  /** Credit */
  | 'credit'
  /** Depository */
  | 'depository'
  /** Investment */
  | 'investment'
  /** Loan */
  | 'loan'
  /** Other */
  | 'other';

export type PoliciesCollectiveExpenseAuthorCannotApprove = {
  amountInCents: InputMaybe<Scalars['Int']['input']>;
  appliesToHostedCollectives: InputMaybe<Scalars['Boolean']['input']>;
  appliesToSingleAdminCollectives: InputMaybe<Scalars['Boolean']['input']>;
  enabled: InputMaybe<Scalars['Boolean']['input']>;
};

export type PoliciesCollectiveMinimumAdminsInput = {
  applies: InputMaybe<PolicyApplication>;
  freeze: InputMaybe<Scalars['Boolean']['input']>;
  numberOfAdmins: InputMaybe<Scalars['Int']['input']>;
};

export type PoliciesContributorInfoThresholdsInput = {
  address: InputMaybe<Scalars['Int']['input']>;
  legalName: InputMaybe<Scalars['Int']['input']>;
};

export type PoliciesExpenseCategorizationInput = {
  requiredForCollectiveAdmins: InputMaybe<Scalars['Boolean']['input']>;
  requiredForExpenseSubmitters: InputMaybe<Scalars['Boolean']['input']>;
};

export type PoliciesExpensePolicies = {
  grantPolicy: InputMaybe<Scalars['String']['input']>;
  invoicePolicy: InputMaybe<Scalars['String']['input']>;
  receiptPolicy: InputMaybe<Scalars['String']['input']>;
  titlePolicy: InputMaybe<Scalars['String']['input']>;
};

export type PoliciesInput = {
  COLLECTIVE_ADMINS_CAN_REFUND: InputMaybe<Scalars['Boolean']['input']>;
  COLLECTIVE_ADMINS_CAN_SEE_PAYOUT_METHODS: InputMaybe<Scalars['Boolean']['input']>;
  COLLECTIVE_MINIMUM_ADMINS: InputMaybe<PoliciesCollectiveMinimumAdminsInput>;
  CONTRIBUTOR_INFO_THRESHOLDS: InputMaybe<PoliciesContributorInfoThresholdsInput>;
  EXPENSE_AUTHOR_CANNOT_APPROVE: InputMaybe<PoliciesCollectiveExpenseAuthorCannotApprove>;
  EXPENSE_CATEGORIZATION: InputMaybe<PoliciesExpenseCategorizationInput>;
  EXPENSE_POLICIES: InputMaybe<PoliciesExpensePolicies>;
  EXPENSE_PUBLIC_VENDORS: InputMaybe<Scalars['Boolean']['input']>;
  REQUIRE_2FA_FOR_ADMINS: InputMaybe<Scalars['Boolean']['input']>;
};

/** Defines how the policy is applied */
export type PolicyApplication =
  | 'ALL_COLLECTIVES'
  | 'NEW_COLLECTIVES';

/** Parameters for paying an expense */
export type ProcessExpensePaymentParams = {
  /** Date funds were cleared on the fiscal host bank, Wise, PayPal, Stripe or any other external account holding these funds. */
  clearedAt: InputMaybe<Scalars['DateTime']['input']>;
  /** Who is responsible for paying any due fees. */
  feesPayer: InputMaybe<FeesPayer>;
  /** Bypass automatic integrations (ie. PayPal, Transferwise) to process the expense manually */
  forceManual: InputMaybe<Scalars['Boolean']['input']>;
  /** New expense status when triggering MARK_AS_UNPAID */
  markAsUnPaidStatus: InputMaybe<MarkAsUnPaidExpenseStatus>;
  /** Payment method using for paying the expense */
  paymentMethodService: InputMaybe<PaymentMethodService>;
  /** The fee charged by payment processor in host currency */
  paymentProcessorFeeInHostCurrency: InputMaybe<Scalars['Int']['input']>;
  /** Whether the payment processor fees should be refunded when triggering MARK_AS_UNPAID */
  shouldRefundPaymentProcessorFee: InputMaybe<Scalars['Boolean']['input']>;
  /** The total amount paid in host currency */
  totalAmountPaidInHostCurrency: InputMaybe<Scalars['Int']['input']>;
  /** Transfer details for fulfilling the expense */
  transfer: InputMaybe<ProcessExpenseTransferParams>;
};

export type ProcessExpenseTransferParams = {
  /** Wise transfer details */
  details: InputMaybe<WiseTransferDetails>;
};

/** Action taken for an account application to the host */
export type ProcessHostApplicationAction =
  /** Approve the account request to be hosted */
  | 'APPROVE'
  /** Rejects the account request to be hosted */
  | 'REJECT'
  /** Sends a private message to the admins of the account */
  | 'SEND_PRIVATE_MESSAGE'
  /** Creates a public conversation */
  | 'SEND_PUBLIC_MESSAGE';

/** Action to apply on the order */
export type ProcessOrderAction =
  /** To mark the order as expired */
  | 'MARK_AS_EXPIRED'
  /** To mark the order as paid */
  | 'MARK_AS_PAID';

export type ProjectCreateInput = {
  /** The profile background image, for the banner and social media sharing */
  backgroundImage: InputMaybe<Scalars['Upload']['input']>;
  description: Scalars['String']['input'];
  /** The profile avatar image */
  image: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  settings: InputMaybe<Scalars['JSON']['input']>;
  slug: Scalars['String']['input'];
  /** The social links in order of preference */
  socialLinks: InputMaybe<Array<SocialLinkInput>>;
  tags: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RecurringExpenseInput = {
  /** The date when this recurring expense should cease */
  endsAt: InputMaybe<Scalars['DateTime']['input']>;
  /** The interval in which this recurring expense is created */
  interval: RecurringExpenseInterval;
};

/** All supported intervals for recurring expenses */
export type RecurringExpenseInterval =
  | 'day'
  | 'month'
  | 'quarter'
  | 'week'
  | 'year';

export type RefundKind =
  /** Transaction was refunded due to a dispute */
  | 'DISPUTE'
  /** Transaction was refunded by the platform to fix a duplicated transaction */
  | 'DUPLICATE'
  /** Transaction reversed due to an edit */
  | 'EDIT'
  /** Refund issued by the host */
  | 'REFUND'
  /** Rejection issued by the host or collective admin */
  | 'REJECT';

/** All supported SecurityCheck levels */
export type SecurityCheckLevel =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM'
  | 'PASS';

/** All supported SecurityCheck scopes */
export type SecurityCheckScope =
  | 'COLLECTIVE'
  | 'PAYEE'
  | 'PAYOUT_METHOD'
  | 'USER';

/** A Stripe setup intent */
export type SetupIntentInput = {
  id: Scalars['String']['input'];
  stripeAccount: Scalars['String']['input'];
};

export type SocialLinkInput = {
  type: SocialLinkType;
  url: Scalars['URL']['input'];
};

/** The type of social link */
export type SocialLinkType =
  | 'BLUESKY'
  | 'DISCORD'
  | 'DISCOURSE'
  | 'FACEBOOK'
  | 'GHOST'
  | 'GIT'
  | 'GITHUB'
  | 'GITLAB'
  | 'INSTAGRAM'
  | 'LINKEDIN'
  | 'MASTODON'
  | 'MATTERMOST'
  | 'MEETUP'
  | 'PEERTUBE'
  | 'PIXELFED'
  | 'SLACK'
  | 'THREADS'
  | 'TIKTOK'
  | 'TUMBLR'
  | 'TWITCH'
  | 'TWITTER'
  | 'WEBSITE'
  | 'YOUTUBE';

/** The operator to use when searching with tags */
export type TagSearchOperator =
  | 'AND'
  | 'OR';

/** Input to set taxes for an expense */
export type TaxInput = {
  /** An optional tax amount to make sure the tax displayed in your frontend matches the one calculated by the API */
  amount: InputMaybe<AmountInput>;
  /** Country ISO code of the entity paying the tax */
  country: InputMaybe<CountryIso>;
  /** Tax identification number, if any */
  idNumber: InputMaybe<Scalars['String']['input']>;
  /** Tax rate as a float number between 0 and 1 */
  rate: Scalars['Float']['input'];
  /** Tax type */
  type: TaxType;
};

/** The type of a tax like GST, VAT, etc */
export type TaxType =
  /** New Zealand Good and Services Tax */
  | 'GST'
  /** European Value Added Tax */
  | 'VAT';

export type TierAmountType =
  | 'FIXED'
  | 'FLEXIBLE';

export type TierCreateInput = {
  amount: InputMaybe<AmountInput>;
  amountType: TierAmountType;
  button: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  frequency: TierFrequency;
  goal: InputMaybe<AmountInput>;
  invoiceTemplate: InputMaybe<Scalars['String']['input']>;
  maxQuantity: InputMaybe<Scalars['Int']['input']>;
  minimumAmount: InputMaybe<AmountInput>;
  name: Scalars['NonEmptyString']['input'];
  presets: InputMaybe<Array<Scalars['Int']['input']>>;
  singleTicket: InputMaybe<Scalars['Boolean']['input']>;
  type: TierType;
  useStandalonePage: InputMaybe<Scalars['Boolean']['input']>;
};

export type TierFrequency =
  | 'FLEXIBLE'
  | 'MONTHLY'
  | 'ONETIME'
  | 'YEARLY';

export type TierInterval =
  | 'flexible'
  | 'month'
  | 'year';

export type TierReferenceInput = {
  /** The id assigned to the Tier */
  id: InputMaybe<Scalars['String']['input']>;
  /** Pass this flag to reference the custom tier (/donate) */
  isCustom: InputMaybe<Scalars['Boolean']['input']>;
  /** The DB id assigned to the Tier */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

export type TierType =
  | 'DONATION'
  | 'MEMBERSHIP'
  | 'PRODUCT'
  | 'SERVICE'
  | 'TICKET'
  | 'TIER';

export type TierUpdateInput = {
  amount: InputMaybe<AmountInput>;
  amountType: InputMaybe<TierAmountType>;
  button: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  frequency: InputMaybe<TierFrequency>;
  goal: InputMaybe<AmountInput>;
  /** The public id identifying the tier (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: Scalars['String']['input'];
  invoiceTemplate: InputMaybe<Scalars['String']['input']>;
  longDescription: InputMaybe<Scalars['String']['input']>;
  maxQuantity: InputMaybe<Scalars['Int']['input']>;
  minimumAmount: InputMaybe<AmountInput>;
  name: InputMaybe<Scalars['NonEmptyString']['input']>;
  presets: InputMaybe<Array<Scalars['Int']['input']>>;
  singleTicket: InputMaybe<Scalars['Boolean']['input']>;
  type: InputMaybe<TierType>;
  useStandalonePage: InputMaybe<Scalars['Boolean']['input']>;
  videoUrl: InputMaybe<Scalars['URL']['input']>;
};

export type TimeUnit =
  | 'DAY'
  | 'HOUR'
  | 'MINUTE'
  | 'MONTH'
  | 'QUARTER'
  | 'SECOND'
  | 'WEEK'
  | 'YEAR';

export type TransactionKind =
  | 'ADDED_FUNDS'
  | 'BALANCE_TRANSFER'
  | 'CONTRIBUTION'
  | 'EXPENSE'
  | 'HOST_FEE'
  | 'HOST_FEE_SHARE'
  | 'HOST_FEE_SHARE_DEBT'
  | 'PAYMENT_PROCESSOR_COVER'
  | 'PAYMENT_PROCESSOR_DISPUTE_FEE'
  | 'PAYMENT_PROCESSOR_FEE'
  | 'PLATFORM_FEE'
  | 'PLATFORM_TIP'
  | 'PLATFORM_TIP_DEBT'
  | 'PREPAID_PAYMENT_METHOD'
  | 'TAX';

export type TransactionReferenceInput = {
  /** The public id identifying the transaction (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The internal id of the transaction (ie: 580) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

export type TransactionSettlementStatus =
  | 'INVOICED'
  | 'OWED'
  | 'SETTLED';

/** All transaction types */
export type TransactionType =
  | 'CREDIT'
  | 'DEBIT';

export type TransactionsImportAssignmentInput = {
  /** The accounts to assign the transactions to */
  accounts: Array<AccountReferenceInput>;
  /** The ID of the account to assign the transactions to */
  importedAccountId: Scalars['NonEmptyString']['input'];
};

export type TransactionsImportReferenceInput = {
  /** The id of the row */
  id: Scalars['NonEmptyString']['input'];
};

/** Action to perform on transactions import rows */
export type TransactionsImportRowAction =
  | 'DISMISS_ALL'
  | 'PUT_ON_HOLD_ALL'
  | 'RESTORE_ALL'
  | 'UPDATE_ROWS';

export type TransactionsImportRowCreateInput = {
  /** The amount of the row */
  amount: AmountInput;
  /** The date of the row */
  date: Scalars['DateTime']['input'];
  /** The description of the row */
  description: InputMaybe<Scalars['String']['input']>;
  /** The raw value of the row */
  rawValue: InputMaybe<Scalars['JSONObject']['input']>;
  /** The source id of the row */
  sourceId: Scalars['NonEmptyString']['input'];
};

/** Input to order off platform transactions chronologically */
export type TransactionsImportRowOrderInput = {
  /** Ordering direction. */
  direction: OrderDirection;
  /** Field to order by */
  field: TransactionsImportRowOrderInputField;
};

export type TransactionsImportRowOrderInputField =
  | 'DATE';

export type TransactionsImportRowReferenceInput = {
  /** The id of the row */
  id: Scalars['NonEmptyString']['input'];
};

/** The status of a row in a transactions import */
export type TransactionsImportRowStatus =
  /** The row has been ignored */
  | 'IGNORED'
  /** The row has been linked to an existing expense or order */
  | 'LINKED'
  /** The row is on hold */
  | 'ON_HOLD'
  /** The row has not been processed yet */
  | 'PENDING';

export type TransactionsImportRowUpdateInput = {
  /** The amount of the row */
  amount: InputMaybe<AmountInput>;
  /** The date of the row */
  date: InputMaybe<Scalars['DateTime']['input']>;
  /** The description of the row */
  description: InputMaybe<Scalars['String']['input']>;
  /** The expense associated with the row */
  expense: InputMaybe<ExpenseReferenceInput>;
  /** The id of the row */
  id: Scalars['NonEmptyString']['input'];
  /** Optional note for the row */
  note: InputMaybe<Scalars['String']['input']>;
  /** The order associated with the row */
  order: InputMaybe<OrderReferenceInput>;
  /** The source id of the row */
  sourceId: InputMaybe<Scalars['NonEmptyString']['input']>;
  /** To update the status of the row. Will be ignored if the status is not applicable (e.g. trying to ignore a row that is already linked) */
  status: InputMaybe<TransactionsImportRowStatus>;
};

/** Status of the import */
export type TransactionsImportStatus =
  /** The import is connected and ready to sync */
  | 'ACTIVE'
  /** The import is disconnected / archived */
  | 'DISCONNECTED';

/** Type of the import */
export type TransactionsImportType =
  | 'CSV'
  | 'MANUAL'
  | 'PLAID';

/** A two factor authentication method */
export type TwoFactorMethod =
  | 'TOTP'
  | 'WEBAUTHN'
  | 'YUBIKEY_OTP';

/** Defines targets for an update */
export type UpdateAudience =
  /** Will be sent to collective admins and financial contributors */
  | 'ALL'
  /** Will be sent to collective admins */
  | 'COLLECTIVE_ADMINS'
  /** Will be sent to financial contributors */
  | 'FINANCIAL_CONTRIBUTORS'
  /** Will be sent to no one */
  | 'NO_ONE';

/** Input to order updates chronologically */
export type UpdateChronologicalOrderInput = {
  /** Ordering direction. */
  direction: OrderDirection;
  /** Field to chronologically order by. */
  field: UpdateDateTimeField;
};

/** Input type for UpdateType */
export type UpdateCreateInput = {
  account: AccountReferenceInput;
  fromAccount: InputMaybe<AccountReferenceInput>;
  html: Scalars['String']['input'];
  isChangelog: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate: InputMaybe<Scalars['Boolean']['input']>;
  makePublicOn: InputMaybe<Scalars['DateTime']['input']>;
  notificationAudience: InputMaybe<UpdateAudience>;
  title: Scalars['String']['input'];
};

/** All possible DateTime fields for an update */
export type UpdateDateTimeField =
  /** The creation time */
  | 'CREATED_AT'
  /** The creation time */
  | 'PUBLISHED_AT';

export type UpdateReferenceInput = {
  /** The public id identifying the update */
  id: InputMaybe<Scalars['String']['input']>;
};

/** Input type for UpdateType */
export type UpdateUpdateInput = {
  fromAccount: InputMaybe<AccountReferenceInput>;
  html: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isChangelog: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate: InputMaybe<Scalars['Boolean']['input']>;
  makePublicOn: InputMaybe<Scalars['DateTime']['input']>;
  notificationAudience: InputMaybe<UpdateAudience>;
  slug: InputMaybe<Scalars['String']['input']>;
  title: InputMaybe<Scalars['String']['input']>;
};

export type UploadFileInput = {
  /** The file to upload */
  file: Scalars['Upload']['input'];
  /** The kind of file to uploaded */
  kind: UploadedFileKind;
  /** Whether to run OCR on the document. Note that this feature is only available to selected accounts. */
  parseDocument: Scalars['Boolean']['input'];
  /** If `parseDocument` is true, you can use this field to pass options to the OCR parser. */
  parsingOptions: InputMaybe<OcrParsingOptionsInput>;
};

/** The kind of file that was uploaded */
export type UploadedFileKind =
  | 'ACCOUNT_AVATAR'
  | 'ACCOUNT_BANNER'
  | 'ACCOUNT_CUSTOM_EMAIL'
  | 'ACCOUNT_LONG_DESCRIPTION'
  | 'AGREEMENT_ATTACHMENT'
  | 'COMMENT'
  | 'EXPENSE_ATTACHED_FILE'
  | 'EXPENSE_INVOICE'
  | 'EXPENSE_ITEM'
  | 'TIER_LONG_DESCRIPTION'
  | 'TRANSACTIONS_IMPORT'
  | 'UPDATE';

export type UserTwoFactorMethodReferenceInput = {
  id: InputMaybe<Scalars['String']['input']>;
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** Some context about the vendor contact person */
export type VendorContactInput = {
  email: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type VendorCreateInput = {
  /** The profile background image, for the banner and social media sharing */
  backgroundImage: InputMaybe<Scalars['Upload']['input']>;
  /** The profile avatar image */
  image: InputMaybe<Scalars['Upload']['input']>;
  legalName: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<LocationInput>;
  name: Scalars['NonEmptyString']['input'];
  payoutMethod: InputMaybe<PayoutMethodInput>;
  tags: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  vendorInfo: InputMaybe<VendorInfoInput>;
};

export type VendorEditInput = {
  /** The profile background image, for the banner and social media sharing */
  backgroundImage: InputMaybe<Scalars['Upload']['input']>;
  /** The public id identifying the account (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The profile avatar image */
  image: InputMaybe<Scalars['Upload']['input']>;
  legalName: InputMaybe<Scalars['String']['input']>;
  location: InputMaybe<LocationInput>;
  name: InputMaybe<Scalars['NonEmptyString']['input']>;
  payoutMethod: InputMaybe<PayoutMethodInput>;
  /** The slug identifying the account (ie: babel for https://opencollective.com/babel) */
  slug: InputMaybe<Scalars['String']['input']>;
  tags: InputMaybe<Array<InputMaybe<Scalars['NonEmptyString']['input']>>>;
  vendorInfo: InputMaybe<VendorInfoInput>;
};

/** Some context about the vendor */
export type VendorInfoInput = {
  contact: InputMaybe<VendorContactInput>;
  notes: InputMaybe<Scalars['String']['input']>;
  taxFormRequired: InputMaybe<Scalars['Boolean']['input']>;
  taxFormUrl: InputMaybe<Scalars['String']['input']>;
  taxId: InputMaybe<Scalars['String']['input']>;
  taxType: InputMaybe<Scalars['String']['input']>;
};

export type VirtualCardInput = {
  data: InputMaybe<Scalars['JSONObject']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  last4: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  privateData: InputMaybe<Scalars['JSONObject']['input']>;
  provider: InputMaybe<VirtualCardProvider>;
};

export type VirtualCardLimitInterval =
  | 'ALL_TIME'
  | 'DAILY'
  | 'MONTHLY'
  | 'PER_AUTHORIZATION'
  | 'WEEKLY'
  | 'YEARLY';

export type VirtualCardProvider =
  | 'PRIVACY'
  | 'STRIPE';

export type VirtualCardReferenceInput = {
  id: InputMaybe<Scalars['String']['input']>;
};

export type VirtualCardRequestReferenceInput = {
  id: InputMaybe<Scalars['String']['input']>;
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** The status of a virtual card request */
export type VirtualCardRequestStatus =
  | 'APPROVED'
  | 'PENDING'
  | 'REJECTED';

/** The status of a virtual card */
export type VirtualCardStatus =
  | 'ACTIVE'
  | 'CANCELED'
  | 'INACTIVE';

/** Input type for Webhooks */
export type WebhookCreateInput = {
  /** The account to attach the Webhook */
  account: AccountReferenceInput;
  activityType: ActivityType;
  webhookUrl: Scalars['URL']['input'];
};

export type WebhookReferenceInput = {
  /** The public id identifying the webhook (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the webhook (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
};

/** Input type to update a Webhook */
export type WebhookUpdateInput = {
  activityType: ActivityType;
  /** The public id identifying the webhook (ie: dgm9bnk8-0437xqry-ejpvzeol-jdayw5re) */
  id: InputMaybe<Scalars['String']['input']>;
  /** The legacy public id identifying the webhook (ie: 4242) */
  legacyId: InputMaybe<Scalars['Int']['input']>;
  webhookUrl: Scalars['URL']['input'];
};

export type WiseTransferDetails = {
  reference: InputMaybe<Scalars['String']['input']>;
  sourceOfFunds: InputMaybe<Scalars['String']['input']>;
  transferNature: InputMaybe<Scalars['String']['input']>;
  transferPurpose: InputMaybe<Scalars['String']['input']>;
};

export type GetUpdatesQueryVariables = Exact<{
  accountSlug: Scalars['String']['input'];
}>;


export type GetUpdatesQuery = { account: { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | { id: string, name: string | null, slug: string, updates: { nodes: Array<{ id: string, title: string, html: string | null, createdAt: string, publishedAt: string | null, slug: string }> | null } } | null };
