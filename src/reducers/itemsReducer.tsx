
import actionTypes from '../actions/actionTypes';


const items = (state = { items: [], page: 1 }, action: any) => {
    switch (action.type) {
        case actionTypes.ITEMS_SUCCESS:
            return { ...state, items: action.payload.items }

        case actionTypes.ADD_ITEMS_SUCCESS:
            return { ...state, items: [...state.items, ...action.payload.items], page: state.page + 1 }

        case actionTypes.CHANGE_PAGE:
            return { ...state, page: action.payload.page }

        case actionTypes.REMOVE_ITEMS:
            return { ...state, items: [] }

        default:
            return state;
    }

}

export default items;