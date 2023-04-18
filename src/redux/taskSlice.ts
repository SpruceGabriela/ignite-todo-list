import { createSlice } from "@reduxjs/toolkit";

interface ItemType {
  id: number;
  value: string;
  isChecked: boolean;
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
        isChecked: false,
      };

      state.items.push(newTask);
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    },
    toggleCheck: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload.id);
      if (task) {
        task.isChecked = !task.isChecked;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCheck } = taskSlice.actions;
export default taskSlice.reducer;
