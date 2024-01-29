import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Carburant from './pages/carburant/Carburant';
import Categorie from './pages/categorie/Categorie';
import Climatisation from './pages/climatisation/Climatisation';
import Jante from './pages/jante/Jante';
import Marque from './pages/marque/Marque';
import Moteur from './pages/moteur/Moteur';
import Vitesse from './pages/vitesse/Vitesse';
import Modele from './pages/modele/Modele';
import CarSalesDashboard from './pages/dashboard/CarSalesDashboard';
import Annonce from './pages/annonce/Annonce';

const App = () => {

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return element;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={<PrivateRoute element={<CarSalesDashboard  />} />}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<CarSalesDashboard  />} />}
      />
      <Route
        path="/carburant"
        element={<PrivateRoute element={<Carburant  />} />}
      />
      <Route
        path="/categorie"
        element={<PrivateRoute element={<Categorie  />} />}
      />
      <Route
        path="/climatisation"
        element={<PrivateRoute element={<Climatisation  />} />}
      />
      <Route
        path="/jante"
        element={<PrivateRoute element={<Jante  />} />}
      />
      <Route
        path="/marque"
        element={<PrivateRoute element={<Marque  />} />}
      />
      <Route
        path="/moteur"
        element={<PrivateRoute element={<Moteur  />} />}
      />
      <Route
        path="/Vitesse"
        element={<PrivateRoute element={<Vitesse  />} />}
      />
      <Route
        path="/modele"
        element={<PrivateRoute element={<Modele  />} />}
      />
      <Route
        path="/annonce"
        element={<PrivateRoute element={<Annonce  />} />}
      />
    </Routes>
  );
};

export default App;
