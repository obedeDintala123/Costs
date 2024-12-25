import "../../assents/styles/output.css";

import {parse, v4 as uuidv4} from 'uuid';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "../layout/Loader";
import Container from "../layout/Container";

import ProjectForm from "../layout/Project/ProjectForm";
import ServiceForm from "../layout/Service/ServiceForm";
import ServiceCard from "../layout/Service/ServiceCard";

import Mensagem from "../layout/Mensagem";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState(false);
  const [type, setType] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then((response) => response.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.error(err));
    }, 300);
  }, [id]);

  const createService = () => {

    setMessage('');

    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cors) + parseFloat(lastServiceCost);

    if(newCost > parseFloat(project.project_orcament)){
      setMessage("O orçamento não pode ser ajustado pois ultrapassa o limite do projeto.")
      setType("error");
      project.services.pop();
      return false;
    }

    project.cors = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(project)
    })
    .then(response => response.json())
    .then(data => {
      setShowServiceForm(false);
      setMessage("Serviço criado com sucesso!");
      setType("success");
    })
    .catch(err => console.error(err))
  }

  const removeService = (id, cost) => {
    const servicesUpdated = project.services.filter((service) => service.id !== id)

    const projectUpdated = project;

     projectUpdated.services = servicesUpdated

    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(projectUpdated)
    })
   .then(response => response.json())
   .then(data => {
    setProject(projectUpdated)
    setServices(servicesUpdated)
    setMessage("Serviço removido com sucesso!");
    setType("success");
   })
   .catch(err => console.error(err));
  }

  const togleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const togleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const editPost = (project) => {
    setMessage("");

    if (project.project_orcament <= project.cors) {
      setShowProjectForm(!showProjectForm);
      setMessage("O orçamento não deve ser menor que o custo do projeto");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto editado com sucesso!");
        setType("success");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {project ? (
        <Container>
          {message && <Mensagem type={type} msg={message} />}
          <div className="flex justify-between p-4 gap-4 border-b-2 relative mb-16">
            <div className="flex flex-col gap-5 w-full">
              <h1 className="text-2xl font-bold w-full">
                {project.project_name}
              </h1>

              {!showProjectForm ? (
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-1">
                    <span className="font-semibold">Categoria:</span>
                    {project.category ? project.category.name : "Indisponível"}
                  </p>

                  <p className="flex items-center gap-1">
                    <span className="font-semibold">Total de orçamento:</span>
                    {project.project_orcament
                      ? project.project_orcament
                      : "Indisponível"}
                    Kz
                  </p>

                  <p className="flex gap-1">
                    <span className="font-semibold">Total utilizado:</span>
                    {project.cors}Kz
                  </p>
                </div>
              ) : (
                <ProjectForm
                  handleSubmit={editPost}
                  btnText="Concluir Edição"
                  projectData={project}
                />
              )}
            </div>

            <div className="h-0 absolute right-3">
              <button
                onClick={togleProjectForm}
                className="bg-[#ffbb33] w-36 p-1 rounded "
              >
                {!showProjectForm ? "Editar" : "Fechar"}
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col border-b-2 gap-4 mb-8">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Adicione um serviço:</h1>
            <button
              onClick={togleServiceForm}
              className="bg-[#ffbb33] w-40 p-1 rounded "
            >
              {!showServiceForm ? "Adicionar Serviço" : "Fechar"}
            </button>
            </div>
            <div>{showServiceForm && (<ServiceForm handleSubmit={createService} btnText="Adicionar serviço" projectData={project}/>)}</div>
          </div>
          <h2 className="text-2xl font-bold mb-5">Serviços</h2>
            <Container customClass="noPadding_row">
        {services.length > 0 ? services.map(service => (
        
           <ServiceCard
            key={service.id}
            name={service.name}
            cost={service.cost}
            description={service.description}
            handleServiceRemove={removeService}
            id={service.id}
          />

        )) : (<p>Sem serviços cadastrados</p>)}
            </Container>
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Project;
