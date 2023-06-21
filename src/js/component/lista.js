import React, { useEffect, useState, useContext } from "react";

export function Lista () {
    const [list, setList] = useState([])
    const getTask = ()=>{
        fetch('http://assets.breatheco.de/apis/fake/todos/user/juacomiranda')
        .then(data=>data.json())
        .then(response=>setList(response))
    }
    useEffect(()=>{
        getTask();
    },[])
    /*const [list, setList] = useState([]);
    const DeleteItems = (indexItem) => {
        setList((prevState) =>
          prevState.filter((elemento, indice) => indice !== indexItem)
        );
    };*/
    

    return (
        <>
             <form type="submit">
            <input className="form-control" placeholder="Ingrese una tarea y precione Enter"/>
            </form>

            {list.map((elem, index)=>{
                return <li key={index}>{elem.label}
                <button onClick={() => DeleteItems(index)}>
                <i className="fas fa-trash-alt" />
              </button>
                </li>
            })}
        </>
    )
    /*return (
        <>
            <form type="submit" onSubmit={(event) => {
                event.preventDefault();
               setList([...list, event.target[0].value]);
            }}
            >
            <input className="form-control" placeholder="Ingrese una tarea y precione Enter"/>
            </form>
           
            {list.map((valor, index) => {
                return <li key={index}>{valor}
                <button onClick={() => DeleteItems(index)}>
                <i className="fas fa-trash-alt" />
              </button>
              </li>;
            })}
        </>
    )*/

}