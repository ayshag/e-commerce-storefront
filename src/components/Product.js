import React from 'react';
import styles from '../styles/styles';
import {  useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import functions from '../functions/functions';
import priceConstants from '../constants/priceConstants';

/*Returns UI for each product card on landing page*/
function Product({item}) {

  let history = useHistory();
  let dispatch = useDispatch();
  const salePriceDisplay = (item.onSale) ? functions.calculateSalePrice(item.price) + priceConstants.dollarSign : '';
  const priceStyle = (item.onSale) ? {textDecoration : 'line-through'} : {};

  const addItem = () =>{
      dispatch({type:'ADD', payload: item});
  }

  const redirectToItem = () =>{
    history.push("/item", {params : item})
  }
  
  return (
  <div style ={styles.productStyles.container}>
      <div style={styles.productStyles.name}>
          {item.name}
      </div>  
      <div>
          <img src={item.image} style = {styles.productStyles.image} alt="product-image" />
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 5}}>
              <div style={priceStyle}>{item.price + priceConstants.dollarSign}</div>
              <div style={{color : 'red'}}>{salePriceDisplay}</div>
          </div>
          <button style={styles.buttonStyles.button} onClick={redirectToItem}>More</button>
          <button onClick={addItem} style={{...styles.buttonStyles.button}}>Add To Cart</button>
      </div>       
    </div>
  );
}
export default (Product); 