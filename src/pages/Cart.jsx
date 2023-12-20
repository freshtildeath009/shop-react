import React from 'react';
import styled from 'styled-components';

const Cart = () => {

    return (
        <>
            <Banner className="banner-image-container">
                <img id='banner-shipping' src="./images/banner_shipping.jpg" alt="" />
            </Banner>
            <CartContainer>

                <div className='list-item-container'>
                    {/* single product */}
                    <div className='single-product-container'>
                        <div className='left-container'>
                            <div className='product-image-container'>
                                <img id='image' src="./images/product_1.png" alt="" />
                            </div>
                        </div>
                        <div className='right-container'>
                            <div className='description'>
                                <h1>Boys Orange Colourblocked Hooded Sweatshirt</h1>
                                <h3>Product ID: 23</h3>
                                <h3>Category: Women</h3>
                                <h2>Price: 100$</h2>
                                <button id='btn-remove'>Remove</button>
                            </div>
                            <div className='quantity-container'>
                                <h3 id='quantity'>Quantity</h3>
                                <i class="fa-solid fa-arrow-up"></i>
                                <p>0</p>
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                    {/* single product */}
                    {/* single product */}
                    <div className='single-product-container'>
                        <div className='left-container'>
                            <div className='product-image-container'>
                                <img id='image' src="./images/product_2.png" alt="" />
                            </div>
                        </div>
                        <div className='right-container'>
                            <div className='description'>
                                <h1>Boys Orange Colour blocked Hooded Sweatshirt</h1>
                                <h3>Product ID: 23</h3>
                                <h3>Category: Women</h3>
                                <h2>Price: 100$</h2>
                                <button id='btn-remove'>Remove</button>
                            </div>
                            <div className='quantity-container'>
                                <h3>Quantity</h3>
                                <i class="fa-solid fa-arrow-up"></i>
                                <p>0</p>
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                    {/* single product */}
                </div>

                <div className='table-container'>
                    <table>
                        <tr>
                            <th>Oder summary</th>
                            <th >Item</th>
                        </tr>
                        <tr>
                            <th>Subtotal</th>
                            <th >1000$</th>
                        </tr>
                        <tr>
                            <th>Order total</th>
                            <th >1000$</th>
                        </tr>
                    </table>
                    <div className='checkout-container'>
                        <h3>Your order qualifies for free standard shipping. <br /> Click "Checkout" to reserve Cart contents for 60 minutes.</h3>
                        <button id='btn-checkout'>CHECKOUT</button>
                    </div>
                </div>


            </CartContainer >
        </ >
    )
}

export default Cart
const Banner = styled.div`
    padding: 2rem;
        #banner-shipping {  
            width: 100%;
        }
`
const CartContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    font-family: var(--ff-general);
    @media(max-width: 885px) {
        flex-wrap: wrap;
    }

        .list-item-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        .banner-image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .single-product-container {
            padding: 2rem 0 0 2rem;
            border-top: 2px solid rgba(0, 0, 0, 0.3);
            display: flex;
            width: 100%;
        }

        .left-container{
            display: flex;
            justify-content: center;
        }

        .right-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .quantity-container{
            text-align: center;
        }

        #image {
            width: 170px;
            height: 166px;
            padding: 0 1rem 2rem 0;
        }

        h1{
            font-size: var(--fs-1);
            font-weight: var(--fw-600);
        }

        h3{
            font-size: var(--fs-0-8);
        }

        #quantity {
            white-space: nowrap;
        }
        h2{
            font-size: var(--fs-0-9);
        }

        #btn-remove{
            border: none;
        }

        .table-container{
            display: flex;
            flex-direction: column;
            border-top: 2px solid rgba(0, 0, 0, 0.3);
            width: 500px;
            padding: 2rem 0 0 3rem;
        }

        table {
            width: 100%;
        }

        tr{
            display: flex;
            justify-content: space-between;
            padding: 1rem 0; 
            border-bottom: 2px solid rgba(0, 0, 0, 0.3);
        }

        .checkout-container {
            margin-top: 1rem;
        }

        #btn-checkout {
            font-size: var(--fs-1-1);
            font-weight: var(--fs-600);
            color: var(--text-color-secondary);
            background: var(--background-color2);
            width: 100%;
            padding: 1rem;
            margin: 1rem 0;
            border: none;
        }
        
        @media (max-width: 866px) {
            .table-container{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 0;
            }
        }

        @media (max-width: 866px) {
            .single-product-container {
                justify-content: center;
                align-items: flex-start;
            }
            .right-container {
                flex-wrap: wrap;
            }

            h1{
                font-size: var(--fs-1);
            }
    
            h3{
                font-size: var(--fs-1);
            }
            
            .quantity-container {
                margin: 1rem 0 2rem 0;    
            }

            #quantity {
                font-size: var(--fs-1);
                white-space: nowrap;
            }
            h2{
                font-size: var(--fs-1);
            }
            #btn-remove{
                font-size: var(--fs-1);
                border: none;
            }

            .table-container {
                font-size: var(--fs-1);
            }
        }
`