import PatientInfo from "./PatientInfo";
function PatientList({ pacientes }) {
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
			{pacientes.map((paciente) => (
				<PatientInfo paciente={paciente} key={paciente.id} />
			))}
		</div>
	);
}

export default PatientList;
