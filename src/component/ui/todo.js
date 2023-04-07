import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addTodo, deleteTodo, updateTodo, editTodo } from '../action/indexAction';
function Todo() {
    const [inputData, setInputData] = useState('');
    // Getting existing index
    const [editIndex, setEditIndex] = useState();

    const [editBtn, setEditBtn] = useState(false);
    
    const dispatch = useDispatch();
    
    const list = useSelector((state)=> state);

    const submitData = () =>{
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: inputData,
          completed: false
      }
        dispatch(addTodo(todoObj))
        setInputData('')
    }
    const EditListData = (index) =>{
        console.log("editlist");
        setEditBtn(!editBtn) 
        setEditIndex(index)
    }
    const UpdateData = (id)  =>{
        let editedObj={
            id: id,
            todo: inputData,
            completed: false
          }
          dispatch(editTodo(editedObj))
          setEditBtn(!editBtn)
          setInputData('')
    }

    console.log(list, "todo.js");
    
    return ( <>
        <div className='container'>
            <div className='row g-0'>
                <div className='col-12 d-flex justify-content-center pt-5'>
                    <input type='text' placeholder='' value={ inputData ||""} onChange={(e) => setInputData(e.target.value)} />
                    {
                       editBtn?
                       <button type='button' className='btn btn-success' onClick={() => {UpdateData(editIndex)}}>Update</button>
                       :<button type='button' className='btn btn-primary' onClick={()=>{submitData()}}>Add</button>
                       
                    }
                </div>
            </div>
            <div className='row g-0'>
                <div className='col-12 d-flex justify-content-center flex-column'>
                    {
                        list && list.map((data, index)=> {
                            return(
                            <div className='col-12 pb-3 d-flex align-items-center justify-content-between' key={data.id}>
                                <p style={data.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                                   {data.todo}
                                </p>
                                <div className='col-6'>
                                <input type='checkbox' 
                                        onClick={() => dispatch(updateTodo(index))} 
                                        checked={data.completed}
                                    />
                                    <button className='btn btn-success ms-2' 
                                        onClick={()=> {EditListData(data.id); setInputData(data.todo)}}>Edit</button>
                                    <button className='ms-2 btn btn-danger' 
                                        type='button' onClick={() => dispatch(deleteTodo(data.id))}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </> );
}

export default Todo;