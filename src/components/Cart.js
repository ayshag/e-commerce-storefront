import { useState, useEffect } from 'react';
import styles from '../styles/styles';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import functions from  '../functions/functions';
import Summary from '../components/Summary';

/*Returns cart page UI*/
function Cart() {
  const history = useHistory();
  const cartItems = useSelector(state => state.cartItems);
  const totalItems = useSelector(state => state.totalItems);
  const [subTotal, setSubTotal] = useState(functions.calculateSubTotal(cartItems));
  const [tax, setTax] = useState(functions.calculateTax(subTotal));
  const [total, setTotal] = useState(functions.calculateTotal(subTotal, tax));

  useEffect(() => {
    setSubTotal(functions.calculateSubTotal(cartItems));
  }, [cartItems]);  
   
  useEffect(() =>{
    setTax(functions.calculateTax(subTotal))
  },[subTotal]);

  useEffect(() =>{
    setTotal(functions.calculateTotal(subTotal, tax))
  },[tax]);

  const redirectToReceipt = () =>{
    history.push("/receipt", {params : {subTotal : subTotal, tax : tax, total : total}})
  }

  return (
    (Object.keys(cartItems).length > 0) ?
      <div style={styles.cartReceiptStyles.container} >
        <div>
          {Object.keys(cartItems).map((key) => 
              <CartItem item = {cartItems[key]} quantity={cartItems[key].quantity}/>
          )}
        </div>
        <div style={styles.cartReceiptStyles.summary} >
              <Summary totalItems = {totalItems} subTotal = {subTotal} tax = {tax} total = {total} />
           <div>
              <button style={{marginTop: 25,...styles.buttonStyles.button}}  onClick={redirectToReceipt}>Purchase</button>
            </div>
          </div>
      </div> : <div>No items in cart</div>
  );
  
}


export default Cart;
