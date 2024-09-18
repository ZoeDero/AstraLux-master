import'./contactScreen.css';

import React, { useRef } from 'react';



export default function ContactScreen() {




      

  return (
    <div className=' my-2 mt-28 text-white py-6 w-4/6 m-auto space-y-8 '>
      
      <h1 className='mb-6 text-center text-5xl  '>Envie d'un shooting ?</h1>

      <form action="submit"  className='flex flex-col w-full text-white items-center space-y-4  '>
        <label htmlFor="nom" className=' text-3xl text-white'>Nom</label>
        <input type="text" className='border-b-2 border-cyan-500 rounded text-center m-6 hover:outline-none outline-none w-5/6 md:w-1/5 mt-0'/>
<br />
        <label htmlFor="prenom" className=' text-3xl text-white'>Prénom</label>
        <input type="text" id="prenom" className='border-b-2 border-cyan-500 rounded text-center  m-6 hover:outline-none outline-none w-5/6 md:w-1/5 mt-0'/>
<br />
        <label htmlFor="genre" className=' text-3xl text-white'>Pour quel genre de shooting ?</label>
        <input type="text" id="genre" placeholder='Ex : Mariage, animalier, sport, portrait ...' className='border-b-2 text-center border-cyan-500 rounded w-5/6 md:w-1/5 m-6 hover:outline-none outline-none mt-0'/>
<br />
        <label htmlFor="email" className='f text-3xl text-white'>E-mail</label>
        <input type="text" className='border-b-2 border-cyan-500 rounded  m-6 hover:outline-none outline-none w-5/6 md:w-1/5 mt-0'/>
<br />
        <label htmlFor="message" className=' text-3xl text-white'>Votre demande</label>
        <textarea name="" placeholder="N'hesitez pas à détailler au maximum votre demande." id="message" cols="30" rows="10" className='border-b-2 border-cyan-500 rounded text-center m-6 hover:outline-none outline-none w-5/6 md:w-1/5 mt-0'></textarea>
<br />
        <button type='submit' className='btn card text-white text-3xl rounded p-4 hover:text-cyan-400 hover:shadow hover:shadow-cyan-400 hover:bg-white '>Envoyer</button>
      </form>
    </div>
  )
}
