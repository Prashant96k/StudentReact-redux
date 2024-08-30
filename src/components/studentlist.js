// StudentList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from './actions';

const StudentList = () => {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} ({student.age})
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
