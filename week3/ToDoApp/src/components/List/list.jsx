import React from 'react'

function List({ todos, setTodos, inputText, setInputText }) {

    const completedHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo

            ))
    }

    const allCompleteHandler = () => {
        setTodos(
            todos.map((todo) =>
                todo.isCompleted ? todo : { ...todo, isCompleted: !todo.isCompleted }
            )
        )
    }

    const deleteHandler = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }
    const editHandler = (x) => {
        setInputText(`please update ${x.inputText}`)
        setTodos(
            todos.filter((todo) => todo.id !== x.id)
        )
        document.getElementById('inputt').focus()

    }


    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label onClick={allCompleteHandler} htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        todos.map((todo) => (
                            <li key={todo.id} className={`${todo.isCompleted ? 'completed' : ''}`}>
                                <div className="view">
                                    <input onClick={() => completedHandler(todo.id)} className="toggle" checked={todo.isCompleted} type="checkbox" readOnly />
                                    <label>{todo.inputText}</label>
                                    <button onClick={() => editHandler(todo)} className="update"></button>
                                    <button onClick={() => deleteHandler(todo.id)} className="destroy"></button>
                                </div>
                            </li>
                        ))
                    }





                </ul>
            </section>
        </div>
    )
}

export default List