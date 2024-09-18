import React from "react";
import "./homeScreen.css";
import { NavLink } from "react-router-dom";

import ContactScreen from "../ContactScreen/ContactScreen";
import CategoryCard from "../../components/Categories/CategoryCard";


export default function HomeScreen() {
  return (
    <div className="  " id='top'>

      <div className="acc  text-center  mb-28  p-0" >
        {/* <div>
          <img src="" alt="" className="m-auto "/>
          </div> */}
        {/* <div className="flex  text-xl text-white justify-center align-items  m-auto mb-8 space-y-8 ">
          <h2 className=" text-3xl">Photos</h2>
          <h2 className=" text-3xl">Logos</h2>
          <h2 className=" text-3xl">Animations</h2>
          <h2 className=" text-3xl">Sites vitrines</h2>
          <h2 className=" text-3xl">Maquettes et Prototypes</h2>
          </div> */}
          <h1 className="text-white text-5xl md:text-7xl text-start px-8 ml-4 pt-56">Web Design <br/>et<br/> Photographie </h1>
        {/* <i className="fa-regular fa-circle-down text-white mt-8 opacity-20 text-9xl mt-48 " ></i> */}
      </div>


      <section className="w-full flex flex-wrap   items-center rounded  justify-center items-center mb-28 text-center p-0 ">
          <div className="flex flex-wrap justify-center items-center w-full mb-8 ">
          {/* <img src="assets/img/zoenb.jpg" alt="" className="object-cover md:w-1/4 p-0 rounded shadow shadow-black "/> */}
      <div className="flex-col w-1/2   justify-center items-center space-y-8  ml-2 ">
          <h3 className=" text-6xl text-white text-center ">AstraLux</h3><br />
         <p className="text text-center text-justify  text-white">
        L’allié de votre image visuelle. <br />
         Portée par une passion pour les arts visuels, j'offre des solutions sur mesure pour sublimer votre identité. <br/><br/>De la photographie professionnelle à la création de sites vitrines, en passant par la conception de logos, bannières, animations 2D et overlays pour streamers, nous mettons notre expertise à votre service. 
        <br /> <br/>Avec AstraLux, boostez votre visibilité et affirmez votre présence avec des créations uniques et impactantes.
          </p> <br /><br />
          <button className=" rounded card shadow p-4  m-auto text-center center ">
            <NavLink to="/contact" className=" text-5xl text-white  m-auto text-center">Contact</NavLink>
          </button>
         

        </div>
        </div>
      </section>

       
        <h1 className="text-white text-center text-6xl mt-48  ">Photographie</h1>
      <section className=" md:flex lg:flex-row flex-wrap justify-around  md:w-5/6 m-auto space-x-4  ">
      <NavLink to='/presta' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2  my-8 rounded mx-8 card justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Mariage</h3>
          <img src="assets/img/mariages/femme para 1.jpg" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/presta' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded  mx-8 card justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Animaux</h3>
          <img src="assets/img/titbout1.jpg" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/galerie' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded  mx-8 card justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Solo</h3>
          <img src="assets/img/thomas.jpg" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
        </section>
        <h1 className="text-white text-center text-6xl mt-28 ">Web Design</h1>
        <section className="flex flex-wrap justify-around md:w-5/6 m-auto space-x-4  ">

            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2  my-8 rounded  card justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Logos</h3>
          <img src="assets/img/utile/logoRose.png" alt="" className="object-contain  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded card  justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Maquettes</h3>
          <img src="assets/img/utile/Maquette_vignette.png" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded card  justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Sites</h3>
          <img src="assets/img/utile/site_vignette.png" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
       

      </section>
   

   {/* <ContactScreen/> */}
  
    </div>
  );
}
