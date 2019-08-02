import React from 'react';

const List = (props) =>{
    return(
       <ul>
           <li onClick={()=> props.handler()}>{props.question}</li>
           <li>{props.answer}</li>
       </ul>
    );
}

export default List