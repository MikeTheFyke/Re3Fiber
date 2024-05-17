import { Vector3, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

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
	const ref = useRef<Mesh>(null);

	const [isHovered, setIsHovered] = useState(false);

	useFrame((state, delta) => {
		if (ref.current) {
			if (isHovered) {
				ref.current.rotation.x += delta * 2;
			} else {
				ref.current.rotation.y += delta;
			}
		}
	});

	return (
		<mesh
			position={position}
			ref={ref}
			onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
			onPointerLeave={() => setIsHovered(false)}
		>
			<torusKnotGeometry args={size} />
			<meshStandardMaterial color={isHovered ? "green" : color} />
		</mesh>
	);
};

const Cube = ({ position, color, size }: CubeProps) => {
	const ref = useRef<Mesh>(null);

	const [isHovered, setIsHovered] = useState(false);

	useFrame((state, delta) => {
		if (ref.current) {
			if (isHovered) {
				ref.current.rotation.x += delta * 2;
			} else {
				ref.current.rotation.y += delta;
			}
		}
	});

	return (
		<mesh
			position={position}
			ref={ref}
			onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
			onPointerLeave={() => setIsHovered(false)}
		>
			<boxGeometry args={size} />
			<meshStandardMaterial color={isHovered ? "blue" : color} />
		</mesh>
	);
};

const Torus = ({ position, color, size }: TorusProps) => {
	const ref = useRef<Mesh>(null);

	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	useFrame((state, delta) => {
		if (ref.current) {
			if (isHovered) {
				ref.current.rotation.y += delta * 2;
			} else {
				ref.current.rotation.x += delta;
			}
		}
	});

	return (
		<mesh
			position={position}
			ref={ref}
			onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
			onPointerLeave={() => setIsHovered(false)}
			onClick={() => setIsClicked(!isClicked)}
			scale={isClicked ? 0.5 : 1}
		>
			<torusGeometry args={size} />
			<meshStandardMaterial color={isHovered ? "purple" : color} />
		</mesh>
	);
};

const Sphere = ({ position, color, size, wireframe }: SphereProps) => {
	const ref = useRef<Mesh>(null);

	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	useFrame((state, delta) => {
		if (ref.current) {
			if (isHovered) {
				ref.current.rotation.y += delta * 2;
			} else {
				ref.current.rotation.x += delta * 2;
			}
		}
	});

	return (
		<mesh
			position={position}
			ref={ref}
			onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
			onPointerLeave={() => setIsHovered(false)}
			onClick={() => setIsClicked(!isClicked)}
			scale={isClicked ? 1.5 : 1}
		>
			<sphereGeometry args={size} />
			<meshStandardMaterial
				color={isHovered ? "black" : color}
				wireframe={isHovered ? !wireframe : wireframe}
			/>
		</mesh>
	);
};

const HoverMeshes = () => {
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
		</>
	);
};

export default HoverMeshes;
