import { Texture, TextureLoader } from "three";

// 初始化纹理加载器
const textureLoader: TextureLoader = new TextureLoader();

// 加载纹理贴图
export const pictureTexture: Texture = textureLoader.load('./src/assets/image/bg.jpg');