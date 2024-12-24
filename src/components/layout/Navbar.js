import Coin from "../../assents/img/dollar.png";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-10 text-wrap items-center bg-[#263238]">
      <div>
        <img src={Coin} alt="" className="w-14"/>
      </div>
      <div className="flex gap-10">
        <Link
          to="/"
          className="text-white hover:text-[#ffbb33] font-normal transition delay-75"
        >
          Home
        </Link>

        <Link
          to="/projects"
          className="text-white hover:text-[#ffbb33] font-normal transition delay-75"
        >
          Projetos
        </Link>

        <Link
          to="/company"
          className="text-white hover:text-[#ffbb33] font-normal transition delay-75"
        >
          Empresa
        </Link>

        <Link
          to="/contact"
          className="text-white hover:text-[#ffbb33] font-normal transition delay-75"
        >
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
