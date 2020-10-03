import React, {useState} from 'react';
import Child from "./Child";

function Parent(props) {
  return (
    <div>
        {/*Hello World from the PARENT!*/}
        <Child/>
    </div>
  )
}

export default Parent;
