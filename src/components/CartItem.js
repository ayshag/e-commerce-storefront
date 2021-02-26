import styles from '../styles/styles';
import { useDispatch } from 'react-redux';
import quantityConstants from '../constants/quantityConstants';
import priceConstants from '../constants/priceConstants'
import functions from '../functions/functions'

/*Returns UI for each cart item*/
function CartItem({item, quantity}) {

    const dispatch = useDispatch();
    const quantityMap = quantityConstants.quantityMap;
    const salePriceText = (item.onSale) ? functions.calculateSalePrice(item.price) + priceConstants.dollarSign : '';
    const priceStyle = (item.onSale) ? {textDecoration : 'line-through'} : {};
  
    const removeItem = () =>{
      dispatch({type:'REMOVE', payload: item})
    }
  
    const updateQuantity = (e) =>{
      dispatch({type:'UPDATE', payload: {item : item, quantity : e.target.value}})
    }

    return (
     
       <div style = {styles.cartReceiptStyles.item}>
          <div style= {{textAlign: 'left'}}>
              <div style={{fontWeight: 'bold'}}>
                  {item.name}
              </div>
              <div> 
                  <img src={item.image} style = {styles.cartReceiptStyles.image} alt="product-image" />
              </div>
              <div style={{fontSize: 12}}>
                  {item.SKU}
              </div>
          </div>
          <div style={{marginLeft: 10, textAlign: 'left', width: '50%'}}>
              <div style={{marginTop: 15}}>
                  {item.description}
              </div>
              <div style={{ color: 'red'}}>
                  {(item.onSale) ? 'On Sale' : ''}
              </div>
          </div>
          <div style={{marginLeft: 10,textAlign: 'right'}}>
              <div  style={{fontSize: 25, marginTop: 10, ...priceStyle}}>
                  {item.price + priceConstants.dollarSign}
              </div>
              <div  style={{fontSize: 25,color : 'red'}}>
                  {salePriceText}
              </div>
              <div>
                  <select value={quantity} onChange={updateQuantity} style={{width: 50, marginTop: 5}}>
                      {quantityMap.map(({ label, value }) => (
                          <option key={value} value={value}>
                              {label}
                          </option>
                      ))} 
                  </select>
              </div>
              <div>
                  <button style={{marginTop: (item.onSale) ? 20 : 55, ...styles.buttonStyles.button}} onClick={removeItem}>Remove</button>  
              </div> 
          </div>
      </div> 
        );
    }

export default (CartItem); 
