import React from 'react'
import Exclusive from '../components/shop/Exclusive'
import Hero from '../components/shop/Hero'
import NewCollection from '../components/shop/NewCollection'
import Offer from '../components/shop/Offer'
import Popular from '../components/shop/Popular'

const Shop = () => {
    return (
        <>
            <Hero />
            <Popular />
            <Exclusive />
            <NewCollection />
            <Offer />
        </>
    )
}

export default Shop
