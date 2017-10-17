import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))


// import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from './redux';

// export default createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
// );
