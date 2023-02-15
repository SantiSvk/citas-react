import { useEffect } from 'react'
import PatientInfo from "./PatientInfo";

function PatientList({ pacientes, setPaciente }) {

	useEffect(()=>{
		pacientes.length && console.log("Agregando Pacientes!:3")
	}, [pacientes])

	return (
		<div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
			<div className="titles-container">
				<h2 className="text-2xl font-bold text-center">
					Lista de pacientes
				</h2>
				<p className="font-semibold text-xl text-center">
					Administra tus{" "}
					<span className="text-indigo-600">pacientes y citas</span>
				</p>
			</div>
			{pacientes.map(paciente => 
				<PatientInfo 
					key={paciente.id} 
					paciente={paciente} 
					setPaciente = {setPaciente}
					/>
			)}
		</div>
	);
}

export default PatientList;
