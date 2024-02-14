import React from 'react';
import './App.css';
import { Switch, Route, HashRouter } from "react-router-dom";
import NotFound from './components/NotFound';
import NavegadorInteriores from './components/NavegadorInteriores/NavegadorInteriores';


function App() {
  return (
    <div className="App">
      <h1>Datos de posición recibidos por QR</h1>
      <HashRouter basename='/navegador-interiores'>
        <Switch>
          {/* Rutas cargadas normal (no lazy) */}
          <Route path='/navigator/:id/:place/:floor' element={<React.Suspense fallback={<p>Cargando...</p>}> <NavegadorInteriores></NavegadorInteriores> </React.Suspense>}></Route>

          {/* Paginas no encontradas */}
          <Route path="*" element={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
        </Switch>

      </HashRouter>
    </div>
  );
}

export default App;
