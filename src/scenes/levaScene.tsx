import React, { useRef } from "react";
import Torus from "../meshes/torus";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { useControls } from "leva";

const LevaScene = () => {
	const directionalLightRef = useRef<DirectionalLight>(null!);

	const { lightColor, lightIntensity } = useControls({
		lightColor: "white",
		lightIntensity: {
			value: 0.5,
			min: 0,
			max: 5,
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
			<Torus position={[0, 0, 0]} size={[0.5, 0.25, 60, 60]} color={"orange"} />
			<OrbitControls />
		</>
	);
};

export default LevaScene;
