import React from 'react';
function HoverCounter(props) {
    return ( 
        <>
            <button 
                onMouseEnter={props.countIncrement}>
                Hover {props.count} count</button>
        </>
     );
}

export default HoverCounter;