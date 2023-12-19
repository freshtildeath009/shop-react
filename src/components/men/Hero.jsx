import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ShopContext } from '../../context/ShopContext'
import Item from '../Item'
const Hero = () => {
    const { all_product } = useContext(ShopContext)

    const [men, setMen] = useState([])

    useEffect(() => {
        const result = all_product.map(item => {
            if (item.category === "men") {
                return < Item key={item.id} id={item.id} category={item.category} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            }
        })
        setMen(result)
    }, [])

    return (
        <>
            <HeroSection>
                <div className='hero-photo-container'>
                    <img id='banner-photo' src="./images/banner_mens.png" alt="" />
                </div>
                <div className='product-container'>
                    {men ? men : <h1>Loading...</h1>}
                </div>
            </HeroSection>
        </>
    )
}

export default Hero

const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: var(--ff-general);
    
        .hero-photo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        #banner-photo {
            width: 80%;
        }

        .product-container{
            display: flex;
            justify-content: center;
            align-items: center;    
            flex-wrap: wrap;
            height: 100%;
            margin-top: 2rem;
        }
`