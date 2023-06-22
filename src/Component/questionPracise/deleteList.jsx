import React, { useState } from 'react';
function DeleteList() {
    let [arr, setarr] = useState(["one", 'Two', "Three"]);
    const handleDelete = (index) => {
        console.log(arr.splice(index, 1), "splice")
        console.log(arr, "arr") 
        setarr([...arr])
    }
    return ( 
        <>
            <ul>
            {
                
                arr.map((item, index) => 
                {
                    return <li key={index}>{item} <button onClick={() => handleDelete(index)}>Delete</button></li>
                })
            }
            
            </ul>
        </>
     );
}

export default DeleteList;