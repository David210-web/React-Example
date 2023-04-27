import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext)
  
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
        {/* <p>{task.id + 1}</p> */}
        <h1 className="text-xl font-bold capitalize">{task.title}</h1> {/*le pasamos la data ya recorrida y mostramos las propiedades del objeto*/}
        <p className="text-gray-500 textsm">{task.description}</p>
        <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={()=>deleteTask(task.id)}>Eliminar tarea</button> {/*Ejecutamos la funcion de eliminar tarea*/}
    </div> //Para retornar usamos parentesis no llaves
  )
}

export default TaskCard