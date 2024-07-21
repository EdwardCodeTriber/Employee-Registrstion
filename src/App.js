import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Pages/Home'
import Registration from './Pages/Register';
import Update from './Pages/Update';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App