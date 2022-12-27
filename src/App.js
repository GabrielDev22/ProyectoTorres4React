import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {HeaderComponent} from "./components/header/HeaderComponent"
import {SobreNosotrosPage} from "./pages/sobreNosotros/sobreNosotrosPage"
import {ServicioPage} from "./pages/servicios/servicioPage"
import {ProyectoPage} from "./pages/proyectos/ProyectoPage"
import {NuestrosClientesPage} from "./pages/nuestrosClientes/NuestrosClientesPage"
import {PreguntaFrecuentePage} from "./pages/preguntasFrecuentes/PreguntaFrecuentesPage"

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path='/' element={<HeaderComponent />}></Route>
          </Routes>
      </Router>
      <SobreNosotrosPage></SobreNosotrosPage>
      <ServicioPage></ServicioPage>
      <ProyectoPage></ProyectoPage>
      <NuestrosClientesPage></NuestrosClientesPage>
      <PreguntaFrecuentePage></PreguntaFrecuentePage>
    </div>
  );
}

export default App;
