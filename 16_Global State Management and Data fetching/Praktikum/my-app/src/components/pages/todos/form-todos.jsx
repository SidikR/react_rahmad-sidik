import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { tambahTodo } from "../../../store/todoSlice";

export default function FormTodos() {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(tambahTodo({ newTitle: inputValue }));
        setInputValue("");
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <InputGroup className='mb-3'>
                    <Form.Control
                        type='text'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Button type='submit' variant='success'>
                        Submit
                    </Button>
                </InputGroup>
            </Form>
        </>
    );
}
