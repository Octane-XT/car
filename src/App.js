import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      // If token is null, navigate to the login page
      navigate('/login');
      return null; // Render nothing while navigating
    }

    // Render the protected route if the token is present
    return element;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={<PrivateRoute element={<CarSalesDashboard onLogout={handleLogout} />} />}
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<CarSalesDashboard onLogout={handleLogout} />} />}
      />
      <Route
        path="/carburant"
        element={<PrivateRoute element={<Carburant onLogout={handleLogout} />} />}
      />
      <Route
        path="/categorie"
        element={<PrivateRoute element={<Categorie onLogout={handleLogout} />} />}
      />
      <Route
        path="/climatisation"
        element={<PrivateRoute element={<Climatisation onLogout={handleLogout} />} />}
      />
      <Route
        path="/jante"
        element={<PrivateRoute element={<Jante onLogout={handleLogout} />} />}
      />
      <Route
        path="/marque"
        element={<PrivateRoute element={<Marque onLogout={handleLogout} />} />}
      />
      <Route
        path="/moteur"
        element={<PrivateRoute element={<Moteur onLogout={handleLogout} />} />}
      />
      <Route
        path="/Vitesse"
        element={<PrivateRoute element={<Vitesse onLogout={handleLogout} />} />}
      />
      <Route
        path="/modele"
        element={<PrivateRoute element={<Modele onLogout={handleLogout} />} />}
      />
      <Route
        path="/annonce"
        element={<PrivateRoute element={<Annonce onLogout={handleLogout} />} />}
      />
    </Routes>
  );
};

export default App;
