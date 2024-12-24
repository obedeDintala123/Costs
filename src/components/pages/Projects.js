import { useLocation } from "react-router-dom";
import Mensagem from "../layout/Mensagem";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../layout/Project/ProjectCard";
import { useState, useEffect } from "react";
import Loader from "../layout/Loader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectMessage, setProjectMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const removeProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then(() => {
        setProjects(projects.filter((p) => p.id !== id));
        setProjectMessage("Projeto eliminado com sucesso!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium">Meus Projetos</h1>
        <LinkButton text="Novo Projeto" to="/new-project" />
      </div>

      {message && <Mensagem type="success" msg={message} />}
      {projectMessage && <Mensagem type="success" msg={projectMessage} />}

      <Container customClass="row">
        {loading ? (
          <Loader />
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              project_name={project.project_name}
              category={project.category || ""}
              project_orcament={project.project_orcament}
              id={project.id}
              key={project.id}
              handleRemove={removeProject}
            />
          ))
        ) : (
          <span>Nenhum projeto foi criado!</span>
        )}
      </Container>
    </div>
  );
};

export default Projects;
