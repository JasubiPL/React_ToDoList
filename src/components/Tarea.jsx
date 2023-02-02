import {AiOutlineCloseCircle} from 'react-icons/ai'
import '../css/Tarea.css'

export default function Tarea({texto, completada}){
    return(
        <div className={completada ? 'tareaContenedor completada' : 'tareaContenedor'}>
            <div className="tareaTexto">
                {texto}
            </div>
            <div className="tareaContenedorIcons">
                <AiOutlineCloseCircle className="tareaIcon"/>
            </div>
        </div>
    );
}