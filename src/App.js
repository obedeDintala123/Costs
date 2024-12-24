import "./assents/styles/output.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Project from "./components/pages/Project";

const App = () => {

  const Links = {
    facebook: {
      url: "http://www.facebook.com"
    },
    instagram: {
      url: "http://instagram.com"
    },
    linkedin: {
      url: "http://www.linkedin.com"
    }
  };
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer Link={Links} />
    </Router>
  );
};

export default App;
