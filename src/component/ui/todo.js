import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addTodo, deleteTodo } from '../action/indexAction';
function Todo() {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state)=> state.list)
    console.log(list);
    return ( <>
        <div className='container'>
            <div className='row g-0'>
                <div className='col-12 d-flex justify-content-center pt-5'>
                    <input type='text' placeholder='add todo' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button type='button' className='btn btn-primary' onClick={() => dispatch(addTodo(inputData), setInputData(''))}>+</button>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col-12 d-flex justify-content-center flex-column'>
                    {
                        list.map((data, index)=> {
                            return(
                            <div className='col-12 pb-3 d-flex align-items-center justify-content-between' key={data.id}>
                                <p className='align-middle'>{data.data}</p>
                                <button className='btn btn-danger' type='button' onClick={() => dispatch(deleteTodo(data.id))}>Delete</button>
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