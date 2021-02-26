import Product from './Product';
import data from '../data';
import styles from '../styles/styles';
import { useState, useEffect } from 'react';

/*Returns LandingPage UI*/
function LandingPage() {

  const [products, setProducts] = useState([]);

  /*In real world app, fetch data from database, etc
    then setProducts with data to display on page */
  useEffect(() => 
  {
    setProducts(data);
  });

  return (
      <div style={styles.baseStyles.landingPage}> 
              {products.map((item) => <Product item = {item}  />)}         
      </div>
  );
}


export default LandingPage;
 