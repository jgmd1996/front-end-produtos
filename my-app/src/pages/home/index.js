import { Link } from 'react-router-dom'

function Home() {
  
  return (
    <div>
      <form>
      <table>
      <br/><br/><br/>
      <tr><Link to="/">home</Link><br/></tr>
      <tr><Link to="/criarCategoria">Criar nova categoria</Link><br/></tr>
      <tr><Link to="/listaCategoria">Lista categoria</Link><br/></tr>
      <tr><Link to="/criarProduto">Criar novo produto</Link><br/></tr>
      
      </table>
      
      </form>
    </div>
  );
}

export default Home;
