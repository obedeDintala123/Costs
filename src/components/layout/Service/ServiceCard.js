import "../../../assents/styles/output.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

const ServiceCard = ({name, cost, description, id, handleServiceRemove, handleServiceEdite}) => {

    const handleRemove = (e) => {
        e.preventDefault();
        handleServiceRemove(id, cost);
    }

    return (
        <div key={id} className="flex flex-col gap-4 border p-3 w-72">
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="font-semibold">Custo Total: <span>{cost} Kz</span></p>
            <p className="font-semibold">Descrição: <span>{description}</span></p>

            <div className="flex justify-between">
                <button className="bg-[#FFBB33] w-28 flex items-center justify-center gap-2 p-1 rounded"><BsPencil /> Editar</button>
                <button className="flex items-center justify-center gap-2" onClick={handleRemove}><BsFillTrashFill /> Excluir</button>
            </div>
        </div>
    )
}

export default ServiceCard;