import { CREATE_COURSE } from "../constants";

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return { ...state, course: action.course };
    default:
      return state;
  }
};

export default courseReducer;