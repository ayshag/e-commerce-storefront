
const initialStore = {
    cartItems: {},
    totalItems : 0,
}

const reducer = (state = initialStore,action) => {
    if(action.type === "ADD"){
        let items = {...state.cartItems};
        let num = state.totalItems;

        /*If item not already in cart, add, else add to quantity */
         if(items[action.payload.SKU] === undefined)
        {
            items[action.payload.SKU] = {quantity: 1, ...action.payload};
        }
        else 
        {
            items[action.payload.SKU].quantity += 1;   
        }
 
        num += 1;
       
        return {
            ...state,
          cartItems : items,
          totalItems : num,
        }
    }
     else if(action.type === "REMOVE"){
        let items = {...state.cartItems};
        let num = state.totalItems;

        if(items[action.payload.SKU] !== undefined)
        {
            num -= items[action.payload.SKU].quantity;
            delete items[action.payload.SKU];
        }

        return {
            ...state,
            cartItems : items,
            totalItems : num,
        }
    } 
    else if(action.type === "UPDATE"){
        let items = {...state.cartItems};
        let num = state.totalItems;

        if(items[action.payload.item.SKU] !== undefined)
        {
            var orignal = items[action.payload.item.SKU].quantity;
            var updated = action.payload.quantity;

            if(updated > orignal)
                num += (updated - orignal);
            else
                num -= (orignal - updated);

            items[action.payload.item.SKU].quantity = parseInt(action.payload.quantity);
        }

        return {
            ...state,
           cartItems : items,
           totalItems : num,
        }
    } 
    else if(action.type === "CLEAR"){
        
        
        state = initialStore;
    } 
    
   return state;
}

export default reducer;