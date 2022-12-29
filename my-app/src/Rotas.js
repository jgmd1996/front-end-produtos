import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Produtos
import CriarCategoria from './pages/categoria/CriarCategoria'
//Categoria
import ListaCategoria from './pages/categoria/ListaCategoria'
//import DeletarCategoria from './pages/categoria/DeletarCategoria'
//home
import Home from './pages/Home'
import CriarProduto from './pages/produto/CriarProduto'
import ListaProduto from './pages/produto/ListaProduto'

const Rotas =() => {
  return (
    <div className='routes'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criarCategoria" element={<CriarCategoria />} />
        <Route path="/listaCategoria" element={<ListaCategoria />} />
        <Route path="/ListaProduto" element={<ListaProduto />} />

        <Route path="/CriarProduto" element={<CriarProduto />} />
  
 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rotas;