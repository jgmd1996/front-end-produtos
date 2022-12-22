import { useState, useEffect } from 'react';
import CampoTexto from '../../componentes/CampoTexto';
import { Link, useNavigate } from 'react-router-dom';

function CriarCategoria() {

  const [nome, setNome] = useState('');// usestate controla o valor do estado do componente
  const [savedUser, setSavedUser] = useState(null);

  const navigate = useNavigate();

  const salvarCategoria = async (event) => {
    event.preventDefault();
    const body = { nome: nome }
    console.log("Esse aqui e o nome", nome);

    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    };
    try {
      const fetchResponse = await fetch('http://localhost:3001/categories', settings);  
      console.log("fetchResponse",fetchResponse);
      if (fetchResponse.status === 201) {
        const data = await fetchResponse.json();
        setSavedUser(data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {

    console.log("Entrando direto aqui?");
    console.log("savedUser", savedUser);

    if (savedUser) {
      setSavedUser(null);
      navigate('/listaCategoria',{replace:true});
      console.log("Chego aqui");
    } else {
      console.log("Não redireciono");
    }

  }, [savedUser]);




  return (

    <div className="CriarCategoria">

      <form>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite a categoria."
          aoAlterado={valor => setNome(valor)}
        />
        <button onClick={salvarCategoria}>Criar categoria</button>
        <Link to="/">home</Link>
      </form>
      
    </div>
  );
}

export default CriarCategoria;
