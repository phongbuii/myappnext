import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const AnniversaryAnimation = () => {
    const groupRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const mouseX = (clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(clientY / window.innerHeight) * 2 + 1;

            gsap.to(groupRef.current.rotation, {
                y: mouseX * Math.PI * 0.5,
                x: mouseY * Math.PI * 0.5,
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const texts = [
        { content: "I love you", position: [0, 0, 0] },
        { content: "Huyền My", position: [2, 2, -2] },
        { content: "13-04-2024", position: [-2, -2, 2] },
        { content: "Happy Anniversary 1 Year", position: [0, -3, 0] }
    ];

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <group ref={groupRef}>
                {texts.map((text, index) => (
                    <Text
                        key={index}
                        position={text.position}
                        fontSize={0.5}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {text.content}
                        <meshStandardMaterial color="white" transparent opacity={0.8} />
                    </Text>
                ))}
                {/* Add heart shapes as needed */}
                <mesh position={[1, 1, -1]}>
                    <sphereGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </group>
            <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
    );
};

export default AnniversaryAnimation;