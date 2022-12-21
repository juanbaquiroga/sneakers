import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import ItemList from './ItemList';
import { LinearProgress } from '@mui/material';
import { db } from '../../firebase/firebase';
import {getDocs, collection, query,where} from 'firebase/firestore'


const ItemListContainer = ({greeting}) =>{
    
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);


    useEffect(()=>{
        const productsCollection = collection(db, 'products');
        const category = query(productsCollection, where("category", "==", `${id}`));
        const url = id ? category : productsCollection
        getDocs(url)
        .then((data)=>{
            const lista = data.docs.map((product)=>{
            return {
                ...product.data(),
                id: product.id
            }
            })
            setProducts(lista)
        })
        .catch ((err)=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[id])


    return(
        <>
            <h1>{greeting}</h1>
            {loading ?(
            <>
                <LinearProgress color='inherit'/>
            </>
            ):error ?(
                <h1>'ocurrio un error'</h1>
            ):(
                <ItemList products={products}/>
            )
            }
        </>
    )
}
export default ItemListContainer
