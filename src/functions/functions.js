 import priceConstants from '../constants/priceConstants';
  
  /*Calculates subTotal of all items currently in cart */
  const calculateSubTotal = (cartItems) =>{
     let subTotal  = 0;
     
     Object.keys(cartItems).forEach((key) =>{
        let cost = (cartItems[key].onSale) ? cartItems[key].price - (cartItems[key].price * priceConstants.sale) : cartItems[key].price;
        subTotal += (cartItems[key].quantity * cost);
     })

     return subTotal;
   }
   
  /*Calculates tax based on current cart items subTotal */
  const calculateTax = (subTotal) =>{
     let tax = subTotal * priceConstants.tax;
     return tax;
   }

  /*Calculates total based on current cart items subTotal, tax and shipping price */
  const calculateTotal = (subTotal, tax) =>{
    let total = subTotal + tax + priceConstants.shipping;
    return total;
   }

  /*Calculates sale price for a given item 
    based on sale price rate 
    (currently fixed at 15%)
  */
   const calculateSalePrice = (price) =>{
     let result = price - (priceConstants.sale * price);
     return result;
   }

   /*Rounds value to 2 decimal places*/
   const roundDecimal = (num) => {
    let result = Number.parseFloat(num).toFixed(2);
    return result;
   }

   let functions = {
       calculateSubTotal : calculateSubTotal,
       calculateTax : calculateTax,
       calculateTotal : calculateTotal,
       calculateSalePrice : calculateSalePrice,
       roundDecimal : roundDecimal,
   }


   export default functions;