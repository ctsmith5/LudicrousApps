import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction, ChromaticAberrationEffect } from "postprocessing";

// Tuned defaults (ported from the space-warp sandbox)
const COUNT = 10_000;
const XY_BOUNDS = 40;
// Increase depth so the "wrap" doesn't feel like a short loop.
const Z_BOUNDS = 240;

// Slower speed + deeper field = smoother, less noticeable looping.
const SPEED = 10.0; // units per second
const STREAK_Z = 100.0; // constant stretch

const CHROMATIC_ABERRATION_OFFSET = 0.0015;

export function WarpScene() {
  const meshRef = useRef<THREE.InstancedMesh | null>(null);
  const effectsRef = useRef<ChromaticAberrationEffect | null>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    // Ensure per-instance colors exist. Default to white so stars are visible.
    if (!meshRef.current.instanceColor) {
      const colors = new Float32Array(COUNT * 3);
      for (let i = 0; i < colors.length; i++) colors[i] = 1;
      meshRef.current.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
      meshRef.current.instanceColor.needsUpdate = true;
    }

    const t = new THREE.Object3D();
    let j = 0;
    for (let i = 0; i < COUNT * 3; i += 3) {
      t.position.x = generatePos();
      t.position.y = generatePos();
      t.position.z = (Math.random() - 0.5) * Z_BOUNDS;
      t.updateMatrix();
      meshRef.current.setMatrixAt(j++, t.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  const temp = new THREE.Matrix4();
  const tempPos = new THREE.Vector3();
  const tempObject = new THREE.Object3D();
  const tempColor = new THREE.Color();

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Optional: enable for a subtle spiral roll
    // state.camera.rotation.z += delta * 0.15;

    for (let i = 0; i < COUNT; i++) {
      meshRef.current.getMatrixAt(i, temp);

      tempObject.scale.set(1, 1, STREAK_Z);

      tempPos.setFromMatrixPosition(temp);
      if (tempPos.z > Z_BOUNDS / 2) {
        tempPos.z = -Z_BOUNDS / 2;
      } else {
        tempPos.z += SPEED * delta;
      }

      tempObject.position.set(tempPos.x, tempPos.y, tempPos.z);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      // Keep stars white
      if (meshRef.current.instanceColor) {
        tempColor.setRGB(1, 1, 1);
        meshRef.current.setColorAt(i, tempColor);
      }
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;

    // Keep chromatic aberration stable (or animate it later)
    if (effectsRef.current) {
      effectsRef.current.offset.x = CHROMATIC_ABERRATION_OFFSET;
      effectsRef.current.offset.y = CHROMATIC_ABERRATION_OFFSET;
    }
  });

  return (
    <>
      <color args={["#000000"]} attach="background" />
      <instancedMesh
        // R3F typing is finicky for instanced refs; keep it pragmatic.
        ref={meshRef as any}
        args={[undefined, undefined, COUNT]}
        matrixAutoUpdate
      >
        <sphereGeometry args={[0.005]} />
        <meshBasicMaterial color={[1.5, 1.5, 1.5]} toneMapped={false} />
      </instancedMesh>

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur />
        <ChromaticAberration
          ref={effectsRef as any}
          blendFunction={BlendFunction.NORMAL}
          radialModulation={false}
          modulationOffset={0}
          offset={
            new THREE.Vector2(
              CHROMATIC_ABERRATION_OFFSET,
              CHROMATIC_ABERRATION_OFFSET,
            )
          }
        />
      </EffectComposer>
    </>
  );
}

function generatePos() {
  return (Math.random() - 0.5) * XY_BOUNDS;
}

