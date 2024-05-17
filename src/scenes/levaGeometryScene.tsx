import React, { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLight, DirectionalLightHelper, Mesh } from "three";
import { useControls } from "leva";
import { Vector3 } from "@react-three/fiber";

interface TorusProps {
	position: Vector3 | undefined;
	size:
		| [
				tube?: number | undefined,
				radialSegments?: number | undefined,
				tubularSegments?: number | undefined,
				arc?: number | undefined
		  ]
		| undefined;
}

const Torus = ({ position, size }: TorusProps) => {
	const ref = useRef<Mesh>(null);

	const { color, radius, tube } = useControls({
		color: "orange",
		radius: {
			value: 1,
			min: 1,
			max: 16,
			step: 0.5,
		},
		tube: {
			value: 0.75,
			min: 0.25,
			max: 10,
			step: 0.25,
		},
	});

	return (
		<mesh position={position} ref={ref}>
			<torusGeometry args={[radius, tube, 60, 60]} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

const LevaGeometryScene = () => {
	const directionalLightRef = useRef<DirectionalLight>(null!);

	const { lightColor, lightIntensity } = useControls({
		lightColor: "white",
		lightIntensity: {
			value: 3.0,
			min: 0,
			max: 5,
			step: 0.1,
		},
	});

	useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "black");

	return (
		<>
			<directionalLight
				position={[0, 0, 2]}
				ref={directionalLightRef}
				color={lightColor}
				intensity={lightIntensity}
			/>
			<Torus position={[0, 0, 0]} size={[0.25, 60, 60]} />
			<OrbitControls />
		</>
	);
};

export default LevaGeometryScene;
