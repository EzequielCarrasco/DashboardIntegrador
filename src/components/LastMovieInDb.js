import React, { useState, useEffect } from "react";
/*import imagenFondo from '../assets/images/mandalorian.jpg';*/

function LastMovieInDb(){
    
const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/productosApi/lastProduct")
            .then((response) => {
                return response.json();
            })
            .then((product) => {
                setLastProduct(product.data);
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Last Product in Data Base
                    </h5>
                </div>
                {lastProduct.length === 0 && (
                    <div className="card-body backgroundContainer">Loading...</div>
                )}
                {lastProduct.map((products, i) => {
                    return (
                        <div key={i} className="card-body">
                            <h6 className="m-0 font-weight-bold text-gray-800">
                                {products.nombre_producto}
                            </h6>
                            <div className="text-center">
                                <img
                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                    style={{ width: 40 + "rem" }}
                                    src={
                                        "http://localhost:3030/images/" +
                                        products.imagen_producto
                                    }
                                    alt={products.nombre_producto}
                                />
                            </div>
                            <p>{products.descripcion_producto}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
    
export default LastMovieInDb; 
    
    
    
    
    
    
    
    
    /* return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;*/
