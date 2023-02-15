function PatientInfo({ paciente, setPaciente, handleDelete }) {
	return (
		<div className="bg-white shadow-lg rounded-xl p-5 mt-5 ml-2">
			<p className="font-bold uppercase mb-3 text-gray-700">
				Mascota: {""}
				<span className="font-normal normal-case">{paciente.name}</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Propietario: {""}
				<span className="font-normal normal-case">
					{paciente.owner}
				</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Email: {""}
				<span className="font-normal normal-case">
					{paciente.email}
				</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Fecha: {""}
				<span className="font-normal normal-case">{paciente.date}</span>
			</p>
			<p className="font-bold uppercase mb-3 text-gray-700">
				Síntomas: {""}
				<span className="font-normal normal-case">
					{paciente.sympthoms}
				</span>
			</p>
			<div className="flex">
				<button
					style={{ flexGrow: 6 }}
					type="button"
					className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 hover:shadow-md font-semibold"
					onClick={() => {
						setPaciente(paciente);
					}}>
					Editar
				</button>
				<button
					type="button"
					className="flex-1 p-2 bg-red-800 text-white rounded-md hover:bg-red-900 hover:shadow-md mx-3 font-semibold"
					onClick={() => handleDelete(paciente.id)}>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default PatientInfo;
