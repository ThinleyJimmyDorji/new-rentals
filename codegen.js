module.exports = {
  schema: "schema.graphql",
  documents: [],
  overwrite: true,
  generates: {
    "path-here": {
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
