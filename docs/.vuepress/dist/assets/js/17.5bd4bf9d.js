(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{239:function(t,n,l){"use strict";l.r(n);var s=l(2),a=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"bootstrap"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap"}},[t._v("#")]),t._v(" bootstrap")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("1.流体容器（.container-fluid） - 相当于width：auto，会根据浏览器宽度自适应\n2.固定容器（.container） - 会根据浏览器宽度有固定阈值\n\t      阈值                    width\t\n大于等于1200（lg - 大屏pc）    1170（1140+槽宽）\n\n大于等于992（md - 中屏pc）      970（940+槽宽）\n小于1200    \n\n大于等于768（sm - 平板）        750（720+槽宽）\n小于992\n\n小于768（xs - 移动手机）             auto\n3.栅格系统 - 把一行分12列，根据比例划分宽度\n\t@grid-gutter-width:30px - 槽宽\n\tceil（） - 对上取整\n\tfloor（） - 对下取整\n\tpercentage（） - 百分比函数\n")])])]),n("h3",{attrs:{id:"栅格源码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栅格源码分析"}},[t._v("#")]),t._v(" 栅格源码分析")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("1.固定容器&流体容器的公共样式 - .container-fixed(包括清除浮动)\n\t.container-fixed（）--\x3e\n\t\tmargin-right:auto;\n\t\tmargin-left:auto;\n\t\tpadding-left:15px;\n\t\tpadding-right:15px;\n\t\t&:extend(.clearfix all);\n2.固定容器的特定样式（sm-md-lg顺序不可变，sm（移动设备）优先）\n\t.container --\x3e\n\t\t.container-fixed();\n\t\t@media (min-width:@screen-sm-min){\n\t\t\twidth:@container-sm;\n\t\t}\n\t\t@media (min-width:@screen-md-min){\n\t\t\twidth:@container-md;\n\t\t}\n\t\t@media (min-width:@screen-lg-min){\n\t\t\twidth:@container-lg;\n\t\t}\n\t\n3.行\n\t.make-row() --\x3e（包括清除浮动）\n\t\tmargin-left:-15px;\n\t\tmargin-right:-15px;\n\t\t&:extend(.clearfix all);\n\t \n4.列\n\t//第一部分\n\t.make-grid-columns()--\x3e\n\t\t.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,\n\t\t.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,\n\t\t...\n\t\t.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{\n\t\t\tposition:relative;\n\t\t\tmin-height:1px;\n\t\t\tpadding-left:15px;\n\t\t\tpadding-right:15px\n\t\t}\n\t//第二部分\n\t.make-grid(xs/sm/md/lg)--\x3eindex=12向下传递\n\t\t//第二部分第一步（float）\n\t\tfloat-grid-columns(@class);\n\t\t\t@ .col-xs-1;col-xs-2,clo-xs-3,col-xs-4,...col-xs-12{\n\t\t\t\tfloat:left;\n\t\t\t}\n\t\t//第二部分第二步（width）\n\t\t.loop-grid-columns(@grid-columns,@class,width);\n\t\t\t.col-xs-12{\n\t\t\t\twidth:12/12;\n\t\t\t}\n\t\t\t.col-xs-11{\n\t\t\t\twidth:11/12;\n\t\t\t}\n\t\t\t...\n\t\t\t.col-xs-1{\n\t\t\t\twidth:1/12;\n\t\t\t}\n\t\t//第二部分第三步(列排序-向左排序left)\n\t\t.loop-grid-columns(@grid-columns,@class,push);\n\t\t\t.col-xs-push-12{\n\t\t\t\tleft:12/12;\n\t\t\t}\n\t\t\t.col-xs-push-11{\n\t\t\t\tleft:11/12;\n\t\t\t}\n\t\t\t...\n\t\t\t.col-xs-push-1{\n\t\t\t\tleft:1/12;\n\t\t\t}\n\t\t\t.col-xs-push-0{\n\t\t\t\tleft:auto;\n\t\t\t}\n\t\t//第二部分第四步（列排序-向右排序right）\n\t\t.loop-grip-columns(@grid-columns,@class,pull);\n\t\t\t.col-xs-pull-12{\n\t\t\t\tright:12/12;\n\t\t\t}\n\t\t\t.col-xs-pull-11{\n\t\t\t\tright:11/12;\n\t\t\t}\n\t\t\t...\n\t\t\t.col-xs-pull-1{\n\t\t\t\tright:1/12;\n\t\t\t}\n\t\t\t.col-xs-pull-0{\n\t\t\t\tright:auto;\n\t\t\t}\n\t\t//第二部分第五步（列偏移margin-left）\n\t\t.loop-grid-columns(@grid-columns,@class,offset);\n\t\t\t.col-xs-offset-12{\n\t\t\t\tmargin-left:12/12;\n\t\t\t}\n\t\t\t.col-xs-offset-11{\n\t\t\t\tmargin-left:11/12;\n\t\t\t}\n\t\t\t...\n\t\t\t.col-xs-offset-1{\n\t\t\t\tmargin-left:1/12;\n\t\t\t}\n\t\t\t.col-xs-offset-0{\n\t\t\t\tmargin-left:0;\n\t\t\t}\t\n")])])]),n("h4",{attrs:{id:"递归"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[t._v("#")]),t._v(" 递归")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('递归\n\t.col(@index, @list) when (@index =< @grid-columns) { \n\t\t@item: ~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}";\n\t\t.col((@index + 1), ~"@{list}, @{item}");\n\t}\n\t上方式 = 下方式\n    .col(3,".col-xs-1, .col-sm-1, .col-md-1, .col-lg-1,.col-xs-2, .col-sm-2, .col-md-2, .col-lg-2")\n        ....\n    .col(13,str)\n        str:\n            .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1,\n            .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2,\n            ...\n            .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12\n')])])]),n("h4",{attrs:{id:"注意"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("顺序从sx-sm-md-lg，排序时不能跳跃，需要一层一层往下传递\n")])])]),n("h4",{attrs:{id:"栅格盒模型设计的精妙之处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栅格盒模型设计的精妙之处"}},[t._v("#")]),t._v(" 栅格盒模型设计的精妙之处")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\t容器两边有15px的padding\n\t行  两边有-15px的margin\n\t列  两边有15px的padding\n\t\n\t为了维护槽宽的规则：\n\t\t列两边必须要有15px的padding\n\t为了能使列嵌套行\n\t\t行两边必须要有-15px的margin\n\t为了让容器可以包裹住行\n\t\t容器两边必须要有15px的padding\n")])])]),n("h3",{attrs:{id:"响应式工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式工具"}},[t._v("#")]),t._v(" 响应式工具")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("可用的类 - 通过单独或联合使用以下列出的类，可以针对不同屏幕尺寸隐藏或显示页面内容\n\tvisible-xs（-*）:只有xs的尺寸能显示，其它尺寸不显示\n\t\t*：值为block，inline，inline-block，不建议使用，除了<table>元素的特殊类型外。\n\thidden-xs:除了xs的尺寸不显示，其他尺寸都显示\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);