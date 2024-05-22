import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./meshes/cube";
import CubeSpin from "./meshes/cubeSpin";
import Sphere from "./meshes/sphere";
import Torus from "./meshes/torus";
import TorusKnot from "./meshes/torusKnot";
import HoverMeshes from "./meshes/hoverMeshes";
import DreiMeshes from "./meshes/dreiMeshes";
import DirectionalLightScene from "./scenes/directionalLightScene";
import LevaScene from "./scenes/levaScene";
import LevaGeometryScene from "./scenes/levaGeometryScene";
import ExplodingCube from "./meshes/explodingCube";
import CubeMove from "./meshes/cubeMove";
import { useEffect, useState } from "react";
import TextMesh from "./meshes/text";

const App = () => {
	const [breakpointX, setBreakpointX] = useState<number>();

	const handleResize = () => {
		if (window.innerWidth > 1500) {
			setBreakpointX(Math.trunc(window.innerWidth / 100) - 9);
		} else if (window.innerWidth > 1000) {
			setBreakpointX(Math.trunc(window.innerWidth / 100) - 4);
		} else if (window.innerWidth > 800) {
			setBreakpointX(Math.trunc(window.innerWidth / 100) - 2);
		} else if (window.innerWidth > 500) {
			setBreakpointX(Math.trunc(window.innerWidth / 100));
		} else {
			setBreakpointX(Math.trunc(window.innerWidth / 100) + 1);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return (
		<>
			<Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
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
					<Sphere
						position={[2, -2, 0]}
						size={[1, 30, 30]}
						color={"orange"}
						wireframe={true}
					/>
					<Sphere
						position={[-2, 2, 0]}
						size={[1, 30, 30]}
						color={"yellow"}
						wireframe={true}
					/>
					<Sphere
						position={[-2, -2, 0]}
						size={[1, 30, 30]}
						color={"red"}
						wireframe={false}
					/>
					<Sphere
						position={[2, 2, 0]}
						size={[1, 30, 30]}
						color={"pink"}
						wireframe={false}
					/>
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
				{/* TorusKnots */}
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
				{/* Hoverable Animation */}
				{/* <group position={[0, 0, 0]}>
					<HoverMeshes />
				</group> */}
				{/* Drei Meshes */}
				{/* <group position={[0, 0, 0]}>
					<DreiMeshes />
				</group> */}
				{/* <DirectionalLightScene /> */}
				{/* <LevaScene /> */}
				{/* <LevaGeometryScene /> */}
				{/* Exploding Cube Scene */}
				{/* <ExplodingCube /> */}
				{/* Moving Cubes */}
				{/* <group position={[0, 0, 0]}>
					<CubeMove
						position={[3, -2, 0]}
						size={[1, 1, 1]}
						color={"orange"}
						breakpointX={breakpointX}
					/>
					<CubeMove
						position={[-3, 2, 0]}
						size={[1, 1, 1]}
						color={"yellow"}
						breakpointX={breakpointX}
					/>
					<CubeMove
						position={[-3, -2, 0]}
						size={[1, 1, 1]}
						color={"red"}
						breakpointX={breakpointX}
					/>
					<CubeMove
						position={[3, 2, 0]}
						size={[1, 1, 1]}
						color={"pink"}
						breakpointX={breakpointX}
					/>
				</group> */}
				<group position={[0, 0, 0]}>
					<TextMesh
						position={[0, 2, -1]}
						color={"black"}
						font={"/fonts/Montserrat_Bold.json"}
						text={"Crafting"}
						rotation={[0, 0, 0]}
						scale={0.5}
						depth={0.015}
						breakpointX={breakpointX}
					/>
					<TextMesh
						position={[3, 2, -1]}
						color={"red"}
						font={"/fonts/Montserrat-Medium_Regular.json"}
						text={"Stories"}
						rotation={[-0.5, 0, 0]}
						scale={0.5}
						depth={0.015}
						breakpointX={breakpointX}
					/>
				</group>
				<group position={[0, 0, 0]}>
					<TextMesh
						position={[breakpointX ?? 0, 0, -1]}
						color={"black"}
						font={"/fonts/Montserrat_Bold.json"}
						text={"Make users feel like they are experiencing a website,"}
						rotation={[0, 0, 0]}
						scale={0.25}
						depth={0.05}
						breakpointX={breakpointX}
					/>
					<TextMesh
						position={[breakpointX ? breakpointX + 2 : 0, -0.5, -1]}
						color={"red"}
						font={"/fonts/Montserrat-Medium_Regular.json"}
						text={"instead of justing viewing it."}
						rotation={[-0.5, 0, 0]}
						scale={0.25}
						depth={0.05}
						breakpointX={breakpointX}
					/>
				</group>
				<group position={[0, 0, 0]}>
					<TextMesh
						position={[breakpointX ? breakpointX + 9 : 0, -2, -1]}
						color={"black"}
						font={"/fonts/Montserrat_Bold.json"}
						text={"Guidelines can be like a fence around a yard."}
						rotation={[0, 0, 0]}
						scale={0.25}
						depth={0.05}
						breakpointX={breakpointX}
					/>
					<TextMesh
						position={[breakpointX ? breakpointX + 10 : 0, -2.5, -1]}
						color={"red"}
						font={"/fonts/Montserrat-Medium_Regular.json"}
						text={
							"That fence should be seen like a tight rope to be walked upon, "
						}
						rotation={[-0.5, 0, 0]}
						scale={0.25}
						depth={0.05}
						breakpointX={breakpointX}
					/>
					<TextMesh
						position={[breakpointX ? breakpointX + 16 : 0, -3, -1]}
						color={"red"}
						font={"/fonts/Montserrat-Medium_Regular.json"}
						text={"not a cage to be trapped inside of."}
						rotation={[-0.5, 0, 0]}
						scale={0.25}
						depth={0.05}
						breakpointX={breakpointX}
					/>
				</group>
			</Canvas>
		</>
	);
};

export default App;
