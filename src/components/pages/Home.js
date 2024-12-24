import manager from "../../assents/img/Manage money-cuate.png";
import LinkButton from "../layout/LinkButton";
const Home = () => {
  return (
    <main className="flex items-center gap-36 m-auto">
      <section className="flex flex-col gap-10 w-5/6">
        <h1 className="text-5xl text-[#263238]">
          Bem-vindo ao <span className="text-[#ffbb33]">Costs</span>
        </h1>
        <p className="text-4xl leading-[1.5] text-[#263238]">Comece a gerenciar os seus projetos agora mesmo! </p>
        <LinkButton to="/new-project" text="Criar Projeto" />
      </section>

      <section className="flex justify-center items-center w-full">
        <img src={manager} alt="manager" className="w-2/3"/>
      </section>
    </main>
  );
};

export default Home;
