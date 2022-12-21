import React, { useContext } from 'react'
import { Context } from '../../context/CartContext'

export function CartItem({product}){
    const {remove} = useContext(Context)
    const subtotal = product.product.price * product.quantity
    return(
        <>
        <tr className='tableContentRow'>
            <td className='tableContent'>{product.product.title}</td>
            <td className='tableContent'>${product.product.price}</td>
            <td className='tableContent'>{product.quantity}</td>
            <td className='tableContent'>${subtotal}</td>
            <td className='tdRemoveItem' onClick={() => remove(product.product.id)}><button className='buttonRemoveItem'>eliminar</button></td>
        </tr>
        </>
    );
}
