import React, { useEffect, useState, useContext } from "react";

export function Lista () {
    const [list, setList] = useState([]);
    const DeleteItems = (indexItem) => {
        setList((prevState) =>
          prevState.filter((elemento, indice) => indice !== indexItem)
        );
    };

    return (
        <>
            <form type="submit" onSubmit={(event) => {
                event.preventDefault();
               setList([...list, event.target[0].value]);
               console.log(list);
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
    )

}