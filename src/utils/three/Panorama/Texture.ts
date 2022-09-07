import { EquirectangularReflectionMapping, Texture, TextureLoader } from "three";

// 初始化纹理加载器
const textureLoader: TextureLoader = new TextureLoader();

// 加载纹理贴图
export const panoramaTexture: Texture = textureLoader.load('image/venice_sunset_1k.png');
panoramaTexture.mapping = EquirectangularReflectionMapping;