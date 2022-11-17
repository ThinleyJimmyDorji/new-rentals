overwrite: true
schema: "https://newrentals.tk/api/v1/graphql"
documents: "src/**/*.ts"
generates:
  graphql.ts:
    plugins:
      - "typescript-apollo-angular"
  ./graphql.schema.json:
    plugins:
      - "introspection"
