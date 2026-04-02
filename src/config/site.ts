const site = {
  // --- Site Metadata ---
  meta: {
    title: "王苏洋Blog",
    description: "记录技术探索、生活感悟与折腾日常的个人博客",
    author: "王苏洋",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // 已设置为中文，适配日期/界面本地化
    lang: "zh-CN",
  },

  // --- Navigation ---
  // 已将导航文案改为中文，更贴合国内用户习惯
  navigation: [
    { name: "首页", subtitle: "Index", href: "/" },
    { name: "博客", subtitle: "Blog", href: "/posts" },
    { name: "项目", subtitle: "Works", href: "/projects" },
    { name: "友链", subtitle: "Links", href: "/friends" },
    { name: "关于", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  // 保留你原有的GitHub/邮箱，可按需补充更多社交平台
  social: [
    { name: "GitHub", href: "https://github.com/suyangb", icon: "mdi:github" },
    { name: "Email", href: "mailto:1493367306@qq.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  // 优化首页介绍，突出个人博客定位
  hero: {
    greeting: "👋 Hello, 我是王苏洋",
    description:
      '一名热爱折腾的独立开发者，专注于 <span class="font-medium text-foreground underline decoration-primary/30">Astro</span>、<span class="font-medium text-foreground underline decoration-primary/30">静态博客</span> 与个人技术项目，分享成长与思考。',
    cards: [
      { icon: "mdi:code", label: "状态", value: "持续折腾中" },
      { icon: "mdi:map-marker", label: "坐标", value: "中国" },
    ],
  },

  // --- Footer ---
  // 替换版权信息，添加备案入口（可按需修改）
  footer: {
    copyright: "© 2026 王苏洋Blog",
    builtWith: "Built with Astro & Breeze Theme",
    // 如需添加备案信息，可在主题Footer组件中补充
  },

  // --- Comments ---
  // 【关键修复】补充Artalk完整配置，解决fetch error
  comments: {
    enabled: true,
    provider: "artalk" as const,
    artalk: {
      server: "https://pinglun.wsyblog.cn",
      // 必须填写，与Artalk后台创建的站点名称完全一致
      siteName: "王苏洋Blog",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // 7天内的文章标记为"新"，可按需调整
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  // 保留你原有的工具列表，可按需增删
  tools: [
    {
      name: "开发工具",
      items: [
        { name: "VS Code", link: "https://code.visualstudio.com", icon: "mdi:microsoft-visual-studio-code" },
        { name: "WebStorm", link: "https://www.jetbrains.com/webstorm", icon: "mdi:code-braces" },
        { name: "Terminal", icon: "mdi:terminal" },
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
        { name: "Arc Browser", link: "https://arc.net", icon: "mdi:web" },
      ]
    },
  ],

  // --- UI Labels ---
  // 【中文优化】将所有界面文案改为中文，完全适配国内用户
  labels: {
    postsTitle: "博客",
    postsDescription: "技术笔记、生活感悟与折腾记录",
    projectsTitle: "项目",
    projectsDescription: "为解决问题而开发的小工具与开源项目",
    friendsTitle: "友链",
    friendsDescription: "志同道合的朋友们",
    toolsTitle: "工具栈",
    aboutTitle: "关于",
    aboutDescription: "关于本站与博主",
    backToPosts: "返回博客列表",
    goHome: "返回首页",
    notFoundTitle: "页面不存在",
    notFoundDescription: "你访问的页面可能已被移除或链接有误",
    endOfPost: "全文完",
    tableOfContents: "文章目录",
    searchPlaceholder: "搜索文章、标签或命令...",
    searchNavigate: "导航",
    commentSuccess: "评论提交成功",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
