import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.text);

    const { updateTodo, removeTodo, toggleTodo } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, text: todoMsg });
        setIsTodoEditable(false);
    };

    const handleToggleCompleted = () => {
        toggleTodo(todo.id);
    };

    return (
        <div
            className={`flex items-center border border-gray-200 rounded-lg px-4 py-2 gap-x-3 shadow-md transition duration-300 ${todo.completed ? "bg-green-100" : "bg-pink-100"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer w-5 h-5"
                checked={todo.completed}
                onChange={handleToggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg px-2 py-1 ${isTodoEditable ? "border-gray-300" : "border-transparent"
                    } ${todo.completed ? "line-through text-gray-500" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-200 justify-center items-center bg-gray-100 hover:bg-gray-200 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-200 justify-center items-center bg-gray-100 hover:bg-gray-200 shrink-0"
                onClick={() => removeTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
