# GraphQL requirements

Install 
- Apollo Client
- graphql-codegen
- Mocking capabilities

## Apollo Client
https://www.apollographql.com/docs/react/get-started

Install Deps
```
npm install @apollo/client graphql
```

Initialize in index.ts

```
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
```

## Code Gen
https://the-guild.dev/graphql/codegen/docs/getting-started

Install Deps
```
npm install graphql
npm install -D typescript
npm install -D @graphql-codegen/cli
npm install -D @graphql-codegen/client-preset
```

then run
```
npx graphql-code-generator init
```

and run 
```
npm run codegen
```

Generate workflows
- define your queries
- run the code gen
- use the generated caller functions

## Mock graphql Server
https://techblog.assignar.com/dos-and-donts-of-testing-apollo/

```
npm install @graphql-codegen/introspection
npm i @graphql-tools/mock
npm install msw  --legacy-peer-deps
```
This doesnt work because of webpack. No fix for now.

Alternatively, this might be a good solution
https://blog.bitsrc.io/how-to-mock-your-graphql-api-f53a6a6e676f
But this seems to require the use of an actual background server. If that's the case, a mocked go server might make more sense.
