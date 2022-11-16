import { Link } from 'react-router-dom'

function Home() {
  
  return (
    <div>
      <form>
      <table>
      <br/><br/><br/>
      <tr><Link to="/">Pagina Inicial</Link><br/></tr>
      <tr><Link to="/homeCategoria">Opções para categoria</Link><br/></tr>
      <tr><Link to="/criarProduto">Criar novo produto</Link><br/></tr>
      
      </table>
      
      </form>
    </div>
  );
}

export default Home;
