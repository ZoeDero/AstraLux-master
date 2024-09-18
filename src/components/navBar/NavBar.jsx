import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { deleteCookie, getCookie } from '../../helpers/cookieHelper';


export default function Navbar  ()  {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {auth} = useContext(AuthContext);
  const [pseudo, setPseudo]= useState(null);
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://blog-api/app_user/" + auth.id, {
      method: "POST",
      headers: {
        Authorization: getCookie("blog"),
      },
      body: JSON.stringify({
        with: ["account"],
      }),
    })
      .then((resp) => {
        return resp.json();
      })

      .then((json) => {
        setPseudo(json);
      });
  }, [auth]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
//     <div>
//     <nav className=" w-full mx-auto fixed top-0 bg-white/[.09] bg-cover text-white backdrop-blur blur- z-50 " >
//       <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex w-full justify-between  h-16 p-4">
//           <div className="w-full  items-center justify-center">
//             <div className="flex mr-2 ">
//            <h1> <NavLink to="/" className="titre  text-white  py-2 rounded-md text-5xl text-white font-medium">AstraLux</NavLink></h1>
//               {auth.role <1 && (
//               <ul className="ml-10 flex w-full justify-end items-center invisible md:visible mr-2  ">

//                 <NavLink to="/login" className="hover:text-cyan-300 text-white  px-3 py-2 text-white rounded-md text-lg font-medium">
//                   <i className="fa-solid fa-right-to-bracket text-white  p-0 " ></i>
//                   </NavLink>
//                 <NavLink to="/register" className="hover:text-cyan-300 text-white   px-3 text-white py-2 rounded-md text-lg font-medium">
//                 <i className="fa-solid fa-user-plus text-white p-0"></i>
//                 </NavLink>
//               </ul>
//               )}
//             </div>
//             <div className="w-full hidden md:block md:flex md:justify-between ">
//               <ul className="ml-1 flex w-full items-baseline ">
                
//                 <NavLink to="/galerie" className="rose text-white  px-3 py-2 rounded-md text-white text-lg font-medium">Galerie</NavLink>
//                 <NavLink to="/contact" className="rose text-white   px-3 py-2 rounded-md text-white text-lg font-medium">Contact</NavLink>
//               </ul>
    

// <div className="flex justify-center  absolute top-5 right-2 space-x-5  ">

// {auth.role > 0 && (
//               <NavLink
//                 to="/account"
//                 className="  "
//               >
                
//                   <div className="text-white font-bold pb-1 text-2xl">{pseudo?.data[0]?.with[0].pseudo}</div>
                  
//               </NavLink>
              
//             )}

// {auth.role === 4 && (
//   <NavLink to="/admin" className="text-amber-500 font-medium text-lg">
//    <i className="fa-solid fa-hammer fa-xl"></i>
//   </NavLink>
// )}

// {auth.role > 0 && (
//   <div
//   className="text-red-500 p-0   font-medium text-lg"
//     onClick={(e) => {
//       setAuth({ role: 0, id: 0 });
//       deleteCookie("blog");
//       window.location.href = "/";
//     }}
//   >
//     <i className="fa-solid fa-right-from-bracket fa-2xl"></i>
//   </div>
// )}
// </div>


//             </div >
//           </div>
//           <div className="  justify-between flex md:hidden  ">
//             <button onClick={handleMenuToggle} className="bg-none inline-flex items-center justify-center  p-2 rounded-md text-gray-400 hover:text-white hover:bg-none focus:outline-none " aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="flex justify-between px-2 pt-2 pb-3 m-auto text-center space-y-1 sm:px-3 ">
//           <div>
//         <NavLink to="/account" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm text-white font-medium">Mon compte</NavLink>
//                 <NavLink to="/galerie" className="text-gray-300 hover:text-white px-3 py-2  text-white rounded-md text-sm font-medium">galerie</NavLink>
//                 <NavLink to="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-white rounded-md text-sm font-medium">Contact</NavLink>
//                 </div>
//                 <div>
//                         <NavLink to="/login" className="text-gray-300 hover:text-white px-3 text-white py-2 rounded-md text-sm font-medium">
//                         <i className="fa-solid fa-right-to-bracket fa-xl"></i>
//                         </NavLink>
//                 <NavLink to="/register"  className="text-gray-300 hover:text-white px-3 py-2  text-white rounded-md text-sm font-medium">
//                 <i className="fa-solid fa-user-plus fa-xl text-white p-0"></i>
//                 </NavLink>
//                 </div>
//         </div>
//   </div>
// </nav>

