function PatientInfo({ paciente }) {
	return (
		<div className="bg-white shadow-lg rounded-xl p-5 mt-5 ml-2">
			<p className="font-bold uppercase mb-3 text-gray-700">
				Mascota: {""}
				<span className="font-normal normal-case">
					{paciente.name}
				</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Propietario: {""}
				<span className="font-normal normal-case">
					{paciente.owner}
				</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Email: {""}
				<span className="font-normal normal-case">{paciente.email}</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Fecha: {""}
				<span className="font-normal normal-case">{paciente.date}</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Síntomas: {""}
				<span className="font-normal normal-case">{paciente.sympthoms}</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Identificador: {""}
				<span className="font-normal normal-case">{paciente.id}</span>
			</p>
		</div>
	);
}

export default PatientInfo;
