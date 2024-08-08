export const addToCart=(data)=>{
    console.warn("action is called_",data)
    return {
        type:'ADD_TO_CART',
        data:data
    }
}