import { createStore } from 'redux';
import issueReducer from './issueReducer';

const store = createStore(issueReducer);

export default store;
