import React from 'react';
import Counter from './hoc';
function HoverIncrement(props) {
    return ( 
        <>
           {props.name}<button onMouseEnter={props.increment}>Hover {props.count} count</button>
        </> 
    );
}

export default Counter(HoverIncrement,10);