import { Vector3 } from "@react-three/fiber";
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
}

const Sphere = ({ position, color, size }: Props) => {
	const ref = useRef<Mesh>(null);

	//size = radius, widthSegments, heightSegments

	return (
		<mesh position={position} ref={ref}>
			<sphereGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

export default Sphere;
