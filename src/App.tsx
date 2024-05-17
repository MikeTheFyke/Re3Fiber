import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./meshes/cube";

const App = () => {
	return (
		<>
			<Canvas>
				<directionalLight position={[0, 0, 2]} />
				<Cube position={[2, -2, 0]} size={[1, 1, 1]} color={"orange"} />
				<Cube position={[-2, 2, 0]} size={[1, 1, 1]} color={"yellow"} />
				<Cube position={[-2, -2, 0]} size={[1, 1, 1]} color={"red"} />
				<Cube position={[2, 2, 0]} size={[1, 1, 1]} color={"pink"} />
			</Canvas>
		</>
	);
};

export default App;
