import React, {useState} from "react";
import {Lista} from './lista.js';


//create your first component
 export default function Apptodolist () {

	return (
		<div className="container">
			<h1 className="display-3 text-center">Lista de Tareas</h1>
			<div className="container-fluid">
				<Lista />
			</div>
		</div>
	);
};




