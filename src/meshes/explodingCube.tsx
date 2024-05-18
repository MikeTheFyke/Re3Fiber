import { Center, useAnimations, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const ExplodingCube = () => {
	useGLTF("./explodeCube.glb");

	const { nodes, animations, scene } = useGLTF("./explodeCube.glb");
	const { actions } = useAnimations(animations, scene);

	return (
		<>
			<directionalLight position={[-5, -5, 5]} intensity={2} />
			<Suspense fallback={null}>
				<Center>
					<group>
						<primitive object={scene} />
					</group>
				</Center>
			</Suspense>
		</>
	);
};

export default ExplodingCube;
