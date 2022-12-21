import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { LinearProgress } from '@mui/material';
import { db } from '../../firebase/firebase';
import {doc, getDoc, collection} from 'firebase/firestore'


const ItemDetailContainer = () =>{

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
      const productsCollection = collection(db, 'products');
      const refDoc = doc(productsCollection, id)
      getDoc(refDoc)
        .then((result) => {
            setProduct({
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
            ):(
                <ItemDetail product={product}/>
            )}
        </>
    )
}
export default ItemDetailContainer
