/**
 * FuzzyText 组件的类型定义
 * 基于 React Bits Fuzzy Text 组件的 API
 */

export interface FuzzyTextProps {
  /** 要显示的文本内容（可以通过 children 或 text 属性传递） */
  children?: React.ReactNode;
  
  /** 要显示的文本内容（优先级高于 children） */
  text?: string;
  
  /** 字体大小，可以是数字（像素）或字符串（CSS 值） */
  fontSize?: number | string;
  
  /** 字体粗细 */
  fontWeight?: string | number;
  
  /** 字体族，'inherit' 使用父元素的字体 */
  fontFamily?: string;
  
  /** 文本颜色 */
  color?: string;
  
  /** 是否启用悬停效果 */
  enableHover?: boolean;
  
  /** 基础模糊强度（未悬停时） */
  baseIntensity?: number;
  
  /** 悬停时的模糊强度 */
  hoverIntensity?: number;
  
  /** 额外的 CSS 类名 */
  className?: string;
}

/**
 * Astro 组件的 Props 接口
 */
export interface AstroFuzzyTextProps {
  /** 要显示的文本，如果不提供则使用默认文本 */
  text?: string;
  
  /** 字体大小，可以是数字（像素）或字符串（CSS 值） */
  fontSize?: number | string;
  
  /** 字体粗细 */
  fontWeight?: string | number;
  
  /** 字体族，'inherit' 使用父元素的字体 */
  fontFamily?: string;
  
  /** 文本颜色 */
  color?: string;
  
  /** 是否启用悬停效果 */
  enableHover?: boolean;
  
  /** 基础模糊强度（未悬停时） */
  baseIntensity?: number;
  
  /** 悬停时的模糊强度 */
  hoverIntensity?: number;
  
  /** 额外的 CSS 类名 */
  className?: string;
}

/**
 * 预设的模糊效果配置
 */
export const FUZZY_PRESETS = {
  /** 轻微模糊效果 */
  subtle: {
    baseIntensity: 0.1,
    hoverIntensity: 0.3,
  },
  
  /** 默认模糊效果 */
  default: {
    baseIntensity: 0.18,
    hoverIntensity: 0.5,
  },
  
  /** 中等模糊效果 */
  medium: {
    baseIntensity: 0.3,
    hoverIntensity: 0.6,
  },
  
  /** 强烈模糊效果 */
  intense: {
    baseIntensity: 0.5,
    hoverIntensity: 0.8,
  },
  
  /** 极强模糊效果 */
  extreme: {
    baseIntensity: 0.7,
    hoverIntensity: 1.0,
  },
} as const;

/**
 * 预设的颜色主题
 */
export const COLOR_THEMES = {
  /** 白色主题 */
  white: '#ffffff',
  
  /** 绿色主题 */
  green: '#00ff88',
  
  /** 蓝色主题 */
  blue: '#3b82f6',
  
  /** 红色主题 */
  red: '#ef4444',
  
  /** 紫色主题 */
  purple: '#a855f7',
  
  /** 黄色主题 */
  yellow: '#fbbf24',
  
  /** 青色主题 */
  cyan: '#06b6d4',
  
  /** 粉色主题 */
  pink: '#ec4899',
} as const;