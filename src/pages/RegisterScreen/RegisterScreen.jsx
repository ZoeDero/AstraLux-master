import React, { useState } from "react";
import { useForm } from "react-hook-form";
import doFetch from "../../helpers/fetchHelper";
import '../../App.css';

export default function RegisterScreen() {
  
  const {register, handleSubmit, formState: { errors } } = useForm();
  
  const formInvalid = (errors) => console.log("Errors", errors);

  const [msg, setMsg] = useState("");
  const formSubmit = async (formData) => {

    const {data} = await doFetch("auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log(data)
    setMsg(data?.data?.message)
  }
  
  return (
    <>
    <div className="flex-col space-y-8 mt-28">
      <h1 className="text-5xl font-bold text-white text-center ">Register</h1>
      <form noValidate className="m-auto w-full text-center text-white text-2xl space-y-8 font-bold"
            onSubmit={handleSubmit(formSubmit, formInvalid)}>
        <div className="flex-col space-y-4 mb-3">
          <label htmlFor="pseudo-input" className="form-label">
            Pseudo <br />
             <i className={"text-danger"}>{errors.pseudo ? " *" : " " }</i>
          </label>
          <input id="pseudo-input" type="text" placeholder="pseudo" name="pseudo" className="form-control border-b-2 border-cyan-400 rounded bg-opacity-none bg-none text-center"
                {...register("pseudo", { required: true, minLength: 3 })} />
          <i className={"text-danger d-block"}>{errors.pseudo ? "* at least 3 chars" : " " }</i>
        </div>


        



        <div className="flex-col mb-3">
          <label htmlFor="email-input" className="form-label">
            Email <br />
             <i className={"text-danger"}>{errors.email ? " *" : " " }</i>
          </label>
          <input id="email-input" type="email" placeholder="email" name="mail" className="form-control border-b-2 border-cyan-400 rounded bg-opacity-none bg-none text-center"
                {...register("mail", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
          <i className={"text-danger d-block"}>{errors.email ? "* must be a valid email address" : " " }</i>
        </div>

        <button type="submit" className="btn btn-primary card p-4 hover:shadow hover:shadow-cyan-400 hover:text-cyan-400 rounded">
          Submit
        </button>
      </form>
      <div className="text-primary">{msg}</div>
      </div>
    </>
  );
}
