import { Canvas } from "@react-three/fiber";
import "./App.css";

const App = () => {
	return (
		<>
			<Canvas>
				<mesh>
					<boxGeometry />
				</mesh>
			</Canvas>
		</>
	);
};

export default App;
