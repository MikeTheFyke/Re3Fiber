import React, { useRef } from "react";
import { Mesh } from "three";

const HoverMeshes = () => {
	const ref = useRef<Mesh>(null);

	return (
		<>
			<mesh position={[-3, 0, 0]} ref={ref}>
				<torusKnotGeometry args={[0.5, 0.2, 80, 80]} />
				<meshStandardMaterial color={"pink"} />
			</mesh>
			<mesh position={[-1, 0, 0]} ref={ref}>
				<torusGeometry args={[0.5, 0.25, 40, 40]} />
				<meshStandardMaterial color={"red"} />
			</mesh>
			<mesh position={[1, 0, 0]} ref={ref}>
				<boxGeometry args={[1.5, 1.5, 0]} />
				<meshStandardMaterial color={"orange"} />
			</mesh>
			<mesh position={[3, 0, 0]} ref={ref}>
				<sphereGeometry args={[0.75, 30, 30]} />
				<meshStandardMaterial color={"yellow"} wireframe={true} />
			</mesh>
		</>
	);
};

export default HoverMeshes;
