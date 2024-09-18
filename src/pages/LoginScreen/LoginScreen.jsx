import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";
import { setCookie, deleteCookie } from "../../helpers/cookieHelper";
import doFetch from "../../helpers/fetchHelper";
import './login.css'

function LoginScreen() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [valid, setValid] = useState({ email: false, password: false });
  const validForm = () => {
    const isValid = { email: false, password: false };
    const emailInput = document.getElementById("email-input");
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(emailInput.value)) {
      isValid.email = true;
    }
    const passwordInput = document.getElementById("password-input");
    const passwordPattern = /^(?=.*[A-Z]).{6,}$/;
    if (passwordPattern.test(passwordInput.value)) {
      isValid.password = true;
    }
    setValid(isValid);
    return isValid.email === true && isValid.password === true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    if (!validForm()) {
      return;
    }
    const {data} = await doFetch("auth/login", {
      method: "POST",
      body: JSON.stringify(jsonData),
    });
    if (data?.data?.result) {
      setAuth({ role: +data.data?.role, id: data.data?.id });
      setCookie("blog",data.data?.token, {"max-age":60*60*24});
      navigate("/");
    } else {
      setAuth({ role: 0, id: "0" });
      deleteCookie("blog");

    }
   
  };

  return (
    <>
    <div className=" m-auto text-center   text-white rounded  my-12 mt-28 p-0 space-y-8  " >
      <h1 className="my-5 text-5xl font-bold ">Connexion</h1>
      <form className="w-1/4 m-auto text-white outline-0" onSubmit={handleSubmit} noValidate>
        <div className="mb-3 flex-col justify-center space-y-4 items-center">
          <label htmlFor="email-input" className="form-label text-3xl  ">
            <br />
            Email address
            {/* <i className={"text-danger  rounded" + (valid.email ? " d-none" : "")}></i> */}
          </label>
          <br />
          <input
            type="email"
            name="mail"
            className="form-control rounded border-b-2 border-pink-300  text-center"
            id="email-input"
          />
           <i className={"text-danger" + (valid.email ? " d-none" : "")}> 
           
           </i> 
        </div>
        <div className="mb-3 space-y-4">
          <label htmlFor="password-input " className="form-label text-3xl  "><br />
            Password
            <i className={"text-danger " + (valid.password ? " d-none" : "")}>
              
            </i>
          </label><br />
          <input
            type="password"
            name="password"
            className="form-control rounded border-b-2 border-cyan-400 text-center"
            id="password-input"
          />
          <i className={"text-danger" + (valid.password ? " d-none" : "")}><br/>
            
          </i>
        </div>

        <button type="submit" className="btn hover rounded card p-4 hover:shadow hover:shadow-cyan-400 hover:text-cyan-400 text-3xl font-medium p-2 m-6">
          Let's go !
        </button>
      </form>
      </div>
    </>
  );
}

export default LoginScreen;