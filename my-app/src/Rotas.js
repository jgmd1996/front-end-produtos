import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CriarCategoria from './pages/categoria/CriarCategoria'
import CriarProdutos from './pages/produto/CriarProdutos'
import ListaCategoria from './pages/categoria/ListaCategoria'
import UpdateCategoria from './pages/categoria/UpdateCategoria'
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
        <Route path="/criarCategoria" element={<CriarCategoria />} />
        <Route path="/listaCategoria" element={<ListaCategoria />} />
        <Route path="/updateCategoria" element={<UpdateCategoria />} />
        <Route path="/criarProduto" element={<CriarProdutos />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rotas;