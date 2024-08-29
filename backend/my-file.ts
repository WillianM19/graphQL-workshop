import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Project {
    title: String!
    description: String!
    tecnologies: [String!]!
    link: String!
  }

  type About {
    name: String!
    age: Int!
    description: String!
  }

  type Query {
    hello: String!
    getProjects: [Project!]!
    getAbout: About!
  }

  type Mutation {
    addProject(title: String!, description: String!, tecnologies: [String!]!, link: String!): Project!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    getProjects: () => [
      {
        title: "Desenvolvimento de Aplicativo Mobile",
        description: "Aplicativo mobile para gerenciamento de tarefas.",
        tecnologies: ["React Native", "Firebase", "Redux"],
        link: "#",
      },
      {
        title: "Desenvolvimento de Aplicativo Desktop",
        description: "Aplicativo desktop para gerenciamento de tarefas.",
        tecnologies: ["Electron", "Firebase", "Redux"],
        link: "#",
      },
    ],
    getAbout: () => ({
      name: "Nome do desenvolvedor",
      age: 30,
      description: "Desenvolvedor de software com x anos de experiência.",
    }),
  },
  Mutation: {
    addProject: (_: any, { title, description, tecnologies, link }: any) => {
      const newProject = { title, description, tecnologies, link };
      return newProject;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
