import * as THREE from 'three';

export function myRenderer(mount) {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement);

    return renderer
}


