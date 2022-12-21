import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Containers/CartView/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CustomProvider from './context/CartContext';
import CheckOut from './Containers/CartView/Checkout';
import OrderContainer from './Containers/orderContainer/OrderContainer';
import OrderView from './Containers/orderContainer/OrderView';

const App = () =>{
    const greeting='Hola, bienvenido a Juanba'

    
    return(
        <>
        <BrowserRouter>
            <CustomProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
                    <Route path='/category/:id' element={<ItemListContainer greeting={greeting}/>}/>
                    <Route path='/products/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/order' element={<OrderView/>}/>
                    <Route path='/checkout' element={<CheckOut/>}/>
                    <Route path='/order/:id' element={<OrderContainer/>}/>
                </Routes>
            </CustomProvider>
        </BrowserRouter>
        </>
    )
}

export default App
