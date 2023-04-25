import React from 'react';
function ClickCounter(props) {
    return ( 
        <>
            <button 
                onClick={props.countIncrement}>
                Click {props.count} count</button>
        </>
     );
}

export default ClickCounter;