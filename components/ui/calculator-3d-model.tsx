"use client";

import { Suspense, useEffect, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import type { ThreeEvent } from "@react-three/fiber";

interface Calculator3DModelProps {
  selectedTeeth: string[];
  onToothSelect: (teeth: string[]) => void;
}

function SelectableTooth({ 
  mesh, 
  toothIndex, 
  isSelected, 
  onSelect 
}: { 
  mesh: THREE.Mesh; 
  toothIndex: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const originalMaterial = useRef<THREE.Material | null>(null);
  const hoveredMaterial = useRef<THREE.MeshStandardMaterial | null>(null);
  const selectedMaterial = useRef<THREE.MeshStandardMaterial | null>(null);

  useEffect(() => {
    if (meshRef.current) {
      const mat = meshRef.current.material;
      originalMaterial.current = Array.isArray(mat) ? mat[0] : mat;
      hoveredMaterial.current = new THREE.MeshStandardMaterial({
        color: "#a5d6a7",
        metalness: 0.3,
        roughness: 0.7,
        side: THREE.DoubleSide,
      });
      selectedMaterial.current = new THREE.MeshStandardMaterial({
        color: "#4caf50",
        metalness: 0.3,
        roughness: 0.7,
        emissive: "#2e7d32",
        emissiveIntensity: 0.3,
        side: THREE.DoubleSide,
      });
    }
  }, []);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(toothIndex);
  };

  const handlePointerEnter = () => {
    if (meshRef.current && !isSelected && hoveredMaterial.current) {
      meshRef.current.material = hoveredMaterial.current;
    }
  };

  const handlePointerLeave = () => {
    if (meshRef.current && !isSelected && originalMaterial.current) {
      meshRef.current.material = originalMaterial.current;
    }
  };

  useEffect(() => {
    if (meshRef.current) {
      if (isSelected && selectedMaterial.current) {
        meshRef.current.material = selectedMaterial.current;
      } else if (originalMaterial.current) {
        meshRef.current.material = originalMaterial.current;
      }
    }
  }, [isSelected]);

  return (
    <primitive
      ref={meshRef}
      object={mesh}
      onClick={handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    />
  );
}

function ToothModel({ 
  selectedTeeth, 
  onToothSelect 
}: { 
  selectedTeeth: string[];
  onToothSelect: (teeth: string[]) => void;
}) {
  const obj = useLoader(OBJLoader, "/diş.obj");

  const toothMeshes = useMemo(() => {
    const meshes: THREE.Mesh[] = [];
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#f1f8e9",
          metalness: 0.2,
          roughness: 0.8,
          flatShading: false,
          side: THREE.DoubleSide,
        });
        child.castShadow = true;
        child.receiveShadow = true;
        meshes.push(child);
      }
    });
    return meshes;
  }, [obj]);

  const handleToothSelect = (index: number) => {
    const toothId = `tooth-${index}`;
    if (selectedTeeth.includes(toothId)) {
      onToothSelect(selectedTeeth.filter((id) => id !== toothId));
    } else {
      onToothSelect([...selectedTeeth, toothId]);
    }
  };

  const isAllSelected = selectedTeeth.includes("all");

  return (
    <group scale={[0.3, 0.3, 0.3]} position={[0, 0, 0]}>
      {toothMeshes.map((mesh, index) => (
        <SelectableTooth
          key={index}
          mesh={mesh}
          toothIndex={index}
          isSelected={isAllSelected || selectedTeeth.includes(`tooth-${index}`)}
          onSelect={handleToothSelect}
        />
      ))}
    </group>
  );
}

function Scene({ selectedTeeth, onToothSelect }: { selectedTeeth: string[]; onToothSelect: (teeth: string[]) => void }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.4} />
      <Suspense fallback={null}>
        <Environment preset="studio" />
        <ToothModel selectedTeeth={selectedTeeth} onToothSelect={onToothSelect} />
      </Suspense>
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        minDistance={1.5}
        maxDistance={6}
        autoRotate={false}
        target={[0, 0, 0]}
      />
    </>
  );
}

export function Calculator3DModel({
  selectedTeeth,
  onToothSelect,
}: Calculator3DModelProps) {
  const isAllSelected = selectedTeeth.includes("all");

  const handleSelectAll = () => {
    if (isAllSelected) {
      onToothSelect([]);
    } else {
      onToothSelect(["all"]);
    }
  };

  return (
    <div className="bg-green-50 rounded-xl p-6 border border-green-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-green-900">
          04. Diş seçin
        </h3>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
            className="w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-500"
          />
          <span className="ml-2 text-sm text-gray-700">Tümü</span>
        </label>
      </div>

      {/* 3D Model */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden">
        <Canvas
          camera={{ position: [0, 0.5, 2.5], fov: 50 }}
          gl={{ antialias: true }}
          shadows
        >
          <Scene selectedTeeth={selectedTeeth} onToothSelect={onToothSelect} />
        </Canvas>
      </div>
    </div>
  );
}

