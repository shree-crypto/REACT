import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "Hello Kitty" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(newTodo);
    },
    removeTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);

      if (existingTodo) {
        existingTodo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
