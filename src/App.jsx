
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductDetail from "../src/components/ProductDetail";
import SearchProduct from './components/SearchProduct';
import Cart from './components/Cart';
import { productsData } from './productData/AllProductData';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([...productsData])
  const [val, setVal] = useState([])
  

  return (
    <>
    <BrowserRouter>
    <Navbar val={val} seTdata={setData}/>
    <Routes>

    <Route path='/' element={<Product productsData={data} val={val} setVal={setVal} />}/>
    <Route path='/product/:id' element={<ProductDetail productsData={data} val={val} setVal={setVal} />}/>
    <Route path='/search/:term' element={<SearchProduct val={val} setVal={setVal} productsData={data} />}/>
    <Route path='/cart' element={<Cart val={val} setVal={setVal} />}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
