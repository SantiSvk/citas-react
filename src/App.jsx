import { useState } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	return (
		<div className="container mx-auto mt-16">
			<Header />
			<div className="mt-16 flex flex-col md:flex-row">
				<PatientForm
					pacientes={pacientes}
					setPacientes={setPacientes}
					
					paciente = {paciente}
					setPaciente = {setPaciente}
				/>
				<PatientList pacientes={pacientes} setPaciente={setPaciente} />
			</div>
		</div>
	);
}

export default App;
