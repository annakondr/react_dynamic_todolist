import React, {Component} from 'react';
import User from './User';

class TodoItem extends Component {

  render() {
    return (
      <tr style={this.props.completed
        ? {background:'rgba(69, 169, 21, 0.15)'}
        : {background:'rgba(253, 106, 96, 0.29)'}}>
        <td>{this.props.title}</td>
        <User username={this.props.user.username} email={this.props.user.email}/>
        <td>{this.props.completed.toString()}</td>
      </tr>
    )
  }
}

export default TodoItem;


