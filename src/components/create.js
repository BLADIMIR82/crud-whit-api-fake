import React, { useState } from "react";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const URL = "https://62fc3374e4bcaf53519334ea.mockapi.io/cruddata";
const MySwal = withReactContent(Swal)

export default function Create() {
  //Hooks//
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  ////  functions ///
  const postData = () => {
    axios.post(`${URL}`, {
      firstName,
      lastName,
      age,
    });
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: `Se ha creado el usuario"${firstName}"`,
      showConfirmButton: false,
      timer: 1500,
    });
    // console.log(firstName);
    // console.log(lastName);
    // console.log(age);
  };

  return (
    <>
     <div className="mb-3 row container-form">
        <h1>Crea Tu Usuario</h1>
      <form >
        <div className="mb-3">
          <label
            className="form-label"
            >
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
          >
            Apellido
          </label>
          <input
            type="text"
            placeholder="Apellido"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" >
            Edad
          </label >
          <input
            type="number"
            placeholder="Edad"
            className="form-control"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <LinkRouter to="/read">
        <button type="submit" className="btn btn-primary" onClick={postData} >
          Crear
        </button>
        </LinkRouter>
      </form>
      </div>
    </>
  );
}
