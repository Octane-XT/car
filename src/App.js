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
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    // Implement your login logic here
    // Set isLoggedIn to true if login is successful
    console.log("tafiditra");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // Set isLoggedIn to false
    setLoggedIn(false);
  };

  return (
    
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/Home"
          element={isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <CarSalesDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <CarSalesDashboard onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/carburant"
          element={isLoggedIn ? <Carburant /> : <Navigate to="/login" />}
        />
        <Route
          path="/categorie"
          element={isLoggedIn ? <Categorie /> : <Navigate to="/login" />}
        />
        <Route
          path="/climatisation"
          element={isLoggedIn ? <Climatisation /> : <Navigate to="/login" />}
        />
        <Route
          path="/jante"
          element={isLoggedIn ? <Jante /> : <Navigate to="/login" />}
        />
        <Route
          path="/marque"
          element={isLoggedIn ? <Marque /> : <Navigate to="/login" />}
        />
        <Route
          path="/moteur"
          element={isLoggedIn ? <Moteur /> : <Navigate to="/login" />}
        />
        <Route
          path="/vitesse"
          element={isLoggedIn ? <Vitesse /> : <Navigate to="/login" />}
        />
        <Route
          path="/modele"
          element={isLoggedIn ? <Modele /> : <Navigate to="/login" />}
        />
        <Route
          path="/annonce"
          element={isLoggedIn ? <Annonce /> : <Navigate to="/login" />}
        />
      </Routes>
    
  );
};

export default App;
