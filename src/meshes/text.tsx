import { FontData, Text, Text3D } from "@react-three/drei";
import { Euler, Vector3 } from "@react-three/fiber";

interface Props {
	position: Vector3 | undefined;
	color: string;
	font: string | FontData;
	text: string | undefined;
	rotation: Euler | undefined;
	scale: number;
	// size: [
	// 	width?: number | undefined,
	// 	height?: number | undefined,
	// 	depth?: number | undefined,
	// 	widthSegments?: number | undefined,
	// 	heightSegments?: number | undefined,
	// 	depthSegments?: number | undefined
	// ];
}

const TextMesh = ({ position, color, font, text, rotation, scale }: Props) => {
	// const textOptions = {
	// 	font: font,
	// 	size: 1,
	// 	height: 0.1,
	// 	color: color,
	// };

	return (
		<mesh position={position}>
			{/* <Text3D {...textOptions}>Test</Text3D> */}
			<Text position={position} rotation={rotation} scale={scale} color={color}>
				{text}
			</Text>
		</mesh>
	);
};

export default TextMesh;