// </div>

<div>
    <nav className=" w-full mx-auto fixed top-0 bg-white/[.09] bg-cover text-white backdrop-blur blur- z-50 " >
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-between  h-16 p-4">
          <div className="w-full  items-center justify-center">
            <div className="flex mr-2 ">
           <h1> <NavLink to="/" className="titre  text-white  py-2 rounded-md text-5xl text-white font-medium">AstraLux</NavLink></h1>
              {/* {auth.role <1 && (
              <ul className="ml-10 flex w-full justify-end items-center invisible md:visible mr-2  ">

                <NavLink to="/login" className="hover:text-cyan-300 text-white  px-3 py-2 text-white rounded-md text-lg font-medium">
                  <i className="fa-solid fa-right-to-bracket text-white  p-0 " ></i>
                  </NavLink>
                <NavLink to="/register" className="hover:text-cyan-300 text-white   px-3 text-white py-2 rounded-md text-lg font-medium">
                <i className="fa-solid fa-user-plus text-white p-0"></i>
                </NavLink>
              </ul>
              )} */}
            </div>
            <div className="w-full hidden md:block md:flex md:justify-between ">
              <ul className="ml-1 flex w-full items-baseline ">
                
                <NavLink to="/galerie" className="rose text-white  px-3 py-2 rounded-md text-white text-lg font-medium">Galerie</NavLink>
                <NavLink to="/contact" className="rose text-white   px-3 py-2 rounded-md text-white text-lg font-medium">Contact</NavLink>
              </ul>
    

<div className="flex justify-center  absolute top-5 right-2 space-x-5  ">

{/* {auth.role > 0 && (
              <NavLink
                to="/account"
                className="  "
              >
                
                  <div className="text-white font-bold pb-1 text-2xl">{pseudo?.data[0]?.with[0].pseudo}</div>
                  
              </NavLink>
              
            )} */}


  {/* <NavLink to="/admin" className="text-amber-500 font-medium text-lg">
   <i className="fa-solid fa-hammer fa-xl"></i>
  </NavLink> */}



  {/* <div
  className="text-red-500 p-0   font-medium text-lg"

  >
    <i className="fa-solid fa-right-from-bracket fa-2xl"></i>
  </div> */}

</div>


            </div >
          </div>
          <div className="  justify-between flex md:hidden  ">
            <button onClick={handleMenuToggle} className="bg-none inline-flex items-center justify-center  p-2 rounded-md text-gray-400 hover:text-white hover:bg-none focus:outline-none " aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} >
        <div className="flex justify-between px-2 pt-2 pb-3 m-auto text-center space-y-1 sm:px-3 ">
          <div>
        {/* <NavLink to="/account" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm text-white font-medium">Mon compte</NavLink> */}
                <NavLink to="/galerie" className="text-gray-300 hover:text-white px-3 py-2  text-white rounded-md text-sm font-medium">galerie</NavLink>
                <NavLink to="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-white rounded-md text-sm font-medium">Contact</NavLink>
                </div>
                {/* <div>
                        <NavLink to="/login" className="text-gray-300 hover:text-white px-3 text-white py-2 rounded-md text-sm font-medium">
                        <i className="fa-solid fa-right-to-bracket fa-xl"></i>
                        </NavLink>
                <NavLink to="/register"  className="text-gray-300 hover:text-white px-3 py-2  text-white rounded-md text-sm font-medium">
                <i className="fa-solid fa-user-plus fa-xl text-white p-0"></i>
                </NavLink>
                </div> */}
        </div>
  </div>
</nav>

</div>
  )
}
