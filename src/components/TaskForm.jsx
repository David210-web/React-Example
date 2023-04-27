import { useState,useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskForm() {

    const [title, settitle] = useState("") //Creamos el estado para almacenar el titulo de la nueva tarea
    const [description, setDescription] = useState("") //Creamos el estado para almacenar el estado de la descripcion de la nueva tarea
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e)=>{ //Creamos la funcion para guardar el objeto
        e.preventDefault()
        createTask({title,description}) //A la funcion para crear tarea le pasamos los parametros requeridos
        settitle('') //Reiniciamos el input a que no tenga datos
        setDescription('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input type="text" placeholder="Escribe tu tarea" onChange={(e)=>{
                settitle(e.target.value) //Guardamos lo que hemos escrito en el input en el estado title
                }} value={title} autoFocus className="bg-slate-300 p-3 w-full mb-2"/> 
                {/*Guardamos tambien lo que hemos escrito en el textarea en el estado descripcion */}
                <textarea placeholder="Descripcion de la tarea" onChange={(e)=> setDescription(e.target.value)} value={description} className="bg-slate-300 p-3 w-full mb-2"></textarea >
                <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button> {/*Al darle click enviaremos la data del formulario y la mostraremos en pantalla */}
            </form>
        </div>
    )
}

export default TaskForm