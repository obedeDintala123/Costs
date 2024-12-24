import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = ({Link}) => {
  return (
    <footer className="bg-[#263238] text-white p-4 font-normal flex flex-col gap-5 items-center">
      <div className="flex text-2xl gap-10">
       <a href={Link.facebook.url}>
       <FaFacebook className="transition delay-75 hover:text-[#ffbb33] cursor-pointer" />
       </a>
       <a href={Link.instagram.url}>
       <FaInstagram className="transition delay-75 hover:text-[#ffbb33] cursor-pointer" />
       </a>
       
       <a href={Link.linkedin.url}>
       <FaLinkedin className="transition delay-75 hover:text-[#ffbb33] cursor-pointer" />
       </a>
        
      </div>
      <p>
        <span className="font-medium text-[#ffbb33]">Costs</span> &copy; 2024
      </p>
    </footer>
  );
};

export default Footer;
