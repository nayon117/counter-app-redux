import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";
// Todo: implement reducer function lately
const store = createStore(counterReducer)

export default store;