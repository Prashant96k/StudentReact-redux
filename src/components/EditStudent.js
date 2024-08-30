// EditStudent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editStudent } from './actions';

const EditStudent = ({ student }) => {
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editStudent({ ...student, name, age }));
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
};

export default EditStudent;
