import { createContext,useState,useEffect } from "react"
import {tasks as data} from '../data/tasks';


export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks,setTasks] = useState([]); //Lo usamos para crear el array donde estara nuetra data
  function createTask(task){//Le pasamos un objeto task a esta funcion
    //con las propiedades de titulo y descripcion (el id sera la longitud total del array)
    //Aparte de eso concatenamos ese objeto con los objetos anteriores y ese nuevo array sera el valor de task del useState
    setTasks([...tasks,{title:task.title,
      id: tasks.length,
      description: task.description}])
  }

  function deleteTask(taskId){ //Para eliminar simplemente filtramos todos aquellos objetos cuyo id sea distinto al parametro dado en la funcion
    setTasks(tasks.filter(task => task.id !== taskId)) //Si el taskId es distinto al id de un objeto en especificos este objeto se mantendra
    //en el useState si no lo es este se eliminara
  }

  useEffect(()=>{
    setTasks(data)
  },[])

  return (
    <TaskContext.Provider value={{tasks,deleteTask,createTask}}>
      {props.children}
    </TaskContext.Provider>
  )
}

//export default TaskContext