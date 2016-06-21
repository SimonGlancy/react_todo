import React from 'react';
import TodosListHeader from './todo-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  // renderItems() {
  //
  // }


  render() {

    const toggleTask = this.props.toggleTask;
    const saveTask = this.props.saveTask;
    const deleteTask = this.props.deleteTask;

    var TodoItems = this.props.todos.map(function(todo,index){
                      return <TodosListItem key={index}
                                            task={todo.task}
                                            isCompleted={todo.isCompleted}
                                            toggleTask={toggleTask}
                                            saveTask={saveTask}
                                            deleteTask={deleteTask}
                             />
                    })

    return (
      <table>
        <TodosListHeader />
        <tbody>
          {TodoItems}
        </tbody>
      </table>
    );
  }
}
