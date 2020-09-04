const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Root resolver
const root = {
  message: () => "Hello World",
};

// Express Server and GraphQL Endpoint
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4545, () =>
  console.log("Express GraphQL Server Now Running On localhost:4545/graphql")
);
