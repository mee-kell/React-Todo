import React from 'react'
import Todos from '../Todos';
import AddTodo from '../AddTodo';
import axios from 'axios';

class About extends React.Component {

    // States: values in storage
    state = {
        todos: []
    }

    // Get JSON data
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }))
    }

    // Function to change the completed state of a specific todo
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    // Delete todo with ID from databse
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            }))
    }

    // Function to create a new Todo, send to backend
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    }

    render() {
        return(
            <div>
        <AddTodo addTodo={this.addTodo} />
        <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
        />
            </div >
        )
    }
}

export default About;