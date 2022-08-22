import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";

const URL = "https://62fc3374e4bcaf53519334ea.mockapi.io/cruddata";

export default function Read() {
  //hooks//
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      setAPIData(response.data);
    });
  }, []);
  ///functions//
  const setData = (data) => {
    // console.log(data)
    let { id, firstName, lastName, age } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Nombre", firstName);
    localStorage.setItem("Apellido", lastName);
    localStorage.setItem("Edad", age);
  };
  const getData = () => {
    axios.get(`${URL}`).then((getData) => {
      setAPIData(getData.data);
    });
  };
  const onDelete = (id) => {
    axios.delete(`${URL}/${id}`);
    getData();
  };

  return (
    <div className="container-table">
     <h1>Listado de Usuarios</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">Age</th>
            <th scope="col">UpDate</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {APIData?.map((data, index) => (
          <tbody>
            <tr>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.age}</td>
              <td>
            <LinkRouter to="/update">
              <button type="submit"  className="btn btn-primary"  onClick={() => setData(data)}>Update</button>
            </LinkRouter>
              </td>
            <td>
            <LinkRouter to="/*">
            <button type="submit" className="btn btn-primary" onClick={() => onDelete(data.id)}>Delete</button>
            </LinkRouter>
            </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
