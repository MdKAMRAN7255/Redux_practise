export const addTodo = (data) =>{
    // console.log(data)
    return {
        type:"AddTodo",
        payload: data
    }
    // console.log(new Date().getTime().toString());
}
export const deleteTodo = (id) =>{
    return{
        type: "DeleteTodo",
        id
    }
}
export const updateTodo = (id) =>{
    return{
        type: "UpdateTodo",
        id
    }
}
export const editTodo = (payload) =>{
    return{
        type: "EditTodo",
        payload
    }
}