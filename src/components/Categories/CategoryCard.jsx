import React from 'react';
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const CategoryCard = ({title, img}) => {



    return (
        <div className=''>
        
        <div  className="flex-col card shadow shadow-black  m-4/5 mx-4   m-auto  my-8 rounded  bg-white bg-opacity-5    justify-center items-center  text-center p-0 ">
          <h3 className="font-medium text-[3vh] text-white my-4">{title}</h3>
          <img src={img} alt="" className="     "/>
         
        

        </div>



        </div>
    );

    
}

export default CategoryCard;


