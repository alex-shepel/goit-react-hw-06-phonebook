import contactsReducer from './contacts/reducer';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
