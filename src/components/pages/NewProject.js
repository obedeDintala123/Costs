import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ProjectForm from "../layout/Project/ProjectForm";
import Loader from "../layout/Loader";
function NewProject() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createPost = (project) => {
    project.cors = 0;
    project.services = [];

    setLoading(true);
    
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    })
    
      .then((response) => response.json())
      .then((data) => {
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso" }
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="font-semibold w-1/4 p-4 flex flex-col gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-2xl text-center">Criar Projeto</h1>
      <p className="text-sm font-normal">
        Crie o seu projeto para depois adicionar serviços
      </p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
      {loading && (<Loader />) }
    </div>

    
  );
}

export default NewProject;
