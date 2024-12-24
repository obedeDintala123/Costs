import { useEffect, useState } from "react";

import Input from "../../form/Input";
import Select from "../../form/Select";
import SubmitButton from "../../form/SubmitButton";

const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCateries] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        setCateries(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const submit = e => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleCategory = e => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    });
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <Input
        type="text"
        name="project_name"
        id="project_name"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        handleOnchange={handleChange}
        value={project.project_name ? project.project_name : ""}
      />

      <Input
        type="number"
        name="project_orcament"
        id="project_orcament"
        placeholder="Insira o orçamento total"
        text="Orçamento do projeto"
        handleOnchange={handleChange}
        value={project.project_orcament ? project.project_orcament : ""}
      />

      <Select
        name="category_project"
        id="category_project"
        text="Selecione a Categoria"
        options={categories}
        handleOnchange={handleCategory}
        value={project.category ? project.category.id : ""}
      />

      <SubmitButton text={btnText} />

    </form>
  );
};

export default ProjectForm;
