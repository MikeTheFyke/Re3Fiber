import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import { Vector3 } from "@react-three/fiber";

interface Props {
	position: Vector3 | undefined;
	color: string;
	size: [
		width?: number | undefined,
		height?: number | undefined,
		depth?: number | undefined,
		widthSegments?: number | undefined,
		heightSegments?: number | undefined,
		depthSegments?: number | undefined
	];
}

const CubeSpin = ({ position, color, size }: Props) => {
	const ref = useRef<Mesh>(null);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x += delta;
			console.log("Delta : ", delta);
		}
	});

	return (
		<mesh position={position} ref={ref}>
			<boxGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

export default CubeSpin;
