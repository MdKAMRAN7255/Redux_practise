export const addTodo = (data) =>{
    // console.log(data)
    return {
        type:"AddTodo",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
    // console.log(new Date().getTime().toString());
}
export const deleteTodo = (id) =>{
    return{
        type: "DeleteTodo",
        id
    }
}