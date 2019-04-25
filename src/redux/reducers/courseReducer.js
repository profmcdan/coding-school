import { CREATE_COURSE } from "../actions/actionTypes";

const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  if (action.type === CREATE_COURSE) {
    return Object.assign({}, state, {
      courses: state.courses.concat(action.payload),
    });
  }
  return state;
};

export default courseReducer;
