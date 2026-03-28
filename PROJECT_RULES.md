# 项目规则

## 项目定位
这是一个个人主页 + Blog 的 Nuxt 项目，后续会扩展 vibe coding / projects / notes 等模块。

## 技术栈
- Nuxt
- TypeScript
- @nuxt/content
- Tailwind CSS

## 当前范围
第一版只做：
- 首页
- Blog 列表页
- Blog 详情页
- 标签页
- 主题切换
- 基础 SEO
- 404 页面

## 当前不做
- 数据库
- 登录注册
- 评论系统
- 后台管理
- 点赞/收藏
- 阅读量统计
- 全文搜索

## 代码组织要求
- pages/ 只放路由页面
- components/ 放复用组件
- composables/ 放复用逻辑
- content/posts/ 放 markdown 文章
- public/ 放静态资源

## UI 风格
- 开发者极简风
- 留白优先
- 可读性优先
- 响应式
- 支持浅色/深色主题
- 不要过度动画