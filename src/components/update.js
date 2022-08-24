import React, { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const URL = "https://62fc3374e4bcaf53519334ea.mockapi.io/cruddata";
const MySwal = withReactContent(Swal);

export default function UpDate() {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("Nombre"));
    setLastName(localStorage.getItem("Apellido"));
    setAge(localStorage.getItem("Edad"));
  }, []);

  const updateAPIData = () => {
    axios.put(`${URL}/${id}`, {
      firstName,
      lastName,
      age,
    });
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: `Se ha modificado el usuario "${firstName} ${lastName}"`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="mb-3 row container-form-update">
      <h1>Modifica Tu Usuario</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input
            type="text"
             placeholder="Apellido"
            value={lastName}
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input
            type="number"
             placeholder="Edad"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <LinkRouter to="/read">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={updateAPIData}
          >
            Modificar
          </button>
        </LinkRouter>
      </form>
    </div>
  );
}
