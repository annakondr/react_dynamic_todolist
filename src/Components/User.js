import React, {Component} from 'react';

class User extends Component {

  render() {
    return (
      <td><a href={"mailto:" + this.props.email}> {this.props.username} </a></td>
    );
  }
}

export default User;
