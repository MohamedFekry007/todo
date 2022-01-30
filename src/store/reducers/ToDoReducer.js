import { STORE_NEW_TODO } from '../constants/ToDoConstants';

const initialState = {
    todosList: [],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_NEW_TODO:
            return {
                ...state,
                todosList: action.payload,
            }
        default:
            return state;
    }
};

export default todosReducer;
