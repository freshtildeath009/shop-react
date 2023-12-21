import React from 'react';
import styled from 'styled-components';
import CartItem from '../components/cart/CartItem';

const Cart = () => {

    return (
        <>
            <Banner className="banner-image-container">
                <img id='banner-shipping' src="./images/banner_shipping.jpg" alt="" />
            </Banner>
            <CartContainer>
                <CartItem />
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