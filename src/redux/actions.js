export const ADD_TODO ="ADD_TODO";
export const DELETE_TODO ="DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
//add
export function addTodo (todo){
    return {
        type : ADD_TODO,
        payload: todo,
    }
}

//delete
export function deleteTodo (todoId){
    return {
        type : DELETE_TODO,
        payload: todoId,
    }
}

//update
export function updateTodo (todo){
    return {
        type : UPDATE_TODO,
        payload: todo,
    }
}