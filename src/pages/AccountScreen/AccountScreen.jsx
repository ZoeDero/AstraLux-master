import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { deleteCookie, getCookie } from '../../helpers/cookieHelper';
import { NavLink } from 'react-router-dom';

const AccountScreen = () => {
    const [pseudo, setPseudo]= useState(null);
    const [mail, setMail]= useState(null);
    
    const { auth, setAuth } = useContext(AuthContext);
  
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
          setMail(json);
        });
    }, [auth]);

   
    return (
        <div className="flex-col justify-center mt-28 space-x-5 texte white min-h-84vh mr-5">
<h1>{pseudo?.data[0]?.with[0].pseudo}</h1>
<h2>Infos persos</h2>
<p>Prénom : {pseudo?.data[0]?.with[0].firstName}</p>
<p>Nom : {pseudo?.data[0]?.with[0].lastName}</p>
<p></p>
        </div>
    );
};

export default AccountScreen;
