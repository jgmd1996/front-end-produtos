import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
//Produtos
import CriarCategoria from './pages/categoria/CriarCategoria'
import CriarProdutos from './pages/produto/CriarProdutos'
//Categoria
import HomeCategoria from './pages/categoria/HomeCategoria'
import ListaCategoria from './pages/categoria/ListaCategoria'
import AtualizarCategoria from './pages/categoria/AtualizarCategoria'
import DeletarCategoria from './pages/categoria/DeletarCategoria'
//home
import Home from './pages/home'



const Rotas =() => {
  return (
    <div className='routes'>
      <BrowserRouter>
      {/* <table>
      
      <tr><Link to="/">Criar nova categoria</Link><br/></tr><br/>
      <tr><Link to="/listaCategoria">Lista categoria</Link><br/></tr>
      <tr><Link to="/criarProduto">Criar novo produto</Link><br/></tr>
      
      </table> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/homeCategoria" element={<HomeCategoria />} />
        <Route path="/criarCategoria" element={<CriarCategoria />} />
        <Route path="/listaCategoria" element={<ListaCategoria />} />
        <Route path="/deletarCategoria" element={<DeletarCategoria />} />
        <Route path="/atualizarcategoria" element={<AtualizarCategoria />} />
        <Route path="/criarProduto" element={<CriarProdutos />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rotas;