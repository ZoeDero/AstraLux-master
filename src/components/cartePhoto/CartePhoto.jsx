import React from 'react';
import '../../App.css';

const CartePhoto = ({src,alt,title,content}) => {


    const handleMouseEnter = () => {
        document.documentElement.classList.add('hovered');
      };
    
      const handleMouseLeave = () => {
        document.documentElement.classList.remove('hovered');
      };


      
    return (
        <div className='my-28'>
        <div className='flex-col items-center text-center  w-4/6 m-auto mt-8 justify-center items-center  rounded shadow shadow-black mt-12 m-2 '
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {/* <div className=' font-bold text-center text-cyan-400 text-4xl drop-shadow1 shadow-black  my-4'> {title} </div> */}
        <img src={src} alt={alt} className='object-cover  min-w-1/4 max-w-1/3 max-h-1/3'/>
        {/* <p className="font-medium text-white my-4"> {content} </p> */}
        {/* Entouré par le role, créer un bouton X qui au click, fais un useEffect, methode UPDATE */}
        </div>
        </div>
    );
}

export default CartePhoto;
