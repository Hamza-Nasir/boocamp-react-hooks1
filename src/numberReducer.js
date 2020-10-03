import React from 'react';

const numberReducer = (state,action) => {

    switch(action.type) {
        case 'INCREMENT':
            return state + action.val;
            //return state+1;

        case 'DECREMENT':
            return state - action.val;
            //return state-1;
    }
}

export default numberReducer;