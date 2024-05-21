import { Vector3, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

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
	breakpointX: number | undefined;
}

const CubeMove = ({ position, color, size, breakpointX }: Props) => {
	const ref = useRef<Mesh>(null);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x += delta;
			ref.current.rotation.y += delta * 2;
			if (breakpointX) {
				if (ref.current.position.x < breakpointX) {
					ref.current.position.x += delta;
				} else {
					ref.current.position.x = -breakpointX;
				}
			}
		}
	});

	return (
		<mesh position={position} ref={ref}>
			<boxGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

export default CubeMove;
