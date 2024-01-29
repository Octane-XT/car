import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
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
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // Set isLoggedIn to true if login is successful
    console.log("tafiditra");
    setLoggedIn(true);
    <Navigate to="/"/>
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // Set isLoggedIn to false
    setLoggedIn(false);
  };

  const PrivateRoute = ({element}) => {
    return isLoggedIn ? element : <Navigate to="/login"/>
  };

  return (
    
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/"
          element={<PrivateRoute element={<CarSalesDashboard onLogout={handleLogout} />}
        />}/>
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<CarSalesDashboard onLogout={handleLogout} />}
        />}/>
        <Route
          path="/carburant"
          element={<PrivateRoute element={<Carburant onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/categorie"
          element={<PrivateRoute element={<Categorie onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/climatisation"
          element={<PrivateRoute element={<Climatisation onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/jante"
          element={<PrivateRoute element={<Jante onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/marque"
          element={<PrivateRoute element={<Marque onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/moteur"
          element={<PrivateRoute element={<Moteur onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/Vitesse"
          element={<PrivateRoute element={<Vitesse onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/modele"
          element={<PrivateRoute element={<Modele onLogout={handleLogout}/>}
        />}/>
        <Route
          path="/annonce"
          element={<PrivateRoute element={<Annonce onLogout={handleLogout}/>}
        />}/>
      </Routes>
    
  );
};

export default App;
