import React, {useState} from "react";
import {Lista} from './lista.js';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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




