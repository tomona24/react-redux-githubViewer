import { createStore } from 'redux';
import issueReducer from './reducers';

const store = createStore(issueReducer);

export default store;
