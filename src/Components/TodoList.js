import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requested: false,
      loaded: false,
      users: [],
      todos: [],
      completedData: []
    };
    this.requestData = this.requestData.bind(this);
    this.sortList = this.sortList.bind(this)
  }

  requestData() {
    this.setState({
      requested: true
    });
    const xhrTodo = new XMLHttpRequest();
    xhrTodo.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhrTodo.addEventListener('load',() => {
      const xhrUsers = new XMLHttpRequest();
      xhrUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
      xhrUsers.addEventListener('load',() => {
        this.setState({
          loaded: true,
          users: JSON.parse(xhrUsers.response),
          todos: JSON.parse(xhrTodo.response)
        });
      });
      xhrUsers.send()
    });
    xhrTodo.send();
  }

  sortList() {
    this.setState((state) => ({
      completedData: state.completedData.sort((a, b) => a.props.title.localeCompare(b.props.title))
    }))
  }

  render() {
    if (!this.state.requested) {
      return <button onClick={this.requestData} className='request'>Show the list!</button>
    } else if (this.state.loaded) {
      this.state.todos.forEach((item) => {
        const user = this.state.users.find(one => one.id === item.userId);
        this.state.completedData.push(<TodoItem title={item.title} completed={item.completed} userId={item.userId} user={user} key={item.id}/>)
      });

      return (
        <div>
          <table>
            <thead>
            <tr>
              <th onClick={this.sortList} className='sort'>ToDoItem (click to sort)</th>
              <th>User name</th>
              <th>Completed</th>
            </tr>
            </thead>
            <tbody>
            {this.state.completedData}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default TodoList;
