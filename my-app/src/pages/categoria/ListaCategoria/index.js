import React from 'react';

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';






    // aqui e o componente 
    function ListaCategoria() {
      
       

//********************************* Aparti daqui e para consumir a api e mosra ela em uma tabela  *************************************************************** */
        const [itens, setItens] = useState([])
        console.log(itens);
        useEffect(() => {
            async function fetchMyAPI() {
              let response = await fetch(`http://localhost:3001/categories`)
              const usuariosDaAPI = await response.json()
              setItens(usuariosDaAPI)
              
            }
        
            fetchMyAPI()
          }, [])// aqui fica as dependencias []
          //toda vez que o valor da dependia mudar o useEffect sera executado novamente.

        
        return (
            <div className="App">
                <table style={{border: "1px solid"}}>
                    
                    <th>nome</th>
                {itens.map(item => {
                    
                    return <tr style={{border: "1px solid"}}>
                        <td style={{border: "1px solid"}}>{item.id}</td>
                        <td style={{border: "1px solid"}}>{item.nome}</td>
                        
                        
              
                    </tr>
                    
                })}
                </table>
                <Link to="/">home</Link><br/>

            </div>

        );
    }

export default ListaCategoria;