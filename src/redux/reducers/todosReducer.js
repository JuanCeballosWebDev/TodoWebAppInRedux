import * as types from '../constants/actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [
        {
            id: uuidv4(),
            text: 'Use Redux',
            completed: false
        }
    ],
}

 const todosReducer = (state = initialState, action) =>{

    let todoList = [];

    switch(action.type) {
        case types.ADD_TODO: {
            todoList = [...state.todos, {
                id:  uuidv4(),
                text: action.payload,
                completed: false
            }];
            return {
                todos: todoList
            };
        }   
        case types.TOGGLE_TODO: {
          const newTodos = [...state.todos];
          const index = newTodos.findIndex((todo) => todo.id === action.payload);
          newTodos[index].completed = !newTodos[index].completed;
        
          return {
            todos: newTodos
          };
        
        }
        case types.DELETE_TODO: {
         
            const temporaryTodos = [];
            state.todos.forEach((todo) => {
              if (todo.id !== action.payload) temporaryTodos.push(todo);
            });
            
            return {
                todos: temporaryTodos
              };
         
        }    
        default: {
            return state;
        }
    }   

  }

export default todosReducer;