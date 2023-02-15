import { useState, useEffect } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});
	const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
	
	useEffect(() => {
		setPacientes(pacientesLS);
	}, []);

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify( pacientes ));
	}, [pacientes]);

	function handledelete(id) {
		if (confirm("Desea eliminar este paciente?")) {
			setPacientes(pacientes.filter((p) => p.id != id));
		}
	}

	return (
		<div className="container mx-auto mt-16">
			<Header />
			<div className="mt-16 flex flex-col md:flex-row">
				<PatientForm
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<PatientList
					pacientes={pacientes}
					setPaciente={setPaciente}
					handleDelete={handledelete}
				/>
			</div>
		</div>
	);
}

export default App;
