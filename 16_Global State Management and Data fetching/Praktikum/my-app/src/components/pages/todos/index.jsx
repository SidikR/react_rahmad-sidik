import { useState } from "react";
import FormTodos from "./form-todos";
import ListTodos from "./list-todos";
import Layout from "../../global";

export default function Todos() {
    return (
        <>
            <Layout>
                <div className='todos container mt-5'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='todos-heading d-flex align-items-center justify-content-center'>
                            <h1>todos</h1>
                        </div>
                        <div className='todos-form'>
                            <FormTodos />
                        </div>
                        <div className='todos-list'>
                            <ListTodos />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
