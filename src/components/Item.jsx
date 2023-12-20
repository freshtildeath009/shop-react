import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = (props) => {
    const { image, name, newPrice, oldPrice, id } = props

    return (
        <>
            <SingleItem>
                <div className='item-photo-container'>
                    <Link to={`/product/${id}`}><img id='photo' src={image} alt="" /></Link>
                </div>
                <div className='item-info-container'>
                    <h1 id='name'>{name}</h1>
                    <h4 id='price'>{newPrice}$ <span>{oldPrice}</span> </h4>
                </div>
            </SingleItem>
        </>
    )
}

export default Item

const SingleItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.8rem;
    width: 250px;
    @media (max-width: 560px){
        width: 200px;
    }
        .item-photo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .item-info-container {
            height: 100%;
            width: 100%;
        } 

        #price {
            font-weight: var(--fw-500);
            font-size: var(--fs-0-8);
        }

        span {
            text-decoration: line-through;
            color: rgba(0, 0, 0, 0.5);
        }
        #name {
            font-weight: var(--fw-400);
            font-size: var(--fs-0-9);
            margin: 1rem 0;
        }

        @media (max-width: 600px) {
            .item-photo-container {
                height: 250px;
            }
        }
`
