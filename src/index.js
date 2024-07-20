import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './index.css';

import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import Home from './Components/Home'
import Registration from './Components/Register';
import Update from './Components/Update';
import Register from './Pages/RegisterAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/RegisterAdmin' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Update' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Login/> */}
    {/* <Home/> */}
    {/* <Registration/> */}
    {/* <Update/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
