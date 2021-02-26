import styles from '../styles/styles';
import { useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux';
import functions from '../functions/functions';
import priceConstants from '../constants/priceConstants';

/*Returns item details for single product  */
function ItemDetails() {
  const location = useLocation();
  const item = location.state.params;
  let dispatch = useDispatch();

  const salePriceText = (item.onSale) ? 'Sale Price: ' + functions.calculateSalePrice(item.price) + priceConstants.dollarSign : '';
  const priceStyles = (item.onSale) ? {textDecoration : 'line-through'} : {};
 
  const addItem = () =>{
    dispatch({type:'ADD', payload: item})
  }

  return (
   <div style={{display: 'flex', justifyContent: 'center'}}>
    <div  style ={{ ...styles.itemDetailsStyles.container}}>
       <div>
          <div style={{ fontSize: 35, marginBottom: 5}}>
            {item.name}
          </div>
          <img src={item.image} style = {styles.itemDetailsStyles.image} alt="product-image" />
       </div>
      <div style={{ marginTop: 50}}>
          <div style={styles.itemDetailsStyles.text}> 
            {item.description}
          </div>
          <div style={styles.itemDetailsStyles.text}>
            SKU: {item.SKU}
          </div>
          <div style= {{...styles.itemDetailsStyles.text, ...priceStyles}}>
            Price: {item.price + priceConstants.dollarSign}
          </div>
          <div style={{color : 'red'}}>
            {salePriceText}
          </div>
          <div style= {styles.itemDetailsStyles.text}>
            Inventory: {item.inventory}
          </div>
          <button onClick={addItem} style={styles.buttonStyles.button}>
            Add To Cart
          </button>                 
       </div>
    </div>
  </div>
    
    
  );
}


export default ItemDetails;