import { CREATE_COURSE } from "../constants";

export const createCourse = course => {
  return { type: CREATE_COURSE, course: course };
};
