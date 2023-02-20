import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre_producto}</td>
                    <td>{props.descripcion_producto}</td>
                    <td>{props.unidad_token_precio_actual}</td>
                </tr>
            )
    }



export default ChartRow;


