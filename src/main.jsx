import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskContextProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/**Esto significa que tendremos que escribir codigo correctamente */}
    <TaskContextProvider>
        <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
