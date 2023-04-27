import TaskCard from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskList() {
//A esta funcion le pasamos como parametro los datos que vamos a mostrar (tasks)
  const {tasks} = useContext(TaskContext)

  if(tasks.length === 0){ //Como es un array si este tiene una longitud de 0 mostrara la siguiente etiqueta
    return <h1 className="text-white text-4xl font-bold text-center">No nay tareas aun</h1>
  }

  return (
    <div className="grid grid-cols-4 gap-2"> {/*Recorremos el array con la data y le pasamos esos objetos ya recorridos al componente taskCard como prop*/}
      {tasks.map((task)=> (//Y tambien le pasamos la key (un identificador)
        <TaskCard task={task} key={task.id} />//le pasamos un prop donde ira almacenada la informacion de borrar datos
      ))}
    </div>
  );
}

export default TaskList