import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";
import Projetos from "./components/pages/Projetos";

import Container from "./components/Layout/Container";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass='min_height'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projetos" element={<Projetos />} />
          <Route exact path="/empresa" element={<Empresa />} />
          <Route exact path="/contato" element={<Contato />} />
          <Route exact path="/novoprojeto" element={<NovoProjeto />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
