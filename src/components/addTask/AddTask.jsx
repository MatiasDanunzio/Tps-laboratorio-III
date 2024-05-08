import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddTask = ({ onTaskData }) => {
    const [inputText, setInputText] = useState("")
    const [complete, setComplete] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleComplete = (e) => {
        setComplete(!complete);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (inputText === "") {
            alert("No puede ingresar un nombre vacio")
            return;
        }

        const task = {
            input: inputText, status: complete
        };

        onTaskData(task);
        setInputText("");
        setComplete(false);
    }

    const handleClick = () => {
        setShowForm(!showForm)
    }


    return (
        <>
            <Button variant="secondary" onClick={handleClick}>
                {showForm ? "Esconder" : "Agregar tarea"}
            </Button>

            {showForm && (
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de la tarea</Form.Label>
                        <Form.Control type="text" placeholder="Tarea..." onChange={handleInput} value={inputText} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Completada" onChange={handleComplete} checked={complete} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form>
            )}

        </>

    )
}

export default AddTask


