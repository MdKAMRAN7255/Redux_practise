import React, { useState } from 'react';
function Counter(props) {
    const [count, setCount] = useState(0);

    const countIncrement = () =>{
        setCount(count+1);
    }
    return ( 
        <>
            {props.render(count, countIncrement)}
        </>
     );
}

export default Counter;