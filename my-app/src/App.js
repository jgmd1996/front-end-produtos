import { useState } from 'react';
import './App.css';
import CampoTexto from './componentes/campoTexto';
import Botao from './componentes/campoTexto/Botao';

function App(props) {


  const [nome, setNome] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [category, setCategory] = useState('');

  const salvarProduto = async () => {

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
    <div className="App">
      <form onSubmit={salvarProduto}>
      <CampoTexto
            obrigatorio={true}
            label="Nome" 
            placeholder="Digite seu nome."
            valor={nome}
            aoAlterado={valor => setNome(valor)}
      />
      <CampoTexto
            obrigatorio={true}
            label="Descrição" 
            placeholder="Digite a descriçao."
            valor={description}
            aoAlterado={valor => setDescription(valor)}
      />
      <CampoTexto
            obrigatorio={true}
            label="Preço" 
            placeholder="Digite o preço."
            valor={price}
            aoAlterado={valor => setPrice(valor)}
      />
      <CampoTexto
            obrigatorio={true}
            label="Quantidade" 
            placeholder="Digite a quantidade."
            valor={quantidade}
            aoAlterado={valor => setQuantidade(valor)}
      />
      <CampoTexto
            obrigatorio={true}
            label="Categoria" 
            placeholder="Qual categoria pertence"
            valor={category}
            aoAlterado={valor => setCategory(valor)}
      />
      <Botao>Criar produto</Botao>
      </form>
    </div>
  );
}

export default App;
