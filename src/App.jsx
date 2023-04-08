import React, { createContext, useState } from 'react';
import Header from './Components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Components/Footer';




export const ProductContext = createContext([])

export const CartContext = createContext([])



const App = () => {

  const { cartArray, products } = useLoaderData()

  const [cart, setCart] = useState(cartArray)

  return (
    <CartContext.Provider value={[cart, setCart]}>

      <ProductContext.Provider value={products}>
        <Header></Header>

        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </ProductContext.Provider>
    </CartContext.Provider>

  );
};

export default App;