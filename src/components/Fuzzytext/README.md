# FuzzyText 组件

基于 React Bits 的模糊文字效果组件，适用于 Astro 项目。

## 功能特性

- ✨ 动态模糊效果
- 🎨 可自定义颜色和强度
- 🖱️ 悬停交互效果
- 📱 响应式字体大小
- 🎯 TypeScript 支持
- ⚡ 性能优化

## 安装和使用

### 1. 基本使用

```astro
---
import FuzzyText from '../components/Fuzzytext/Fuzzytext.astro';
---

<!-- 使用默认设置 -->
<FuzzyText />

<!-- 自定义文字 -->
<FuzzyText text="Hello World" />
```

### 2. 高级配置

```astro
<FuzzyText 
  text="自定义模糊文字"
  color="#00ff88"
  fontSize="4rem"
  fontWeight={900}
  fontFamily="Arial"
  baseIntensity={0.3}
  hoverIntensity={0.7}
  enableHover={true}
  className="custom-fuzzy-text"
/>
```

## API 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `text` | `string` | `"172号卡官网"` | 要显示的文本内容 |
| `fontSize` | `number \| string` | `"clamp(2rem, 8vw, 8rem)"` | 字体大小 |
| `fontWeight` | `string \| number` | `900` | 字体粗细 |
| `fontFamily` | `string` | `"inherit"` | 字体族 |
| `color` | `string` | `"#fff"` | 文本颜色 |
| `enableHover` | `boolean` | `true` | 是否启用悬停效果 |
| `baseIntensity` | `number` | `0.2` | 基础模糊强度 (0-1) |
| `hoverIntensity` | `number` | `0.5` | 悬停时模糊强度 (0-1) |
| `className` | `string` | `""` | 额外的 CSS 类名 |

## 预设配置

组件提供了几种预设的模糊效果强度：

```typescript
import { FUZZY_PRESETS } from './types';

// 使用预设
<FuzzyText 
  text="轻微模糊"
  baseIntensity={FUZZY_PRESETS.subtle.baseIntensity}
  hoverIntensity={FUZZY_PRESETS.subtle.hoverIntensity}
/>
```

### 可用预设

- `subtle`: 轻微模糊 (0.1 / 0.3)
- `default`: 默认模糊 (0.18 / 0.5)
- `medium`: 中等模糊 (0.3 / 0.6)
- `intense`: 强烈模糊 (0.5 / 0.8)
- `extreme`: 极强模糊 (0.7 / 1.0)

## 颜色主题

```typescript
import { COLOR_THEMES } from './types';

<FuzzyText 
  text="彩色文字"
  color={COLOR_THEMES.green}
/>
```

### 可用颜色

- `white`: #ffffff
- `green`: #00ff88
- `blue`: #3b82f6
- `red`: #ef4444
- `purple`: #a855f7
- `yellow`: #fbbf24
- `cyan`: #06b6d4
- `pink`: #ec4899

## 示例

### 1. 标题效果

```astro
<FuzzyText 
  text="网站标题"
  fontSize="4rem"
  color="#00ff88"
  baseIntensity={0.2}
  hoverIntensity={0.6}
/>
```

### 2. 按钮文字

```astro
<button class="bg-purple-600 px-6 py-3 rounded-lg">
  <FuzzyText 
    text="点击我"
    fontSize="1.2rem"
    color="#ffffff"
    baseIntensity={0.1}
    hoverIntensity={0.4}
  />
</button>
```

### 3. 装饰性文字

```astro
<FuzzyText 
  text="装饰文字"
  enableHover={false}
  baseIntensity={0.3}
  color="#a855f7"
  fontSize="2rem"
/>
```

## 性能优化

- 组件使用 `client:load` 指令，确保在客户端正确加载
- 模糊效果使用 CSS `filter` 属性，性能优异
- 闪烁动画使用 `requestAnimationFrame` 优化
- 支持防抖处理，避免过度渲染

## 浏览器兼容性

- Chrome 53+
- Firefox 35+
- Safari 9.1+
- Edge 12+

## 注意事项

1. 确保项目已安装 React 和 React DOM
2. 模糊强度值建议在 0-1 之间
3. 过高的模糊强度可能影响文字可读性
4. 在移动设备上建议降低模糊强度以提升性能

## 故障排除

### 组件不显示

检查是否正确导入组件：

```astro
import FuzzyText from '../components/Fuzzytext/Fuzzytext.astro';
```

### 模糊效果不工作

确保浏览器支持 CSS `filter` 属性，并检查 `baseIntensity` 和 `hoverIntensity` 值是否正确设置。

### TypeScript 错误

确保已正确导入类型定义：

```typescript
import type { AstroFuzzyTextProps } from './types';
```