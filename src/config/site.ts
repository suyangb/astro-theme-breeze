const site = {
  // --- 网站基础信息 ---
  meta: {
    title: "王苏洋Blog",
    description: "适用于个人网站的极简 Astro 主题",
    author: "王苏洋",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang 属性，会影响页面语言与日期格式
    // 可选值："zh-CN"、"en"、"ja" 等
    lang: "zh-CN",
  },

  // --- 导航菜单 ---
  // subtitle：名称下方显示的装饰性小字（大写、小号文字）
  navigation: [
    { name: "首页", subtitle: "主页", href: "/" },
    { name: "文章", subtitle: "博客", href: "/posts" },
    { name: "项目", subtitle: "作品", href: "/projects" },
    { name: "友链", subtitle: "链接", href: "/friends" },
    { name: "关于", subtitle: "我", href: "/about" },
  ],

  // --- 社交链接 ---
  social: [
    { name: "GitHub", href: "https://github.com/suyangb", icon: "mdi:github" },
    { name: "邮箱", href: "mailto:1493367306@qq.com", icon: "mdi:email" },
  ],

  // --- 首页横幅 ---
  hero: {
    greeting: "👋Hello, I'm 王苏洋",
    // 支持 HTML。可使用 <span class="font-medium text-foreground underline decoration-primary/30"> 高亮关键词
    description:
      '一个基于 <span class="font-medium text-foreground underline decoration-primary/30">Astro</span> 与 <span class="font-medium text-foreground underline decoration-primary/30">Tailwind CSS</span> 构建的极简个人网站主题。',
    cards: [
      { icon: "mdi:explore", label: "状态", value: "正在创作有趣的内容" },
      { icon: "mdi:location", label: "位置", value: "地球" },
    ],
  },

  // --- 页脚 ---
  footer: {
    copyright: "© 2025 Breeze",
    builtWith: "使用 Astro 构建",
  },

  // --- 评论系统 ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- 功能开关 ---
  features: {
    search: true,
    rss: true,
    // 发布天数在此范围内的文章会自动标记为“最新”（0 为关闭）
    newPostDays: 7,
  },

  // --- 工具栈页面数据 ---
  tools: [
    {
      name: "开发工具",
      items: [
        { name: "VS Code", link: "https://code.visualstudio.com", icon: "mdi:microsoft-visual-studio-code" },
        { name: "WebStorm", link: "https://www.jetbrains.com/webstorm", icon: "mdi:code-braces" },
        { name: "终端", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        { name: "Postman", link: "https://www.postman.com", icon: "mdi:api" },
      ]
    },
    {
      name: "设计工具",
      items: [
        { name: "Figma", link: "https://www.figma.com", icon: "mdi:vector-polygon" },
        { name: "Sketch", link: "https://www.sketch.com", icon: "mdi:vector-square" },
        { name: "Adobe XD", link: "https://www.adobe.com/products/xd.html", icon: "mdi:pencil-ruler" },
        { name: "Photoshop", link: "https://www.adobe.com/products/photoshop.html", icon: "mdi:image-edit" },
      ]
    },
    {
      name: "效率工具",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        { name: "Obsidian", link: "https://obsidian.md", icon: "mdi:diamond-stone" },
        { name: "Raycast", link: "https://www.raycast.com", icon: "mdi:lightning-bolt" },
        { name: "Arc 浏览器", link: "https://arc.net", icon: "mdi:web" },
      ]
    },
  ],

  // --- 界面文字 ---
  // 自定义这些内容以修改页面上显示的文本
  labels: {
    postsTitle: "文章",
    postsDescription: "随笔、思考与技术感悟",
    projectsTitle: "项目",
    projectsDescription: "为乐趣或解决实际问题而做的小工具。",
    friendsTitle: "友链",
    friendsDescription: "网络上志同道合的朋友们。",
    toolsTitle: "技术栈",
    aboutTitle: "关于",
    aboutDescription: "关于本站与作者",
    backToPosts: "返回文章列表",
    goHome: "返回首页",
    notFoundTitle: "页面未找到",
    notFoundDescription: "你访问的页面可能已被移除或链接无效。",
    endOfPost: "文章结束",
    tableOfContents: "目录",
    searchPlaceholder: "搜索文章、标签或指令…",
    searchNavigate: "跳转",
    commentSuccess: "评论提交成功",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
