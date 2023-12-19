import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ItemDetail from '../components/ItemDetail'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { id } = useParams()

    const product = all_product.find((item) => item.id === Number(id))
    return (
        <>

            <Breadcrumbs product={product} />
            <ItemDetail product={product} />

        </>
    )
}

export default Product
