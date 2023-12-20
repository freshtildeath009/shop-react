import React from 'react'
import styled from 'styled-components'
import data_product from '../../../public/images/data'
import Item from '../Item'
const Popular = () => {
    return (
        <>
            <PopularSection>
                <div className='popular-title-container'>
                    <h1 id='title'>POPULAR IN WOMEN</h1>
                    <br />
                    <p id='line'></p>
                    <br />
                    <br />
                </div>
                <div className='product-container'>
                    {data_product.map(item => {
                        return <Item key={item.id} id={item.id} category={item.category} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                    })}
                </div>
            </PopularSection>
        </>
    )
}

export default Popular

const PopularSection = styled.section`
display: center;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: var(--ff-general);
padding-bottom: 4rem;

    .popular-title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    #title {
        font-weight: var(--fw-800);
        font-size: var(--fs-3);
    }

    #line {
        background: black;
        height: 5px;
        width: 200px;
    }

    .product-container{
        display: flex;
        justify-content: center;
        align-items: center;    
        flex-wrap: wrap;
        height: 100%;
    }

    @media (max-width: 1024px) {
        #title {
            font-size: var(--fs-2-5);
        }

        #line {
            height: 3px;
        }
    }

    @media (max-width: 867px) {
        #title {
            font-size: var(--fs-1-5);
        }
    }

    @media (max-width: 867px) {
        #title {
            font-size: var(--fs-1-3);
        }

        #line {
            width: 130px;
        }   
    }

    @media (max-width: 600px) {
        #title {
            font-size: var(--fs-1);
        }

        #line {
            width: 100px;
        }   
    }

    @media (max-width: 375px) {
        #title {
            font-size: var(--fs-1);
        }

        #line {
            width: 90px;
        }   
    }
`
