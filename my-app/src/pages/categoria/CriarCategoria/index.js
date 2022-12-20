import { useState,useEffect } from 'react';
import CampoTexto from '../../../componentes/campoTexto';
import { Link, useNavigate} from 'react-router-dom';

function CriarCategoria() {

  const [nome, setNome] = useState('');// usestate controla o valor do estado do componente
  const [ savedUser, setSavedUser ] = useState(null);
  


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
    
    if (savedUser) {
      setSavedUser(null);
      navigate('/listaCategoria');
      console.log("Chego aqui");
    }else{
      console.log("Não redireciono");
    }

  }, [savedUser]);

  
  console.log("Redirecionamento",savedUser);
  
  return (
    
    
    <div className="CriarCategoria">
      <form>
      
      <CampoTexto
            obrigatorio={true}
            label="Nome" 
            placeholder="Digite a categoria."
            aoAlterado={valor => setNome(valor)}
      />

        {/* <div>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Digite a categoria."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
        </div> */}

      <button onClick={salvarCategoria}>Criar categoria</button>
    
      <tr></tr>
      <tr><Link to="/">home</Link></tr>
     
      </form>
      
    </div>
  );
}

export default CriarCategoria;
