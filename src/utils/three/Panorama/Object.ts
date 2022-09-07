import { BackSide, Mesh, MeshStandardMaterial, Object3D, SphereBufferGeometry } from 'three';
import { panoramaTexture } from './Texture';

export const objectList: Object3D[] = [];

// 天空盒
export const skyBox: Mesh = new Mesh(
    new SphereBufferGeometry(100, 100, 100),
    new MeshStandardMaterial({
        map: panoramaTexture,
        side: BackSide
    })
);

objectList.push(skyBox);