import type {Resolvers} from '../../generated/graphql';

export default <Resolvers>{
  Query: {
    hello: () => 'Hello world!',
  },
};
