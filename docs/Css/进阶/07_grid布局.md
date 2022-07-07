---
title: 07_grid布局
date: 2022-01-16 16:12:52
permalink: /pages/893519/
categories:
  - css
tags:
  - 
---

## bootstrap
	1.流体容器（.container-fluid） - 相当于width：auto，会根据浏览器宽度自适应
	2.固定容器（.container） - 会根据浏览器宽度有固定阈值
		      阈值                    width	
	大于等于1200（lg - 大屏pc）    1170（1140+槽宽）
	
	大于等于992（md - 中屏pc）      970（940+槽宽）
	小于1200    
	
	大于等于768（sm - 平板）        750（720+槽宽）
	小于992
	
	小于768（xs - 移动手机）             auto
	3.栅格系统 - 把一行分12列，根据比例划分宽度
		@grid-gutter-width:30px - 槽宽
		ceil（） - 对上取整
		floor（） - 对下取整
		percentage（） - 百分比函数

### 栅格源码分析
	1.固定容器&流体容器的公共样式 - .container-fixed(包括清除浮动)
		.container-fixed（）-->
			margin-right:auto;
			margin-left:auto;
			padding-left:15px;
			padding-right:15px;
			&:extend(.clearfix all);
	2.固定容器的特定样式（sm-md-lg顺序不可变，sm（移动设备）优先）
		.container -->
			.container-fixed();
			@media (min-width:@screen-sm-min){
				width:@container-sm;
			}
			@media (min-width:@screen-md-min){
				width:@container-md;
			}
			@media (min-width:@screen-lg-min){
				width:@container-lg;
			}
		
	3.行
		.make-row() -->（包括清除浮动）
			margin-left:-15px;
			margin-right:-15px;
			&:extend(.clearfix all);
		 
	4.列
		//第一部分
		.make-grid-columns()-->
			.col-xs-1,.col-sm-1,.col-md-1,.col-lg-1,
			.col-xs-2,.col-sm-2,.col-md-2,.col-lg-2,
			...
			.col-xs-12,.col-sm-12,.col-md-12,.col-lg-12{
				position:relative;
				min-height:1px;
				padding-left:15px;
				padding-right:15px
			}
		//第二部分
		.make-grid(xs/sm/md/lg)-->index=12向下传递
			//第二部分第一步（float）
			float-grid-columns(@class);
				@ .col-xs-1;col-xs-2,clo-xs-3,col-xs-4,...col-xs-12{
					float:left;
				}
			//第二部分第二步（width）
			.loop-grid-columns(@grid-columns,@class,width);
				.col-xs-12{
					width:12/12;
				}
				.col-xs-11{
					width:11/12;
				}
				...
				.col-xs-1{
					width:1/12;
				}
			//第二部分第三步(列排序-向左排序left)
			.loop-grid-columns(@grid-columns,@class,push);
				.col-xs-push-12{
					left:12/12;
				}
				.col-xs-push-11{
					left:11/12;
				}
				...
				.col-xs-push-1{
					left:1/12;
				}
				.col-xs-push-0{
					left:auto;
				}
			//第二部分第四步（列排序-向右排序right）
			.loop-grip-columns(@grid-columns,@class,pull);
				.col-xs-pull-12{
					right:12/12;
				}
				.col-xs-pull-11{
					right:11/12;
				}
				...
				.col-xs-pull-1{
					right:1/12;
				}
				.col-xs-pull-0{
					right:auto;
				}
			//第二部分第五步（列偏移margin-left）
			.loop-grid-columns(@grid-columns,@class,offset);
				.col-xs-offset-12{
					margin-left:12/12;
				}
				.col-xs-offset-11{
					margin-left:11/12;
				}
				...
				.col-xs-offset-1{
					margin-left:1/12;
				}
				.col-xs-offset-0{
					margin-left:0;
				}	
#### 递归
	递归
		.col(@index, @list) when (@index =< @grid-columns) { 
    		@item: ~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}";
    		.col((@index + 1), ~"@{list}, @{item}");
  		}
		上方式 = 下方式
        .col(3,".col-xs-1, .col-sm-1, .col-md-1, .col-lg-1,.col-xs-2, .col-sm-2, .col-md-2, .col-lg-2")
            ....
        .col(13,str)
            str:
                .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1,
                .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2,
                ...
                .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12
#### 注意
	顺序从sx-sm-md-lg，排序时不能跳跃，需要一层一层往下传递
#### 栅格盒模型设计的精妙之处
		容器两边有15px的padding
		行  两边有-15px的margin
		列  两边有15px的padding
		
		为了维护槽宽的规则：
			列两边必须要有15px的padding
		为了能使列嵌套行
			行两边必须要有-15px的margin
		为了让容器可以包裹住行
			容器两边必须要有15px的padding
### 响应式工具
	可用的类 - 通过单独或联合使用以下列出的类，可以针对不同屏幕尺寸隐藏或显示页面内容
		visible-xs（-*）:只有xs的尺寸能显示，其它尺寸不显示
			*：值为block，inline，inline-block，不建议使用，除了<table>元素的特殊类型外。
		hidden-xs:除了xs的尺寸不显示，其他尺寸都显示
		
