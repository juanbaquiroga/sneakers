import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Order from './Order';
import { LinearProgress } from '@mui/material';
import { db } from '../../firebase/firebase';
import {doc, getDoc, collection} from 'firebase/firestore'


const OrderContainer = () =>{
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const orderCollection = collection(db, 'sells');
        const refDoc = doc(orderCollection, id)
        getDoc(refDoc)
            .then((result) => {
                setOrder({
                id: result.id,
                ...result.data(),
                });
            })
            .catch (()=>{
                setError(true);
            })
            .finally(()=>{
                setLoading(false)
            })
        },[id])
    return(
        <>
            {loading ?(
                <LinearProgress color='inherit'/>
            ):error? (
                <h1>Ocurrio un error</h1>
            ):order.client?(
                <Order order={order}/>
            ):<h1>No existe ninguna orden con este ID</h1>}
        </>
    )
}
export default OrderContainer;