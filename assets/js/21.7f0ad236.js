(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{241:function(t,n,a){"use strict";a.r(n);var e=a(2),r=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v('controls = "controls" - 调出控件（必需）')]),t._v(" "),n("h3",{attrs:{id:"音视频标签"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#音视频标签"}},[t._v("#")]),t._v(" 音视频标签")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("<video>:html5提供的播放视频的标签\n\tsrc:资源地址\n\tcontrols:该属性定义是显示还是隐藏用户控制界面\n<audio>:html5提供的播放音频的标签\n\tsrc:资源地址\n\tcontrols：该属性定义是显示还是隐藏用户控制界面\n<source>:\n\tvideo(视频):\n\t\ttype='video/webm; codecs=\"vp8,vorbis\"'\n\t\ttype='video/ogg; codecs=\"theora,vorbis\"'\n\t\ttype='video/mp4; codecs=\"avc1.42E01E,MP4a.40.2\"'\n\taudio(音频):\n\t\ttype='audio/ogg; codecs=\"vorbis\"'\n\t\ttype='audios/aac; codecs=\"aac\"'\n\t\ttype='audio/mpeg'\n")])])]),n("h3",{attrs:{id:"video标签的属性-attribute"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#video标签的属性-attribute"}},[t._v("#")]),t._v(" video标签的属性(attribute)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("width - 视频显示区域的宽度，单位是CSS像素\nheight - 视频显示区域的高度，单位是CSS像素\nposter - 一个海报帧的URL，用于在用户播放或者跳帧之前展示\n\nsrc - 要嵌到页面的视频的URL\ncontrols - 显示或隐藏用户控制页面\nautoplay - 媒体是否自动播放\nloop - 媒体是否循环播放\nmuted - 是否静音\npreload - 达到最佳的用户体验方式\n\tnone:提示浏览器该视频不需要缓存\n\tmetadata:用户不需要查看该视频，可以抓取元数据\n\tauto:视频优先加载，如果需要，可以下载整个视频\n\t空字符串:代指auto值\n")])])]),n("h3",{attrs:{id:"audio标签的属性-attribute"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#audio标签的属性-attribute"}},[t._v("#")]),t._v(" audio标签的属性(attribute)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("src - 要嵌到页面的音频的URL\ncontrols - 显示或隐藏用户控制页面\nautoplay - 音乐是否自动播放\nloop - 音乐是否循环播放\nmuted - 是否静音\npreload - 达到最佳的用户体验方式\n")])])]),n("h3",{attrs:{id:"音视频js相关属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#音视频js相关属性"}},[t._v("#")]),t._v(" 音视频js相关属性")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("duration - 媒体总时间（只读）\ncurrentTime - 开始播放到现在所用的时间（可读写）\nmuted - 是否静音（可读写，相比于volume优先级要高）\nvolume - 0.0-1.0的音量相对值（可读写）\n\tmuted和volume之间不会同步，muted属性的优先级较高\npaused - 媒体是否暂停（只读）\nended - 媒体是否播放完毕（只读）\nerror - 媒体发生错误的时候，返回错误代码（只读）\ncurrentSRC - 以字符串的方式返回媒体（只读）\n\nposter - 视频播放前的预览图片（读写）\nwidth、height - 设置视频的尺寸（读写）\nvideoWidth、videoHeight - 视频的实际尺寸（只读）\n")])])]),n("h3",{attrs:{id:"音视频js相关函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#音视频js相关函数"}},[t._v("#")]),t._v(" 音视频js相关函数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("play() - 媒体播放\npause() - 媒体暂停\nload() - 重新加载媒体\n")])])]),n("h3",{attrs:{id:"js相关事件-视频"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js相关事件-视频"}},[t._v("#")]),t._v(" js相关事件（视频）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("abort\n\t在播放被终止时触发,例如, 当播放中的视频重新开始播放时会触发这个事件。\ncanplay\t\n\t在媒体数据已经有足够的数据（至少播放数帧）可供播放时触发。这个事件对应CAN_PLAY的readyState。\ncanplaythrough\n\t在媒体的readyState变为CAN_PLAY_THROUGH时触发，表明媒体可以在保持当前的下载速度的情况下不被中断地播放完毕。注意：手动设置currentTime会使得firefox触发一次canplaythrough事件，其他浏览器或许不会如此。\ndurationchange\n\t元信息已载入或已改变，表明媒体的长度发生了改变。例如，在媒体已被加载足够的长度从而得知总长度时会触发这个事件。\nemptied\t\n\t媒体被清空（初始化）时触发。\nended\n\t播放结束时触发。\nerror\n\t在发生错误时触发。元素的error属性会包含更多信息。参阅Error handling获得详细信息。\nloadeddata\n\t媒体的第一帧已经加载完毕。\nloadedmetadata\n\t媒体的元数据已经加载完毕，现在所有的属性包含了它们应有的有效信息。\nloadstart\n\t在媒体开始加载时触发。\nmozaudioavailable\n\t当音频数据缓存并交给音频层处理时\npause\n\t播放暂停时触发。\nplay\n\t在媒体回放被暂停后再次开始时触发。即，在一次暂停事件后恢复媒体回放。\nplaying\n\t在媒体开始播放时触发（不论是初次播放、在暂停后恢复、或是在结束后重新开始）。\nprogress\n\t告知媒体相关部分的下载进度时周期性地触发。有关媒体当前已下载总计的信息可以在元素的buffered属性中获取到。\nratechange\n\t在回放速率变化时触发。\nseeked\n\t在跳跃操作完成时触发。\nseeking\n\t在跳跃操作开始时触发。\nstalled\n\t在尝试获取媒体数据，但数据不可用时触发。\nsuspend\n\t在媒体资源加载终止时触发，这可能是因为下载已完成或因为其他原因暂停。\ntimeupdate\n\t元素的currentTime属性表示的时间已经改变。\nvolumechang\n\t在音频音量改变时触发（既可以是volume属性改变，也可以是muted属性改变）.。\nwaiting\n\t在一个待执行的操作（如回放）因等待另一个操作（如跳跃或下载）被延迟时触发\n")])])]),n("h3",{attrs:{id:"js相关事件-音频"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js相关事件-音频"}},[t._v("#")]),t._v(" js相关事件（音频）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\tabort\n\t\t在播放被终止时触发,例如, 当播放中的视频重新开始播放时会触发这个事件。\n\tcanplay\t\n\t\t在媒体数据已经有足够的数据（至少播放数帧）可供播放时触发。这个事件对应CAN_PLAY的readyState。\n\tcanplaythrough\n\t\t在媒体的readyState变为CAN_PLAY_THROUGH时触发，表明媒体可以在保持当前的下载速度的情况下不被中断地播放完毕。注意：手动设置currentTime会使得firefox触发一次canplaythrough事件，其他浏览器或许不会如此。\n\tdurationchange\t\n\t\t元信息已载入或已改变，表明媒体的长度发生了改变。例如，在媒体已被加载足够的长度从而得知总长度时会触发这个事件。\n\temptied\n\t\t媒体被清空（初始化）时触发。\n\tended\t\n\t\t播放结束时触发。\n\terror\t\n\t\t在发生错误时触发。元素的error属性会包含更多信息。参阅Error handling获得详细信息。\n\tloadeddata\n\t\t媒体的第一帧已经加载完毕。\n\tloadedmetadata\n\t\t媒体的元数据已经加载完毕，现在所有的属性包含了它们应有的有效信息。\n\tloadstart\n\t\t在媒体开始加载时触发。\n\tmozaudioavailable\t\n\t\t当音频数据缓存并交给音频层处理时\n\tpause\n\t\t播放暂停时触发。\n\tplay\t\n\t\t在媒体回放被暂停后再次开始时触发。即，在一次暂停事件后恢复媒体回放。\n\tplaying\t\n\t\t在媒体开始播放时触发（不论是初次播放、在暂停后恢复、或是在结束后重新开始）。\n\tprogress\n\t\t告知媒体相关部分的下载进度时周期性地触发。有关媒体当前已下载总计的信息可以在元素的buffered属性中获取到。\n\tratechange\t\n\t\t在回放速率变化时触发。\n\tseeked\n\t\t在跳跃操作完成时触发。\n\tseeking\t\n\t\t在跳跃操作开始时触发。\n\tstalled\n\t\t在尝试获取媒体数据，但数据不可用时触发。\n\tsuspend\n\t\t在媒体资源加载终止时触发，这可能是因为下载已完成或因为其他原因暂停。\n\ttimeupdate\t\n\t\t元素的currentTime属性表示的时间已经改变。\n\tvolumechange\t\n\t\t在音频音量改变时触发（既可以是volume属性改变，也可以是muted属性改变）.。\n\twaiting\t\n\t\t在一个待执行的操作（如回放）因等待另一个操作（如跳跃或下载）被延迟时触发\n")])])]),n("h3",{attrs:{id:"复习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复习"}},[t._v("#")]),t._v(" 复习")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("1.音视频标签\n\t兼容(音视频的转码)\n\tattribute\n\t\tsrc\n\t\twidth\n\t\theight\n\t\tcontrols\n\t\tautoplay\n\t\tloop\n\t\tmuted\n\t\tpreload\n\tproperty\n\t\t音量和静音属性不会同步，静音属性优先级更高\n\t\tload函数\n\t\t\t重新加载（结合SOURCE标签的时候才有用）\n2.播放器\n\tless的运用\n\t拖拽思路\n\t\t1.拿到鼠标点击元素时，元素一开始的位置\n\t\t2.拿到鼠标移动的距离\n\t\t\t鼠标点击的位置\n\t\t\t鼠标移动时，实时的位置\n\t\t\t鼠标移动实时夫人距离 = （鼠标移动时，实时的位置 - 鼠标点击的位置）\n\t\t3.确定鼠标移动后，元素的位置\n\t\t\t元素一开始的位置+鼠标移动的距离\n\t  全局捕获：\n\t\t\telement.setCaptrue\n\t\t    \t在处理一个mousedown事件过程中调用这个方法来把全部的鼠标事件重新定向到这哥元素，直到鼠标按钮被释放或者document.releaseCapture()被调用\n\t\t\tdocument.releaseCaptrue\n\t\t\t\t如果该document中的一个元素之上当前启用了鼠标捕获，则释放鼠标捕获，通过调用element.setCaptrue()时现在一个元素上启用鼠标捕获\n\t\t\t在谷歌底下：没有全局捕获\n\t\t\t在火狐底下：全局捕获有定义，但没有实际的作用\n\t\t\t在ie底下：全局捕获专治各种不服\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);