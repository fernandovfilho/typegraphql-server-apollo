import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import "./utils/connetion";

(async () => {
  const schema = await buildSchema({
    resolvers: [],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4444 }, () => {
    console.log("Apollo Server Listen at port 4444");
  });
})();
