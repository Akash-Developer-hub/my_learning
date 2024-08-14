import React, { useReducer } from 'react'

const initialState=[];

function reducer(state,action){
    switch(action.type){
        case 'ADD':
            return[...state,{id: Date.now(),name : action.payload}];
        
        case 'REMOVE':
            return state.filter((item) => item.id !== action.payload);

        case 'UPDATE':
            return state.map((item)=>(item.id === action.payload? {...item,name: action.payload.newName}:item))

            default:
                return state;

    }


    }

const CursReducer = () => {

    const[items,dispatch]= useReducer(reducer,initialState);

  return (
    <div>
        <h2>Product List</h2>
        <ul>
            {items.map((item)=>{

                <li key = {item.id}>
                    {item.name}
                    <button >Update</button>
                    <button>delete</button>
                </li>
            })}
        </ul>


    </div>
  )
}

export default CursReducer