import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Pages/Home'
import Registration from './Pages/Register';
import Update from './Pages/Update';
import History from './Pages/PreviousEmp';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Default page Login */}
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/History' element={<History/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App