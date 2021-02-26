import styles from '../styles/styles';
import functions from  '../functions/functions';
import priceConstants from '../constants/priceConstants';

/*Returns UI for each receipt item*/
function ReceiptItem({item}) {
   const price = (item.onSale) ? functions.calculateSalePrice(item.price) : item.price;

  return (
    <div style = {styles.cartReceiptStyles.item}>
        <div style= {{textAlign: 'left'}}>
            <div style={{fontWeight: 'bold'}}>
                {item.name}
            </div>
            <img src={item.image} style = {styles.cartReceiptStyles.image} alt="product-image" />
            <div style={{fontSize: 12}}>
                {item.SKU}
            </div>
        </div>
        <div style={{textAlign: 'left', width: '50%'}}>
            <div style={{marginTop: 15}}>
                {item.description}
            </div>
            <div style={{ color: 'red'}}>
                {(item.onSale) ? 'On Sale' : ''}
            </div>
        </div>
        <div style={{textAlign: 'right'}}>
            <div style={{fontSize: 35, marginTop: 10, color : (item.onSale) ? 'red' : 'black'}}>
                {priceConstants.dollarSign + price}
            </div>
            <div>
                {'Quantity: '}{item.quantity} 
            </div>
        </div>
    </div>
   
  );
}

export default (ReceiptItem); 
