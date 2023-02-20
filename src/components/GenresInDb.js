import React, { useState, useEffect } from "react";
import Grinding from "./Grinding";

function GenresInDb() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/productosApi/categorias")
      .then((response) => {
        return response.json();
      })
      .then((categorias) => {
        setCategorias(categorias.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function background() {
    let container = document.querySelector(".backgroundContainer");
    container.classList.toggle("bg-primary");
  }

  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6
              className="m-0 font-weight-bold text-gray-800"
              onMouseOver={() => {
                background();
              }}
            >
              Diferentes Categorías
            </h6>
          </div>
          {categorias.length === 0 && (
            <div className="card-body backgroundContainer">Loading...</div>
            )}
            {console.log(categorias)}
          <div className="card-body backgroundContainer">
            {
              <div className="row">
                {categorias.map((categoria, index) => {
                  return <Grinding {...categoria} key={index} />;
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GenresInDb;
