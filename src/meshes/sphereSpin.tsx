import { Vector3, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

interface Props {
	position: Vector3 | undefined;
	color: string;
	size:
		| [
				radius?: number | undefined,
				widthSegments?: number | undefined,
				heightSegments?: number | undefined,
				phiStart?: number | undefined,
				phiLength?: number | undefined,
				thetaStart?: number | undefined,
				thetaLength?: number | undefined
		  ]
		| undefined;
	wireframe: boolean;
}

const SphereSpin = ({ position, color, size, wireframe }: Props) => {
	const ref = useRef<Mesh>(null);

	//size = radius, widthSegments, heightSegments

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
			<sphereGeometry args={size} />
			<meshStandardMaterial color={color} wireframe={wireframe} />
		</mesh>
	);
};

export default SphereSpin;
