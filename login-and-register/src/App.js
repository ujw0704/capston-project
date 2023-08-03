
import Login from './Components/Login/Login';
import First from './Components/Home/First';
import Header from './Components/Header/Header';
import Book from './Components/Books/Book';
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register'
import About from './Components/About/About';


import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<First/>}>
        </Route>
        <Route path='/login' element={<Login />}>
        </Route>
        <Route path='/register' element={<Register />}>

        </Route>
        <Route path='/books' element={<Book/>} >

        </Route>
        <Route path="/about" element={<About/>}>
          
        </Route>

      </Routes>

      <Footer /> 

    </BrowserRouter>

  );
}

export default App;
