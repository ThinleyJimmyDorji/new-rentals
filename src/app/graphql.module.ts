import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, from } from 'apollo-link';
import {environment} from "../environments/environment";

const omitDeep = require('omit-deep-lodash');

//This feature is no currently not available in apollo
//This middleware will remove all the __typename properties from the graphql query response for mutation
const cleanTypenameLink = new ApolloLink((operation, forward) => {
  const keysToOmit = ['__typename'];
  const def = getMainDefinition(operation.query);
  // @ts-ignore
  if (def && def['operation'] === 'mutation') {
    operation.variables = omitDeep(operation.variables, keysToOmit)
  }
  return forward ? forward(operation) : null
});
console.log(environment.graphqlUrl)
debugger
export const createApollo = (httpLink: HttpLink) => ({
  link: from([cleanTypenameLink, httpLink.create({ uri: 'https://newrentals.tk/api/v1'})]),
  cache: new InMemoryCache()
});

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
