import React from 'react'

const Order =({order})=>{
    return(
        <div className='bodyOrder'>
            <h1 className='titleOrder'>orden de compra</h1>
            <div className='containerOrder'>
                    <h2 className='orderId'>Orden: {order.id}</h2>
                    <h3 className='orderBuyer'>Comprador:  {order.client.name}</h3>
                    <h3 className='orderBuyer'> Email:  {order.client.email}</h3>
                    <div className='contentOrder'>
                    {order.items.map((item)=>{
                        return(
                            <div className='orderProduct'>
                                <h3>{item.quantity}x {item.product.title}</h3>
                                <p>${item.product.price}</p>
                            </div>
                        )
                    })}
                    </div>
                    <div>
                        <h4 className='totalOrder'>total: {order.total}</h4>
                    </div>
            </div>
        </div>
    )
}
export default Order;
