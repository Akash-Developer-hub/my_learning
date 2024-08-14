import { useReducer } from "react";
const initialState = [];

const TODO_ACTIONS ={
    ADD_TASK : "ADD_TASK",
    DELETE_TASK : "DELETE_TASK",
}

function reducer(state, action){
    switch(action.type){
        case TODO_ACTIONS.ADD_TASK:
           // console.log("adding");
            return[...state,{id: state.length + 1, name:action.payload}];
        case TODO_ACTIONS.DELETE_TASK:
            return state.filter((task)=> task.id !==action.payload)

        default:
            return state;
        }
}

const Todo = () => {
 const[Todo, dispatch] = useReducer(reducer, initialState);

 const handleChange = (e) => {
    if(e.key === "Enter"){
        dispatch({type : TODO_ACTIONS.ADD_TASK, payload: e.target.value});
    }
 };

  return (
    <>
        <h3>Task List {Todo.length}</h3>
        <label htmlFor="task">Enter Task</label>
        <input type="text" id="task" onKeyDown={(e) => handleChange(e)} />       
    
        <ul>
           {
            Todo.map((todo) => (
                <li>{todo.name}
                <button onClick={(e)=> dispatch({type : TODO_ACTIONS.DELETE_TASK, payload: todo.id})}>Delete</button>
                </li>
            ))
        }
        </ul>
    </>
  );
};

export default Todo




   