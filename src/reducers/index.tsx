import status from './statusReducer';
import user from './userReducer';
import items from './itemsReducer';
import locale from './localeReducer';
import loading from './loadingReducer';
import { combineReducers } from 'redux';
import  itemsStates  from './itemsStatesReducer'
import statesFilter from './statesFilterReducer'
import item from './itemReducer';
import searchFilter from './searchReducer';

const rootReducer = combineReducers({
    status,
    user,
    items,
    locale,
    loading,
    itemsStates,
    statesFilter,
    item,
    searchFilter,
});

export default rootReducer;