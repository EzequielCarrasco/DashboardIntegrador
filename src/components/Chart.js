import React, { useState, useEffect } from "react";
import ChartRow from './ChartRow';


function Chart (){
    const [nft, setNft] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3030/productosApi/primerosNft")
          .then((response) => {
            return response.json();
          })
          .then((nfts) => {
            setNft(nfts.data);
          })
          .catch((error) => console.log(error));
      }, []);



    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre Producto</th>
                                <th>Descripcion</th>
                                <th>Cantidad Token</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            nft.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;