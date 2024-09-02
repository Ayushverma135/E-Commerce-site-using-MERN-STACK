import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducer';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;



// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

// import { cartReducer } from './reducers/cartReducer';
// import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

// // Combine your reducers
// const rootReducer = {
//     cart: cartReducer,
//     getProducts: getProductReducer,
//     getProductDetails: getProductDetailsReducer,
// };

// // Configure the store
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//     devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development mode
// });

// export default store;




// import { configureStore } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk'; // Import thunk as a named import

// import { cartReducer } from './reducers/cartReducer';
// import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

// // Combine your reducers
// const rootReducer = {
//     cart: cartReducer,
//     getProducts: getProductReducer,
//     getProductDetails: getProductDetailsReducer,
// };

// // Configure the store
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//     devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development mode
// });

// export default store;
