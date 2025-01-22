import { useEffect } from "react";
import "./App.css";

function App() {
	useEffect(() => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	return <>je suis ici</>;
}
export default App;
