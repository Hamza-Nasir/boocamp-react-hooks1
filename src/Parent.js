import React, {useState} from 'react';
import Child from "./Child";
import Child2 from "./Child2";

function Parent(props) {
  return (
    <div>
        {/*Hello World from the PARENT!*/}
        <Child/>
        <Child2/>
    </div>
  )
}

export default Parent;
