  
import actionTypes from '../actions/actionTypes';


const status = (state = {page: 'login'}, action: any) => {
    switch(action.type){
        case 'CHANGE_PAGE':
            return {...state, page: action.payload.page};

        default:
            return state;
    }

}

export default status;