import { json } from "react-router-dom"


const addToDb = (id) => {
    let shoppingCart = {}
    const get = JSON.parse(localStorage.getItem('shopping-cart'))
    if (get) {
        shoppingCart = get
    }
    const value = shoppingCart[id]

    if (value) {
        let sum = value + 1
        shoppingCart[id] = sum

    }
    else {
        shoppingCart[id] = 1 

    }

    localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart ))
}


const getStoredCart =() =>{
    let shoppingCart = {}

    const cartData = JSON.parse(localStorage.getItem('shopping-cart'))
    if(cartData){
        shoppingCart = cartData

    }
    return shoppingCart
}


const removeFromDb=(id)=>{

    const storeShoppingCart =JSON.parse(localStorage.getItem('shopping-cart'))
    if(storeShoppingCart){
        if(id in storeShoppingCart){
            delete storeShoppingCart[id]
            localStorage.setItem('shopping-cart',JSON.stringify(storeShoppingCart))
        }
    }

}


const allClear=()=>{
 localStorage.removeItem('shopping-cart')
}

export {addToDb,getStoredCart,removeFromDb,allClear}