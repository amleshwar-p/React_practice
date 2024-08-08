import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodohandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    };

    return (
        <form
            onSubmit={addTodohandler}
            className="flex flex-col items-center bg-[#1e2a38] shadow-lg rounded-lg p-6 max-w-md mx-auto"
        >
            <h2 className="text-2xl font-semibold text-white mb-4">Add a New Todo</h2>
            <input
                type="text"
                placeholder="Enter Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150"
            />
            <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
            >
                Add Todo
            </button>
        </form>
    );
};

export default AddTodo;
