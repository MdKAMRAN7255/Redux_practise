const initialState = [
    {id:1, todo:"Buy Book", completed:false}
]


// console.log(initialState, "initial state");
const todoReducer = (state = initialState, action) =>{
    switch (action.type){
        case "AddTodo":
            return[...state, action.payload]

        case "DeleteTodo":
            const newList = state.filter((data) => data.id !== action.id)
            return newList
        
        case "UpdateTodo":
            const updateList = []
            state.map((items, index) => {
                if(index === action.id){
                    items.completed = !items.completed
                }
                updateList.push(items);
            })
            return updateList

        case "EditTodo":
            let data = action.payload;
            const updatedArray=  state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                return item;
            })
            return updatedArray;
        default: return state;
    }
}

export default todoReducer;