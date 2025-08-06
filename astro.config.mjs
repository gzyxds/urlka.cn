import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://urlka.cn', // 设置网站URL，用于生成sitemap
  integrations: [
    tailwind(), 
    compress(),
    sitemap({
      // 自定义sitemap配置
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // 排除某些页面
      filter: (page) => !page.includes('/admin/') && !page.includes('/private/')
    })
  ]
});
