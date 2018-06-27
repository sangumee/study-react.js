import React from 'raact';
import './TodoListTemplate.css';

const TodoListTemplate =({form, children}) => {
    return(
        <main className="todo-list-tempalte">
        <div className="title">
        오늘 할 일
        </div>
        <section className="form-wrapper">
            {form}
        </section>
        <section className="todos-wrapper">
            {children}
        </section>
        </main>
    );
};

export default TodoListTemplate;