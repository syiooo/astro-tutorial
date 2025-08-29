// src/content/config.js
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 不适用于旧版 API

// 1. 定义posts集合的schema（规范）
const blog = defineCollection({
  type: 'content'
  // loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  // schema: z.object({
  //   title: z.string(),
  //   excerpt: z.string(),
  //   index_img: z.string(),
  //   date: z.coerce.date(),
  //   updatedDate: z.coerce.date().optional(),
  // })
});

// 2. 导出注册的集合
export const collections = {
  blog,
};
