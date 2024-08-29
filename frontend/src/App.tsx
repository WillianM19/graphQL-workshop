import "./App.css";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { useQuery, gql } from "@apollo/client";

// Definindo as queries GraphQL
const GET_ABOUT = gql`
  query GetAbout {
    getAbout {
      name
      age
      description
    }
  }
`;

const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      title
      description
      tecnologies
      link
    }
  }
`;

function App() {
  const { loading: loadingAbout, error: errorAbout, data: aboutData } = useQuery(GET_ABOUT);
  const { loading: loadingProjects, error: errorProjects, data: projectsData } = useQuery(GET_PROJECTS);

  if (loadingAbout || loadingProjects) return <p>Loading...</p>;
  if (errorAbout || errorProjects) return <p>Error :(</p>;

  return (
    <main>
      <section>
        <h2>Sobre mim</h2>
        <About {...aboutData.getAbout} />
      </section>

      <section>
        <h2>Projetos</h2>
        {projectsData.getProjects.map((project: any, index: number) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </main>
  );
}

export default App;
