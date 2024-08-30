// actions.js
export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const SET_STUDENTS = 'SET_STUDENTS';
export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const editStudent = (student) => ({
  type: EDIT_STUDENT,
  payload: student,
});

export const deleteStudent = (id) => ({
  type: DELETE_STUDENT,
  payload: id,
});

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  payload: students,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const signupUser = (user) => ({
  type: SIGNUP_USER,
  payload: user,
});
