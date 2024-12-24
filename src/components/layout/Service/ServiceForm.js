import '../../../assents/styles/output.css';

import { useState } from "react";

import Input from "../../form/Input";
import SubmitButton from "../../form/SubmitButton";
const ServiceForm = ({handleSubmit, btnText, projectData}) => {

    const [service, setService] = useState({});

    const submit = (e) => {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    const handleChange = (e) => {
        setService({...service, [e.target.name]: e.target.value});
    }

    return(
        <form className='flex flex-col gap-4' onSubmit={submit} >
            <Input type="text" name="name" placeholder="Insira o nome do serviço" text="Nome do Serviço" handleOnchange={handleChange} />

            <Input type="number" name="cost" placeholder="Insira o valor total" text="Custo do Serviço" handleOnchange={handleChange} />

            <Input type="text" name="description" placeholder="Descreva o serviço" text="Descrição do Serviço" handleOnchange={handleChange} />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm;