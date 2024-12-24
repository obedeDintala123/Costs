import { Link } from "react-router-dom";
const LinkButton = ({ to, text }) => {
  return (
    <Link to={to} className="bg-[#ffbb33] w-36 text-center px-5 py-3 rounded text-[#263238] font-semibold">
      {text}
    </Link>
  );
};

export default LinkButton;
