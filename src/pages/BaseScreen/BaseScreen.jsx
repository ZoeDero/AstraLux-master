import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./baseScreen.css";
import Navbar from "../../components/navBar/NavBar";

export default function BaseScreen() {
  return (
    <>
    
      <header  >
        <Navbar />
      </header>
      <main className="mt-16">
        <Outlet  />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
