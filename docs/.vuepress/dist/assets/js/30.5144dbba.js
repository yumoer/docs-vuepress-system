(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{252:function(t,n,s){"use strict";s.r(n);var a=s(2),i=Object(a.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("###内存与垃圾回收机制\nJavaScript 具有自动垃圾收集机制，也就是说，执行环境会负责管理代码执行过程中使用的内存。\n而在 C 和 C++之类的语言中，开发人员的一项基本任务就是手工跟踪内存的使用情况，这是造成许多问\n题的一个根源。在编写 JavaScript 程序时，开发人员不用再关心内存使用问题，所需内存的分配以及\n无用内存的回收完全实现了自动管理。这种垃圾收集机制的原理其实很简单：找出那些不再继续使用的变\n量，然后释放其占用的内存。为此，垃圾收集器会按照固定的时间间隔周期性地执行这一操作。\n下面我们来分析一下函数中局部变量的正常生命周期。局部变量只在函数执行的过程中存在。而在\n这个过程中，会为局部变量在栈（或堆）内存上分配相应的空间，以便存储它们的值。然后在函数中使\n用这些变量，直至函数执行结束。此时，局部变量就没有存在的必要了，因此可以释放它们的内存以供\n将来使用。在这种情况下，很容易判断变量是否还有存在的必要；但并非所有情况下都这么容易就能得\n出结论。垃圾收集器必须跟踪哪个变量有用哪个变量没用，对于不再有用的变量打上标记，以备将来收\n回其占用的内存。")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[this._v("用于标识无用变量的策略可能会因实现而异，但具体到浏览器中的实现则通常有两个策略\n\t标记清除（没用的标记清除），引用计数（用的次数为0时清除）\t\t\t\n")])])]),t("h3",{attrs:{id:"垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制"}},[this._v("#")]),this._v(" 垃圾回收机制")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[this._v("函数执行完毕之后变量会被垃圾回收机制回收掉\n\t回收机制有两种方式：标记清除/引用计数\n* 区分变量的释放与垃圾回收\n\t变量释放是瞬间的\n\t垃圾回收是每隔一段时间进行侦测的，它会稍微缓于变量释放\n* 释放内存\n\t局部变量立即释放\n\t全局变量关闭浏览器页面的时候才会释放\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);