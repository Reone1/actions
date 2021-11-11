import { ApolloServer, gql } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

const typeDefs = gql`
  type User {
    name: String
    age: String
  }

  type Query {
    user: [User]
  }
`;

const users = [
  { name: "qweqwe", age: "string" },
  { name: "nextjs", age: "bString" },
];

export const resolvers = {
  Query: {
    user: () => {
      return users;
    },
  },
};
const apolloServer = new ApolloServer({ typeDefs, resolvers });

async function getApolloServerHandler() {
  await apolloServer.start();
  return await apolloServer.createHandler({ path: "/api/graphql" });
}
export const config = {
  api: {
    bodyParser: false,
  },
};

let apolloServerHandler: (
  arg0: NextApiRequest,
  arg1: NextApiResponse<any>
) => any;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!apolloServerHandler) {
    apolloServerHandler = await getApolloServerHandler();
  }
  return apolloServerHandler(req, res);
};
