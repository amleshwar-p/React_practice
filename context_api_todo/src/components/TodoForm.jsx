import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");

    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (todo.trim()) {
            addTodo({ id: Date.now(), text: todo, completed: false });
            setTodo(""); // Reset the input field
        }
    };

    return (
        <form onSubmit={add} className="flex shadow-md rounded-lg overflow-hidden">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border-none rounded-l-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
            />
            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-r-lg transition duration-150 ease-in-out"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
