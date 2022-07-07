---
title: 04_canvas-下
date: 2022-01-16 15:59:34
permalink: /pages/2b98b7/
categories:
  - html
tags:
  - 
---
## 使用图片
	插入图片
		* canvas操作图片时，必须要等图片加载完才能操作
		* drawImage(image,x,y,width,height)
			* 其中image是image或者canvas对象，x和y是其在目标canvas里的其实坐标
			* 这两个方法多了两个参数：width和height，这两个参数用来控制canvas画入时应该缩放的大小
	使用背景
		createPattren(image,"repetition")
			* image:图像源
			* repetition:repeat/repeat-x/repeat-y/no-repeat
			* 会将createPatern返回的对象作为FILLStyle的值
### 渐变
	线性渐变
		createLinearGradient(x1,y1,x2,y2)
			* 表示渐变的起点（x1,y1）与终点（x2,y2）

			* gradient.addColorStop（position，color）
				* gradient:createLinearGradient的返回值
				* addColorStop()方法只接受2个参数
					* position参数必须是一个0.0-1.0之间的数值，表示渐变中颜色所在的相对位置
					* color参数必须是一个有效的CSS颜色值
	径向渐变
		createRadialGradient(x1,y1,r1,x2,y2,r2)
			* 前三个参数则定义另一个以(x1,y1)为原点，半径为r1的圆
			* 后三个参数则定义另一个以(x2,y2)为原点，半径为r2的圆

			* gradient.addColorStop（position，color）
				* gradient:createLinearGradient的返回值
				* addColorStop()方法只接受2个参数
					* position参数必须是一个0.0-1.0之间的数值，表示渐变中颜色所在的相对位置
					* color参数必须是一个有效的CSS颜色值
#### 飞鸟
	canvas.width = document.documentElement,clientWidth -  视口宽度
	canvas.height = document.documentElement,clientHeight - 视口高度
## 绘制文本
	canvas提供了两种方法来渲染文本：
		* fillText（text,x,y）
			在指定的（x,y）位置填充指定的文本
		* strokeText(text,x,y)
			在指定的(x,y)位置绘制文本内容
	文本样式
		font = value - 绘制文本的样式
			* 默认的字体是10px sans-serif
			* font属性在指定时，必须要有大小和字体
		textAlign = value - 文本对齐选项
			left - 文本左对齐
			center - 文本右对齐
				* 文本的居中是基于你在fillText时所给的x值
				* 文本一半在x的左边，一半在x的右边
			right - 文本居中对齐
		textBaseline = value - 当前文本基线的属性
			top - 文本基线在文本块的顶部
			middle - 文本基线在文本块的中间
			bottom - 文本基线在文本块的底部
		measureText() - 方法返回一个TextMetrics对象，包含文本尺寸信息
	文本水平垂直居中
		
	阴影
		shadowOffsetx = float
			* 用来设定阴影在x轴的延伸距离
			* 默认为0
		shadowOffsety = float
			* 用来设定阴影在y轴的延伸距离
			* 默认为0
		shadowBlur = float
			* 用于设定阴影的模糊程度，默认为0
		shadowcolor = color（必需项）
			* 用于设定阴影颜色效果，默认是全透明的黑色
## 像素操作
	一个对象，三个方法
	imageData对象
		ImageData对象中存储着canvas对象真实的像素数据，它包含以下几个只读属性：
			width - 横向上像素点的个数（图片宽度）
			height - 纵向上像素点的个数（图片高度）
			data() - UintClampedArray类型的一推数组
				包含着rgba格式的整体数据，范围在0至255之间
				r:0 --> 255 (黑色到白色)
				g:0 --> 255 (黑色到白色)
				b:0 --> 255 (黑色到白色)
				a:0 --> 255 (透明到不透明)
	getImageData() - 得到场景像素数据
		* 获得一个包含画布场景像素数据的ImageData对象，代表画布区域的对象数据
			ctx.getImageData(sx,sy,sw,sh)
				sx:将要被提取的图像数据矩形区域的左上角X坐标
				sy:将要被提取的图像数据矩形区域的左上角y坐标
				sw:将要被提取的图像数据矩形区域的宽度
				sh:将要被提取的图像数据矩形区域的高度
	createImageData() - 创建一个ImageData对象
		ctx.createImageData(width,height);
			width: ImageData 新对象的宽度
			height: ImageData 新对象的高度
				默认创建出来的是透明的rgba（0，0，0，0）
	putImageDate() - 在场景中写入像素数据
		* putImageData()方法去对场景进行像素数据的写入
		ctx.putImageDate(myImageData,dx,dy)
			dx和dy参数表示你希望在场景内左上角绘制的像素数据所得到的设备坐标 
## 合成
	全局透明度的设置
		globalAlpha = value
			这个属性影响到canvas里所有图形的透明度
			默认值为1.0，有效范围0.0（完全透明）到1.0（完全不透明）
	覆盖合成
		source:新的图像（源）
		destination:已经绘制过的图形（目标）
	globalCompositeOperation
		* source-over(默认):源在上面，新的图像层级比较高
		* sourcr-in:只留下源与目标的重叠部分（源的一部分）
		* source-out:只留下源超过目标的部分
		* source-atop:砍掉源溢出的部分
		
		* destination-over:目标在上面，旧的图像层级比较高
		* destination-in:只留下源与目标的重叠部分（目标的那部分）
		* destination-out:只留下目标超过源的部分
		* destination-atop: 砍掉目标溢出的部分
### 将画布导出为图像
	toDataURL(注意是canvas元素接口上的方法)
### 事件操作
	ctx.isPointInpath(x,y)
		判断在当前路径中是否包含检测点
			x:检测点的X坐标
			y:检测点的y坐标
		注意：此方法只作用于最新画出的canvas图像	


	
		
