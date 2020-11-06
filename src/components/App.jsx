import React, { PureComponent } from 'react';
import Header from './header/Header';
import Todos from  './todos/Todos'
import AddTodo from './add-todo/AddTodo';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <Header/>
                <Todos/>
                <AddTodo />
            </div>
        );
    }
}

export default App;
