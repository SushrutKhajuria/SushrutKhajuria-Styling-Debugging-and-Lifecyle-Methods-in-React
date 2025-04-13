// Write your code at relevant places in the code below:

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid , setIsvalid] = useState(true)

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
        setIsvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
        if(enteredValue.trim().length === 0){
            setIsvalid(false)
            return
        }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black' }} 
               htmlFor="goalInput">Course Goal</label>
        <input style={{borderColor: !isValid ? "red" : "black" ,
                       background: !isValid ?"lightpink" : "transparent" 
        }} 
                       id="goalInput" 
                       type="text" 
                       onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
