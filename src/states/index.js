import { combineReducers } from 'redux';

import { reduce as CustomerInfoState, actions } from './CustomerInfoState';

// Register your redux store under a unique namespace
const namespace = 'show-attributes';

export {namespace, actions};

// Combine the reducers
export default combineReducers({
  customerInfo: CustomerInfoState
});
