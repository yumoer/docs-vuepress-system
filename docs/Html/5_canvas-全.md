---
title: 5_canvas-全
date: 2022-01-16 16:00:09
permalink: /pages/d06bb2/
categories:
  - html
tags:
  - 
---
## canvas复习
	1.注意点
		canvas图像的渲染有别于html图像的渲染
			* canvas的渲染极快，不会出现代码覆盖后延迟渲染的问题
			* 写canvas代码一定要有同步思想
		在获取上下文时，一定要先判断
		画布高宽问题
			* 画布默认高宽300*150px
			* 切记一定要使用html的attribute的形式来定义画布的宽高
			* 通过css形式定义缩放画布内的图像
		绘制矩形的问题
			* 边框高度的问题，边框宽度是在偏移量上下分别渲染一半，可能会出现小数边框，一旦出现小数边框都会向上调整
			* canvas的API只支持一种图像的直接渲染：矩形
		我们没法使用选择器 
	2.画布API
		oc.getContext("2d") - 获取画布的2d上下文
		oc.width - 画布在横向上css像素的个数
		oc.height - 画布在纵向上css像素的个数
		oc.toDataURL() - 拿到画布的图片地址
	3.上下文API
		ctx.fillRect(x,y,width,height):填充的矩形
		ctx.strokeRect(x,y,width,height):带边框的矩形
		ctx.clearRect(0,0,oc.width,oc.height):清除整个画布，注意原点坐标
		ctx.fillStyle - 填充颜色
			背景fillstyle的值可以是createPattern（image,reposition）返回的对象
			线性渐变fillStyle的值可以是createLinearGradient(x1, y1, x2, y2))返回的对象
				addColorStop(position, color)
			径向渐变fillStyle的值可以是createRadialGradient(x1, y1, r1, x2, y2, r2)返回的对象
				addColorStop(position, color)
		ctx.strokeStyle:线条颜色
		ctx.lineWidth:线条宽度
		ctx.lineCap:线条两端的展现形式
		ctx.lineJoin:线条连接处的展现形式
		ctx.moveTo(x,y):将画笔抬起到x，y处
		ctx.lineTo(x,y):将画笔移到x，y处
		ctx.rect(x,y,width,height)
		ctx.arc(x,y,r,degs,dege.dir)
		ctx.arcTo(x1,y1,x2,y2,r):两个坐标，一个半径
			* 结合moveTo（x,y）方法使用
			* x,y:起始点
			* x1,y1:控制点
			* X2,Y2:结束点
		ctx.quadraticCurveTo(x1,y1,x2,y2)
			* 结合moveTo（x,y）方法使用
			* x,y:起始点
			* x1,y1:控制点
			* X2,Y2:结束点 
			* 必须经过起点和终点
		ctx.bezierCurveTo(x1,y1,x2,y2,x3,y3)
			* * 结合moveTo（x,y）方法使用
			* x,y:起始点
			* x1,y1:控制点
			* X2,Y2:控制点 
			* x3,y3:结束点
			* 必须经过起点和终点
		ctx.fill() - 输出填充图形
		ctx.stroke() - 输出边框图形
		ctx.beginPath():清楚路径容器
		ctx.claosePath():闭合路径
			* fill() - 自动闭合
			* stroke() - 手动闭合
		ctx.save()
			* 将画布当前状态（样式相关，变换相关）压入到样式栈中
		ctx.restore()
			* 将样式栈中栈顶的元素弹到样式容器中
			* 图像最终渲染依赖于样式容器
		ctx.translat(x,y):将原点按当前坐标轴位移x，y个单位
		ctx.rotate(弧度):将坐标轴按顺时针方向进行旋转
		ctx.scale(因子):
			放大：放大画布，画布中的一个CSS像素所占据的物理面积变大，画布中包含的 css像素的个数变少，画布中的图像所包含的css像素的个数不变
			缩小：缩小画布，画布中的一个CSS像素所占据的物理面积变小，画布中包含的 css像素的个数变多，画布中的图像所包含的css像素的个数不变

		ctx.drawImage(img,x,y,w,h)
			在canvas中引入图片一定在图片加载完成之后再去操作
		ctx.measureText(文本)
			返回一个持有文本渲染宽度的对象
		ctx.fillText(text,x,y) - 在指定的（x,y）位置填充指定的文本
		ctx.strokeText(text,x,y) - 在指定的(x,y)位置绘制文本内容
		ctx.font = value - 绘制文本样式
		ctx.textAlign = value - 文本对齐选项
		ctx.textBaseline = value - 当前文本基线属性
		ctx.measureText('text') - 包含文本尺寸信息
		ctx.shadowOffsetX = float - 默认0，用于设定阴影在x轴的延伸距离
		ctx.shadowOffsetY = float - 默认0，用于设定阴影在y轴的延伸距离
		ctx.shadowBlur = float - 默认0，用于设定阴影的模糊程度
		ctx.shadowColor = color(必需项) - 用于设定阴影颜色效果
		ctx.getImageData(x,y,w,h)
			ImageDatad对象
				width:选中区域在横向上CSS像素的个数
				height:选中区域在纵向上CSS像素的个数
				data:数组，选中区域所有像素点的rgba信息，rgba的取值是0-255；
		ctx.putImageData(imgdata,x,y)
		ctx.createImageData(w,h)
			返回的imgdata都西昂 默认像素点的信息是rgba（0，0，0，0）
		ctx.globaAlpha = 0 - 影响所有canvas图形的透明度
			取值0-1
		ctx.globalCompositeOperation
			sourse-over：默认值，源在上面，新的图像层级比较高
			sourse-in:只留下源与目标的重叠部分(源的那一部分)
			sourse-out:只留下源超过目标的部分
			source-atop:砍掉源溢出的部分
			
			destination-over:目标在上面，旧的图像层级比较高
			destination-in:只留下源与目标的重叠部分（目标的那一部分）
			destination-out:只留下目标超过源的部分
			destination-atop:砍掉目标溢出的部分
		ctx.ispointipath(x,y)
			x，y这个点是否在路径上
	4.实例
		时钟动画：综合了所有基础api
		飞鸟动画：结合图片创建动画
		马赛克：像素操作
		刮刮卡：合成+像素操作
