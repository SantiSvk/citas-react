import { state } from 'react'
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {


	return (
		<div className="container mx-auto mt-16">
			<Header />
            <div className="mt-16 flex flex-col md:flex-row">
                <PatientForm/>
                <PatientList/>
            </div>
		</div>
	);
}

export default App;
