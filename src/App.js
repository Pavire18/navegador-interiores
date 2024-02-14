import React from 'react';
import './App.css';
import {  Route, HashRouter, Routes} from "react-router-dom";
import NotFound from './components/NotFound';
import NavegadorInteriores from './components/NavegadorInteriores/NavegadorInteriores';


function App() {
  return (
    <div className="App">
      <h1>Datos de posición recibidos por QR</h1>
      <HashRouter basename='/navegador-interiores'>
        <Routes>
          {/* Rutas cargadas normal (no lazy) */}
          <Route path=':id/:place/:floor' component={<React.Suspense fallback={<p>Cargando...</p>}> <NavegadorInteriores></NavegadorInteriores> </React.Suspense>}></Route>

          {/* Paginas no encontradas */}
          <Route path="*" component={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
