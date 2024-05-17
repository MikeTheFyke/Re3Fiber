import {
	GradientTexture,
	MeshDistortMaterial,
	MeshWobbleMaterial,
	OrbitControls,
	useCursor,
} from "@react-three/drei";
import { Vector3, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";
import * as THREE from "three";

interface KnotProps {
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

interface CubeProps {
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

interface TorusProps {
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

interface SphereProps {
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

const TorusKnot = ({ position, color, size }: KnotProps) => {
	const ref = useRef<any>(null);

	const [hovered, hover] = useState(false);
	useCursor(hovered);
	useFrame(() => {
		if (ref.current) {
			ref.current.distort = THREE.MathUtils.lerp(
				ref.current.distort,
				hovered ? 0.4 : 0,
				hovered ? 0.05 : 0.01
			);
		}
	});

	return (
		<mesh
			position={position}
			onPointerOver={() => hover(true)}
			onPointerOut={() => hover(false)}
			scale={[1, 1, 1]}
		>
			<torusKnotGeometry args={size} />
			{/* <meshStandardMaterial color={color} /> */}
			{/* Drei Distored Material */}
			<MeshDistortMaterial ref={ref} speed={5}>
				<GradientTexture
					stops={[0, 0.8, 1]}
					colors={["#e639d2", "#f1faee", "#a8dadc"]}
					size={100}
				/>
			</MeshDistortMaterial>
		</mesh>
	);
};

const Torus = ({ position, color, size }: TorusProps) => {
	const ref = useRef<Mesh>(null);

	return (
		<mesh position={position} ref={ref}>
			<torusGeometry args={size} />
			<meshStandardMaterial color={color} />
			{/* Drei Wobble Material */}
			<MeshWobbleMaterial factor={3} speed={6} color={color} />
		</mesh>
	);
};

const Cube = ({ position, color, size }: CubeProps) => {
	const ref = useRef<Mesh>(null);

	return (
		<mesh position={position} ref={ref}>
			<boxGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

const Sphere = ({ position, color, size, wireframe }: SphereProps) => {
	const ref = useRef<Mesh>(null);

	return (
		<mesh position={position} ref={ref}>
			<sphereGeometry args={size} />
			<meshStandardMaterial color={color} wireframe={wireframe} />
		</mesh>
	);
};

const DreiMeshes = () => {
	return (
		<>
			<TorusKnot
				position={[-3, 0, 0]}
				color={"pink"}
				size={[0.5, 0.2, 80, 80]}
			/>
			<Cube position={[1, 0, 0]} color={"orange"} size={[1.25, 1.25, 1.25]} />
			<Torus position={[-1, 0, 0]} color={"red"} size={[0.5, 0.25, 40, 40]} />
			<Sphere
				position={[3, 0, 0]}
				color={"yellow"}
				size={[0.65, 30, 30]}
				wireframe={false}
			/>
			<OrbitControls />
		</>
	);
};

export default DreiMeshes;
