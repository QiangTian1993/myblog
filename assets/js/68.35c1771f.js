(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{598:function(e,t,s){"use strict";s.r(t);var o=s(4),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"eventloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventloop"}},[e._v("#")]),e._v(" EventLoop")]),e._v(" "),s("p",[e._v("说起事件循环机制肯定很熟悉了，但是 NodeJs 中的事件循环机制与 web 中的有所不一样")]),e._v(" "),s("p",[e._v("NodeJs 中将 web 中的宏任务队列拆分成了几种，其中经常用到的有")]),e._v(" "),s("ul",[s("li",[e._v("timer 本阶段执行setTimeout() 和 setInterval() 计划的回调；")]),e._v(" "),s("li",[e._v("I/O 回调： 执行几乎全部发生异常的 close 回调， 由定时器和 setImmediate() 计划的回调；")]),e._v(" "),s("li",[e._v("poll 获取新的 I/O 事件；nodejs这时会适当进行阻塞；")]),e._v(" "),s("li",[e._v("check 调用 setImmediate() 的回调；")])]),e._v(" "),s("p",[e._v("nodejs 中 process.nextTick 是微任务且优先于 Promise.then 的回调")]),e._v(" "),s("p",[e._v("在 web 中执行完一个宏任务之后就会去检查微任务队列是否有任务，而在 nodejs 中只有在当前队列执行完毕后切换队列之前会去检查微任务队列")])])}),[],!1,null,null,null);t.default=n.exports}}]);