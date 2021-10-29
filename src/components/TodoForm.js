import React,{useEffect, useState} from "react";

const formTemplate = {
    task: "",
    id: null,
    completed: false
}
function TodoForm({ createTodo, setDataToEdit, dataToEdit, updateTodo }){
    const [form, setForm] = useState(formTemplate);

    useEffect(()=>{
        if(dataToEdit !== null){
            setForm(dataToEdit);
        }else{
            setForm(formTemplate);
        }
    },[dataToEdit])

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if(form.id === null){
            createTodo(form); 
        }else{
            updateTodo(form);
        }

        handleReset();
    };

    const handleReset = () => {
        setForm(formTemplate);
        setDataToEdit(null)
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="task" 
                onChange = { handleChange } 
                value={form.task} 
            />
            <input type="submit" value={ dataToEdit !== null ? "Editar tarea" : "Agregar Tarea"}/>
        </form>
    );
}

export default TodoForm;