import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import ToDoDisplay from './ToDoDisplay';

const ToDo = () => {

  return (
    <div className="App">
      <ToDoDisplay />
      <Input type='text' />
    </div>
  );
};

export default ToDo;