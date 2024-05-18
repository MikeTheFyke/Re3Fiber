import { Center, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import React, { Suspense, useRef } from "react";
import { AnimationAction, Group, MathUtils } from "three";

const ExplodingCube = () => {
	useGLTF("./explodeCube.glb");

	const motionVal = useMotionValue(0);
	const spring = useSpring(motionVal, { damping: 1, stiffness: 20 });

	const groupRef = useRef<Group>(null);

	useFrame(({ camera }) => {
		if (groupRef.current) {
			groupRef.current?.rotateY(MathUtils.degToRad(0.2));
		}
		Object.keys(actions).forEach((key) => {
			const action = actions[key] as AnimationAction;
			action.play().paused = true;
			action.time = spring.get();
		});
	});

	const { nodes, animations, scene } = useGLTF("./explodeCube.glb");
	const { actions } = useAnimations(animations, scene);

	return (
		<>
			<directionalLight position={[-5, -5, 5]} intensity={2} />
			<Suspense fallback={null}>
				<Center>
					<group
						onPointerUp={() => motionVal.set(0)}
						onPointerDown={() => motionVal.set(1)}
						onPointerOver={() => motionVal.set(1)}
						onPointerLeave={() => motionVal.set(0)}
						ref={groupRef}
					>
						<primitive object={scene} />
					</group>
				</Center>
			</Suspense>
		</>
	);
};

export default ExplodingCube;
