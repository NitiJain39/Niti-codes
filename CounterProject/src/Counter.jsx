import React, { useReducer } from 'react'
export default function Counter(){ 
const Reducer=(state, action) => {
    switch(action.type) {
      case 'Increment': 
        return state + 1;
      case 'PlusFive':
        return state + 5;
      case 'Decrement':
        return state - 1;
      case 'Reset':
        return(state=0);
      default:
        return state;
    }
};

    const [count,dispatch]=useReducer(Reducer,0);

    return (
    <div className='flex flex-col items-center'>
    <div className='text-xl w-md h-fit bg-[#b9eaf782] m-20 py-5 px-4 justify-center text-center border border-amber-950'>
      <h1 className='m-5 text-3xl'>Count : {count}</h1>
      <button onClick={() => dispatch({ type: 'Increment' })} className='my-4 px-5 py-2 rounded-2xl border border-blue-700 bg-[#8db1e7]'>INCREMENT</button><br />
      <button onClick={() => dispatch({ type: 'Decrement' })} className='my-4 px-5 py-2 rounded-2xl border border-blue-700 bg-[#8db1e7]'>DECREMENT</button><br />
      <button onClick={() => dispatch({ type: 'PlusFive' })} className='my-4 px-6 py-2 rounded-2xl border border-blue-700 bg-[#8db1e7]'>INCREASE FIVE</button><br />
      <button onClick={() => dispatch({ type: 'Reset'})} className=' my-4 px-5 py-2 rounded-2xl border border-blue-700 bg-[#8db1e7]'>RESET</button>
    </div>
    </div>
  )
};
