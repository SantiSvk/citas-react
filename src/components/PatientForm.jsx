import { useState } from "react";
import Error from "./Error";

function PatientForm({ pacientes, setPacientes }) {
	const [name, setName] = useState("");
	const [owner, setOwner] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [sympthoms, setSympthoms] = useState("");

	const [error, setError] = useState(false);
	const [saved, setSaved] = useState(false);
	const [errorMsg, setErrorMsg] = useState('')

	function generarId(){
		return Date.now().toString(36) + Math.random().toString(36).substring(2)
	}


	function handleSubmit(e) {
		e.preventDefault();
		if ([name, owner, email, date, sympthoms].includes("")) {
			console.log("Hay un campo vacío");
			setErrorMsg('Falta rellenar campos')
			setError(true);
			setSaved(false)
			return;
		}
		setError(false);
		setPacientes([...pacientes, { name, owner, email, date, sympthoms, id : generarId() }]);
		setSaved(true);
		setName("");
		setOwner("");
		setEmail("");
		setDate("");
		setSympthoms("");
	}

	return (
		<div className="md:w-1/2 lg:w-2/5  mx-5">
			<div className="titulos mb-5">
				<h2 className="text-2xl font-bold text-center">
					Seguimiento de pacientes
				</h2>
				<p className="font-semibold text-xl text-center">
					Añade pacientes y {""}
					<span className="text-indigo-600">Adminístralos</span>
				</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-lg rounded-xl px-5 py-10">
				{error && <Error errorMsg = {errorMsg}/>}
				<div className="mascot">
					<label
						className="block text-gray-800 font-bold uppercase pl-2"
						htmlFor="mascotName">
						Nombre de la mascota
					</label>
					<input
						className="block w-full p-2 mt-2 rounded-bl rounded-tr"
						type="text"
						id="mascotName"
						placeholder="Nombre de la mascota"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="owner">
					<label
						className="block text-gray-800 font-bold uppercase pl-2"
						htmlFor="ownerName">
						Nombre del propietario
					</label>
					<input
						className="block w-full p-2 mt-2 rounded-bl rounded-tr"
						type="text"
						id="ownerName"
						placeholder="Nombre del propietario"
						value={owner}
						onChange={(e) => setOwner(e.target.value)}
					/>
				</div>
				<div className="email">
					<label
						className="block text-gray-800 font-bold uppercase pl-2"
						htmlFor="ownerEmail">
						Dirección de Email
					</label>
					<input
						className="block w-full p-2 mt-2 rounded-bl rounded-tr"
						type="email"
						id="ownerEmail"
						placeholder="john@doe.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="date">
					<label
						className="block text-gray-800 font-bold uppercase pl-2"
						htmlFor="date">
						Fecha de consulta
					</label>
					<input
						className="block w-full p-2 mt-2 rounded-bl rounded-tr"
						type="date"
						id="Date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
				<div className="sympthoms">
					<label
						className="block text-gray-800 font-bold uppercase pl-2"
						htmlFor="syomthoms">
						Síntomas
					</label>
					<textarea
						id="syomthoms"
						className="block text-gray-800 pl-2 w-full mb-3"
						placeholder="Describe los síntomas"
						value={sympthoms}
						onChange={(e) => setSympthoms(e.target.value)}
					/>
				</div>
				<div className="w-full flex flex-col items-center justify-evenly gap-5 md:flex-row ">
					<input
						type="submit"
						value="Enviar"
						className="w-full bg-indigo-600 md:w-3/5 p-3 text-white font-bold text-base rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
					/>
					<button
						type="reset"
						className="w-full bg-indigo-600 md:w-2/5 p-3 text-white font-bold text-base rounded-md hover:bg-indigo-700 cursor-pointer transition-colors">
						Limpiar campos
					</button>
				</div>
				
				{saved && (
					<div className="bg-green-800 text-white w-full text-center p-3 mt-5 rounded-md font-semibold text-lg"> ¡Mascota guardada! 😊</div>
				)}
			</form>
		</div>
	);
}

export default PatientForm;
