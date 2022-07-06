(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{246:function(t,n,a){"use strict";a.r(n);var e=a(2),x=Object(e.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h2",{attrs:{id:"canvas复习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canvas复习"}},[this._v("#")]),this._v(" canvas复习")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[this._v("1.注意点\n\tcanvas图像的渲染有别于html图像的渲染\n\t\t* canvas的渲染极快，不会出现代码覆盖后延迟渲染的问题\n\t\t* 写canvas代码一定要有同步思想\n\t在获取上下文时，一定要先判断\n\t画布高宽问题\n\t\t* 画布默认高宽300*150px\n\t\t* 切记一定要使用html的attribute的形式来定义画布的宽高\n\t\t* 通过css形式定义缩放画布内的图像\n\t绘制矩形的问题\n\t\t* 边框高度的问题，边框宽度是在偏移量上下分别渲染一半，可能会出现小数边框，一旦出现小数边框都会向上调整\n\t\t* canvas的API只支持一种图像的直接渲染：矩形\n\t我们没法使用选择器 \n2.画布API\n\toc.getContext(\"2d\") - 获取画布的2d上下文\n\toc.width - 画布在横向上css像素的个数\n\toc.height - 画布在纵向上css像素的个数\n\toc.toDataURL() - 拿到画布的图片地址\n3.上下文API\n\tctx.fillRect(x,y,width,height):填充的矩形\n\tctx.strokeRect(x,y,width,height):带边框的矩形\n\tctx.clearRect(0,0,oc.width,oc.height):清除整个画布，注意原点坐标\n\tctx.fillStyle - 填充颜色\n\t\t背景fillstyle的值可以是createPattern（image,reposition）返回的对象\n\t\t线性渐变fillStyle的值可以是createLinearGradient(x1, y1, x2, y2))返回的对象\n\t\t\taddColorStop(position, color)\n\t\t径向渐变fillStyle的值可以是createRadialGradient(x1, y1, r1, x2, y2, r2)返回的对象\n\t\t\taddColorStop(position, color)\n\tctx.strokeStyle:线条颜色\n\tctx.lineWidth:线条宽度\n\tctx.lineCap:线条两端的展现形式\n\tctx.lineJoin:线条连接处的展现形式\n\tctx.moveTo(x,y):将画笔抬起到x，y处\n\tctx.lineTo(x,y):将画笔移到x，y处\n\tctx.rect(x,y,width,height)\n\tctx.arc(x,y,r,degs,dege.dir)\n\tctx.arcTo(x1,y1,x2,y2,r):两个坐标，一个半径\n\t\t* 结合moveTo（x,y）方法使用\n\t\t* x,y:起始点\n\t\t* x1,y1:控制点\n\t\t* X2,Y2:结束点\n\tctx.quadraticCurveTo(x1,y1,x2,y2)\n\t\t* 结合moveTo（x,y）方法使用\n\t\t* x,y:起始点\n\t\t* x1,y1:控制点\n\t\t* X2,Y2:结束点 \n\t\t* 必须经过起点和终点\n\tctx.bezierCurveTo(x1,y1,x2,y2,x3,y3)\n\t\t* * 结合moveTo（x,y）方法使用\n\t\t* x,y:起始点\n\t\t* x1,y1:控制点\n\t\t* X2,Y2:控制点 \n\t\t* x3,y3:结束点\n\t\t* 必须经过起点和终点\n\tctx.fill() - 输出填充图形\n\tctx.stroke() - 输出边框图形\n\tctx.beginPath():清楚路径容器\n\tctx.claosePath():闭合路径\n\t\t* fill() - 自动闭合\n\t\t* stroke() - 手动闭合\n\tctx.save()\n\t\t* 将画布当前状态（样式相关，变换相关）压入到样式栈中\n\tctx.restore()\n\t\t* 将样式栈中栈顶的元素弹到样式容器中\n\t\t* 图像最终渲染依赖于样式容器\n\tctx.translat(x,y):将原点按当前坐标轴位移x，y个单位\n\tctx.rotate(弧度):将坐标轴按顺时针方向进行旋转\n\tctx.scale(因子):\n\t\t放大：放大画布，画布中的一个CSS像素所占据的物理面积变大，画布中包含的 css像素的个数变少，画布中的图像所包含的css像素的个数不变\n\t\t缩小：缩小画布，画布中的一个CSS像素所占据的物理面积变小，画布中包含的 css像素的个数变多，画布中的图像所包含的css像素的个数不变\n\n\tctx.drawImage(img,x,y,w,h)\n\t\t在canvas中引入图片一定在图片加载完成之后再去操作\n\tctx.measureText(文本)\n\t\t返回一个持有文本渲染宽度的对象\n\tctx.fillText(text,x,y) - 在指定的（x,y）位置填充指定的文本\n\tctx.strokeText(text,x,y) - 在指定的(x,y)位置绘制文本内容\n\tctx.font = value - 绘制文本样式\n\tctx.textAlign = value - 文本对齐选项\n\tctx.textBaseline = value - 当前文本基线属性\n\tctx.measureText('text') - 包含文本尺寸信息\n\tctx.shadowOffsetX = float - 默认0，用于设定阴影在x轴的延伸距离\n\tctx.shadowOffsetY = float - 默认0，用于设定阴影在y轴的延伸距离\n\tctx.shadowBlur = float - 默认0，用于设定阴影的模糊程度\n\tctx.shadowColor = color(必需项) - 用于设定阴影颜色效果\n\tctx.getImageData(x,y,w,h)\n\t\tImageDatad对象\n\t\t\twidth:选中区域在横向上CSS像素的个数\n\t\t\theight:选中区域在纵向上CSS像素的个数\n\t\t\tdata:数组，选中区域所有像素点的rgba信息，rgba的取值是0-255；\n\tctx.putImageData(imgdata,x,y)\n\tctx.createImageData(w,h)\n\t\t返回的imgdata都西昂 默认像素点的信息是rgba（0，0，0，0）\n\tctx.globaAlpha = 0 - 影响所有canvas图形的透明度\n\t\t取值0-1\n\tctx.globalCompositeOperation\n\t\tsourse-over：默认值，源在上面，新的图像层级比较高\n\t\tsourse-in:只留下源与目标的重叠部分(源的那一部分)\n\t\tsourse-out:只留下源超过目标的部分\n\t\tsource-atop:砍掉源溢出的部分\n\t\t\n\t\tdestination-over:目标在上面，旧的图像层级比较高\n\t\tdestination-in:只留下源与目标的重叠部分（目标的那一部分）\n\t\tdestination-out:只留下目标超过源的部分\n\t\tdestination-atop:砍掉目标溢出的部分\n\tctx.ispointipath(x,y)\n\t\tx，y这个点是否在路径上\n4.实例\n\t时钟动画：综合了所有基础api\n\t飞鸟动画：结合图片创建动画\n\t马赛克：像素操作\n\t刮刮卡：合成+像素操作\n")])])])])}),[],!1,null,null,null);n.default=x.exports}}]);