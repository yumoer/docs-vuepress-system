---
title: 3_canvas-上
date: 2022-01-16 15:59:17
permalink: /pages/94e207/
categories:
  - html
tags:
  - 
---
## canvas基本用法
### 什么是canvas（画布）
	<canvas>是HTML5新增的元素，可用于通过使用javascript中的脚本来绘制图形，创建动画
	
	可以使用<canvas>时，建议要成对出现，不要使用闭合的形式
		canvas元素默认具有高宽
			width：300px；
			height：150px；
### 替代内容
	<canvas>很容易定义一些替代内容，只需要在<canvas>标签中提供替换内容就可以
		支持<canvas>的浏览器将会忽略在容器中包含的内容，并且只是正常渲染canvas
		不支持<canvas>的浏览器会显示代替内容	
### canvas标签的两个属性
	<canvas>标签只有两个属性 - width和height	
		当没有设置宽度和高度的时候，canvas会初始化宽度为300px和高度为150px的矩形

	画布的高宽
		html属性设置width height时，只会影响画布本身不影响画布内容
		css属性设置width和height时不但会影响画布本身的高宽，还会使画布中的内容等比例缩放（缩放参照于画布默认的尺寸）
### 渲染上下文
	<canvas>元素有一个叫做getContext()的方法，这个方法是用来获得渲染上下文和它的绘画功能。
	getContext()只有一个参数，上下文的格式
		获取方式
			获取画布
				var canvas = document.querySelector("box");（querySelector身上有坑）
			获取画笔
				var ctx = canvas.getContext("2d");
		检查支持性
			var canvas = document.getElementById('tutorial');
			  if (canvas.getContext){
					var ctx = canvas.getContext('2d');
				} 
## canvas绘制矩形
	HTML中的元素canvas只支持一种原生的图形绘制：矩形。所以其他的图形的绘制至少需要生成一条路径
	1.绘制矩形
	canvas提供三种方法绘制矩形：（画笔属性）
		填充的矩形，不加单位（填充色默认为黑色）
			fillRect（x,y,width,height）
		带边框的矩形，小数向上取整（默认边框为一像素实心黑色）
			strokeRect（x,y,width,height）
		清除指定矩形区域，让清除部分完全透明
			clearRect（x,y,width,height）
	* x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标
	* width和height设置矩形的尺寸（存在边框的话，边框会在width尚占据一个边框的宽度，height同理）
	2.strokeRect时，边框像素渲染问题
		* 按理渲染出的边框应该是1px的
		* canvas在渲染矩形边框时，边框宽度是平均分在偏移位置的两侧。
			* context.strokeRect(10,10,50,5):边框会渲染在10.5和9.5之间，相当于边框会渲染在9到11之间
			* context：strokeRect（10.5，10.5，50，50）：边框会渲染在10到11之间
	3.添加样式和颜色
		fillStyle - 设置图形的填充颜色
		strokeStyle - 设置图形的轮廓颜色（默认为黑色）
		lineWidth - 设置当前绘制的粗细，属性值必须为正数（默认1.0）
			描述线段宽度的数字，0，负数，Infinity和NaN会被忽略
	4.lineWidth & 覆盖渲染
	5.lineJoin
		设定线条与线条间接合处的样式（默认是miter）
			* round：圆角
			* bevel：斜角
			* miter：直角
#### 高宽问题
	内联样式时，修改高宽，不会改变
	在css样式时，修改高度，会改变
## 绘制路径
	图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合
### 步骤
	1.首先，需要创建路径起始点
	2.然后你使用画图命令去画出路径
	3.之后你把路径封闭
	4.一旦路径生成，你就能通过描边或填充路径区域来渲染图形
### 绘制三角形
	beginPath() - 清空路径容器
		* 新建一条路径，生成之后，图形绘制命令被指向到路径上准备生成路径
		* 调用之后，列表清空重置，就可以重新绘制新的图形
	moveTo（x,y） - 抬起画笔
		* 将笔触移到指定的坐标x以及y上
		* 当canvas初始化胡总和beginPath（）调用后，你通常会使用moveTo（）函数设置起点
	lineTo（X,Y） - 开始绘制
		* 将笔触移动到指定的坐标x以及y上
		* 绘制一条从当前位置到指定x以及y位置的直线
	closePath() - 自动闭合
		* 闭合路径之后图形绘制命令又重新指向到上下文中
			* 闭合路径closePath（），不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形
		* 如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做
			* 当你调用fill（）函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath（）函数
		* 但是调用stroke（）时不会自动闭合
	stroke()
		* 通过线条来绘制图形轮廓
		* 不会自动调用closePath（）
	fill() 
		* 通过填充路径的内容区域生成实心的图形
		* 自动调用closePath()
