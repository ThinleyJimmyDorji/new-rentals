import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {HttpLink} from "apollo-angular/http";
import {ApolloLink, InMemoryCache} from "@apollo/client/core";

const omitDeep = require('omit-deep-lodash');

export const createApollo = (httpLink: HttpLink) => ({
  link: ApolloLink.from([httpLink.create({ uri: 'https://newrentals.tk/api/v1'})]),
  cache: new InMemoryCache()
});

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
