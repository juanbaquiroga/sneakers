import React from 'react';
import logo from '../../assets/sneaker.png';
import CartWidget from './cart/CartWidget';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Nav } from './Nav/Nav';
import { Link } from 'react-router-dom'

const Navbar = () =>{
    const categorias = [
        { id: 1, nombre: 'Nike', ruta:'/category/nike' },
        { id: 2, nombre: 'Adidas', ruta:'/category/adidas' },
        { id: 3, nombre: 'Converse', ruta:'/category/converse'}
    ]
    return(
        <>
            <header className='header'>
                <div className='homeLink' >
                    <Link to={'/'}>
                        <img className='logoNav' src={logo} alt="logo" />
                    </Link>
                    <Link to={'/'} className='linkNav'>
                        <h2 className='titleNav'>Sneakers</h2>
                    </Link>
                </div>

                <div className='linksNav'>
                    <Link to={'/order/'} className='orderBtn'><SearchRoundedIcon/>Buscar orden</Link>
                    <Nav categorias={categorias}/>
                    <Link to={'/cart'}>
                        <CartWidget/>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar
