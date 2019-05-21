import { UPDATE_TITLE, ADD_NEW_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  title: "Title Of Your Todo List",
  todos: [
    {
      id: 1,
      value: 'Make a list',
      completed: false
    },
    { 
        id: 2, 
        value: 'Make it functional', 
        completed: false 
    },
    { 
        id: 3, 
        value: "Make it pretty", 
        completed: false }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: Date.now(),
          value: action.payload,
          completed: false
        })
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
}

export default reducer;