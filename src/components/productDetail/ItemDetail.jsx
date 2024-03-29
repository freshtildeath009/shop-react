import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShopContext } from '../../context/ShopContext';

const ItemDetail = (props) => {
    const { name, category, id, image, new_price, old_price } = props.product
    const { _addToCart } = useContext(ShopContext)

    return (
        <>
            <ItemDetailsSection>
                <section className='item-detail-container'>
                    <div className='item-left-container'>
                        <div className="small-image-container">
                            <img id='small-image' src={image} alt="" />
                            <img id='small-image' src={image} alt="" />
                            <img id='small-image' src={image} alt="" />
                            <img id='small-image' src={image} alt="" />
                        </div>
                        <div className='large-image-container'>
                            <img id='large-image' src={image} alt="" />
                        </div>
                    </div>

                    <div className='item-right-container'>
                        <div className='item-info-container'>
                            <h1 id='title'>{name}</h1>
                            <h4 id='price'><span>{old_price}$</span> {new_price}$</h4>
                            <p id='description'>Lorem ipsum, dolor siconsectetur adipisicing elit. Sapiente, accusamus. Ducimus sint et numquam ut mollitia odit modi ex. Laboriosam corporis delectus sunt, exercitationem aliquid doloribus explicabo consectetur asperiores soluta?</p>
                        </div>
                        <div className='item-size-container'>
                            <h2 id='size-title'>Select Size</h2>
                            <div className='size-type-container'>
                                <button id='btn-small' className='btn-size'>S</button>
                                <button id='btn-medium' className='btn-size'>M</button>
                                <button id='btn-large' className='btn-size'>L</button>
                                <button id='btn-xlarge' className='btn-size'>XL</button>
                                <button id='btn-xxlarge' className='btn-size'>XXL</button>
                            </div>
                            <h5 id='category-text'>Category: {category}</h5>
                        </div>
                        {/* <Link to="/cart"> */}
                        <button id='btn-addtocart' onClick={() => _addToCart(id)}>ADD TO CART</button>
                        {/* </Link> */}
                    </div>
                </section>
            </ItemDetailsSection >
        </>
    )
}

export default React.memo(ItemDetail)

const ItemDetailsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;   
    font-family: var(--ff-general);
    margin-bottom: 3rem;

        .item-detail-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .item-left-container{
            display: flex;
        }

        .small-image-container{
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        #small-image {
            height: 100px;
        }

        #large-image {
            height: 620px;
        }

        .item-right-container{
            width: 600px;
            
        }

        .item-info-container{
            width: 100%;
        }


        #title {
            font-size: var(--fs-3);
            font-weight: var(--fw-600);
        }
        
        span{
            text-decoration: line-through;
            opacity: 0.7;
        }
        
        #price {
            margin: 1rem 0;
            font-size: var(--fs-1-3);
        }

        #description {
            margin-bottom: 1rem;
            font-size: var(--fs-0-9);
        }

        #size-title {
            font-size: var(--fs-1-5);
        }

        .btn-size {
            cursor: pointer;
            border: none;
            margin-right: 0.5rem;
            padding: 0.5rem;
            border: 1px solid transparent;
        }

        .btn-size:hover {
            border: 1px solid black;
        }

        #btn-addtocart {
            font-weight: var(--fw-600);
            font-size: var(--fs-0-8);
            color: var(--text-color-secondary);
            margin-top: 1rem;
            border: none;
            padding: 1rem;
            background-color: var(--background-color2);
            cursor: pointer;
            border: none;
        }

        @media (max-width: 1024px){
            #title {
                font-size: var(--fs-2-5);
            }
        }

        @media (max-width: 768px){
            #title {
                font-size: var(--fs-2);
            }

            #price {
                font-size: var(--fs-1);
            }
            
            #size-title {
                font-size: var(--fs-1-1);
            }

            .btn-size {
                font-size: var(--fs-0-8);
            }

            #category-text {
                font-size: var(--fs-0-8);
            }

            #btn-addtocart {
                font-size: var(--fs-0-8);
                padding: 0.7rem;
            }
        }

        @media (max-width: 668px){
            .item-right-container{
                width: 400px; 
            }
            #title {
                font-size: var(--fs-1-5);
            }

            #large-image {
                height: 500px;
            }
        }

        @media (max-width: 555px){
            #large-image {
                height: 400px;
            }

            .item-right-container{
                width: 350px; 
            }

            #title {
                font-size: var(--fs-1-5);
            }
        }

        @media (max-width: 460px){
            .item-right-container{
                width: 270px; 
            }

            #title {
                font-size: var(--fs-1);
            }

            #small-image {
                height: 50px;
            }
            #large-image {
                height: 300px;
            }
        }

        @media (max-width: 328px){
            .item-right-container{
                width: 230px; 
            }
            #small-image {
                height: 50px;
            }
            #large-image {
                height: 230px;
            }
        }
`