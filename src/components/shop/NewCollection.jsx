import React from 'react'
import styled from 'styled-components'
import new_collections from '../../../public/images/new_collections'
import Item from '../Item'

const NewCollection = () => {
    return (
        <>
            <NewCollectionSection>
                <div className='collection-title-container'>
                    <h1 id='title'>NEW COLLECTION</h1>
                    <br />
                    <br />
                    <p id='line'></p>
                </div>
                <div className='product-container'>
                    {new_collections.map(item => {
                        return <Item key={item.id} id={item.id} category={item.category} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                    })}
                </div>
            </NewCollectionSection>
        </>
    )
}

export default NewCollection

const NewCollectionSection = styled.section`
    display: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: var(--ff-general);
    
        .collection-title-container {
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
                font-size: var(--fs-0-9);
            }

            #line {
                width: 90px;
            }   
        }
`
