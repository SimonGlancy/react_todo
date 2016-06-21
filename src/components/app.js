import React from 'react';
import CreateToDo from './create-todo';
import TodosList from './todos-list';


const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
];



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    };
  }

  render() {
    return (
      <div>
        <h1> React ToDos App</h1>
        <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = this.state.todos.find(function(todo){
      return todo.task === task;
    });

    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState( { todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({
      task: task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask){
    const foundTodo = this.state.todos.find(function(todo){
      return todo.task === oldTask;
    });
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete){
    const foundTodo = this.state.todos.find(function(todo){
      return todo.task === taskToDelete;
    });
    const foundIndex = this.state.todos.indexOf(foundTodo);
    this.state.todos.splice(foundIndex, 1);
    this.setState({ todos: this.state.todos })
  }

}
