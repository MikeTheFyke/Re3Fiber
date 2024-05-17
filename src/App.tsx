import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./meshes/cube";
import CubeSpin from "./meshes/cubeSpin";

const App = () => {
	return (
		<>
			<Canvas>
				<directionalLight position={[0, 0, 2]} />

				{/* <group position={[0, 0, 0]}>
					<Cube position={[2, -2, 0]} size={[1, 1, 1]} color={"orange"} />
					<Cube position={[-2, 2, 0]} size={[1, 1, 1]} color={"yellow"} />
					<Cube position={[-2, -2, 0]} size={[1, 1, 1]} color={"red"} />
					<Cube position={[2, 2, 0]} size={[1, 1, 1]} color={"pink"} />
				</group> */}

				<group position={[0, 0, 0]}>
					<CubeSpin position={[2, -2, 0]} size={[1, 1, 1]} color={"orange"} />
					<CubeSpin position={[-2, 2, 0]} size={[1, 1, 1]} color={"yellow"} />
					<CubeSpin position={[-2, -2, 0]} size={[1, 1, 1]} color={"red"} />
					<CubeSpin position={[2, 2, 0]} size={[1, 1, 1]} color={"pink"} />
				</group>
			</Canvas>
		</>
	);
};

export default App;
