import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../Components/ItemCount'
import { Context } from '../../context/CartContext'



const Item = ({product}) =>{

    const [isButtonpPressed, setIsButtonpPressed] = useState(false);
    const {add} = useContext(Context)

    const onAdd = (counter) =>{
        setIsButtonpPressed(true)
        add(product, counter)
    }
    

    return(
        Object.values(product).length === 1?(<h1 className='titlePage'>El producto no existe</h1>):(
        <div className='bodyDetail'>
            <div className='containerDetail'>
                <img className='imgDetail'  src={product.image} alt={product.title}/>
                <div className='contentDetail'>
                    <h2 className='titleDetail'>{product.title}</h2>
                    <p className='descriptionDatail'>{product.description}</p>
                    <div className='buyContainerDetail'>
                        <h4>{'$'+ product.price}</h4>
                        {product.stock !== 0?(
                            !isButtonpPressed?(
                                <ItemCount  stock={product.stock} onAdd={onAdd} initial={1}/>
                                ):(
                                    <Link to={'/cart'}>
                                    <button  className='buttonBuyDetail btn'>finalizar compra</button>
                                </Link>
                            )
                        ):(
                            <h1>sin stock</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
        ))

}

export default Item;