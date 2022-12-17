import { useState,useEffect } from 'react';
import CampoTexto from '../../../componentes/campoTexto';
import { Link, useNavigate} from 'react-router-dom';

function CriarCategoria({NomeProps}) {

  const [nome, setNome] = useState(null);// usestate controla o valor do estado do componente
  const [ savedUser, setSavedUser ] = useState('');
  


  const navigate = useNavigate();

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

  useEffect(() => {
    
    if (savedUser!=='') {
      setSavedUser('data');
      navigate('/listaCategoria');
    }else{
      console.log("Não redireciono");
    }

  }, [savedUser]);

  console.log("nome categoria",nome);
  console.log("Redirecionamento",savedUser);
  
  return (
    
    
    <div className="CriarCategoria">
      <form>
      <table  border="100">    
      {NomeProps.nome}
      <CampoTexto
            obrigatorio={true}
            label="Nome" 
            placeholder="Digite a categoria."
            aoAlterado={valor => setNome(valor)}
      />
      <button onClick={salvarCategoria}>Criar categoria</button>
    
      <tr></tr>
      <tr><Link to="/">home</Link></tr>
      </table> 
     
      </form>
      
    </div>
  );
}

export default CriarCategoria;
