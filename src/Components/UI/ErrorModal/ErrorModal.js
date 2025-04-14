import React from 'react';
import Card from '../UI/Card';  // Fixed path
import Button from '../UI/Button';  // Added missing import
import './ErrorModal.css';  // Added CSS import

const ErrorModal = (props) => {
  return (
    <div>
      <div className='backdrop' onClick={props.onConfirm}></div>
      <Card className="modal">
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;