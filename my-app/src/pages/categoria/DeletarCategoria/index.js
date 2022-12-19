import React from 'react';

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// aqui e o componente 
function DeletarCategoria() {

    //********************************* Aparti daqui e para consumir a api e mosra ela em uma tabela  *************************************************************** */
    const [itens, setItens] = useState([])
    
    console.log(itens);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch("http://localhost:3001/categories")
            const usuariosDaAPI = await response.json()
            setItens(usuariosDaAPI)

        }

        fetchMyAPI()
    }, [])// aqui fica as dependencias []
    //toda vez que o valor da dependia mudar o useEffect sera executado novamente.


        async function deletarCategoria (id) {
            let result = await fetch("http://localhost:3001/categories/" + id, { 
                method: 'DELETE',
                headers: { 
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
                }
            });
            result = await result.json();
            console.warn(result)
        };





        
    return (
        <div className="App">
            <table style={{ border: "1px solid" }}>
                <th>id</th>
                <th>nome</th>
                <th>Opções</th>
                {itens.map(item => {
                    
                    return <tr style={{ border: "1px solid" }}>
                        <td style={{ border: "1px solid" }}>{item._id}</td>
                        <td style={{ border: "1px solid" }}>{item.nome}</td>
                        <td style={{ border: "1px solid" }}><button onClick={() => deletarCategoria(item._id)}>deletar</button> </td>

                    </tr>

                })}
            </table>
            <Link to="/homeCategoria">Voltar</Link><br/>
            <Link to="/">home</Link><br />

        </div>

    );
}

export default DeletarCategoria;