import React from 'react';

function User(props) {
  return (
    <td><a href={"mailto:" + props.email}> {props.username} </a></td>
  );
}

export default User;
