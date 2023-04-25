import React from 'react';
import { useState } from 'react';

const Counter = (WrappedComponent, num) => {

    function Counter(props) {
        const [count, setCount] = useState(0);
        const increment = ()=>{
            setCount(count+num);
        }
        return ( 
            <>
                <WrappedComponent 
                    count={count} 
                    increment={increment} 
                    {...props}
                />
            </>
         );
    }
    return Counter;
}

export default Counter;