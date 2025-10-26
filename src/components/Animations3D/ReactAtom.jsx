import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Trail, Float, Line, Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ReactAtom({ scale = 0.2, position = [2, 0, 0] }) {
    return (
        <group scale={scale} position={position}>
            <Float speed={4} rotationIntensity={2} floatIntensity={5}>
                <group scale={0.6}>
                    <Atom />
                </group>
            </Float>
        </group>
    )
}

function Atom(props) {
    const points = useMemo(
        () => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(150),
        []
    )
    const vertices = points.map((p) => new THREE.Vector3(p.x, p.y, 0))

    return (
        <group {...props}>
            {/* Orbit lines */}
            <Line points={vertices} color={[4, 1, 10]} lineWidth={1} toneMapped={false} />
            <Line points={vertices} color={[4, 1, 10]} lineWidth={1} rotation={[0, 0, Math.PI / 3]} />
            <Line points={vertices} color={[4, 1, 10]} lineWidth={1} rotation={[0, 0, -Math.PI / 3]} />

            {/* Electrons */}
            <Electron rotation={[0, 0, 0]} speed={6} />
            <Electron rotation={[0, 0, Math.PI / 3]} speed={6.5} />
            <Electron rotation={[0, 0, -Math.PI / 3]} speed={7} />

            {/* Nucleus */}
            <Sphere args={[0.35, 64, 64]}>
                <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
            </Sphere>
        </group>
    )
}

function Electron({ radius = 2.75, speed = 6, rotation = [0, 0, 0] }) {
    const electronRef = useRef()
    const orbitRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        const x = Math.sin(t) * radius
        const y = Math.cos(t) * radius * 0.38
        electronRef.current.position.set(x, y, 0)
    })

    useFrame((state) => {
        orbitRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
    })

    return (
        <group ref={orbitRef} rotation={rotation}>
            <Trail
                local={false}
                interval={0.5}
                width={2}
                length={2}
                decay={0.08}
                color={new THREE.Color(5, 2, 10)}
                attenuation={(t) => Math.pow(t, 2.2)}
                smoothing={1}
                
            >
                <mesh ref={electronRef}>
                    <sphereGeometry args={[0.2]} />
                    <meshBasicMaterial
                        color={[10, 1, 10]}
                        toneMapped={false}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            </Trail>
        </group>
    )
}
