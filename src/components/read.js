import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const URL = "https://62fc3374e4bcaf53519334ea.mockapi.io/cruddata";
const MySwal = withReactContent(Swal);

export default function Read({firstName}) {
  //hooks//
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      setAPIData(response.data);
    });
  }, [APIData]);
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
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: `Se ha eliminado  el usuario`,
      showConfirmButton: false,
      timer: 1500,
    });
    getData();
  };

  return (
    <div className="container-table">
      <h1>Listado De Usuarios</h1>
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => setData(data)}
                  >
                    Update
                  </button>
                </LinkRouter>
              </td>
              <td>
                <LinkRouter to="/*">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </button>
                </LinkRouter>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
