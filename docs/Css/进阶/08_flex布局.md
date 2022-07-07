---
title: 08_flex布局
date: 2022-01-16 16:13:12
permalink: /pages/9bfbff/
categories:
  - css
tags:
  - 
---

## flex
	flex不等同于浮动
	基础：
		* 什么是容器，什么是项目，什么是主轴，什么是侧轴？
		* 项目永远在主轴的正方向上排列
		* flex分新旧两个版本
			* -webkit-box
			* -webkit-flex/flex
	注意：
		* 新版本的flex要比老版本的flex强大很多，有必要学习老版本的flex？
			* 移动端开发者必须要关注老版本的flex
				* 因为很多移动端设备内核低于老版本的flex
			* 老版本的box通过两个属性四个属性值控制主轴的位置和方向
			* 新版本的flex通过一个属性四个属性值控制主轴的位置和方向

### 新版flex
	容器的布局方向和排列方式
		* flex-direction - 控制主轴的x轴和y轴的方向
			* 属性值：
				* row - x轴的正方向（从左往右的x轴）
				* row-reverse - x轴的反方向（从右往左的x轴）
				* column - y轴的正方向（从上往下的y轴）
				* column-reverse - y轴的反方向（从下往上的y轴）
	富裕空间管理：只决定富裕空间的位置，不会给项目区分配空间
		* justify-content:主轴
			* 属性值
				* flex-start - 在主轴的正方向
				* flex-end - 在主轴的反方向
				* center - 在主轴的两边
				* space-between - 在项目之间
				* space-around - 在项目两边
		* align-items:侧轴
			* 属性值：
				* flex-start - 在侧轴的正方向
				* flex-end - 在侧轴的反方向
				* center - 在侧轴的两边
				* baseline - 按基线对齐
				* stretch - 默认值，等高布局（没有高度的情况下）
	弹性空间管理：
		* flex-grow：n 
			* 默认值为0，弹性因子
#### flex新增属性
	容器新增：
		* flex-wrap：nowrap
			* 指定flex元素单行显示还是多行显示
			* 属性值
				* nowrap - 默认值，不换行
				* wrap - 多行显示
				* wrap-reverse - 反向多行显示
		* flex-flow:
			* 是flex-direction和flex-wrap的简写
				* 属性值
					* direction wrap - 一起使用
		* align-content：
			* 多行/多列时恻轴富裕空间的管理（把多行/多列看作一个整体）
			* 属性值
				* flex-strat - 在侧轴的下边
				* flex-end - 在侧轴的上边
				* center - 在恻轴的中间
				* space-between - 在项目之间
				* space-around - 在项目两边
				* space-evently - 在项目中轴线两侧
				* stretch - 默认值
		
	项目新增
		* order：n
			* 项目的值越小，排名越靠前
		* align-self:
			* 控制一个项目的方向
			* 属性值
				* flex-start
				* flex-end
				* center
		* flex-basis:auto
			* 设置各项目的宽度
		* flex-grow：0
			* 默认值为0，相对拉伸对象的宽度
			* 可用空间 = （容器大小 - 所有相邻项目flex-basis的总和）
			* 可扩展空间 = （可用空间/所有相邻项目flex-grow的总和）
			* 每项伸缩大小 = （伸缩基准值flex-basis + (可扩展空间*flex-flow值)）
		* flex-shrink:1
			* 默认值为1，相对压缩对象的宽度 
			* 只有在flex-wrap：nowrap时才使用
			* 计算收缩因子与基准值乘的总和
				* var a = 每一项flex - shrink*flex-basis之和
			* 计算收缩因数
				* 收缩因数 = （项目的收缩因子*项目基准值）/第一步计算总和
					* var b = （flex-shrink*flex-basis）/a
			* 移除空间的计算
				* 移除空间 = 项目收缩因数 * 负溢出的空间
					* var c = b * 溢出的空间
		* flex简写属性
			flex：1（flex-grow:1;flex-shrink:1;flex-basis:0）
### 老版flex
	容器的布局方向
		* -wibkit-box-orient：horizontal/vertical - 控制主轴和侧轴
		* 属性值
			* horizonal：x轴
			* vertical：y轴
	容器的排列方向
		* -webkit-box-direction:属性值 - 控制主轴的方向
		* 属性值
			* normal：正方向（从左到右）
			* reverse：反方向（从右到左）
	富裕空间管理：只决定富裕空间的位置，不会给项目区分配空间
		-webkit-box-pack : 属性值 - 主轴
			* 属性值
				* strat - 在右边（X）/下边（Y）
				* end - 在左边（X）/上边（Y）
				* center - 在两边
				* justity - 在项目之间
	富裕空间管理
		* -webkit-box-align:属性值 - 测轴
			* 属性值
				* strat - 在右边（X）/下边（Y）
				* end - 在左边（X）/上边（Y）
				* center - 在两边
	项目的弹性空间管理
		* -webkit-box-flex : 0  
		* 默认值为0，弹性因子
## 侧轴富裕空间的管理
	单行单列
		align-items
		align-self（优先级高）
	多行多列
		align-content


