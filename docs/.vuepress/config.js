module.exports = {
    title: 'Yumoer',
    description: 'Hello, my friend!',
    dest: './docs/.vuepress/dist',
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
        //     '/blog/javascript/': utils.genSidebar('页面js相关', filehelper.getFileName(rootpath+"/blog/javascript/"), false),
        //     '/blog/html/': utils.genSidebar('页面html相关', filehelper.getFileName(rootpath+"/blog/html/"), false),
        //     '/blog/plugins/': utils.genSidebar('插件', filehelper.getFileName(rootpath+"/blog/plugins/"), false),
        //     '/blog/ui/': utils.genSidebar('组件', filehelper.getFileName(rootpath+"/blog/ui/"), false),
        //     '/about/': utils.genSidebar('关于', filehelper.getFileName(rootpath+"/about/"), false),
        // },
        sidebar: [ // 左侧导航
            {
                title: '文档介绍', // 标题
                collapsable: false, // 下级列表不可折叠
                path:'/guide/',
            },
            {
                title: '初识 TypeScript', // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表
                    'javascript/01_初识TS',
                    'javascript/02_安装TS1',
                    'javascript/03_HelloWorld'
                ]
            },
            {
                title: 'TypeScript 常用语法',
                collapsable: false,
                children: [
                    'html/1_type',
                    'html/2_interface',
                    'html/3_class',
                    'html/4_function',
                    'html/5_generic',
                ]
            },
        ],
    }
}
