import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const gltfLoader:GLTFLoader=new GLTFLoader();

export const cakePromise=gltfLoader.setPath('/carrot_cake/').loadAsync('carrot_cake_1k.gltf');