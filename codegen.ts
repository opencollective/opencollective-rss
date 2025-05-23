import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.opencollective.com/graphql',
  documents: ['src/services/*.ts'],
  generates: {
    './src/types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        skipTypename: true,
        dedupeFragments: true,
        onlyOperationTypes: true,
        avoidOptionals: true,
        enumsAsTypes: true,
        scalars: {
          DateTime: 'string',
          JSON: 'Record<string, any>',
          JSONObject: 'Record<string, any>',
        },
      },
    },
  },
};

export default config;
