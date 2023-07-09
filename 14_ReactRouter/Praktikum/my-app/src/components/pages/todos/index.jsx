import { useState } from "react";
import FormTodos from "./form-todos";
import ListTodos from "./list-todos";
import { v4 as uuidv4 } from "uuid";
import Layout from "../../global";

export default function Todos() {
    const [list_todos, setListTodos] = useState([]);

    function handleAddTodo(newTitle) {
        if (!newTitle) {
            alert("Inputan anda Kosong, Silakan Periksa");
        } else {
            setListTodos((prev) => {
                let sample = [...prev];
                sample.push({
                    id: uuidv4(),
                    title: newTitle,
                    completed: false,
                });
                return sample;
            });
        }
    }

    function handleDeleteTodo(todoId) {
        const updatedListTodos = list_todos.filter(
            (todo) => todo.id !== todoId
        );
        setListTodos(updatedListTodos);
    }

    function handleCompleted(todoId) {
        const updatedListTodos = list_todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setListTodos(updatedListTodos);
    }
    console.log(list_todos);
    return (
        <>
            <Layout>
                <div className='todos container mt-5'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='todos-heading d-flex align-items-center justify-content-center'>
                            <h1>todos</h1>
                        </div>
                        <div className='todos-form'>
                            <FormTodos handleAddTodo={handleAddTodo} />
                        </div>
                        <div className='todos-list'>
                            <ListTodos
                                list_todos={list_todos}
                                handleDeleteTodo={handleDeleteTodo}
                                handleCompleted={handleCompleted}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
