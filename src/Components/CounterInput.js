import React from 'react';
import { useDispatch } from 'react-redux';

export default function CounterInput() {
    const Dispatch = useDispatch();

    return(
        <>
           <button onClick={() => Dispatch({type: 'INCREMENT'})}>+</button>
           <button onClick={() => Dispatch({type: 'DECREMENT'})}>-</button>
        </>
    );
}