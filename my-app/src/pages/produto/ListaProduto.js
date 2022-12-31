import React from 'react';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./style.css";



function ListaProduto() {

    const [itens, setItens] = useState([]);
    const [nome, setNome] = useState([]);

    const [categorias, setCategorias] = useState([]);

    const [lista, setLista] = useState({});
    console.log("categoria nome",categorias.nome);
    
    ////////////////////////////////////////////////////////////////////
    const options = [
        { value: "produto 01", label: "Produto 01" },
        { value: "produto 02", label: "Produto 02" },
        { value: "produto 03", label: "Produto 03" },
        { value: "produto 04", label: "Produto 04" },
        { value: "produto 05", label: "Produto 05" },
        { value: "produto 06", label: "Produto 06" },
        { value: "produto 07", label: "Produto 07" },
        { value: "produto 08", label: "Produto 08" },
    ];

   

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch("http://localhost:3001/categories");
            const categoriasApi = await response.json();
            const categoriasSelect = categoriasApi.map(categoriaApi => ({value: categoriaApi._id, label: categoriaApi.nome}) )
            setCategorias(categoriasSelect);
           
        }

        fetchMyAPI();
    }, [])// aqui fica as dependencias []

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelect = () => {
        console.log(selectedOptions);
    };

    const animatedComponents = makeAnimated();
    ///////////////////////////////////////////////////////
    const navigate = useNavigate();//

    const redirect = (item) => {
        navigate('/AtualizarProduto', { replace: false, state: { item: item } });//
    }

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch("http://localhost:3001/produtos")
            const categories = await response.json()
            setItens(categories)
        }
        fetchMyAPI()
    }, [])

    async function deletarCategoria(id) {
        let result = await fetch("http://localhost:3001/produtos/" + id, {
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
                <tbody>

                    <tr>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>Preço</td>
                        <td>Quantidade</td>
                        <td>Id</td>
                        <td>Atualizar</td>
                        <td>Deletar</td>
                    </tr>
                    {itens.map(item => {

                        return <tr key={item._id} style={{ border: "1px solid" }}>
                            <td style={{ border: "1px solid" }}>{item.nome}</td>
                            <td style={{ border: "1px solid" }}>{item.description}</td>
                            <td style={{ border: "1px solid" }}>{item.price}</td>
                            <td style={{ border: "1px solid" }}>{item.quantidade}</td>
                            <td style={{ border: "1px solid" }}>{item._id}</td>
                            <td style={{ border: "1px solid" }}><button onClick={() => redirect(item)}>Atualizar</button> </td>
                            <td style={{ border: "1px solid" }}><button onClick={() => deletarCategoria(item._id)}>Deletar</button> </td>

                        </tr>

                    })}
                        <>                    
 
            <Select
       
        components={animatedComponents}
        isMulti
        options={categorias}
        onChange={(item) => setSelectedOptions(item)}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />
                        
                        </>
                </tbody>
            </table>
            <Link to="/">home</Link>
        </div>







    );
}

export default ListaProduto;