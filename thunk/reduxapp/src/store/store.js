import {createStore,applyMiddleware} from 'redux';
import calcreducer from '../reducer/calcreducer';
import LoggerMiddleware from '../middleware/logmiddleware';
import thunk from 'redux-thunk';
const store = createStore(calcreducer,applyMiddleware(LoggerMiddleware,thunk));
export default store;