import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


export function App(){
  //Y al cargar el sitio con use effect este array recibira la data de los objetos creados y los guardara en "tasks"
  return <main className="bg-zinc-900 h-screen">
    <div className="container mx-auto p-10">
      <TaskForm/> {/*Le mandamos props a los componentes (en este caso la funcion de crear tarea)*/}
      <TaskList/> {/*Aqui le mandamos el array de objetos y la funcion eliminar tarea*/}
    </div>
  </main>
}

export default App;