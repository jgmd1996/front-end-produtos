import { Link } from 'react-router-dom'

function HomeCategoria() {
  
  return (
    <div>
      <form>
      <table>
      <br/><br/><br/>
      <h3>Volta a Pagina inicial</h3>
      <tr><Link to="/">Pagina Inicial</Link></tr><br/><br/><br/>


      <h3>Opções de categoria</h3>
      
      <tr><Link to="/criarCategoria">Criar nova categoria</Link><br/></tr>
      <tr><Link to="/atualizarCategoria">Atualizar categoria</Link><br/></tr>
      <tr><Link to="/listaCategoria">Lista categoria</Link><br/></tr>
      <tr><Link to="/deletarCategoria">Deletar Categoria</Link><br/></tr>
     
      
      </table>
      
      </form>
    </div>
  );
}

export default HomeCategoria;
