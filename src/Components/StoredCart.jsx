import React, { useContext, useState } from 'react';
import { allClear, getStoredCart, removeFromDb } from '../Utilitis/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { CartContext } from '../App';
import { toast } from 'react-hot-toast';

const StoredCart = () => {


    // const {cartArray} = useLoaderData()
    // const [cart,setCart] = useContext(CartContext)
    const [isopen ,setIsOpen] = useState(false)
    const { cartArray } = useLoaderData()
    const [cart, setCart] = useState(cartArray)


    const sessionGet = sessionStorage.getItem('add-product')
    if (cart.length > 0 && sessionGet !== 'true') {
        toast('wellcome to our page')
        setIsOpen(true)
        sessionStorage.setItem('add-product',isopen)
    }


    const hanldePlaceOrder = () => {
        if (cart.length > 0) {
            allClear()
            setCart([])
            toast.success('your order is accepted')
        }
        else {
            toast('please add your product')
        }
    }


    const handleRemove = (id) => {

        removeFromDb(id)
        const cartfind = cart.filter(ca => ca.id != id)
        if (cartfind) {
            setCart(cartfind)
            toast('Your Item Deleted')

        }

    }

    const deleteCartHandler = () => {
        allClear()
        setCart([])
        toast('You All item Deleted')
    }

    let total = 0


    if (cart.length > 0) {
        for (const product of cartArray) {

            // if(product.quantity === 0){
            //     product.quantity = 1 
            // }
            total = total + product.price * product.quantity

        }
    }


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'> {cart.length ? 'Review Cart Item' : 'Cart is EMPTY'}</h2>

                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cart.map(product => <CartItem handleRemove={handleRemove} key={product.id} product={product}></CartItem>)
                    }

                </ul>


                <div className='space-y-1 text-right'>
                    <p className='semibold'>Total amount : <span className='font-semibold'>{total}$</span></p>
                    <p className='text-sm text-gray-400'>Not including taxes and shipping costs </p>
                </div>


                {/* btn section  */}
                <div className='flex justify-end space-x-4'>

                    {
                        cart.length > 0 ? (
                            <button onClick={deleteCartHandler} className='btn-outlined'>Clear cart</button>
                        ) : (
                            <Link to='/shop' className='btn-outlined'>Back To Shop </Link>

                        )
                    }


                    <button onClick={hanldePlaceOrder} className='btn-primary'>Place Order</button>


                </div>

            </div>
        </div>
    );
};

export default StoredCart;