import React, { useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const RecommendPage = () => {
  return (
    <WrapContent>
      <CanvasWrapper>
        <Canvas camera={{ position: [10, 0, 30], fov: 75 }}>
          <ambientLight />
          <RedCircle />
          <Stars />
        </Canvas>
      </CanvasWrapper>
      <Content>
        <h1>추천 페이지</h1>
      </Content>
    </WrapContent>
  );
};

const Stars = () => {
  const pointsRef = useRef<THREE.Points>(null); // 타입 명시

  useFrame(({ clock }) => {
    // 별들이 천천히 회전하는 효과
    const elapsedTime = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} limit={1000}>
      {/* 별 위치 랜덤 생성 */}
      {Array.from({ length: 1000 }).map((_, i) => (
        <PointMaterial
          key={i}
          position={[
            Math.random() * 20 - 10, // X 위치
            Math.random() * 20 - 10, // Y 위치
            Math.random() * 20 - 10, // Z 위치
          ]}
          size={0.05}
          color="#ffffff"
          transparent
          opacity={Math.random()}
        />
      ))}
    </Points>
  );
};

// 빨간색 원
const RedCircle = () => {
  const circleRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    // 원이 천천히 회전하도록 설정
    if (circleRef.current) {
      circleRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={circleRef} position={[0, 0, 0]}>
      <circleGeometry args={[5, 32]} /> {/* 반지름 5, 세그먼트 32 */}
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

const WrapContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #330a6a;
  position: relative;
  overflow: hidden;

  position: absolute;
  z-index: 99;
`;

const CanvasWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export default RecommendPage;
