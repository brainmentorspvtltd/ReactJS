import {createStore} from 'redux';
import reducer from '../reducers/calcreducer';
const store = createStore(reducer);
export default store;