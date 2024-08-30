// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import Login from './components/Login';
import Signup from './components/SignUp';
import Navbar from './components/Navbar'; // Ensure this path is correct
import store from './redux/store.'; // Ensure this path is correct
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
