(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{647:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"浏览器的渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染过程"}},[t._v("#")]),t._v(" 浏览器的渲染过程")]),t._v(" "),a("p",[t._v("在说回流与重绘前需要先了解浏览器是如何进行渲染的")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/4088852130-5afbe6c95934b_articlex.png",alt:"浏览器渲染过程"}})]),t._v(" "),a("ol",[a("li",[t._v("解析 HTML 生成 DOM 树")]),t._v(" "),a("li",[t._v("解析 CSS 生成 CSSOM 树")]),t._v(" "),a("li",[t._v("DOM 树与 CSS 树结合生成 render 树")]),t._v(" "),a("li",[t._v("根据 render 树生计算节点几何信息生成 layout")]),t._v(" "),a("li",[t._v("将布局绘制（paint）在屏幕上")])]),t._v(" "),a("h2",{attrs:{id:"渲染树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染树"}},[t._v("#")]),t._v(" 渲染树")]),t._v(" "),a("p",[t._v("DOM 和 CSS 树结合为渲染树，为了生成渲染数，浏览器从 DOM 的根节点开始遍历所有的可见节点，并在 CSS 树中找到节点相应的 CSS 规则，将他们结合最终生成渲染树")]),t._v(" "),a("p",[t._v("渲染树只包含了可见内容。头部（通常）不包含任何可见信息，因此不会被包含在渲染树种。如果有元素上有 display: none 它本身和其后代都不会出现在渲染树中。")]),t._v(" "),a("p",[t._v("在解析 HTML 的过程中如果遇到同步的 script 标签时，会暂停 DOM 的解析，会下载 js 并执行，运行完毕后继续执行 HTML 解析，当 HTML 解析完毕后会触发 "),a("code",[t._v("DOMContentLoaded")]),t._v(" 事件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("这里需要注意如果 script 标签添加了 "),a("code",[t._v("defer")]),t._v(" 或 "),a("code",[t._v("async")]),t._v(" 情况有所不一样")]),t._v(" "),a("p",[t._v("script 携带 "),a("code",[t._v("defer")]),t._v(" 不会影响 HTML 的解析，会异步下载文件，当 HTML 解析完毕后在执行之后再触发 "),a("code",[t._v("DOMContentLoaded")])]),t._v(" "),a("p",[t._v("script 携带 "),a("code",[t._v("async")]),t._v(" 会异步下载文件，下载文件后立即执行并阻塞 HTML 解析，它不影响 "),a("code",[t._v("DOMContentLoaded")]),t._v(" 的触发")])]),t._v(" "),a("h2",{attrs:{id:"回流（reflow）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回流（reflow）"}},[t._v("#")]),t._v(" 回流（Reflow）")]),t._v(" "),a("p",[t._v("回流也可叫做重排，当 layout 发生变化时就会发生回流，比如浏览器窗口大小发生改变时，浏览器需要重新计算元素的几何信息生成新的 layout")]),t._v(" "),a("p",[t._v("以下几种情况会导致回流：")]),t._v(" "),a("ol",[a("li",[t._v("窗口大小发生改变")]),t._v(" "),a("li",[t._v("元素的大小（包括：外边距、内边距、边框厚度、宽度、高度等属性）或位置发生改变")]),t._v(" "),a("li",[t._v("添加或删除可见 DOM 元素")]),t._v(" "),a("li",[t._v("页面初始化时")]),t._v(" "),a("li",[t._v("修改样式表")])]),t._v(" "),a("h2",{attrs:{id:"重绘（repaint）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘（repaint）"}},[t._v("#")]),t._v(" 重绘（Repaint）")]),t._v(" "),a("p",[t._v("浏览器将元素转换为屏幕上实际像素的过程叫重绘")]),t._v(" "),a("h2",{attrs:{id:"回流与重绘的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘的关系"}},[t._v("#")]),t._v(" 回流与重绘的关系")]),t._v(" "),a("p",[t._v("layout 发生变化时避免不了会影响到元素的样式导致需要重新绘制。但是元素样式发生改变比如 color、background-color 发生改变并不会改变布局信息只会发生重绘所以")]),t._v(" "),a("p",[a("code",[t._v("回流必然会导致重绘，重绘却不一定需要回流")])]),t._v(" "),a("h2",{attrs:{id:"对性能的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对性能的影响"}},[t._v("#")]),t._v(" 对性能的影响")]),t._v(" "),a("p",[t._v("重绘与回流非常耗资源，所以需要减少重绘与回流的次数\n因为改变样式会导致重绘与回流，所以尽量避免频繁改变样式，将改变样式的代码放在一起避免不必要的重绘")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("marginTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'30px'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("上面代码中，div 元素有两个样式变动，但是浏览器只会触发一次重排和重绘。\n但是这两句代码中间还做了其他事情，就会发生两次回流和重绘。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" margin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("marginTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("marginTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" margin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("当你获取布局信息的操作的时候，会立即发生重绘，比如访问以下属性")]),t._v(" "),a("ul",[a("li",[t._v("offsetTop/offsetLeft/offsetWidth/offsetHeight")]),t._v(" "),a("li",[t._v("scrollTop/scrollLeft/scrollWidth/scrollHeight")]),t._v(" "),a("li",[t._v("clientTop/clientLeft/clientWidth/clientHeight")]),t._v(" "),a("li",[t._v("getComputedStyle()")])]),t._v(" "),a("h2",{attrs:{id:"如何减少回流与重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何减少回流与重绘"}},[t._v("#")]),t._v(" 如何减少回流与重绘")]),t._v(" "),a("ol",[a("li",[t._v("将多个 DOM 读或写操作放在一起，不要两个读操作之间，加入一个写操作。")]),t._v(" "),a("li",[t._v("不要一条条地改变样式，而要通过改变 class，或者 csstext 属性，一次性地改变样式")]),t._v(" "),a("li",[t._v("将元素脱离文档流后执行一系列操作再恢复到文档流中，比如使用 display:none, 或者使用定位 position: absolute 或 fixed ,定位元素重排的开销会比较小，因为不用考虑它对其他元素的影响。")]),t._v(" "),a("li",[t._v("使用虚拟 DOM 库，如 vue 或 react")]),t._v(" "),a("li",[t._v("使用 window.requestAnimationFrame()")]),t._v(" "),a("li",[t._v("使用 css3 属性 transform opacity filters will-change")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doubleHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" currentHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight\n\twindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\telement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nelements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doubleHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000017329980",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的了解回流和重绘吗"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("网页性能管理详解"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);