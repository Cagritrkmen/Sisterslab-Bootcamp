import React from 'react'

function Form({ inputText, setInputText, todos, setTodos }) {

    const submitHandler = (e) => {
        if (String(inputText).trim() === '') {
            return false
        }
        if (e.key === 'Enter') {
            const newTodo = {
                inputText,
                id: Date.now(),
                isCompleted: false
            }
            setTodos([...todos, newTodo]);
            setInputText('');
        }
    }

    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <div  >
                    <input id='inputt' onKeyDown={submitHandler} className="new-todo" placeholder="What needs to be done?" autoFocus onChange={(e) => setInputText(e.target.value)} value={inputText} />
                </div>
            </header>
        </div>
    )
}

export default Form