import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const OrderView = () =>{
    const [orderId, setOrderId] = useState('');
    const order =(e)=>{
        e.preventDefault()
        setOrderId(e.target.value)
    }
    return (
        <>
            <div className='containerForm'>
                <form className='contentForm'>
                    <h1 className='titleForm'>ingrese el ID de su orden</h1>
                    <input className='inputForm' type="text" placeholder="igrese su ID de order" name="id" onChange={order} ></input>
                    <Link to={`/order/${orderId}`}><button className='buttonForm btn'>Enviar orden</button></Link>
                </form>
            </div>
        </>
    )
}
export default OrderView
