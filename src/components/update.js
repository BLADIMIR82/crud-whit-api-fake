import React, { useState, useEffect } from 'react';
import { Link as LinkRouter } from "react-router-dom";
import axios from 'axios';
const URL = "https://62fc3374e4bcaf53519334ea.mockapi.io/cruddata"

export default function UpDate (){
  
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState("");

    useEffect(() => {
        setID(localStorage.getItem('ID', id))
        setFirstName(localStorage.getItem('Nombre', firstName));
        setLastName(localStorage.getItem('Apellido', lastName));
        setAge(localStorage.getItem('Edad', age));
    }, []);

    const updateAPIData = () => {
        axios.put(`${URL}/${id}`, {
            firstName,
            lastName,
            age
        })
    }

    return (
         <div className="mb-3 row container-form">
         <h1>Modifica  Tu Usuario</h1>
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
           />
         </div>
         <div className="mb-3">
           <label className="form-label" >
             Edad
           </label >
           <input
             type="text"
             placeholder="Edad"
             className="form-control"
             onChange={(e) => setAge(e.target.value)}
           />
         </div>
         <LinkRouter to="/read">
         <button type="submit" className="btn btn-primary" onClick={updateAPIData} >
           Modificar
         </button>
         </LinkRouter>
       </form>
       </div>
        )
} 