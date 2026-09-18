import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Carros from './pages/Carros'
import Servicos from './pages/Servicos'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import Header from './components/Header'
import Footer from './components/Footer'
import DetalhesCarro from './pages/DetalhesCarros'

function AppRoutes(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/carros' element={<Carros/>}/>
                <Route path='/carros/:id' element={<DetalhesCarro/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/quem-somos' element={<QuemSomos/>}/>
                <Route path='/contato' element={<Contato/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes