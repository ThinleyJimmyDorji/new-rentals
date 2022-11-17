module.exports = {
  schema: "schema.graphql",
  documents: [],
  overwrite: true,
  generates: {
    "graphql.ts": {
      plugins: ["typescript"],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        declarationKind: "interface"
      }
    }
  }
};
