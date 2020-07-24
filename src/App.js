import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About'
import TodoList from './components/pages/TodoList'
// import {v4 as uuid} from 'uuid';

class App extends React.Component {

  // Actual display
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" component={TodoList}/>
            <Route path="/about" component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
