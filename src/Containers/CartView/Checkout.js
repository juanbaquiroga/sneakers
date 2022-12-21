import React, { useState, useContext, Fragment } from "react";
import {Context} from '../../context/CartContext'
import {db} from '../../firebase/firebase'
import {collection, addDoc, serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import Toastify from "toastify-js";

const Checkout = ()=>{
    const{totalAmount, cart, reset,}= useContext(Context)
    const [client, setClient] = useState({})
    const [saleId, setSaleId] = useState('')
    
    const clientData = (e)=>{
        setClient({
            ...client,
            [e.target.name]:e.target.value
        })
    }
    
    const endBuy=(e)=>{
        e.preventDefault ()
        if(Object.values(client).length !==4){
            Toastify({
                text: "Por favor rellene los todos los datos del formulario",
                duration: 5000,
                style: {
                    background: "rgba(180, 49, 49, 0.9)",
                    color:'white',
                    borderRadius: '15px',
                    padding: '20px',
                },
                gravity: "top",
                position:"center",
                close: true,
            }).showToast();
        }else{
            if(client.email === client.email2){
                const sellsCollection = collection (db, "sells")
                addDoc (sellsCollection,{
                client:{name:client.name, email:client.email, phone:client.phone},
                items: cart,
                total: `$${totalAmount}`,
                date: serverTimestamp(),
                })
                .then(result=>{
                    setSaleId(result.id); 
                    cart.forEach(producto => {
                        updateStock(producto)
                    });
                    reset()
                })
            }else{
                Toastify({
                    text: `Los emails introducidos no coinciden`,
                    duration: 5000,
                    style: {
                        background: "rgba(180, 49, 49, 0.9)",
                        color:'white',
                        borderRadius: '15px',
                        padding:'20px'
                    },
                    gravity: "top",
                    position:"center",
                    close: true,
                }).showToast();    
            }
        }   
    }
    
    const updateStock =(producto)=>{
        const prod = doc (db, "products", producto.product.id)
        updateDoc(prod, {stock: (producto.product.stock - producto.quantity)})
    }

    return(
        <>
        <div className="containerForm">
            <>
            {!saleId ?
                <div className="contentForm">
                    <h2 className="titleForm">¡Casi terminamos!</h2>
                    <h4 className="subtitleForm">Por favor complete todos los campos</h4>
                    <form onSubmit={endBuy} className='formCheckout'>
                            <input className="inputForm" type="text" placeholder="Nombre" name="name" onChange={clientData} value={client.name}></input>
                            <input className="inputForm" type="number" placeholder="Telefono" name="phone" onChange={clientData} value={client.phone}></input>
                            <input className="inputForm" type="email" placeholder="Email" name="email" onChange={clientData} value={client.email}></input>
                            <input className="inputForm" type="email" placeholder="Email" name="email2" onChange={clientData} value={client.email2}></input>
                        <button className="buttonForm btn">Enviar orden</button>
                    </form>
                </div>
            :
                <div className="contentCheckout">
                    <h2 className="titleCheckout">Muchas gracias por su compra!</h2>
                    <h4 className="subtitleCheckout">Su orden de compra es : {saleId}</h4>
                </div> 
            }
            </>
        </div>
    </>
    )
}
export default Checkout
