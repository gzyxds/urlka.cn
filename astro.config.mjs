import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://urlka.cn', // 设置网站URL，用于生成sitemap
  integrations: [
    react(), // 添加 React 集成支持
    tailwind(), 
    compress(),
    sitemap({
      // 自定义sitemap配置
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // 排除某些页面
      filter: (page) => !page.includes('/admin/') && !page.includes('/private/') && !page.includes('copy')
    })
  ]
});
