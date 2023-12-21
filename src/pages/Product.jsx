import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/productDetail/Breadcrumbs'
import DescriptionBox from '../components/productDetail/DescriptionBox'
import ItemDetail from '../components/productDetail/ItemDetail'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { id } = useParams()

    const product = all_product.find((item) => item.id === Number(id))

    return (
        <>
            <Breadcrumbs product={product} />
            <ItemDetail product={product} />
            <DescriptionBox />
        </>
    )
}

export default Product
