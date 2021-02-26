import styles from '../styles/styles';
import functions from  '../functions/functions';
import priceConstants from '../constants/priceConstants';

/* Returns order summary - displayed on Cart / Receipt page*/
function Summary({totalItems, subTotal, tax, total}) { 
    return (
        <>
          <div style={styles.summaryStyles.container}>
            <div style={styles.summaryStyles.labels}>
               Total Items:
            </div>
            <div>
               {totalItems}
            </div>
          </div>
          <div style={styles.summaryStyles.container}>
            <div style={styles.summaryStyles.labels}>
               Subtotal:
            </div>
            <div>
               {priceConstants.dollarSign + functions.roundDecimal(subTotal)}
            </div>
          </div>
          <div style={styles.summaryStyles.container}>
            <div style={styles.summaryStyles.labels}>
              Tax:
            </div>
            <div>
              {priceConstants.dollarSign + functions.roundDecimal(tax)}
            </div>
          </div>
          <div style={styles.summaryStyles.container}>
            <div style={styles.summaryStyles.labels}>Shipping:</div>
            <div>{priceConstants.dollarSign + functions.roundDecimal(priceConstants.shipping)}</div>
          </div>
          <div style={styles.summaryStyles.container}>
            <div style={styles.summaryStyles.labels}>Total:</div>
            <div>{priceConstants.dollarSign + functions.roundDecimal(total)}</div>
          </div>
        </>
    );
}

export default Summary;