// reducers.js
import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT, SET_STUDENTS, LOGIN_USER, SIGNUP_USER } from './actions';

const initialState = {
  students: [],
  user: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map(student =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload),
      };
    case SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case LOGIN_USER:
    case SIGNUP_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
