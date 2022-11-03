import { useState } from 'react';
import CampoTexto from '../../../componentes/campoTexto';
import Botao from '../../../componentes/botao';
import { Link } from 'react-router-dom'


function CriarCategoria(props) {

  const [nome, setNome] = useState('');

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
          return data;
      } catch (e) {
          return e;
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

      <table>
      <br/><br/><br/>
      <tr><Link to="/">home</Link><br/></tr>
      <tr><Link to="/listaCategoria">Lista categoria</Link><br/></tr>
      
      
      </table>
      
      </form>
    </div>
  );
}

export default CriarCategoria;
