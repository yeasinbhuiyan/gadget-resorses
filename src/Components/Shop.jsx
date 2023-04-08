import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utilitis/fakeDb';
import { ProductContext } from '../App';

const Shop = () => {
    const productData = useContext(ProductContext)
    console.log(productData)
    const handleAddToCart =(id)=>{
            addToDb(id)
    }
    return (
        <div className='product-container'>
            {   
            productData.map(product => <ProductCard handleAddToCart={handleAddToCart} product={product} key={product.id}></ProductCard>)

            }
        </div>
    );
};

export default Shop;