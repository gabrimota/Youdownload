import {BrowserRouter, Routes, Route} from  'react-router-dom'

import RegisterAccount  from './pages/RegisterAccount';
import Home from './pages';
import Download from './pages/Download';
import ForgotPassWord from './pages/ForgotPassWord';
export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/Download' element={ <Download/> }/>
            <Route path='/RegisterAccount ' element = {<RegisterAccount/> } />
            <Route path='/ForgotPassWord ' element ={<ForgotPassWord/>}/>
            </Routes>
        </BrowserRouter>


    )
}


