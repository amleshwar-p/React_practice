import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn React Native', completed: false },
    ],
    addTodo: (todo) => { },
    removeTodo: (id) => { },
    toggleTodo: (id) => { },
    updateTodo: (id, todo) => { }

})


export const useTodo = () => {
    return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider