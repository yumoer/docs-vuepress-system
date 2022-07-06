(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{255:function(t,n,a){"use strict";a.r(n);var e=a(2),r=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("在很多语言中其实我们是会区分 类型转换 & 强制类型转换的\n\t\t类型转换发生在静态类型语言的编译阶段，\n\t\t强制类型转换则发生在动态类型语言的运行时\n\t\t\n由于在javascript中，编译过程体现的不是很明显。所以我们一般都会认为javascript中\n只存在强制类型转换\n")])])]),n("p",[t._v("###强制类型转换\njavascript中的强制类型转换总是返回基本数据类型，不会返回对象或函数。所以组包从严格意义上来讲，不能算作强制类型转换。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('强制类型转换:\n\t 隐式强制类型转换,显式强制类型转换\n\t\tvar a = 42;\n\t\tvar b = a + ""; \t //  隐式强制类型转换\n\t\tvar c = String( a ); //  显式强制类型转换\n\t对变量 b 而言，强制类型转换是隐式的；由于 + 运算符的其中一个操作数是字符串，所以是字符串拼接操作，结果是数字 42被强制类型转换为相应的字符串 "42" 。\n\t而String( a )则是将 a 显式强制类型转换为字符串\n\na.ToPrimitive , ToString , ToNumber , ToBoolean\n\n\n\t--ToPrimitive:它负责处理对象的基本化\n \t\t检查该值是否有 valueOf() 方法。如果有并且返回基本类型值，就使用该值进\n\t\t行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。\n\t\t如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误\n\t\t\n\t\tvalueOf()\n\t\t\tJavaScript 调用 valueOf() 方法用来把对象转换成原始类型的值（数值、字符串和布尔值）。 \n\t\t\t你很少需要自己调用此函数; JavaScript 会自动调用此函数当需要转换成一个原始值时。\n\t\t\t默认情况下, valueOf() 会被每个对象Object继承。每一个内置对象都会覆盖这个方法为了返回一个合理的值，\n\t\t\t如果对象没有原始值，valueOf() 就会返回对象自己\n\t\t\n\t\ttoString():\n\t\t\t对普通对象来说，除非自行定义，否则 toString() 返回 内部 属性[[Class]] 的值\n\t\t\t\t\t即调用Object.prototype.toString()\n\t\t\t\t如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值\n\t\t\t\t\t比如数组的默认 toString() 方法经过了重新定义，将所有单元字符串化以后\n\t\t\t\t\t再用 "," 连接起来：\n\n\n\n\n\t--ToString:它负责处理非字符串转化为字符串\n\t\t基本类型值的字符串化规则为：\n\t\t\tString()  \n\t\t对象 (ToPrimitive)  \n\t\t\toPrimitive 转成基本数据类型再String()\n\t\t\n\t\t\n\t\tString() 方法\n\t\t\tnull 转换为 "null"\n\t\t\tundefined 转换为 "undefined"\n\t\t\tBoolean：true 转换为 "true" ;false 转换为 "false"\n\t\t\t数字的字符串化则遵循通用规则\n\t\t\t\t1 转换为 "1"  (当然可能会有指数的形式 1.07e21)\n\t\t\n\t\t\n\t--ToNumber:它负责处理非数字化为数字\n\t\t基本数据类型数值化规则:\n\t\t\tNumber()\n\t\t对象 ()\n\t\t\tToPrimitive 转成基本数据类型再Number()\n\t\t\n\t\t\n\t\tNumber方法\n\t\t\tNull==>0\n\t\t\tUndefined==>NaN\n\t\t\tBoolean：true==>1\tfalse==>0\n\t\t\t字符串\n\t\t\t\t就是把字符串两边的空白字符去掉，然后把两边的引号去掉，看它能否组成一个合法的数字。\n\t\t\t\t如果是，转化结果就是这个数字；否则，结果是NaN。\n\t\t\t\t当然也有例外，比如空白字符串转化为数字的结果是0。\n\t\t\t\n\t\t\n\t--ToBoolean：它负责非布尔化为布尔\n\t\t\t假值 ---\x3efalse\n\t\t\t真值 ---\x3e true\n\t\t\t\n\t\t\t以下这些是假值：\n\t\t\t\tundefined\n\t\t\t\tnull\n\t\t\t\tfalse\n\t\t\t\t+0 、 -0 和 NaN\n\t\t\t\t""\n\t\t\t\n\t\t\t真值就是假值列表之外的值。\n')])])]),n("p",[t._v("###parseInt(value)  与  Number(value) 转换字符串的区别\nparseInt转换情况\n字符串->只要最高位是数字则会转换成数值；否则转换成NaN")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("Number转换情况\n\t就是把字符串两边的空白字符去掉，然后把两边的引号去掉，看它能否组成一个合法的数字。\n\t如果是，转化结果就是这个数字；否则，结果是NaN。\n\t当然也有例外，比如空白字符串转化为数字的结果是0。\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);