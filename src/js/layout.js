import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./component/navbar.jsx";
import { Home } from "./component/home.jsx";
import { Footer, footer } from "./component/footer.jsx";
import { VehiculoInfo } from "./component/vehiculoInfo.jsx";
import { PlanetaInfo } from "./component/planetaInfo.jsx";
import { PersonajeInfo } from "./component/personajeInfo.jsx";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="bg">
      <head>
        {/* Agrega el enlace al kit de Font Awesome aquí */}
        <script
          src="https://kit.fontawesome.com/0d11f211e3.js"
          crossorigin="anonymous"
        ></script>
        {/* Otros elementos head pueden ir aquí */}
      </head>
      <BrowserRouter basename={basename}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehiculo/:id" element={<VehiculoInfo />} />
          <Route path="/planets/:id" element={<PlanetaInfo />} />
          <Route path="/people/:id" element={<PersonajeInfo />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
