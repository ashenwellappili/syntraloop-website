"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Parametric 3D Infinity Loop Curve (Lemniscate)
class InfinityLoopCurve extends THREE.Curve {
  constructor(scale = 2.2, depth = 0.45) {
    super();
    this.scale = scale;
    this.depth = depth;
  }

  getPoint(t, optionalTarget = new THREE.Vector3()) {
    const point = optionalTarget || new THREE.Vector3();
    const u = t * Math.PI * 2;
    // Lemniscate of Gerono with smooth 3D spatial curvature
    const x = this.scale * Math.cos(u);
    const y = (this.scale * 0.54) * Math.sin(2 * u);
    const z = this.depth * Math.sin(u);

    return point.set(x, y, z);
  }
}

export default function Interactive3DLogo() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    // WebGL Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn("WebGL not supported, fallback active", e);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Main 3D Object Group
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // 1. Infinity Loop Geometry
    const curve = new InfinityLoopCurve(2.2, 0.42);
    const tubeGeometry = new THREE.TubeGeometry(curve, 180, 0.36, 32, true);

    // 2. SyntraLoop Navy Metallic Material
    const loopMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x0b1b3d), // Deep navy
      roughness: 0.18,
      metalness: 0.4,
    });
    const loopMesh = new THREE.Mesh(tubeGeometry, loopMaterial);
    logoGroup.add(loopMesh);

    // 3. Electric Blue Wireframe Accent
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x0057d8),
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    });
    const wireframeMesh = new THREE.Mesh(tubeGeometry, wireframeMaterial);
    wireframeMesh.scale.set(1.025, 1.025, 1.025);
    logoGroup.add(wireframeMesh);

    // 4. Central Nexus Node Sphere
    const sphereGeometry = new THREE.SphereGeometry(0.48, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x00d2ff),
      emissive: new THREE.Color(0x0057d8),
      emissiveIntensity: 1.4,
      roughness: 0.1,
      metalness: 0.2,
    });
    const centralNode = new THREE.Mesh(sphereGeometry, sphereMaterial);
    logoGroup.add(centralNode);

    // 5. Outer Halo Ring around Central Node
    const haloGeometry = new THREE.RingGeometry(0.6, 0.68, 48);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x38bdf8),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
    logoGroup.add(haloMesh);

    // 6. Traveling Energy Orbs
    const orbGeometry = new THREE.SphereGeometry(0.14, 16, 16);
    const orbMaterial1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x38bdf8),
    });
    const energyOrb1 = new THREE.Mesh(orbGeometry, orbMaterial1);
    logoGroup.add(energyOrb1);

    const orbMaterial2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x60a5fa),
    });
    const energyOrb2 = new THREE.Mesh(orbGeometry, orbMaterial2);
    logoGroup.add(energyOrb2);

    // 7. Ambient Particle Cloud
    const particleCount = 42;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.4 + (Math.random() - 0.5) * 1.6;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = Math.sin(angle) * (radius * 0.55) + (Math.random() - 0.5) * 0.6;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0057d8,
      size: 0.07,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    logoGroup.add(particles);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.8);
    dirLight1.position.set(6, 8, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 2.2);
    dirLight2.position.set(-6, -4, 5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x0057d8, 3.5, 15);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    // Dynamic Sizing
    const handleSizeUpdate = () => {
      if (!container || !renderer || !camera) return;
      const rect = container.getBoundingClientRect();
      const w = rect.width || container.clientWidth || 480;
      const h = rect.height || container.clientHeight || 420;
      if (w <= 0 || h <= 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, true);
    };

    handleSizeUpdate();

    const resizeObserver = new ResizeObserver(() => {
      handleSizeUpdate();
    });
    resizeObserver.observe(container);
    window.addEventListener('resize', handleSizeUpdate);

    // Mouse Interaction & Parallax Tilt
    let targetRotX = 0;
    let targetRotY = 0;
    let targetPosX = 0;
    let targetPosY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / (rect.width || window.innerWidth)) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / (rect.height || window.innerHeight)) * 2 - 1);

      targetRotY = normX * 0.55;
      targetRotX = normY * 0.4;
      targetPosX = normX * 0.22;
      targetPosY = normY * 0.16;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth Lerp damping toward cursor target
        logoGroup.rotation.y += (targetRotY - logoGroup.rotation.y) * 0.06;
        logoGroup.rotation.x += (targetRotX - logoGroup.rotation.x) * 0.06;
        logoGroup.position.x += (targetPosX - logoGroup.position.x) * 0.06;
        logoGroup.position.y += (targetPosY - logoGroup.position.y) * 0.06;

        // Ambient floating oscillation
        const floatY = Math.sin(elapsedTime * 1.3) * 0.08;
        const subtleRoll = Math.sin(elapsedTime * 0.8) * 0.04;
        logoGroup.position.y += floatY * 0.05;
        logoGroup.rotation.z = subtleRoll;

        // Central node pulsing & halo rotation
        const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
        centralNode.scale.set(pulse, pulse, pulse);
        haloMesh.rotation.z = elapsedTime * 0.5;

        // Energy orbs traveling along the infinity curve
        const progress1 = (elapsedTime * 0.18) % 1;
        const pt1 = curve.getPoint(progress1);
        energyOrb1.position.copy(pt1);

        const progress2 = (elapsedTime * 0.18 + 0.5) % 1;
        const pt2 = curve.getPoint(progress2);
        energyOrb2.position.copy(pt2);

        // Particle subtle drift
        particles.rotation.y = elapsedTime * 0.07;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleSizeUpdate);
      resizeObserver.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      tubeGeometry.dispose();
      sphereGeometry.dispose();
      haloGeometry.dispose();
      orbGeometry.dispose();
      particleGeometry.dispose();
      loopMaterial.dispose();
      wireframeMaterial.dispose();
      sphereMaterial.dispose();
      haloMaterial.dispose();
      orbMaterial1.dispose();
      orbMaterial2.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="interactive-3d-logo-canvas"
      aria-label="Interactive 3D SyntraLoop Logo Emblem"
    />
  );
}
