import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Modules
import { myRenderer } from './scene/renderer'
import { lights } from './scene/lightning'
import { myCamera } from './scene/camera'

// Models
import { modelCreator } from './scene/models/modelCreator'
import { models } from './scene/models/modelList'

function Three() {
  const mountRef = useRef(null);
  const modelRef = useRef(null);

  // Models
  

  useEffect(() => {
    const mount = mountRef.current;
    const camera = myCamera(mount)
    const scene = new THREE.Scene();
    const renderer = myRenderer(mount)
    models

    // Lights
    lights(scene)

    // 3D models
    let currentModel = 0;
    modelCreator(models[currentModel], scene, modelRef);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Model rotation
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Change model every second
    const interval = setInterval(() => {
      // Remove the current model
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }

      // Switch to the next model
      currentModel = (currentModel + 1) % models.length;
      modelCreator(models[currentModel], scene, modelRef);
    }, 5000);

    // Clear
    return () => {
      clearInterval(interval);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div ref={mountRef} style={{ width: '25rem', height: '400px', margin: '0', marginRight: '5rem' }} />
    </>
  );
}

export default Three;
