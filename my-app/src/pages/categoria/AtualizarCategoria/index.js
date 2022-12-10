import { useState,useEffect } from 'react';
import CampoTexto from '../../../componentes/campoTexto';
import Botao from '../../../componentes/botao';
import { Link} from 'react-router-dom';
import {redirect} from 'react-router-dom';

function AtualizarCategoria(props) {

  const [nome, setNome] = useState('');// usestate controla o valor do estado do componente
  const [ savedUser, setSavedUser ] = useState('');

  useEffect(() => {
    if (savedUser!=='') {
      redirect('/listaCategoria');
    }

  }, [savedUser]);

  console.log(savedUser)

  // useEffect(() => {
  //     navigate('/listaCategoria');
  // }, []);

  const salvarCategoria = async () => {
    const body = {nome: nome}

      const settings = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body:JSON.stringify(body)
      };
      try {
          const fetchResponse = await fetch('http://localhost:3001/categories', settings);
          const data = await fetchResponse.json();
          setSavedUser(data);
          
      } catch (e) {
          console.error(e);
      }    
  }

  console.log(nome);
  
  return (
    
    <div className="CriarCategoria">
      <form onSubmit={salvarCategoria}>
      
      <CampoTexto
            obrigatorio={true}
            label="Nome" 
            placeholder="Digite a categoria."
            valor={nome}
            aoAlterado={valor => setNome(valor)}
      />
      
      <Botao>Criar categoria</Botao>

      
      
      <Link to="/">home</Link>
      <Link to="/homeCategoria">Voltar</Link>
      <Link to="/listaCategoria">Lista categoria</Link>
      
      
      
      
      </form>
    </div>
  );
}

export default AtualizarCategoria;
