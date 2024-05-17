import { Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";

interface Props {
	position: Vector3 | undefined;
	color: string;
	size:
		| [
				radius?: number | undefined,
				tube?: number | undefined,
				radialSegments?: number | undefined,
				tubularSegments?: number | undefined,
				arc?: number | undefined
		  ]
		| undefined;
}

const Torus = ({ position, color, size }: Props) => {
	const ref = useRef<Mesh>(null);

	return (
		<mesh position={position} ref={ref}>
			<torusGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

export default Torus;
