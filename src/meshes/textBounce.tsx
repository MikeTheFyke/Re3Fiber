import { FontData, Text, Text3D } from "@react-three/drei";
import { Euler, Vector3, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface Props {
	position: Vector3 | undefined;
	color: string;
	font: string | FontData;
	message: string | undefined;
	message2: string | undefined;
	rotation: Euler | undefined;
	scale: number;
	depth: number;
	breakpointX: number | undefined;
}

const Bouncing3DText = ({
	position,
	color,
	font,
	message,
	message2,
	rotation,
	scale,
	depth,
	breakpointX,
}: Props) => {
	const ref = useRef<Mesh>(null);

	useFrame((state, delta) => {
		if (ref.current) {
			// if (breakpointX) {
			// 	if (ref.current.position.x >= -breakpointX * 2) {
			// 		ref.current.position.x -= delta;
			// 	} else {
			// 		ref.current.position.x = breakpointX * 2;
			// 	}
			// }
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
				{message}
				\n
				{message2}
				<meshStandardMaterial color={color} />
			</Text3D>
		</mesh>
	);
};

export default Bouncing3DText;
