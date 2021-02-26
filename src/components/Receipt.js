import { useEffect } from 'react';
import styles from '../styles/styles';
import ReceiptItem from './ReceiptItem';
import { useDispatch, useStore } from 'react-redux';
import { useLocation } from "react-router-dom";
import Summary from './Summary';

/*Returns UI for receipt page */
function Receipt() {
  const cartItems = useStore().getState().cartItems;
  const totalItems =  useStore().getState().totalItems;
  const location = useLocation();
  const dispatch = useDispatch();
  const cost = location.state.params;

  useEffect(()=>{
    dispatch({type:'CLEAR'})
  })

  return (
    <div style={styles.cartReceiptStyles.container} >
      <div>
        {Object.keys(cartItems).map((key) => 
              <ReceiptItem item = {cartItems[key]}/>
        )} 
      </div>
      <div style={styles.cartReceiptStyles.summary} >
        <div style={{textAlign: 'center', marginBottom: 15}}>
          Order Summary
        </div>
        <Summary totalItems = {totalItems} subTotal={cost.subTotal} tax = {cost.tax} total = {cost.total} />
      </div>
  </div>
  );
  
}


export default Receipt;
