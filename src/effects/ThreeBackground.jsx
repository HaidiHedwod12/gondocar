import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Inisialisasi scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Inisialisasi kamera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Inisialisasi renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparan
    rendererRef.current = renderer;

    // Tambahkan renderer ke DOM
    containerRef.current.appendChild(renderer.domElement);

    // Buat particles
    createParticles();

    // Tambahkan ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Tambahkan directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Fungsi animasi
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current) {
        // Rotasi particles perlahan
        particlesRef.current.rotation.y += 0.001;
        particlesRef.current.rotation.z += 0.0005;
        
        // Gerakan bergelombang
        const positions = particlesRef.current.geometry.attributes.position.array;
        const time = Date.now() * 0.0005;
        
        for (let i = 0; i < positions.length; i += 3) {
          // Hanya gerakkan beberapa partikel untuk efek yang lebih halus
          if (i % 6 === 0) {
            positions[i + 1] = Math.sin(time + positions[i] / 10) * 0.5;
          }
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    // Fungsi untuk membuat particles
    function createParticles() {
      // Hapus partikel lama jika ada
      if (particlesRef.current) {
        scene.remove(particlesRef.current);
      }

      // Buat geometri dengan banyak titik
      const particleCount = 2000;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      
      // Atur posisi awal partikel secara acak dalam bentuk bola
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = 30 + (Math.random() * 30);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);     // x
        particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
        particlePositions[i3 + 2] = radius * Math.cos(phi);                   // z
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      
      // Material dengan gradien
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.3,
        transparent: true,
        opacity: 0.5,
        color: 0x5588aa,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      
      // Buat sistem partikel
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
      particlesRef.current = particles;
    }

    // Handler untuk resize window
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // Event listener untuk resize
    window.addEventListener('resize', handleResize);

    // Mulai animasi
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (particlesRef.current) {
        scene.remove(particlesRef.current);
        particlesRef.current.geometry.dispose();
        particlesRef.current.material.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
