import { STORE_NEW_TODO } from '../constants/ToDoConstants';

const saveNewTodo = (todos) => {
    return async (dispatch) => {
        dispatch({ type: STORE_NEW_TODO, payload: todos });
    };
}

export { saveNewTodo }