/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// 扩展 Window 接口，添加自定义的全局函数
declare global {
  interface Window {
    showModal: () => void;
    hideModal: () => void;
  }
}

// 确保这个文件被识别为模块
export {};
