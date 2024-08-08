import { ADD_TO_CART } from "./constants"

export const cartData=(data=[],action)=>{
    console.warn("reducer called",action)
    if(action.type===ADD_TO_CART){
        return data
    }else{
        return 'No Action called !'
    }
    return 100
}