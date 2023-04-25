import React from 'react';
import Counter from './hoc';
function ClickCounter(props) {
    return ( 
        <>
            {props.name}<button onClick={props.increment}>click {props.count} count</button>
        </>
     );
}

export default Counter(ClickCounter,5);