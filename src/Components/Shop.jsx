import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utilitis/fakeDb';
import { CartContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';


const Shop = () => {
    const productData = useContext(ProductContext)
    const [cart,setCart] = useContext(CartContext)
   
    const handleAddToCart =(product)=>{
        let newCart = []
        const exists = cart.find(
            existingProduct => existingProduct.id === product.id
        )
        if(!exists){
            product.quantity = 1 
            newCart =[...cart, product]

        }
        else{
            const rest = cart.filter(existingProduct=> existingProduct.id !== product.id)
            exists.quantity = exists.quantity+1 
            newCart = [...rest,exists]

        }
        setCart(newCart)
        addToDb(product.id)

        toast.success('Your products Succsesfully added')



           
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