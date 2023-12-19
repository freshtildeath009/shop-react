import React from 'react';
import styled from 'styled-components';

const ItemDetail = (props) => {
    const { name, category, id, image, new_price, old_price } = props.product
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
                            <h2>Select Size</h2>
                            <div className='size-type-container'>
                                <button id='btn-small'>S</button>
                                <button id='btn-medium'>M</button>
                                <button id='btn-large'>L</button>
                                <button id='btn-xlarge'>XL</button>
                                <button id='btn-xxlarge'>XXL</button>
                            </div>
                            <h5>Category: {category}</h5>
                        </div>
                    </div>
                </section>

            </ItemDetailsSection>
        </>
    )
}

export default ItemDetail

const ItemDetailsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;   
    border: red solid 2px;
    font-family: var(--ff-general);

        .item-detail-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .item-left-container{
            display: flex;
            border: 1px solid black;
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
            // width: 600px;
            
        }

        .item-info-container{
            width: 100%;
        }


        #title {
            font-size: var(--fs-3);
            font-weight: var(--fw-600);
        }

`