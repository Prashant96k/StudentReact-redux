// AddStudent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from './actions';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addStudent({ id: Date.now(), name, age }));
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddStudent;
