import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

// const initialState = {
//   courses: [],
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // initialState,
  composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
);

export default store;
