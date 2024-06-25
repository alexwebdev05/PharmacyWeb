import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function modelCreator(models, scene, modelRef) {
    const loader = new GLTFLoader()

    loader.load(models, (gltf) => {
        const model = gltf.scene;
        model.rotation.z = (0, 0, 0.2)
        scene.add(model)
        modelRef.current = model;
    })
}