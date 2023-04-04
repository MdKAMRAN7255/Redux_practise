import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../index';
import { bindActionCreators } from 'redux';
function Shop() {
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch);
    return ( <>
    <div className='d-flex justify-content-center col-12 align-items-center pt-4'>
        {/* <button className="btn btn-warning" 
                onClick={()=> 
                {dispatch(actionCreators.depositMoney(100))}}>
            +</button>
        Change Amount
        <button className="btn btn-warning" onClick={()=> 
                {dispatch(actionCreators.withdrawMoney(100))}}>
            -</button> */}
        <button className="btn btn-warning" 
                onClick={()=> 
                {action.depositMoney(100)}}>
            +</button>
        Change Amount
        <button className="btn btn-warning" onClick={()=> 
                {action.withdrawMoney(100)}}>
            -</button>
    
    </div>
    </> );
}

export default Shop;