import {Link} from 'react-router-dom';
import { useSelector, } from 'react-redux';
import styles from '../styles/styles';

/*Returns navigation bar at the top of app*/
function NavBar() {
  const totalItems = useSelector(state => state.totalItems);
  const cartLink = 'Cart (' + totalItems + ')';
  
  return (   
   <nav style={styles.baseStyles.navbar}>
       <div style={styles.baseStyles.appName}>ShopHub</div>
       <div style={styles.baseStyles.navLinkContainer}>
          <Link style={styles.baseStyles.navLink} to='/cart'>{cartLink} </Link>
          <Link style={styles.baseStyles.navLink} to='/'>Home</Link>
       </div>
  </nav>
  );
}


export default NavBar;
