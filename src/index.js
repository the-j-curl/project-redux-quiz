import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { App } from "./App";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { quiz } from "reducers/quiz";
// import { Provider } from "react-redux";

// const reducer = combineReducers({
//   quiz: quiz.reducer,
// });

// const store = configureStore({ reducer });

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
