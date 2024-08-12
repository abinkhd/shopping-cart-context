import React, { useReducer } from 'react'
import { faker } from "@faker-js/faker";
import shopContext from './shopContext';

const ShopComponent = (props) => {
    faker.seed(99)
    const products = [...Array(21)].map(() => {
        return {
            id: faker.datatype.uuid(),
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr({ category: 'food' }),
            inStock: faker.number.int({ min: 0, max: 7 }),
            fastDelivery: faker.number.int({ min: 0, max: 1 }) == 0 ? true : false,
            rating: faker.number.int({ min: 1, max: 5 })
        }
    })

    const reducer=(state , action)=>{
        switch(action.type){
            case 'ADD_TO_CART':
                return {...state , cart:[...state.cart, {...action.payload, qty:1}]}
            case 'REMOVE_FROM_CART':
                return {...state , cart:[...state.cart.filter((p)=>p.id!==action.payload)]}    
            default:
                return state    
        }
        
    }
    
    const [shop , dispatch]=useReducer(reducer , {products:products, cart:[]})

    const filterReducer=(state,action)=>{
        switch(action.type){
            case'SORT_BY_PRICE':
            return {...state,sortBy:action.payload}
            case 'TOGGLE_INCLUDE_OUT_OF_STOCK':
            return {...state,includeOutOfStock:!state.includeOutOfStock}
            case 'TOGGLE_FAST_DELIVERY':
            return {...state,fastDelivery:!state.fastDelivery}
            default:
                return state
            
            }}
    

    const [filter,filterDispatch]=useReducer(filterReducer,{sortBy:[],includeOutOfStock:false,fastDelivery:false})
    return (
        <shopContext.Provider value={{shop , dispatch,filter,filterDispatch}}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopComponent