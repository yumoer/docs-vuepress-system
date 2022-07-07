module.exports = {
  title: "Yumoer",
  description: "Hello, my friend!",
  dest: "docs/.vuepress/dist",
  ga: "",
  base: "/docs-vuepress-system/",
  evergreen: true,
  theme: "vdoing",
  // plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}]],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`,
      },
    ],
  ],
  themeConfig: {
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/recoluan" },
        { icon: "reco-npm", link: "https://www.npmjs.com/~reco_luan" },
      ],
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/guide/" },
      {
        text: "语言",
        items: [
          { text: "中文简体", link: "/language/chinese" },
          { text: "English", link: "/language/english" },
        ],
      },
      { text: "External", link: "http://yumoer.github.io" },
    ],
    sidebarDepth: 2,
    // 侧边栏配置
    // sidebar: {
    //     '/blog/1. 框架指南/': utils.genSidebar('1. 框架指南', filehelper.getFileName(rootpath+"/blog/1. 框架指南/"), true),
    //     '/blog/Javascript/': utils.genSidebar('页面js相关', filehelper.getFileName(rootpath+"/blog/Javascript/"), false),
    //     '/blog/Html/': utils.genSidebar('页面html相关', filehelper.getFileName(rootpath+"/blog/Html/"), false),
    //     '/blog/plugins/': utils.genSidebar('插件', filehelper.getFileName(rootpath+"/blog/plugins/"), false),
    //     '/blog/ui/': utils.genSidebar('组件', filehelper.getFileName(rootpath+"/blog/ui/"), false),
    //     '/about/': utils.genSidebar('关于', filehelper.getFileName(rootpath+"/about/"), false),
    // },
    sidebar: [
      // 左侧导航
      {
        title: "文档介绍", // 标题
        collapsable: false, // 下级列表不可折叠
        path: "/guide/",
      },
      {
        title: "Html",
        collapsable: false,
        children: [
          {
            title: "基础",
            collapsable: true,
            children: [
              "Html/基础/00_HTML介绍",
              "Html/基础/01_第一个HTML页面",
              "Html/基础/02_HTML基本元素",
              "Html/基础/03_HTML列表",
              "Html/基础/04_链接元素",
              "Html/基础/05_图片元素",
              "Html/基础/06_HTML表格",
              "Html/基础/07_HTML表单",
            ],
          },
          {
            title: "进阶",
            collapsable: true,
            children: [
              "Html/进阶/00_简介",
              "Html/进阶/01_音视频",
              "Html/进阶/02_DOM位置&尺寸",
              "Html/进阶/03_canvas-上",
              "Html/进阶/04_canvas-下",
              "Html/进阶/05_canvas-全",
              "Html/进阶/06_其他新增标签和属性",
            ],
          },
          {
            title: "新特性",
            collapsable: true,
            children: [
              "Html/新特性/00_HTML5介绍",
              "Html/新特性/01_HTML5表单",
              "Html/新特性/02_音视频处理",
              "Html/新特性/03_Canvas画布",
              "Html/新特性/04_HTML5SVG",
              "Html/新特性/05_百度地图",
              "Html/新特性/06_HTML5拖放",
              "Html/新特性/07_WebWorkers",
              "Html/新特性/08_Web存储",
              "Html/新特性/09_WebSockets",
            ],
          },
        ],
      },
      {
        title: "Css",
        collapsable: false,
        children: [
          {
            title: "基础",
            collapsable: true,
            children: [
              "Css/基础/00_CSS介绍",
              "Css/基础/01_如何使用CSS",
              "Css/基础/02_CSS语法",
              "Css/基础/03_块级元素与内联元素",
              "Css/基础/04_CSS选择器",
              "Css/基础/05_CSS伪类",
              "Css/基础/06_盒子模型",
              "Css/基础/07_显示与隐藏",
              "Css/基础/08_overflow属性",
              "Css/基础/09_浮动",
              "Css/基础/10_定位",
            ],
          },
          {
            title: "进阶",
            collapsable: true,
            children: [
              "Css/进阶/00_要点总结",
              "Css/进阶/01_预处理器",
              "Css/进阶/02_选择器",
              "Css/进阶/03_新的ui方案",
              "Css/进阶/04_媒体查询",
              "Css/进阶/05_过渡",
              "Css/进阶/06_动画",
              "Css/进阶/07_grid布局",
              "Css/进阶/08_flex布局",
              "Css/进阶/09_2D变形",
              "Css/进阶/10_3D变形",
              "Css/进阶/11_项目思路",
            ],
          },
          {
            title: "Bootstrap",
            collapsable: true,
            children: [
              "Css/Bootstrap/00_响应式页面的四大核心要素",
              "Css/Bootstrap/01_Bootstrap起步",
              "Css/Bootstrap/02_全局CSS样式",
              "Css/Bootstrap/03_Bootstrap组件",
              "Css/Bootstrap/04_Bootstrap插件",
            ],
          },
          {
            title: "包管理器",
            collapsable: true,
            children: [
              {
                title: "Less",
                collapsable: true,
                children: ["Css/包管理器/Less/00_less"],
              },
              {
                title: "Scss",
                collapsable: true,
                children: ["Css/包管理器/Scss/00_scss"],
              },
              {
                title: "Stylus",
                collapsable: true,
                children: ["Css/包管理器/Stylus/00_stylus"],
              },
            ],
          },
        ],
      },
      {
        title: "JavaScript",
        collapsable: false,
        children: [
          {
            title: "ES5",
            collapsable: true,
            children: [
              "Javascript/ES5/00_JavaScript介绍",
              "Javascript/ES5/01_基础语法",
              "Javascript/ES5/02_变量与常量",
              "Javascript/ES5/03_数据类型",
              "Javascript/ES5/04_运算符",
              "Javascript/ES5/05_语句",
              "Javascript/ES5/06_函数",
              "Javascript/ES5/07_作用域",
              "Javascript/ES5/08_特殊函数",
              "Javascript/ES5/09_闭包",
              "Javascript/ES5/10_对象",
              "Javascript/ES5/11_JSON",
              "Javascript/ES5/12_Function对象",
              "Javascript/ES5/13_原型",
              "Javascript/ES5/14_继承",
              "Javascript/ES5/15_引用类型",
              "Javascript/ES5/16_数组",
              "Javascript/ES5/17_正则表达式",
              "Javascript/ES5/18_字符串",
            ],
          },
          {
            title: "进阶",
            collapsable: true,
            children: [
              "Javascript/进阶/00_浏览器存储",
              "Javascript/进阶/01_值&数据类型&变量",
              "Javascript/进阶/02_内存&垃圾回收机制",
              "Javascript/进阶/03_引用数据类型(数组)",
              "Javascript/进阶/04_引用数据类型(函数)",
              "Javascript/进阶/05_强制类型转换",
              "Javascript/进阶/06_显示强制类型转换",
              "Javascript/进阶/07_隐式强制类型转换",
              "Javascript/进阶/08_==操作符",
              "Javascript/进阶/09_js性能问题",
              "Javascript/进阶/10_js进阶",
            ],
          },
          {
            title: "jQuery",
            collapsable: true,
            children: [
              "Javascript/jQuery/00_jQuery入门",
              "Javascript/jQuery/01_jQuery选择器",
              "Javascript/jQuery/02_jQueryDOM操作",
              "Javascript/jQuery/03_jQuery事件",
              "Javascript/jQuery/04_jQuery动画",
              "Javascript/jQuery/05_类数组操作",
              "Javascript/jQuery/06_jQuery插件",
              "Javascript/jQuery/07_jQueryUI",
            ],
          },
        ],
      },
      {
        title: "TypeScript", // 标题
        collapsable: false, // 下级列表不可折叠
        children: [
          {
            title: "基础", // 标题
            collapsable: true, // 下级列表不可折叠
            children: [
              // 下级列表
              "Typescript/基础/00_TS基础",
            ],
          },
        ],
      },
    ],
  },
};
