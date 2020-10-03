import React, {useContext} from 'react';
import valueContext from './ValueContext';

function Child(props) {

    let value = useContext(valueContext);

    return (
        <div>
            Hello from the CHILD! Number = {value[0]}<br/>
            <button onClick={()=>{value[1](++value[0])}}>Increase the number</button>
        </div>
    )
}

export default Child;