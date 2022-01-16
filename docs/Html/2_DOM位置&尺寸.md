---
title: 2_DOM位置&尺寸
date: 2022-01-16 15:58:31
permalink: /pages/f8a790/
categories:
  - html
tags:
  - 
---
### DOM位置和尺寸的api
	parentNode 直接父级
		console.log(inner2.parentNode.id);//inner1
	假删除（数据是最重要的）
		aNodes[i].onclick=function(){
			this.parentNode.style.display="none";
		}
	js兼容性问题
	1.ev || event
	2.鼠标滚轮
		ie/chorme: onmousewheel(dom0)
				   event.wheelDelta
				       上:正
					   下:负
		firefox: addEventListener("DOMMouseScroll") 必须用(dom2的标准模式)
				   event.detail
					   上:负
					   下:正
		阻止dom2的默认行为
			if(e.preventDefault){
				ev.preventDefault()
			}
		阻止dom0的默认行为
			ev.return = false;
	3.事件绑定
		事件流：捕获 - 目标处理 - 冒泡
			捕获冒泡的前提：有嵌套的dom结构
	
		if(testNode.addEventListener){
			//火狐
			testNode.addEventListener("DOMMouseScroll",function(){
				console.log("我在滚 火狐")
			})
		}
		//非火狐浏览器
		testNode.onmousewheel=function(){
			console.log("我在滚")
		}
	4.offsetParent - 模拟包含块（128种，body和html之间的margin被清掉）
		1.父级是否有定位（4种）
		2.本身是否有定位（4种）
		3.浏览器不一样（5大pc浏览器+IE6，7，8）
			规则总结:
				本身定位为fixed
					==> offsetParent:null（不是火狐）
					==> offsetParent:body(火狐)
				本身定位不为fixed
					父级没有定位
						==> offsetParent:body
					父级有定位 
						==> offsetParent:定位父级
	haslayout(ie下的	BFC)
		ie7以下，如果当前元素的某个父级触发了haslayout，那么offsetParent就会被指向到这个触发了layout特性的父节点上
	注意点：
		1.分清parentNode和offsetparent的区别
			parentNode:直接父级
			offsetParent:类似于css的包含块
		2.offsetParent的作用
			offsetLeft和offsetTop都参照offsetParent的内边距边界
		3.dom里所有元素都是有offsetLeft和offsetTop的				
### 获取元素的绝对位置
	绝对位置:到body的距离
		getBoundingClientRect + 滚动条滚动时元素滚动的距离
		原生实现：while循环不断去的累加
			body的offsetParent --> null
			body的offsetLeft --> 0
			body的offsetTop --> 0
		缺点：没有办法兼容border和margin	
	相对位置:到视口的距离		
		getBoundingClientRect
		原生实现：绝对位置的实现上减去滚动条滚动的距离
			滚动条滚动时元素滚动的距离
			document.documentElement.scrollLeft||document.body.scrollLeft
		缺点：没有办法兼容border和margin	
	本身定位为fixed
		==> offsetParent:null（不是火狐）
			offsetTop和offsetLeft也是参照于body的
		==> offsetParent:body(火狐)
	本身定位不为fixed
		父级没有定位
			==> offsetParent:body
		父级有定位 
			==> offsetParent:定位父级
	border 和 margin会影响这个函数的取值
		while循环叠加offsetParent的offsetLeft和offsetTop
### 获取滚动条滚动的位置
	var L = document.documentElement.scrollLeft||document.body.scrollLeft;
	var T = document.documentElement.scrollTop||document.body.scrollTop;
### 获取元素的相对位置
	绝对位置:到body的距离
	相对位置:到视口的距离
	
	
	本身定位为fixed
			==> offsetParent:null（不是火狐）
					offsetTop和offsetLeft也是参照于body的
			==> offsetParent:body（火狐）
	本身定位不为fixed
			父级没有定位
				==> offsetParent:body
			父级有定位
				==> offsetParent:定位父级
### getBoundingClientRect（兼容性极好）
	 * getBoundingClientRect：一个元素四个角！的相对位置
	 * getBoundingClientRect + 滚动条滚动时元素滚动的距离---> 绝对位置
	  
		代表元素border-box的尺寸
			width: border-box的宽
			height:border-box的高
		
		元素border-box左上角的相对位置
			left：y
			top ：x
		
		元素border-box右下角的相对位置
			right
			bottom
### clientwidth&height - offsetwidth&height
	clientWidth : padding box(可视区域)
		console.log(wrap.clientWidth,wrap.clientHeight);
	offsetWidth : padding box(可视区域)+border
		console.log(wrap.offsetWidth,wrap.offsetHeight);
### 获取视口的尺寸
	document.documentElement.clientWidth并不是根标签的可视区域，就是视口的大小
		var w = document.documentElement.clientWidth;
	document.documentElement.offsetWidth   根标签的border-box
		var w2 = document.documentElement.offsetWidth;
	 注意！！
		在ie10及ie10以下，根标签的clientWidth和offsetWidth
						 统一被指定为视口的宽度
###曲线运动
	勾股定理
		a*a + b*b =c*c
		
	三角函数
		正弦 : sin
		余弦 : cos
		正切 : tan
		余切 : cot
	正弦定理
		a/sinA = b/sinB =c/sinC = 2r（r为外接圆半径）
	余弦定理
		cosA = b*b + c*c - a*a / 2bc
		cosB = c*c + a*a - b*b / 2ca
		cosC = a*a + b*b - c*c / 2ab
			

	什么是弧度	
		一个角度到底代表多少弧度：这个角度所包含的外接圆的弧长/外接圆的半径
	
	360 角度 = 2*PI*r/r 弧度(360角度  = 2*PI 弧度)   		
		===> （单位换算）
			1角度 = PI/180  弧度 
			1弧度 = 180/PI 角度
		
	角度转弧度				弧度转角度
	弧度值 = 角度值*PI/180			角度值 = 弧度值*180/PI
		
								   
	三角函数图像
		曲线运动
	
	完成曲线运动

	与canvas结合
		人眼能接收的最好频率为一秒钟60次,这样的体验是比较好的
### 结合canvas			
	
		
