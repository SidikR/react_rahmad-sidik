import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [];

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue,
    },
    reducers: {
        tambahTodo: (state, action) => {
            const { newTitle } = action.payload;
            if (!newTitle) {
                alert("Inputan anda Kosong, Silakan Periksa");
            } else {
                state.todos.push({
                    id: uuidv4(),
                    title: newTitle,
                    completed: false,
                });
            }
        },
        hapusTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        handleComplete: (state, action) => {
            const { todoId } = action.payload;
            const todo = state.todos.find((todo) => todo.id === todoId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { tambahTodo, hapusTodo, handleComplete } = todoSlice.actions;

export default todoSlice.reducer;
