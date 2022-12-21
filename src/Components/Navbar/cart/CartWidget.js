import React,{ useContext, useState, useEffect} from 'react';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Context } from '../../../context/CartContext';


const CartWidget = () =>{
    const {cart} =useContext(Context)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (cart.length) {
            let totalAmount = 0;
            cart.forEach(item => totalAmount += item.quantity);
            setTotal(totalAmount);
        }
    }, [cart]);
    return(
        <>
            <div className='cartWidget' >
                {cart.length?(<p className='cartQty'>{total}</p>):null}
                <ShoppingCartTwoToneIcon fontSize="large"/>
            </div>
        </>
    )
}
export default CartWidget
