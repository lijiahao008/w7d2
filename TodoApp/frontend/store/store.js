import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from '../reducers/root_reducer.js';
import thunk from '../middleware/thunk';



const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
