import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Informations from "./pages/Informations/Informations";
import ContactScreen from "./pages/ContactScreen/ContactScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import BaseScreen from "./pages/BaseScreen/BaseScreen";
import CartScreen from "./pages/CartScreen/CartScreen";
import ProfilScreen from "./pages/ProfilScreen/ProfilScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen/RegisterScreen";
import GalerieScreen from "./pages/GalerieScreen/GalerieScreen";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import AdminScreen from "../src/pages/AdminScreen/AdminScreen";
import AccountScreen from "../src/pages/AccountScreen/AccountScreen";
import AccountValidateScreen from "../src/pages/AccountValidateScreen/AccountValidateScreen";
import FilteredGalerieScreen from "./pages/filteredGalerie/FilteredGalerieScreen";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseScreen />}>
            <Route index element={<HomeScreen />} />
            <Route path="/panier" element={<CartScreen />} />
            <Route path="/contact" element={<ContactScreen />} />

            <Route path="/galerie" element={<GalerieScreen />} />
            <Route path="/informations" element={<Informations />} />
            

            <Route path="/login" element={<LoginScreen />} />

            <Route path="/register" element={<RegisterScreen />} />

            {auth.role === 4 && (
              <Route path="/admin" element={<AdminScreen />} />
            )}
            {auth.role > 0 && (
              <Route path="/account" element={<AccountScreen />} />
              
            
            )}
            {auth.role === 0 && (
              <Route
                path="/account/validate/:token"
                element={<AccountValidateScreen />}
              />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
