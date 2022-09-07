import { BoxBufferGeometry, Mesh, MeshStandardMaterial, Object3D, PlaneBufferGeometry, SphereBufferGeometry } from 'three';
import { pictureTexture } from './Texture';

export const basicObjectList: Object3D[] = [];

// 正方体
export const box: Mesh = new Mesh(
    new BoxBufferGeometry(10, 10, 10),
    new MeshStandardMaterial({ color: 'rgb(0, 255, 255)', roughness: 0 })
);
box.position.x = -10;
box.position.y = 5;
box.castShadow = true;
box.receiveShadow = true;

// 球
export const sphere: Mesh = new Mesh(
    new SphereBufferGeometry(5),
    new MeshStandardMaterial({ color: 'rgb(255, 0, 255)', roughness: 0 })
);
sphere.position.x = 10;
sphere.position.y = 5;
sphere.castShadow = true;
sphere.receiveShadow = true;

// 地面
export const stage: Mesh = new Mesh(
    new BoxBufferGeometry(200, 2, 200),
    new MeshStandardMaterial({ color: 'rgb(150, 150, 150)' })
);
stage.position.y = -1;
stage.receiveShadow = true;

// 平面
export const plane: Mesh = new Mesh(
    new PlaneBufferGeometry(192, 108),
    new MeshStandardMaterial({ map: pictureTexture })
);
plane.position.x = 10;
plane.position.y = 10;
plane.position.z = -50;
plane.scale.set(0.3, 0.3, 0.3);

basicObjectList.push(box, sphere, stage, plane);