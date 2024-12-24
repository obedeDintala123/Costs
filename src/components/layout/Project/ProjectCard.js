import { Link } from "react-router-dom";
import "../../../assents/styles/output.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
const ProjectCard = ({
  id,
  project_name,
  project_orcament,
  category,
  handleRemove
}) => {
  const remove = () => {
    handleRemove(id);
  };

  return (
    <div className="flex flex-col p-4 gap-5 border rounded w-64" key={id}>
      <h3 className="text-lg w-full border-b-2">{project_name}</h3>
      <span>Orçamento: {project_orcament} Kz</span>
      {category.name === "Desenvolvimento" ? (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          {category?.name || "N/A"}
        </div>
      ) : category.name === "Design" ? (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          {category?.name || "N/A"}
        </div>
      ) : category.name === "Planejamento" ? (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          {category?.name || "N/A"}
        </div>
      ) : category.name === "Infra-estrutura" ? (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          {category?.name || "N/A"}
        </div>
      ) : null}

      <div className="flex justify-between">
        <Link
          className="flex items-center gap-2 bg-[#ffbb33] py-1 px-3 rounded"
          to={`/project/${id}`}
        >
          <BsPencil /> Editar
        </Link>
        <button
          className="font-semibold flex items-center gap-2"
          onClick={remove}
        >
          {" "}
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
