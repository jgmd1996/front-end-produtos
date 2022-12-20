import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// aqui e o componente 
function ListaCategoria() {

    //********************************* Aparti daqui e para consumir a api e mosra ela em uma tabela  *************************************************************** */
    const [itens, setItens] = useState([])
    const [nome, setNome] = useState([])

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

    async function deletarCategoria(id) {
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
        <div>
            <table style={{ border: "1px solid" }}>

                <tr>
                    <td>Nome</td>
                    <td>Id</td>
                    <td>Atualizar</td>
                    <td>Deletar</td>
                </tr>
                {itens.map(item => {

                    return <tr style={{ border: "1px solid" }}>
                        <td style={{ border: "1px solid" }}>{item.nome}</td>
                        <td style={{ border: "1px solid" }}>{item._id}</td>
                        <td ><button>Atualizar</button></td>
                        <td style={{ border: "1px solid" }}><button onClick={() => deletarCategoria(item._id)}>Deletar</button> </td>

                    </tr>




                })}
            </table>
            <Link to="/">home</Link>




            {/* semaprar aqui */}


            <div>

                {itens.map(item => {

                    return <tr style={{ border: "1px solid" }}>
                        <td style={{ border: "1px solid" }}>

                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={item.nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                        </td>

                    </tr>

                })}
                <h1>Meu cadastro</h1>
                <form >
                    <label htmlFor="name"></label>
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={itens.nome}
                            value={itens.nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div>
                        <button >atualizar</button>
                    </div>
                </form>
            </div>

        </div>

    );
}

export default ListaCategoria;