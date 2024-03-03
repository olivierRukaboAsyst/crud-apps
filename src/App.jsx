import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'

function App() {

  const [currentRoute, setCurrenRoute] = useState()
  useEffect(()=>{
    const path = window.location.pathname.toLowerCase()
    setCurrenRoute(path.slice(1,path.length))
  },[])  

  return (
    <BrowserRouter>
    <nav className='m-3 p-3 border border-info'>
      <ul className="nav na-pills">
        <li>
          <Link onClick={() => setCurrenRoute('home')}
            className={
              currentRoute == 'home'
              ? 'btn btn-info ms-1 text-light'
              : 'btn btn-outline-info ms-1'}
              to={"/home"}>
              Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setCurrenRoute('products')}
            className={
              currentRoute == 'products'
              ? 'btn btn-info ms-1 text-light'
              : 'btn btn-outline-info ms-1'} 
              to={"/products"}>
              Products
          </Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
