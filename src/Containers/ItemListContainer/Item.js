import React from 'react'
import { Link } from "react-router-dom";

const Item = ({product}) =>{
    return(
        <div className='itemCard'>
            <img  className='imgCard' src={product.image} alt={product.title}/>
            {product.stock !== 0?
                <h2 className='titleCard'>{product.title}</h2>
            :   <h2 className='titleStockCard'>Sin stock</h2>}
            <h4 className='priceCard'>{'$'+product.price}</h4>
            <Link to={`/products/${product.id}`}>
                <button className='detailBtnCard btn'>
                    Ver Detalles
                </button>
            </Link>
        </div>
        
    )

}

export default Item;
