(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{281:function(t,n,e){"use strict";e.r(n);var o=e(2),a=Object(o.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"dom位置和尺寸的api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom位置和尺寸的api"}},[t._v("#")]),t._v(" DOM位置和尺寸的api")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('parentNode 直接父级\n\tconsole.log(inner2.parentNode.id);//inner1\n假删除（数据是最重要的）\n\taNodes[i].onclick=function(){\n\t\tthis.parentNode.style.display="none";\n\t}\njs兼容性问题\n1.ev || event\n2.鼠标滚轮\n\tie/chorme: onmousewheel(dom0)\n\t\t\t   event.wheelDelta\n\t\t\t       上:正\n\t\t\t\t   下:负\n\tfirefox: addEventListener("DOMMouseScroll") 必须用(dom2的标准模式)\n\t\t\t   event.detail\n\t\t\t\t   上:负\n\t\t\t\t   下:正\n\t阻止dom2的默认行为\n\t\tif(e.preventDefault){\n\t\t\tev.preventDefault()\n\t\t}\n\t阻止dom0的默认行为\n\t\tev.return = false;\n3.事件绑定\n\t事件流：捕获 - 目标处理 - 冒泡\n\t\t捕获冒泡的前提：有嵌套的dom结构\n\n\tif(testNode.addEventListener){\n\t\t//火狐\n\t\ttestNode.addEventListener("DOMMouseScroll",function(){\n\t\t\tconsole.log("我在滚 火狐")\n\t\t})\n\t}\n\t//非火狐浏览器\n\ttestNode.onmousewheel=function(){\n\t\tconsole.log("我在滚")\n\t}\n4.offsetParent - 模拟包含块（128种，body和html之间的margin被清掉）\n\t1.父级是否有定位（4种）\n\t2.本身是否有定位（4种）\n\t3.浏览器不一样（5大pc浏览器+IE6，7，8）\n\t\t规则总结:\n\t\t\t本身定位为fixed\n\t\t\t\t==> offsetParent:null（不是火狐）\n\t\t\t\t==> offsetParent:body(火狐)\n\t\t\t本身定位不为fixed\n\t\t\t\t父级没有定位\n\t\t\t\t\t==> offsetParent:body\n\t\t\t\t父级有定位 \n\t\t\t\t\t==> offsetParent:定位父级\nhaslayout(ie下的\tBFC)\n\tie7以下，如果当前元素的某个父级触发了haslayout，那么offsetParent就会被指向到这个触发了layout特性的父节点上\n注意点：\n\t1.分清parentNode和offsetparent的区别\n\t\tparentNode:直接父级\n\t\toffsetParent:类似于css的包含块\n\t2.offsetParent的作用\n\t\toffsetLeft和offsetTop都参照offsetParent的内边距边界\n\t3.dom里所有元素都是有offsetLeft和offsetTop的\t\t\t\t\n')])])]),n("h3",{attrs:{id:"获取元素的绝对位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取元素的绝对位置"}},[t._v("#")]),t._v(" 获取元素的绝对位置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("绝对位置:到body的距离\n\tgetBoundingClientRect + 滚动条滚动时元素滚动的距离\n\t原生实现：while循环不断去的累加\n\t\tbody的offsetParent --\x3e null\n\t\tbody的offsetLeft --\x3e 0\n\t\tbody的offsetTop --\x3e 0\n\t缺点：没有办法兼容border和margin\t\n相对位置:到视口的距离\t\t\n\tgetBoundingClientRect\n\t原生实现：绝对位置的实现上减去滚动条滚动的距离\n\t\t滚动条滚动时元素滚动的距离\n\t\tdocument.documentElement.scrollLeft||document.body.scrollLeft\n\t缺点：没有办法兼容border和margin\t\n本身定位为fixed\n\t==> offsetParent:null（不是火狐）\n\t\toffsetTop和offsetLeft也是参照于body的\n\t==> offsetParent:body(火狐)\n本身定位不为fixed\n\t父级没有定位\n\t\t==> offsetParent:body\n\t父级有定位 \n\t\t==> offsetParent:定位父级\nborder 和 margin会影响这个函数的取值\n\twhile循环叠加offsetParent的offsetLeft和offsetTop\n")])])]),n("h3",{attrs:{id:"获取滚动条滚动的位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取滚动条滚动的位置"}},[t._v("#")]),t._v(" 获取滚动条滚动的位置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("var L = document.documentElement.scrollLeft||document.body.scrollLeft;\nvar T = document.documentElement.scrollTop||document.body.scrollTop;\n")])])]),n("h3",{attrs:{id:"获取元素的相对位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取元素的相对位置"}},[t._v("#")]),t._v(" 获取元素的相对位置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("绝对位置:到body的距离\n相对位置:到视口的距离\n\n\n本身定位为fixed\n\t\t==> offsetParent:null（不是火狐）\n\t\t\t\toffsetTop和offsetLeft也是参照于body的\n\t\t==> offsetParent:body（火狐）\n本身定位不为fixed\n\t\t父级没有定位\n\t\t\t==> offsetParent:body\n\t\t父级有定位\n\t\t\t==> offsetParent:定位父级\n")])])]),n("h3",{attrs:{id:"getboundingclientrect-兼容性极好"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getboundingclientrect-兼容性极好"}},[t._v("#")]),t._v(" getBoundingClientRect（兼容性极好）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v(" * getBoundingClientRect：一个元素四个角！的相对位置\n * getBoundingClientRect + 滚动条滚动时元素滚动的距离---\x3e 绝对位置\n  \n\t代表元素border-box的尺寸\n\t\twidth: border-box的宽\n\t\theight:border-box的高\n\t\n\t元素border-box左上角的相对位置\n\t\tleft：y\n\t\ttop ：x\n\t\n\t元素border-box右下角的相对位置\n\t\tright\n\t\tbottom\n")])])]),n("h3",{attrs:{id:"clientwidth-height-offsetwidth-height"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clientwidth-height-offsetwidth-height"}},[t._v("#")]),t._v(" clientwidth&height - offsetwidth&height")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("clientWidth : padding box(可视区域)\n\tconsole.log(wrap.clientWidth,wrap.clientHeight);\noffsetWidth : padding box(可视区域)+border\n\tconsole.log(wrap.offsetWidth,wrap.offsetHeight);\n")])])]),n("h3",{attrs:{id:"获取视口的尺寸"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取视口的尺寸"}},[t._v("#")]),t._v(" 获取视口的尺寸")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("document.documentElement.clientWidth并不是根标签的可视区域，就是视口的大小\n\tvar w = document.documentElement.clientWidth;\ndocument.documentElement.offsetWidth   根标签的border-box\n\tvar w2 = document.documentElement.offsetWidth;\n 注意！！\n\t在ie10及ie10以下，根标签的clientWidth和offsetWidth\n\t\t\t\t\t 统一被指定为视口的宽度\n")])])]),n("p",[t._v("###曲线运动\n勾股定理\na"),n("em",[t._v("a + b")]),t._v("b =c*c")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("三角函数\n\t正弦 : sin\n\t余弦 : cos\n\t正切 : tan\n\t余切 : cot\n正弦定理\n\ta/sinA = b/sinB =c/sinC = 2r（r为外接圆半径）\n余弦定理\n\tcosA = b*b + c*c - a*a / 2bc\n\tcosB = c*c + a*a - b*b / 2ca\n\tcosC = a*a + b*b - c*c / 2ab\n\t\t\n\n什么是弧度\t\n\t一个角度到底代表多少弧度：这个角度所包含的外接圆的弧长/外接圆的半径\n\n360 角度 = 2*PI*r/r 弧度(360角度  = 2*PI 弧度)   \t\t\n\t===> （单位换算）\n\t\t1角度 = PI/180  弧度 \n\t\t1弧度 = 180/PI 角度\n\t\n角度转弧度\t\t\t\t弧度转角度\n弧度值 = 角度值*PI/180\t\t\t角度值 = 弧度值*180/PI\n\t\n\t\t\t\t\t\t\t   \n三角函数图像\n\t曲线运动\n\n完成曲线运动\n\n与canvas结合\n\t人眼能接收的最好频率为一秒钟60次,这样的体验是比较好的\n")])])]),n("h3",{attrs:{id:"结合canvas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结合canvas"}},[t._v("#")]),t._v(" 结合canvas")])])}),[],!1,null,null,null);n.default=a.exports}}]);