import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';


function ContentRowMovies(){
    const [nfts, setNfts] = useState([]);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3030/productosApi/")
          .then((response) => {
            return response.json();
          })
          .then((nftss) => {
            setNfts(nftss.data);
          })
          .catch((error) => console.log(error));
      }, []);
      
      useEffect(() => {
        fetch("http://localhost:3030/usuariosApi/")
          .then((response) => {
            return response.json();
          })
          .then((usuarioss) => {
            setUsers(usuarioss.data);
          })
          .catch((error) => console.log(error));
      }, []);

      let moviesInDB = {
        title: 'Total NFTS',
        color: 'primary', 
        cuantity: nfts.length,
        icon: 'fa-clipboard-list'
    }
    
    let totalAwards = {
        title:' Total Usuarios', 
        color:'success', 
        cuantity: users.length,
        icon:'fa-award'
    }
    
    
   /* let actorsQuantity = {
        title:'Actors quantity' ,
        color:'warning',
        cuantity:'49',
        icon:'fa-user-check'
    }*/
    
    let cartProps = [moviesInDB, totalAwards]; /* AGREGAR ACTORSQUANTITY EN CASO DE QUERER VERLO */

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;