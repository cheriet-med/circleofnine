'use client'

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ScrollWebGLAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const animationFrameId = useRef<number>(0);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    model: THREE.Group;
    particles: THREE.Points;
    clock: THREE.Clock;
  } | null>(null);

  // Add state for arrow animation
  const [arrowPosition, setArrowPosition] = useState(0);

  useEffect(() => {
    // Arrow bounce animation
    const arrowAnimation = setInterval(() => {
      setArrowPosition(prev => {
        // Sine wave for smooth up and down motion
        return Math.sin(Date.now() * 0.005) * 10; // Adjust multiplier for speed and distance
      });
    }, 16); // ~60fps

    return () => clearInterval(arrowAnimation);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js scene with performance optimizations
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 100);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    camera.position.y = 3;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Create a placeholder group for the model
    const model = new THREE.Group();
    scene.add(model);

    // Load model using GLTFLoader with optimizations
    const loadModelWithGLTF = () => {
      const loader = new GLTFLoader();
      
      loader.load(
        '/models/space_station_x.glb',
        (gltf) => {
          console.log('Model loaded successfully:', gltf);
          
          const loadedModel = gltf.scene;
          
          // Remove any existing children from model group
          while (model.children.length > 0) {
            model.remove(model.children[0]);
          }
          
          // Optimize the loaded model
          optimizeModel(loadedModel);
          
          // Calculate the bounding box to understand model size
          const box = new THREE.Box3().setFromObject(loadedModel);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
          
          console.log('Model size:', size);
          console.log('Model center:', center);
          
          // Center the model
          loadedModel.position.x = -center.x;
          loadedModel.position.y = -center.y;
          loadedModel.position.z = -center.z;
          
          // Calculate scale to make model fill a good portion of the screen
          const maxDim = Math.max(size.x, size.y, size.z);
          let scale = 1;
          
          if (maxDim > 0) {
            scale = 3 / maxDim;
          }
          
          console.log('Applying scale:', scale);
          loadedModel.scale.setScalar(scale);
          
          // Additional scale multiplier to make it even larger
          const additionalScale = 5;
          loadedModel.scale.multiplyScalar(additionalScale);
          
          model.add(loadedModel);
          setModelLoaded(true);
          setLoadError(null);
          
          console.log('Space station model loaded and optimized');
        },
        (progress) => {
          if (progress.lengthComputable) {
            const percentComplete = (progress.loaded / progress.total * 100);
            console.log('Loading model...', percentComplete.toFixed(2) + '%');
          }
        },
        (error) => {
          console.error('Error loading GLB model:', error);
          setLoadError('Failed to load 3D model. Using fallback.');
          createOptimizedFallbackModel();
        }
      );
    };

    const optimizeModel = (model: THREE.Group) => {
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.geometry instanceof THREE.BufferGeometry) {
            child.geometry.computeBoundingSphere();
          }
          
          if (child.material instanceof THREE.Material) {
            if (child.material instanceof THREE.MeshStandardMaterial) {
              child.material.roughness = 0.8;
              child.material.metalness = 0.2;
            }
            
            child.material.shadowSide = null;
          }
          
          if (!child.userData.needsUpdate) {
            child.matrixAutoUpdate = false;
            child.updateMatrix();
          }
        }
      });
    };

    const createOptimizedFallbackModel = () => {
      const stationGroup = new THREE.Group();
      const scaleMultiplier = 1.5;
      
      const coreGeometry = new THREE.SphereGeometry(1.2 * scaleMultiplier, 8, 6);
      const coreMaterial = new THREE.MeshLambertMaterial({
        color: 0x4a86ff,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      stationGroup.add(core);

      const bodyGeometry = new THREE.CylinderGeometry(0.8 * scaleMultiplier, 0.8 * scaleMultiplier, 3 * scaleMultiplier, 8);
      const bodyMaterial = new THREE.MeshLambertMaterial({
        color: 0x3366cc,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.rotation.x = Math.PI / 2;
      stationGroup.add(body);

      const panelGeometry = new THREE.BoxGeometry(4 * scaleMultiplier, 0.05 * scaleMultiplier, 1.5 * scaleMultiplier);
      const panelMaterial = new THREE.MeshLambertMaterial({
        color: 0x00cc88,
      });
      
      const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
      panel1.position.x = 2.2 * scaleMultiplier;
      stationGroup.add(panel1);
      
      const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
      panel2.position.x = -2.2 * scaleMultiplier;
      stationGroup.add(panel2);

      model.add(stationGroup);
      setModelLoaded(true);
      console.log('Optimized fallback space station model created');
    };

    loadModelWithGLTF();

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 150;
      positions[i + 1] = (Math.random() - 0.5) * 150;
      positions[i + 2] = (Math.random() - 0.5) * 150;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.4,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    const clock = new THREE.Clock();

    sceneRef.current = { scene, camera, renderer, model, particles, clock };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      renderer.dispose();
      
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current || !modelLoaded) return;

    const { scene, camera, renderer, model, particles, clock } = sceneRef.current;

    let lastTime = 0;
    const frameInterval = 1000 / 30;

    const animate = (currentTime: number) => {
      animationFrameId.current = requestAnimationFrame(animate);

      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      
      lastTime = currentTime - (delta % frameInterval);

      const elapsedTime = clock.getElapsedTime();

      if (model && model.visible) {
        model.rotation.y += 0.01;
        
        const scrollRotation = scrollProgress * Math.PI * 2;
        const scrollScale = 1 + scrollProgress * 0.5;

        model.rotation.x = scrollRotation * 0.3;
        model.rotation.z = scrollRotation * 0.1;
        model.position.y = Math.sin(scrollProgress * Math.PI) * 2;
        model.scale.setScalar(scrollScale);

        model.position.y += Math.sin(elapsedTime * 0.3) * 0.05;
      }

      camera.position.z = 8 - scrollProgress * 6;
      camera.position.y = 3 - scrollProgress * 2;
      camera.lookAt(0, 0, 0);

      particles.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [scrollProgress, modelLoaded]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (!containerRef.current) return;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollHeight = container.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        const progress = Math.max(0, Math.min(1, scrolled / scrollHeight));
        setScrollProgress(progress);
      }, 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);
const textSections = [
  { 
    start: 0, 
    end: 0.2, 
    text: 'About Circle of Nine', 
    className: 'text-6xl font-extrabold uppercase', 
    position: 'center' 
  },
  { 
    start: 0.2, 
    end: 0.4, 
    text: 'At Circle of Nine, we are a collective of senior developers, designers, and technology experts united by a shared vision', 
    className: 'text-3xl max-w-5xl uppercase font-bold', 
    position: 'left' 
  },
  { 
    start: 0.4, 
    end: 0.55, 
    text: 'to simplify digital innovation for businesses around the world. With years of hands-on experience in multilingual programming, creative design, and seamless deployment, we provide end-to-end solutions that help brands launch, grow, and thrive online.', 
    className: 'text-3xl text-start font-bold text-yellow-400 max-w-5xl', 
    position: 'right' 
  },
  { 
    start: 0.55, 
    end: 0.7, 
    text: 'Our team combines deep technical expertise with a passion for creativity. Whether it’s building complex web applications, developing custom SaaS platforms, or designing stunning user interfaces, we approach every project with precision, scalability, and long-term success in mind.', 
    className: 'text-3xl font-bold max-w-5xl text-start', 
    position: 'center' 
  },
  { 
    start: 0.7, 
    end: 0.85, 
    text: 'What sets us apart is our holistic approach. We don’t just code we analyze, design, develop, test, and deploy using the best technologies and modern frameworks. From frontend to backend, from branding to hosting, Circle of Nine ensures every detail is optimized for performance, security, and user experience.', 
   className: 'text-3xl font-bold max-w-5xl text-start', 
    position: 'left' 
  },
  { 
    start: 0.85, 
    end: 1, 
    text: 'We believe in collaboration, transparency, and continuous improvement. Every project we take on is a partnership your goals become ours, and we work with you at every stage to bring your vision to life.', 
   className: 'text-3xl font-bold max-w-5xl text-start', 
    position: 'right' 
  },
];

  const getTextOpacity = (start: number, end: number) => {
    if (scrollProgress < start) return 0;
    if (scrollProgress > end) return 0;

    const fadeInDuration = 0.05;
    const fadeOutDuration = 0.05;

    if (scrollProgress < start + fadeInDuration) {
      return (scrollProgress - start) / fadeInDuration;
    }
    if (scrollProgress > end - fadeOutDuration) {
      return (end - scrollProgress) / fadeOutDuration;
    }
    return 1;
  };

  const getTextScale = (start: number, end: number) => {
    if (scrollProgress < start) return 0.8;
    if (scrollProgress > end) return 0.8;

    const scaleInDuration = 0.05;
    if (scrollProgress < start + scaleInDuration) {
      return 0.8 + 0.2 * ((scrollProgress - start) / scaleInDuration);
    }
    return 1;
  };

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'left':
        return 'left-0 right-auto text-left pl-12 pr-8';
      case 'right':
        return 'right-0 left-auto text-right pr-12 pl-8';
      case 'center':
      default:
        return 'left-1/2 -translate-x-1/2 text-center';
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Sticky canvas container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />

        {/* Loading indicator */}
        {!modelLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-xl">Loading Space Station...</div>
          </div>
        )}

        {/* Error message */}
        {loadError && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-yellow-400 text-sm bg-black bg-opacity-50 px-4 py-2 rounded">
            {loadError}
          </div>
        )}

        {/* Scroll instruction with animated arrow */}
        <div className='text-white absolute top-35 right-8 flex items-center gap-2'>
          
          <svg 
            className="w-5 h-5 transition-transform duration-300"
            style={{ transform: `translateY(${arrowPosition}px)` }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>

        {/* Animated text overlays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {textSections.map((section, idx) => {
            const opacity = getTextOpacity(section.start, section.end);
            const scale = getTextScale(section.start, section.end);
            const positionClasses = getPositionClasses(section.position);

            return (
              <div
                key={idx}
                className={`absolute text-white px-8 transition-all duration-300 ${section.className} ${positionClasses}`}
                style={{
                  opacity,
                  transform: `scale(${scale}) translateY(${(1 - scale) * 50}px)`,
                }}
              >
                {section.text}
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-50 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span>{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Spacer to enable scrolling */}
      <div style={{ height: '400vh' }} />

      {/* Final content section */}

    </div>
  );
};

export default ScrollWebGLAnimation;