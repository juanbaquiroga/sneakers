import React,{useContext} from 'react'
import { Context } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import { CartItem } from './cartItem'


export const Cart = () => {
    const {cart, totalAmount, reset} = useContext(Context)

    return (
        <>
            {cart.length ? (
                <>
                <h1 className='titlePage'>Cart</h1>
                <table className='table'>
                <tr className='tableRow'>
                    <th className='tableTitle'>Producto</th>
                    <th className='tableTitle'>Precio Unitario</th>
                    <th className='tableTitle'>Cantidad</th>
                    <th className='tableTitle'>Subtotal</th>
                    <th className='finalTableContent'></th>
                </tr>
                {cart.map((item) => <CartItem key={cart.id} product={item}/>)}
                </table>
                <div className='finalRow'>
                    <p className='totalCart'>Total: ${totalAmount}</p>
                    <div>
                        <Link to="/checkout"><button className='buyCart btn'>comprar carrito</button></Link>
                        <button className='emptyCart btn' onClick={()=>(reset())}>vaciar carrito</button>
                    </div>
                    
                </div>
                </>
                ) : (
                    <>
                <h1 className='titlePage'>
                    No agregaste productos, puedes ver <Link to="/">aca</Link>
                </h1>    
                </>
            )}
        </>
    )
}
