export const UPDATE_TITLE = "UPDATE_TITLE";
export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function updateTitle(newTitle) {
  console.log(newTitle);
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
}

// actions creators

export const addNewTodo = todo => {
  // action
  return {
    type: ADD_NEW_TODO,
    payload: todo
  };
};

export const toggleTodo = id => {
  // console.log(id)
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}