import React from 'react';
import User from './User';

function TodoItem(props) {
  return (
    <tr style={props.completed
      ? {background:'rgba(69, 169, 21, 0.15)'}
      : {background:'rgba(253, 106, 96, 0.29)'}}
    >
      <td>{props.title}</td>
      <User username={props.user.username} email={props.user.email}/>
      <td>{props.completed.toString()}</td>
    </tr>
  )
}

export default TodoItem;
