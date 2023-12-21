import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartItem = () => {
    const { all_product, cartItem, _addToCart, _removeFromCart, getTotalAmount } = useContext(ShopContext)

    console.log(getTotalAmount());
    return (
        <>
            <div className='list-item-container'>
                {/* single product */}
                {all_product.map(item => {
                    if (cartItem[item.id] > 0) {
                        return <div key={item.id} className='single-product-container'>
                            <div className='left-container'>
                                <div className='product-image-container'>
                                    <img id='image' src={item.image} alt="" />
                                </div>
                            </div>
                            <div className='right-container'>
                                <div className='description'>
                                    <h1>{item.name}</h1>
                                    <h3>Product ID: {item.id}</h3>
                                    <h3>Category: {item.category}</h3>
                                    <h2>Price: {item.new_price * cartItem[item.id]}$</h2>
                                    <button id='btn-remove' onClick={() => _removeFromCart(item.id)}>Remove</button>
                                </div>
                                <div className='quantity-container'>
                                    <h3>Quantity</h3>
                                    <i className="fa-solid fa-arrow-up" onClick={() => _addToCart(item.id)}></i>
                                    <p>{cartItem[item.id]}</p>
                                    <i className="fa-solid fa-arrow-down" onClick={() => _removeFromCart(item.id)}></i>
                                </div>
                            </div>
                        </div>

                    }
                    return null
                })}
                {/* single product */}
            </div>

            <div className='table-container'>
                <table>
                    <tbody>

                        <tr>
                            <th>Oder summary</th>
                            <th >Item</th>
                        </tr>
                        <tr>
                            <th>Subtotal</th>
                            <th >{getTotalAmount()}$</th>
                        </tr>
                        <tr>
                            <th>Order total</th>
                            <th >{getTotalAmount()}$</th>
                        </tr>
                    </tbody>
                </table>
                <div className='checkout-container'>
                    <h3>Your order qualifies for free standard shipping. <br /> Click "Checkout" to reserve Cart contents for 60 minutes.</h3>
                    <button id='btn-checkout'>CHECKOUT</button>
                </div>
            </div>

        </>
    )
}

export default CartItem
