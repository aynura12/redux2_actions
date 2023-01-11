import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sort ,empty} from "../redux/actions/todoAction";

const Parent = () => {
    const [value,setValue]=useState("")
  const todo = useSelector((state) => state.todo);
//   const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleSubmit=(e )=>{
    e.preventDefault()
    dispatch({ type: "ADD", payload:value })
    setValue("")
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button >
          Add
        </button>
      </form>
      { todo.map((t, index) => (
        <span key={index}>{t}</span>
      ))}

      {/* <button onClick={()=>dispatch({type:"SORT"})}>Sort</button> */}
      <button onClick={() => dispatch(sort(todo))}>Sort</button>
      <button onClick={() => dispatch(empty(todo))}>Empty</button>
    </div>
  );
};

export default Parent;
