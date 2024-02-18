import { element } from "prop-types";
import React, { useEffect, useState, useContext } from "react";

export function Lista () {
    const [list, setList] = useState ([])
    const getTask = () => {
        fetch ('https://playground.4geeks.com/apis/fake/todos/user/juacomiranda')
        .then (data=>data.json())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        .then (response=>setList(response)) 
    }
    useEffect(()=>{
        getTask();
    },[])

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Tareas</h1>
            {list.map((elm, index)=>{
                return <li key={index}>{elm.label}</li>
            })}
        </div>
        /*<>
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
        </>*/
    )
    

    /*const [list, setList] = useState([]);
    const DeleteItems = (indexItem) => {
        setList((prevState) =>
          prevState.filter((elemento, indice) => indice !== indexItem)
        );
    };
    const getTask = ()=>{
        fetch('https://playground.4geeks.com/apis/fake/todos/user/juacomiranda')
        .then(data=>data.json())
        .then(response=>setList(response))
    }

    const putTask = ()=>{
        let header = new Headers();
        header.append('Content-Type', 'aplication/json')

        let cuerpo = JSON.stringify([
            {"label": "probando desde el front", "done": false}
        ])

        let requestOptions ={
            method: 'PUT',
            headers: header,
            body: cuerpo,
            redirect: 'follow'
        }

        fetch('https://playground.4geeks.com/apis/fake/todos/user/juacomiranda', requestOptions)
        .then(data=>data.json())
        .then(response=>console.log(response))
        
}

    useEffect(()=>{
        getTask();
    },[])

    return (
        <>
            <form type="submit" onSubmit={(event) => {
                event.preventDefault();
               setList([...list, event.target[0].value]);
            }}
            >
            <input className="form-control" placeholder="Ingrese una tarea y precione Enter"/>
            </form>

            {list.map((elem, index)=>{
                return <li key={index}>{elem}
                            <button onClick={() => DeleteItems(index)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </li>;
            })}
            <button onClick={putTask}>Accionar Put  </button>
        </>
    )*/
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