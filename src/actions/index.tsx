import { loginPost, itemsGet, itemGet, itemsStatesGet } from '../utils' 
import actionTypes from './actionTypes';

export const addToken = (Token: number, RefreshToken = null) => ({
  type: 'ADD_TOKEN',
  payload: { Token, RefreshToken }
});

export const changeLocale = (locale: any) => ({
  type: actionTypes.LOCALE_CHANGE,
  payload: locale
});

export const setLocaleAsUpdated = () => ({
  type: actionTypes.LOCALE_UPDATED
});


export const logout = () => {
  return (dispatch: any) => {
    dispatch(removeToken());
    dispatch(changeStatesFilter('all'));
    dispatch(removeItems());
  }
}

export const removeToken = () => (
  {
    type: 'REMOVE_TOKEN'
  }
);

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST
});

const loginSuccess = (response: any) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { response }
});

const loginFailure = (error: any) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: { error }
});

export const loginAction = (userLogin: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(loginRequest())
      let res = await loginPost(userLogin);
      dispatch(loginSuccess(res));
    } catch (e) {
      dispatch(loginFailure(e));
    }
  }
}


const itemsRequest = () => ({
  type: actionTypes.ITEMS_REQUEST
});

const itemsSuccess = (items: any) => ({
  type: actionTypes.ITEMS_SUCCESS,
  payload: { items }
});

const itemsFailure = (error: any) => ({
  type: actionTypes.ITEMS_FAILURE,
  payload: { error }
});

export const removeItems = () => (
  {
    type: actionTypes.REMOVE_ITEMS
  }
)

export const itemsAction = (token: number, page: number, filter = null) => {
  return async (dispatch: any) => {
    try {
      dispatch(itemsRequest())
      let res = await itemsGet(token, page, filter);
      dispatch(itemsSuccess(res.Data.Items));
    } catch (e) {
      dispatch(itemsFailure(e));
    }
  }
}

//marekova trojička

const itemRequest = () => ({
  type: actionTypes.ITEM_REQUEST
});

const itemSuccess = (item: any) => ({
  type: actionTypes.ITEM_SUCCESS,
  payload: { item }
});

const itemFailure = (error: any) => ({
  type: actionTypes.ITEM_FAILURE,
  payload: { error }
});


export const itemAction = (token: number, id: number) => {
  
  return async (dispatch: any) => {  
    try {
      dispatch(itemRequest())
      let res = await itemGet(token, id);
      dispatch(itemSuccess(res.Data));
    } catch (e) {
      dispatch(itemFailure(e));
    }
  }
}

//marekova trojička end

const addItemsRequest = () => ({
  type: actionTypes.ITEMS_REQUEST
});

const addItemsSuccess = (items: any) => ({
  type: actionTypes.ADD_ITEMS_SUCCESS,
  payload: { items }
});

const addItemsFailure = (error: any) => ({
  type: actionTypes.ITEMS_FAILURE,
  payload: { error }
});

export const addItemsAction = (token: number, page: number, filter = null) => {
  return async (dispatch: any) => {
    try {
      dispatch(addItemsRequest())
      let res = await itemsGet(token, page, filter);
      dispatch(setLoading());
      dispatch(addItemsSuccess(res.Data.Items));
      dispatch(setFinishedLoading());
    } catch (e) {
      dispatch(addItemsFailure(e));
    }
  }
}

const itemsStatesRequest = () => ({
  type: actionTypes.ADD_STATES_REQUEST
});

const itemsStatesSuccess = (states: any) => ({
  type: actionTypes.ADD_STATES_SUCCESS,
  payload: { states }
});

const itemsStatesFailure = (error: any) => ({
  type: actionTypes.ADD_STATES_FAILURE,
  payload: { error }
});

export const itemsStatesAction = (token: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(itemsStatesRequest())
      let res = await itemsStatesGet(token);
      dispatch(itemsStatesSuccess(res.Data.Items));
    } catch (e) {
      dispatch(itemsStatesFailure(e));
    }
  }
}

export const changeStatesFilter = (filter: any) => {
  return (dispatch: any) => {
    dispatch(changePage(0))
    dispatch(changeStatesFilterSuccess(filter))
  }
}

const changeStatesFilterSuccess = (filter: any) => (
  {
    type: actionTypes.CHANGE_STATES_FILTER,
    payload: { filter }
  }
)

const setLoading = () => (
  {
    type: actionTypes.SET_LOADING
  }
)

const setFinishedLoading = () => (
  {
    type: actionTypes.SET_FINISHED_LOADING
  }
)

export const changePage = (page: number) => (
  {
    type: actionTypes.CHANGE_PAGE,
    payload: { page }
  }
)

export const changeSearchFilter = (search: any) => {
  return (dispatch: any) => {
    dispatch(changePage(0))
    dispatch(changeSearchFilterSucces(search))
  }
}

const changeSearchFilterSucces = (search: any) => (
  {
    type: actionTypes.CHANGE_SEARCH_FILTER,
    payload: { search }
  }
)