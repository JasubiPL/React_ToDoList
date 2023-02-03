import TareFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../css/ListaDeTareas.css';
import { useState } from "react";

export default function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
        }
    }

    return(
        <>
        <TareFormulario onSubmit={agregarTarea}/>
        <div className="tareaListaContenedor">
            {
                tareas.map((tarea) =>
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completado={tarea.completada}
                    />
                )
            }
        </div>
        </>
    );
}