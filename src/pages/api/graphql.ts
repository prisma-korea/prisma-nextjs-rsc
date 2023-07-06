import {ApolloServer} from '@apollo/server';
import {startServerAndCreateNextHandler} from '@as-integrations/next';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {importSchema} from 'graphql-import';
import {applyMiddleware} from 'graphql-middleware';

import resolvers from '../../resolvers';

const typeDefs = importSchema('schemas/schema.graphql');

export const schema = makeExecutableSchema({typeDefs, resolvers});

const apolloServer = new ApolloServer({
  schema: applyMiddleware(schema),
  introspection: process.env.NODE_ENV !== 'production',
});

export default startServerAndCreateNextHandler(apolloServer);
