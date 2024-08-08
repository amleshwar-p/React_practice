import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../Features/todo/todoSlice';
import { useState } from 'react';

function Todos() {
    const todos = useSelector(state => state.todos); // Adjusted to access 'todo' slice
    const dispatch = useDispatch();
    const [editText, setEditText] = useState("");
    const [editingTodoId, setEditingTodoId] = useState(null);

    const handleUpdateClick = (todo) => {
        setEditingTodoId(todo.id);
        setEditText(todo.text);
    };

    const handleUpdateSubmit = (todo) => {
        dispatch(updateTodo({ id: todo.id, text: editText }));
        setEditingTodoId(null); // Close the input after updating
    };

    return (
        <div className="bg-[#1e2a38] shadow-lg rounded-lg p-6 max-w-md mx-auto mt-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Todos:</h2>
            <ul className="list-none space-y-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-600"
                    >
                        <div>
                            {editingTodoId === todo.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="text-black rounded p-1 mr-2"
                                />
                            ) : (
                                <span>{todo.text}</span>
                            )}
                        </div>
                        <div className='flex'>
                            {editingTodoId === todo.id ? (
                                <button
                                    onClick={() => handleUpdateSubmit(todo)}
                                    className="bg-green-600 text-white py-1 px-2 flex items-center justify-center focus:ring-2 transition duration-150"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleUpdateClick(todo)}
                                    className="bg-cyan-600 text-white py-1 px-2 flex items-center justify-center focus:ring-2 transition duration-150"
                                >
                                    Update
                                </button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="bg-red-600 text-white mx-2 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
                            >
                                X
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
