const initialState = {
    list:[]
}
const todoReducer = (state = initialState, action) =>{
    switch (action.type){
        case "AddTodo":
            const {id, data} = action.payload;
            return{
                ...state,
                list: [
                    ...state.list, 
                    {
                        id: id,
                        data:data
                    }
                ]
            }

        case "DeleteTodo":
            const newList = state.list.filter((data) => data.id !== action.id)
            return {
                ...state, 
                list: newList
            }
        default: return state;
    }
}
export default todoReducer;