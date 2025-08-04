// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. 定义博客集合的简化架构
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基本信息
    draft: z.boolean().default(false),                // 是否为草稿
    title: z.string(),                                // 文章标题
    
    // 发布信息
    publishDate: z.string().transform((str) => new Date(str)),  // 发布日期
    author: z.string().default('172号卡团队'),                   // 作者名称
    
    // 可选的摘要信息（用于列表页展示）
    snippet: z.string().optional(),                   // 文章摘要
    
    // 注意：文章的主要内容将直接写在 Markdown 正文中，不再使用复杂的 frontmatter 结构
  }),
});


// 3. 导出集合对象以注册到Astro内容系统
// 注意：键名必须与src/content目录下的文件夹名称匹配
export const collections = {
  'blog': blogCollection,
};
