import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: [],
  generates: {
    "graphql.ts": {
      plugins: ["typescript","typescript-apollo-angular"],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        declarationKind: 'interface'
      }
    }
  }
};

export default config;


