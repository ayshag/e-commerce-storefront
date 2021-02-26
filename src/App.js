import logo from './logo.svg';
import './App.css';
import './components/LandingPage';
import LandingPage from './components/LandingPage';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ItemDetails from './components/ItemDetails';
import Receipt from './components/Receipt';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import promise from "redux-promise";

import reducer from './reducers/reducer';
import styles from './styles/styles';

const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composePlugin(applyMiddleware(promise)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar/>
        <div className="App" style={styles.baseStyles.appBackground}>
          <Switch>
            <Route exact path='/' component={LandingPage} /> 
            <Route exact path='/cart' component={Cart} /> 
            <Route exact path='/item' component={ItemDetails} /> 
            <Route exact path='/receipt' component={Receipt} /> 
          </Switch>      
        </div>
      </Router>
    </Provider>
  );
}

export default App;
