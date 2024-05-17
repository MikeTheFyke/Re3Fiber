import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./meshes/cube";
import CubeSpin from "./meshes/cubeSpin";
import Sphere from "./meshes/sphere";
import Torus from "./meshes/torus";

const App = () => {
	return (
		<>
			<Canvas>
				<directionalLight position={[0, 0, 2]} />

				{/* Basic Cubes */}
				{/* <group position={[0, 0, 0]}>
					<Cube position={[2, -2, 0]} size={[1, 1, 1]} color={"orange"} />
					<Cube position={[-2, 2, 0]} size={[1, 1, 1]} color={"yellow"} />
					<Cube position={[-2, -2, 0]} size={[1, 1, 1]} color={"red"} />
					<Cube position={[2, 2, 0]} size={[1, 1, 1]} color={"pink"} />
				</group> */}

				{/* Cube Spin */}
				{/* <group position={[0, 0, 0]}>
					<CubeSpin position={[2, -2, 0]} size={[1, 1, 1]} color={"orange"} />
					<CubeSpin position={[-2, 2, 0]} size={[1, 1, 1]} color={"yellow"} />
					<CubeSpin position={[-2, -2, 0]} size={[1, 1, 1]} color={"red"} />
					<CubeSpin position={[2, 2, 0]} size={[1, 1, 1]} color={"pink"} />
				</group> */}

				{/* Basic Spheres */}
				{/* <group position={[0, 0, 0]}>
					<Sphere position={[2, -2, 0]} size={[1, 30, 30]} color={"orange"} />
					<Sphere position={[-2, 2, 0]} size={[1, 30, 30]} color={"yellow"} />
					<Sphere position={[-2, -2, 0]} size={[1, 30, 30]} color={"red"} />
					<Sphere position={[2, 2, 0]} size={[1, 30, 30]} color={"pink"} />
				</group> */}

				{/* Basic Torus */}
				<group position={[0, 0, 0]}>
					<Torus position={[2, -2, 0]} size={[1, 30, 30]} color={"orange"} />
				</group>
			</Canvas>
		</>
	);
};

export default App;
