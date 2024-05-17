import { Vector3, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

interface Props {
	position: Vector3 | undefined;
	color: string;
	size:
		| [
				radius?: number | undefined,
				tube?: number | undefined,
				tubularSegments?: number | undefined,
				radialSegments?: number | undefined,
				p?: number | undefined,
				q?: number | undefined
		  ]
		| undefined;
}

const TorusKnotSpin = ({ position, color, size }: Props) => {
	const ref = useRef<Mesh>(null);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x += delta;
			ref.current.rotation.y += delta * 2;
			// Zoom in and out
			ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
			//
		}
	});

	return (
		<mesh position={position} ref={ref}>
			<torusKnotGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

export default TorusKnotSpin;
