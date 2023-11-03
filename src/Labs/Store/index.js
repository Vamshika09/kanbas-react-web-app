import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples.js/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples.js/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples.js/AddRedux/addReducer";
import toDoReducer from "../a4/ReduxExamples.js/ToDos/toDoReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    toDoReducer
  },
});
export default store;