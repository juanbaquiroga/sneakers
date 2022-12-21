import React, {useState}from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

const ItemCount = ({stock, initial, onAdd}) =>{
    const [counter, setCounter] = useState(initial);

    const add = () =>{
        if(counter < stock){
            setCounter(counter +1)
        }
    }
    const substract = () =>{
        if(counter > initial){
            setCounter(counter - 1)
        }
    }
    const notificacion = () =>{
        Toastify({
            text: `agregaste ${counter} producto/s al carrito`,
            duration: 3000,
            style: {
                background: "rgba(99, 99, 102, 0.9)",
                color:'white',
                borderRadius: '15px',
            },
            close: true,
        }).showToast();
    }
    
    return(
        <>
            <div className='containerCount'>
                <div className='itemCounter'>
                    <button className='buttonCounter btn' onClick={add}>+</button>
                    <h1 className='counterItemCount'>{counter}</h1>
                    <button className='buttonCounter btn'  onClick={substract}>-</button>
                </div>
                <button className='buttonAddCart btn' onClick={() =>{onAdd(counter); notificacion()}}>agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount