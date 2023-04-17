import { createSlice } from "@reduxjs/toolkit";

interface ItemType {
  id: number;
  value: string;
}

interface StateTypes {
  items: ItemType[];
}

const initialState = {
  items: [],
} as StateTypes;

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        value: action.payload.task,
      };
      state.items.push(newTask);
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
