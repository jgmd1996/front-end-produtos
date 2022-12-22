import { useState,useEffect } from 'react';
import CampoTexto from '../../componentes/CampoTexto';
import { Link} from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


function AtualizarCategoria() {
  const {state} = useLocation();//

  const [nome, setNome] = useState(state.item.nome);
  const [savedUser, setSavedUser] = useState(null);

  const navigate = useNavigate();

  const atualizaCategoria = async (event) => {
    event.preventDefault();
    const body = { nome: nome }
    console.log("Esse aqui e o nome", nome);

    const settings = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    };
    try {
      const fetchResponse = await fetch('http://localhost:3001/categories/' + state.item._id, settings);  
      console.log("fetchResponse",fetchResponse);
      if (fetchResponse.status === 200) {
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
      console.log("Chego aqui na hora de redirecionar");
    } else {
      console.log("Não redireciono");
    }

  }, [savedUser]);

 
  return (
    
    // <div className="CriarCategoria">
   
    //   <h1>{state.item.nome}</h1>
    //   <Link to="/">home</Link>
    // </div>

    <div className="CriarCategoria">

      <form>
      <h1>{state.item._id}</h1>
      <h1>{state.item.nome}</h1>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite a categoria."
          aoAlterado={valor => setNome(valor)}
        />
        <button onClick={atualizaCategoria}>Atualizar categoria</button>
        <Link to="/">home</Link>
      </form>
      
    </div>

    
  );
}

export default AtualizarCategoria;
