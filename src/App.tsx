import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./meshes/cube";
import CubeSpin from "./meshes/cubeSpin";
import Sphere from "./meshes/sphere";
import Torus from "./meshes/torus";
import TorusKnot from "./meshes/torusKnot";

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
				{/* <group position={[0, 0, 0]}>
					<Torus
						position={[2, -2, 0]}
						size={[0.5, 0.25, 30, 30]}
						color={"orange"}
					/>
					<Torus
						position={[-2, 2, 0]}
						size={[0.5, 0.5, 50, 50]}
						color={"yellow"}
					/>
					<Torus
						position={[-2, -2, 0]}
						size={[1, 0.25, 40, 40]}
						color={"red"}
					/>
					<Torus
						position={[2, 2, 0]}
						size={[0.75, 0.5, 60, 60]}
						color={"pink"}
					/>
				</group> */}

				{/* <group position={[0, 0, 0]}>
					<TorusKnot
						position={[2, -2, 0]}
						size={[0.5, 0.25, 30, 30]}
						color={"orange"}
					/>
					<TorusKnot
						position={[-2, 2, 0]}
						size={[0.5, 0.5, 50, 50]}
						color={"yellow"}
					/> */}
				{/* SpecialKnot */}
				{/* <TorusKnot
						position={[0, 0, -74]}
						size={[10, 3, 64, 8, 20, 13]}
						color={"blue"}
					/> */}
				{/* <TorusKnot
						position={[-2, -2, 0]}
						size={[0.75, 0.25, 40, 40]}
						color={"red"}
					/>
					<TorusKnot
						position={[2, 2, 0]}
						size={[0.75, 0.5, 60, 60]}
						color={"pink"}
					/>
				</group> */}
			</Canvas>
		</>
	);
};

export default App;
