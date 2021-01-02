import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import CategoryResolver from "./graphql/category/CategoryResolver";
import "./utils/connetion";

(async () => {
  const schema = await buildSchema({
    resolvers: [CategoryResolver],
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4444 }, () => {
    console.log("Apollo Server Listen at port 4444");
  });
})();