### 绘制矩形
	rect(x,y,width,height)
		* 绘制一个左上角坐标为（x,y），宽度为width以及height的矩形
		* 当该方法执行的时候，moveTo（）方法自动设置坐标参数（0，0），也就是说，当前笔触自动重置会默认坐标
### lineCap：canvas 2D API
	指定如何绘制一条线段末端的属性
		属性值
			* butt - 线段末端以方形结束（默认值）
			* round - 线段末端以圆形结束
			* square - 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域
### save（）：canvas 2D API
	通过将当前状态放入栈中，保存canvas全部状态的方法
		保存到栈中的绘制形态有下面部分组成：
			* 当前的变换矩阵
			* 当前的剪切区域
			* 当前的虚线列表
				属性值：
					* strokeStyle
					* fillStyle
					* lineWidth
					* lineCap
					* lineJoin
### restore（）：canvas 2D API
	通过在绘图状态栈中弹出顶端的状态，将canvas恢复到最近的保存状态的方法，如果没有保存状态，此方法不做任何改变	
### 基本模板
	save（）和restore（）成对出现
		save() - 压栈
		样式设置
		beginPath()
		路径设置
		restore() - 出栈

	路径容器
		每次调用路径API时，都会在路径容器里做登记
		调用beginPath时，清空整个路径容器
	样式容器
		每次调用路径API时，都会在样式容器里做登记
		调用save时，将样式容器里的状态压入样式栈
		调用restore时，将样式栈的栈顶状态弹出到样式容器里，进行覆盖
	样式栈
		调用save时，将样式容器里的状态压入样式栈
		调用restore时，将样式栈的栈顶状态弹出到样式容器里，进行覆盖


	阻止事件默认行为：break ， container ， return
## 绘制圆形
	arc(x, y, radius, startAngle, endAngle, anticlockwise)
		* 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockWise给定的方向（默认为顺时针）来生成。
			true:逆时针
			false:顺时针
		* x,y为绘制圆弧所在圆上的圆心坐标
		* radius为半径
		* startAngle以及endAngle参数用弧度定义了开始以及结束的弧度，这些都是以x轴为基准
		* 参数anticlockWise为一个布尔值。为true时，是逆时针方向，否则为顺时针方向

	arcTo(x1,y1,x2,y2,radius)
		* 根据给定的控制点和半径画一段圆弧
		* 肯定会从（x1,y1）但不一定经过（x2,y2）;(x2,y2)只是控制一个方向
## 绘制曲线（贝塞尔）
	二次贝塞尔
		quadraticCurveTo(cplx,cply,x,y)
		* 注意：cp1x，cp1y为一个控制点，x,y为结束点，起始点为moveTo时指定的点
	三次贝塞尔
		bezierCurveTo(cp1x,cp1y,cp2x,cp2y.x.y)
		* 注意：cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点，起始点为moveTo时指定的点
## canvas中的变换（在canvas中多写是累加的）
	translate(X,Y)：原点
		* 用来移动canvas的原点到一个不同的位置
		* translate方法接受两个参数，x是左右偏移量，y是上下偏移量
	rotate（angle）：旋转
		* 只接受一个参数：旋转的角度，顺时针方向，以弧度为单位的值。
		* 旋转的中心点始终是canvas的原点，如果想改变原点，我们需要用到translate方法
	scale（x,y）：缩放
		* 接受两个参数，x，y分别是横轴和纵轴的缩放因子，它们都必须是正值
		* 值比1.0小表示缩小，比1.0大表示放大，值1.0表示不变
		* 缩放一般我们用它来增减图形在canvas中的像素数目，对形状，位图进行缩小或者放大。
		css像素是一个抽象单位
			放大：使画布内css像素的个数变少，单个css像素所占据的实际物理尺寸变多
			缩小：使画布内css像素的个数变多，单个css像素所占据的实际物理尺寸变少



		
	
	
	
