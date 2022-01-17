module.exports = {
    title: 'Yumoer',
    description: 'Hello, my friend!',
    dest: 'dist',
    ga: '',
    base:'/',
    evergreen: true,
    theme: 'vdoing',
    // plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}]],
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ]
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/' },
            {
                text: '语言',
                items: [
                    { text: '中文简体', link: '/language/chinese' },
                    { text: 'English', link: '/language/english' }
                ]
            },
            { text: 'External', link: 'https://www.baidu.com' },
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
        sidebar: [ // 左侧导航
            {
                title: '文档介绍', // 标题
                collapsable: false, // 下级列表不可折叠
                path:'/',
            },
            {
                title: '初识 Html',
                collapsable: false,
                children: [
                    'Html/0_简介',
                    'Html/1_音视频',
                    'Html/2_DOM位置&尺寸',
                    'Html/3_canvas-上',
                    'Html/4_canvas-下',
                    'Html/5_canvas-全',
                    'Html/6_其他新增标签和属性',
                ]
            },
            {
                title: '初识 Css',
                collapsable: false,
                children: [
                    'Css/0_要点总结',
                    'Css/1_预处理器',
                    'Css/2_选择器',
                    'Css/3_新的ui方案',
                    'Css/4_媒体查询',
                    'Css/5_过渡',
                    'Css/6_动画',
                    'Css/7_grid布局',
                    'Css/8_flex布局',
                    'Css/9_2D变形',
                    'Css/10_3D变形',
                    'Css/11_项目思路',
                ]
            },
            {
                title: '初识 JavaScript',
                collapsable: false,
                children: [
                    'Javascript/0_浏览器存储',
                    'Javascript/1_值&数据类型&变量',
                    'Javascript/2_内存&垃圾回收机制',
                    'Javascript/3_引用数据类型(数组)',
                    'Javascript/4_引用数据类型(函数)',
                    'Javascript/5_强制类型转换',
                    'Javascript/6_显示强制类型转换',
                    'Javascript/7_隐式强制类型转换',
                    'Javascript/8_==操作符',
                    'Javascript/9_js性能问题',
                    'Javascript/10_js进阶',
                ]
            },
            {
                title: '初识 TypeScript', // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表
                    'Typescript/1_TS基础',
                ]
            },

        ],
    }
}
