(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{362:function(t,e,r){"use strict";r.r(e);r(112),r(113),r(35),r(30),r(84),r(81);var n={props:{expr:{type:String,default:""},result:{type:String,default:""}},data:function(){return{}},computed:{exprFormat:function(){return this.expr.split("*").join("x").replace(new RegExp("[x+-]","g"),(function(t){return'<span style="color:#E526D0;"> '+t+" </span>"}))}}},o=r(24),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"result text-4xl"},[this._v(this._s(this.result||0))]),this._v(" "),e("hr",{staticStyle:{"border-color":"#cdcdcd"}}),this._v(" "),e("p",{staticClass:"expr text-xl",domProps:{innerHTML:this._s(this.exprFormat||0)}})])}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,r){var content=r(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("ccb3b88c",content,!0,{sourceMap:!1})},364:function(t,e,r){var content=r(372);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("2b0a7922",content,!0,{sourceMap:!1})},365:function(t,e,r){var content=r(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("0c567b67",content,!0,{sourceMap:!1})},366:function(t,e,r){"use strict";r.r(e);r(34),r(23),r(35),r(81),r(31);var n=r(7),o=r(57),l=r.n(o),c={components:{Monitor:r(362).default},props:{name:{type:String,default:""}},data:function(){return{expr:"",result:""}},methods:{calculate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.expr.split("")[t.expr.length-1],!t.isOperator(r)&&""!==t.expr){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,l.a.post("https://api.mathjs.org/v4/",{expr:t.expr,precision:10});case 5:n=e.sent,t.result=n.data.result,t.$store.commit("add",{expr:t.expr,result:t.result,name:t.name,date:Date.now()});case 8:case"end":return e.stop()}}),e)})))()},add:function(t){var e=this.expr.split("")[this.expr.length-1];this.isOperator(t)&&this.isOperator(e)||"*"===t&&void 0===e||(this.expr+=t)},clear:function(){this.result="",this.expr=""},isOperator:function(t){var e=0;return["+","-","*"].forEach((function(r){r===t&&e++})),1===e}}},d=(r(369),r(24)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:mt-4"},[r("h1",{staticClass:"block text-2xl"},[t._v("Calculator "+t._s(t.name))]),t._v(" "),r("div",{staticClass:"calculator bg-white p-10 mt-2"},[r("monitor",{attrs:{expr:t.expr,result:t.result}}),t._v(" "),r("div",{staticClass:"grid grid-rows-2 grid-cols-4 gap-2 mt-2 text-3xl"},[r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.clear()}}},[r("p",[t._v("C")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("*")}}},[r("p",[t._v("x")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("-")}}},[r("p",[t._v("-")])]),t._v(" "),r("button",{staticClass:"button row-span-2",on:{click:function(e){return t.add("+")}}},[r("p",[t._v("+")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("7")}}},[r("p",[t._v("7")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("8")}}},[r("p",[t._v("8")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("9")}}},[r("p",[t._v("9")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("4")}}},[r("p",[t._v("4")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("5")}}},[r("p",[t._v("5")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("6")}}},[r("p",[t._v("6")])]),t._v(" "),r("button",{staticClass:"button square row-span-3",on:{click:function(e){return t.calculate()}}},[r("p",[t._v("=")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("1")}}},[r("p",[t._v("1")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("2")}}},[r("p",[t._v("2")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add("3")}}},[r("p",[t._v("3")])]),t._v(" "),r("button",{staticClass:"button col-span-2",on:{click:function(e){return t.add("0")}}},[r("p",[t._v("0")])]),t._v(" "),r("button",{staticClass:"button square row-span-1",on:{click:function(e){return t.add(".")}}},[r("p",[t._v(".")])])])],1)])}),[],!1,null,"706bbdf4",null);e.default=component.exports;installComponents(component,{Monitor:r(362).default})},367:function(t,e,r){"use strict";r.r(e);r(36),r(33),r(34),r(82),r(83),r(63),r(37);var n=r(41),o=r(58),l=r(0),c=r.n(l),d=(r(57),r(368)),f=r(362);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Search:d.default,Monitor:f.default},data:function(){return{results:[]}},methods:x(x({},Object(o.b)(["getSearchResults"])),{},{formatDate:function(t){return c()(t).format("DD/MM/YYYY - h:mm:ss")},clear:function(){confirm("Are you sure you want to clear the result?")&&this.$store.commit("clear")}})},m=(r(373),r(24)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("search"),t._v(" "),r("div",{staticClass:"result bg-white p-10 mt-2"},[r("div",{staticClass:"wrapper"},t._l(t.getSearchResults(),(function(e,i){return r("div",{key:i+1,staticClass:"mb-2"},[r("div",{staticClass:"grid grid-rows-1 xl:grid-cols-2 gap-2 text-xl"},[r("p",[t._v("Calculator "+t._s(e.name))]),t._v(" "),r("p",{staticClass:"date"},[t._v(t._s(t.formatDate(e.date)))])]),t._v(" "),r("monitor",{attrs:{expr:e.expr,result:e.result}})],1)})),0),t._v(" "),r("button",{staticClass:"button text-3xl px-3",on:{click:function(e){return t.clear()}}},[t._v("Clear")])])],1)}),[],!1,null,"7437c0c8",null);e.default=component.exports;installComponents(component,{Search:r(368).default,Monitor:r(362).default})},368:function(t,e,r){"use strict";r.r(e);r(33),r(57);var n={data:function(){return{text:"",filter:"All"}},watch:{text:function(t){this.$store.commit("updateSearch",{text:t,filter:this.filter})},filter:function(t){this.$store.commit("updateSearch",{text:this.text,filter:t})}}},o=(r(371),r(24)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"xl:flex xl:items-center mb-4 text-2xl"},[t._m(0),t._v(" "),r("div",{staticClass:"xl:w-7/12"},[r("div",{staticClass:"xl:pr-4 pt-2 xl:pt-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input appearance-none w-full py-2 px-4 leading-tight placeholder-current",attrs:{type:"text",placeholder:"Search by result, date"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"xl:w-3/12 xl:inline-block relative pt-2 xl:pt-0"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"input appearance-none w-full py-2 px-4 leading-tight",staticStyle:{"text-align-last":"center"},attrs:{type:"text"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.filter=e.target.multiple?r:r[0]}}},[r("option",[t._v("All")]),t._v(" "),r("option",[t._v("A")]),t._v(" "),r("option",[t._v("B")])]),t._v(" "),r("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xl:w-2/12"},[e("label",{staticClass:"block xl:text-left mb-1 xl:mb-0 pr-4"},[this._v(" Results ")])])}],!1,null,"17636e76",null);e.default=component.exports},369:function(t,e,r){"use strict";var n=r(363);r.n(n).a},370:function(t,e,r){(e=r(61)(!1)).push([t.i,".calculator[data-v-706bbdf4]{border-radius:2rem}.calculator[data-v-706bbdf4],.calculator .button[data-v-706bbdf4]{box-shadow:0 3px 7px 0 rgba(0,0,0,.25)}.calculator .button[data-v-706bbdf4]{background-color:#a8d4fa;position:relative;border-radius:1rem}.calculator .button>p[data-v-706bbdf4]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.calculator .button[data-v-706bbdf4]:focus{outline:none}.calculator .button[data-v-706bbdf4]:active{box-shadow:none}.calculator .square[data-v-706bbdf4]{padding-top:100%}",""]),t.exports=e},371:function(t,e,r){"use strict";var n=r(364);r.n(n).a},372:function(t,e,r){(e=r(61)(!1)).push([t.i,".input[data-v-17636e76]{border-radius:2rem;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);color:#969696}.input[data-v-17636e76]:focus{outline:none}",""]),t.exports=e},373:function(t,e,r){"use strict";var n=r(365);r.n(n).a},374:function(t,e,r){(e=r(61)(!1)).push([t.i,".result[data-v-7437c0c8]{position:relative;border-radius:2rem;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);height:600px;overflow:hidden}.result .wrapper[data-v-7437c0c8]{overflow-y:scroll;height:100%}.result .wrapper .date[data-v-7437c0c8]{color:#9bc2e3}.result .button[data-v-7437c0c8]{background-color:#faa7a7;color:#fff;position:absolute;bottom:20px;right:20px;border-radius:1rem;box-shadow:0 3px 7px 0 rgba(0,0,0,.25)}.result .button[data-v-7437c0c8]:focus{outline:none}.result .button[data-v-7437c0c8]:active{box-shadow:none}",""]),t.exports=e},375:function(t,e,r){"use strict";r.r(e);var n=r(366),o=r(367),l={components:{Calculator:n.default,Result:o.default}},c=r(24),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-2 md:px-10 pt-12 pb-4"},[e("div",{staticClass:"grid grid-rows-flow grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 md:gap-4 xl:gap-12"},[e("calculator",{staticClass:"xl:col-span-2 pt-4 md:pt-0",attrs:{name:"A"}}),this._v(" "),e("calculator",{staticClass:"xl:col-span-2 pt-4 md:pt-0",attrs:{name:"B"}}),this._v(" "),e("result",{staticClass:"xl:col-span-3 pt-4 md:pt-0"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Calculator:r(366).default,Result:r(367).default})}}]);