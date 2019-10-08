import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart] = useState([]);

	const addItem = (e, item) => {
		e.preventDefault();
		cart.setState(item);
	};

	return (
		<div className="App">
			<CartContext.Provider value={{cart}}>
				<Navigation cart={cart} />
				<ShoppingCart cart={cart}/>
			</CartContext.Provider>

			<ProductContext.Provider value={{products, addItem}}>
				<Route exact path="/" component={Products} />
				<Route path="/cart" component = {ShoppingCart}/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
