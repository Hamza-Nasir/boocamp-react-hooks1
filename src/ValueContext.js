import React from 'react';

// If i didnt provide any provider inside App.js, It will give this 45
const valueContext = React.createContext(45, ()=>{});

export default valueContext;