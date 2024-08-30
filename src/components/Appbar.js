import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddStudentDialog from './AddStudentDialog'; // Import the AddStudentDialog component

function Appbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveStudent = (name, age) => {
    // Handle the logic for saving the student data
    console.log(`Student Name: ${name}, Student Age: ${age}`);
    // You might want to send this data to a backend or store it in state
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" onClick={handleClickOpen}>
          Add Student
        </Button>
        <AddStudentDialog
          open={open}
          handleClose={handleClose}
          handleSave={handleSaveStudent}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
