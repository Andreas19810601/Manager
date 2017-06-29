import { SET_USER } from './constants'
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSSAGE } from './constants'
import { combineReducers } from 'redux';
import { fromJS, Map } from 'immutable';
import findIndex from 'lodash/findIndex';
import shortid from 'shortid';

const initialState = fromJS({
    message: []
});


export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return state
                .set('user', action.user);
        case ADD_FLASH_MESSAGE:
            return state.set('message',[
                fromJS({
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text,
                })
           ])

        
        case DELETE_FLASH_MESSSAGE:
            const index = findIndex(state, { id: action.id });
            if (index >= 0) {
                return [
                    ...state.slice(o, index),
                    ...state.slice(index + 1)
                ];
            }
            return state;
        default:
            return state;
    }
}

function addFlashMessage(state = [], action = {}) {
    switch (action.type) {
        


        default: return state;
    }
}

// export default combineReducers({
//     loginReducer: loginReducer,
//     addFlashMessage: addFlashMessage,
// })



//export default loginReducer;
