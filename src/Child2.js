import React, {useContext, useReducer} from 'react';
import numberReducer from './numberReducer';

function Child2(props) {

    let [state, dispatch] = useReducer(numberReducer, 19);

    return (
        <div>
            Hello from the CHILD N U M B E R 2 ! ! !<br/>
            Number 2 = {state}<br/>
            <button onClick={ ()=>  { dispatch( {type: 'DECREMENT', val: 9} ) } }>Decrease Number 2</button>
            <button onClick={ () => { dispatch( {type: 'INCREMENT', val: 9} ) } }>Increase it</button>
        </div>
    )
}

export default Child2;