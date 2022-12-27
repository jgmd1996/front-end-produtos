import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
//Produtos
import CriarCategoria from './pages/categoria/CriarCategoria'

//Categoria
import ListaCategoria from './pages/categoria/ListaCategoria'
import AtualizarCategoria from './pages/categoria/AtualizarCategoria'
//import DeletarCategoria from './pages/categoria/DeletarCategoria'
//home
import Home from './pages/Home'

const Rotas =() => {
  return (
    <div className='routes'>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/criarCategoria" element={<CriarCategoria />} />
        <Route path="/listaCategoria" element={<ListaCategoria />} />
        <Route path="/atualizarcategoria" element={<AtualizarCategoria />} />
 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Rotas;