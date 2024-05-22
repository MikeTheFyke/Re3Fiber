import { FontData, Text, Text3D } from "@react-three/drei";
import { Euler, Vector3, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface Props {
	position: Vector3 | undefined;
	color: string;
	font: string | FontData;
	text: string | undefined;
	rotation: Euler | undefined;
	scale: number;
	depth: number;
	// size: [
	// 	width?: number | undefined,
	// 	height?: number | undefined,
	// 	depth?: number | undefined,
	// 	widthSegments?: number | undefined,
	// 	heightSegments?: number | undefined,
	// 	depthSegments?: number | undefined
	// ];
	breakpointX: number | undefined;
}

const TextMesh = ({
	position,
	color,
	font,
	text,
	rotation,
	scale,
	depth,
	breakpointX,
}: Props) => {
	const ref = useRef<Mesh>(null);

	useFrame((state, delta) => {
		if (ref.current) {
			if (breakpointX) {
				if (ref.current.position.x >= -breakpointX * 2) {
					ref.current.position.x -= delta;
				} else {
					ref.current.position.x = breakpointX * 2;
				}
			}
		}
	});

	const textOptions = {
		font: font,
		size: scale,
		height: depth,
		color: color,
	};

	return (
		<mesh position={position} ref={ref}>
			<Text3D {...textOptions}>
				{text}
				<meshStandardMaterial color={color} />
			</Text3D>

			{/* <Text position={position} rotation={rotation} scale={scale} color={color}>
				{text}
			</Text> */}
		</mesh>
	);
};

export default TextMesh;
