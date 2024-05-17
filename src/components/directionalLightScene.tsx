import React, { useRef } from "react";
import Torus from "../meshes/torus";
import { OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLight, DirectionalLightHelper } from "three";

const DirectionalLightScene = () => {
	const directionalLightRef = useRef<DirectionalLight>(null!);

	useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "black");

	return (
		<>
			<directionalLight position={[0, 0, 2]} ref={directionalLightRef} />
			<Torus position={[0, 0, 0]} size={[0.5, 0.25, 60, 60]} color={"orange"} />
			<OrbitControls />
		</>
	);
};

export default DirectionalLightScene;
