// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. 定义博客集合的简化架构
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // 基本信息
    draft: z.boolean(),                                // 是否为草稿
    title: z.string(),                                // 文章标题
    snippet: z.string(),                              // 文章摘要
    
    // 图片信息 - 使用通用图片对象结构
    image: z.object({ src: z.string(), alt: z.string() }),     // 列表页缩略图
    bigImg: z.object({ src: z.string(), alt: z.string() }),    // 详情页大图
    authorImg: z.object({ src: z.string(), alt: z.string() }), // 作者头像
    
    // 元数据
    publishDate: z.string().transform((str) => new Date(str)),  // 发布日期
    author: z.string().default('Pimjolabs'),                   // 作者名称
    category: z.string(),                                       // 文章分类
    tags: z.array(z.string()),                                  // 文章标签
    
    // 统计数据
    comments: z.string(),                                       // 评论数
    views: z.string(),                                          // 浏览量
    
    // 文章内容 - 结构化段落
    postDetails: z.object({
      paraOne: z.string(),    // 第一段落
      paraTwo: z.string(),    // 第二段落
      title: z.string(),      // 中间标题
      paraThree: z.string(),  // 第三段落
      titleTwo: z.string(),   // 第二个标题
      paraFour: z.string(),   // 第四段落
      paraFive: z.string(),   // 第五段落
    }),
    
    // 引用内容
    quotes: z.object({
      quote: z.string(),      // 引用文本
      author: z.string(),     // 引用作者
    }),
  }),
});


// 3. 导出集合对象以注册到Astro内容系统
// 注意：键名必须与src/content目录下的文件夹名称匹配
export const collections = {
  'blog': blogCollection,
};
