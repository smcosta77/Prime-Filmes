import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import Filme from './page/Filme';
import Favoritos from './page/Favoritos';

import Header from './components/Header';
import Erro from './page/Erro';

function RoutesApp(){
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/filme/:id" element={ <Filme/> } />
                    <Route path='/favoritos'element={ <Favoritos/> }/>   

                    <Route path='*' element={ <Erro/> }/>                
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default RoutesApp;