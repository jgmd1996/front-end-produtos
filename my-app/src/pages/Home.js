import { Link } from 'react-router-dom'
import ListaProduto from './produto/ListaProduto';

function Home() {

  
  
  return (
    <div>
      <form>
      <table border="100">
        <tr align='center'>home</tr>
      <tr>
      <td>Categorias</td> 
      <td>produtos</td>
      </tr>

      <tr>
      <td><Link to="/criarCategoria">Criar nova categoria</Link></td>
      <td><Link to="/criarProduto">Criar novo produto</Link></td>
      </tr>

      <tr>
      <td><Link to="/listaCategoria">Lista categoria</Link></td>
      <td><Link to="/ListaProduto">Lista produto</Link></td>
      
      </tr>
      
      </table>
      
      </form>
    </div>
  );
}

export default Home;
