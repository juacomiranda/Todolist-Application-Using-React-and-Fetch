import React, {useState} from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";


export default function App () {
    const [list, setList] = useState ([])
    return (
        <div className ="App">
            <h1>Lista de Tareas</h1>
            <form
            type="submit"
            onSubmit={(event) => {
                event.preventDefault();
                console.log(event.target[0].value);
            }}>
            <input />
            </form>
            {list.map((tarea, position)=>{
                return <li>{tarea}</li>
            })} 
            
            {/* <input type="text" placeholder="Ingrese una tarea" 
                onkeypress= {(event) => {
                    if (event.key ==== "Enter") {
                        console.log("Presionaste enter");
                    }
                }}> */}
        </div>
    )

}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
