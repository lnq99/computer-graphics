(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a19fb260"],{"0b95":function(t){t.exports=JSON.parse("[[[644,77,210,483],[861,88,1206,158],[1418,316,1586,631],[799,730,1198,538],[582,919,1104,916],[181,562,1499,704],[728,54,738,507],[1038,269,1414,569],[346,466,925,473],[792,563,297,748]],[[400,200,1300,800]]]")},"13d5":function(t,n,e){"use strict";var i=e("23e7"),r=e("d58f").left,a=e("a640"),c=e("ae40"),o=a("reduce"),s=c("reduce",{1:0});i({target:"Array",proto:!0,forced:!o||!s},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"222a":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-col",{attrs:{xs:19,sm:20,md:21,lg:22,xl:22}},[e("el-card",{staticStyle:{position:"relative"},attrs:{id:"card-display"}},[e("canvas",{ref:"canvas",attrs:{id:"canvas"}}),e("canvas",{ref:"draft",on:{click:t.onCanvas,contextmenu:function(n){return t.onCanvasEnd(n)},mousemove:t.onMove}})])],1)},r=[],a=(e("99af"),e("cb29"),e("4160"),e("a9e3"),e("159b"),e("3835")),c=e("2909"),o=e("5530"),s=e("2f62"),h={cmd:""},u={changeCmd:function(t,n){t.cmd=n}},f={namespaced:!0,state:h,mutations:u},l=e("27c7"),d=e("0b95"),v=e("6865"),p=e("d921");e("13d5");function b(t){return t.reduce((function(t,n){return t+n}))}function g(t,n,e,i,r){var c=Object(a["a"])(t,2),o=c[0],s=c[1],h=[0,0,0,0];return h[0]=o<n?1:0,h[1]=o>e?1:0,h[2]=s<i?1:0,h[3]=s>r?1:0,h}function w(t,n){for(var e=0,i=0;i<4;i+=1)e+=t[i]*n[i];return e}function y(t,n,e,i,r,a,c,o,s,h){return h+=1,h>2?o:(c=[r,a][h-1],x(t,n,e,i,r,a,c,o,s,h))}function x(t,n,e,i,r,a,c,o,s,h){if(r[0]!==a[0]){if(s=(a[1]-r[1])/(a[0]-r[0]),c[0]<=t){var u=s*(t-c[0])+c[1];if(u>=e&&u<=i)return o.push([t,u]),y(t,n,e,i,r,a,c,o,s,h)}if(c[0]>=n){var f=s*(n-c[0])+c[1];if(f>=e&&f<=i)return o.push([n,f]),y(t,n,e,i,r,a,c,o,s,h)}}if(0===s)return y(t,n,e,i,r,a,c,o,s,h);if(c[1]>=i){var l=(i-c[1])/s+c[0];if(l>=t&&l<=n)return o.push([l,i]),y(t,n,e,i,r,a,c,o,s,h)}if(c[1]<=e){var d=(e-c[1])/s+c[0];if(d>=t&&d<=n)return o.push([d,e]),y(t,n,e,i,r,a,c,o,s,h)}return[]}function O(t,n,e,i,r,a){var c,o,s=g(r,t,n,e,i),h=g(a,t,n,e,i),u=b(s),f=b(h),l=1,d=[];if(0===u&&0===f)return[r,a];var v=w(s,h);return 0!==v?[]:0===u?(d=[r],c=a,o=2,x(t,n,e,i,r,a,c,d,l,o)):0===f?(d=[a],c=r,o=2,x(t,n,e,i,r,a,c,d,l,o)):(o=0,y(t,n,e,i,r,a,c,d,l,o))}var j=O,m=1e-4,C=2*Math.PI+m;function E(t,n){return[n[0]-t[0],n[1]-t[1]]}function M(t,n){return t[0]*n[0]+t[1]*n[1]}function k(t,n){return t[0]*n[1]-t[1]*n[0]}function L(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))}function I(t){var n=t.length,e=0,i=0,r=0;if(n<3)return[!1];for(var c=t[n-1][0],o=0;o<n;o+=1){var s=Object(a["a"])(t[o],2),h=s[0],u=s[1],f=E(c,h),l=E(h,u),d=k(f,l),v=M(f,l)/(L(f)*L(l));if(r+=Math.acos(v),d>0?e+=1:d<0&&(i+=1),c=h,r>C)return[!1]}return e===n?[!0,!0]:i===n?[!0,!1]:[!1]}function N(t,n){return n?[-t[1],t[0]]:[t[1],-t[0]]}function S(t,n,e){var i=E(t,n),r=Object(a["a"])(i,2),c=r[0],o=r[1];return[t[0]+c*e,t[1]+o*e]}function P(t,n,e,i){for(var r=E(t,n),a=0,o=1,s=0;s<e.length;s+=1){var h=E.apply(void 0,Object(c["a"])(e[s])),u=N(h,i),f=E(e[s][0],t),l=M(f,u),d=M(r,u);if(0===d){if(l<0)return[]}else{var v=-l/d;if(d>0){if(v>1)return[];a=Math.max(a,v)}else{if(v<0)return[];o=Math.min(o,v)}}}return a<=o?[S(t,n,a),S(t,n,o)]:[]}e("d81d");function A(t){return t.map((function(t){return[t[0],t[1]]}))}function D(t,n){return[n[0]-t[0],n[1]-t[1]]}function R(t,n){return t[0]*n[0]+t[1]*n[1]}function T(t,n){return n?[-t[1],t[0]]:[t[1],-t[0]]}function W(t,n,e){var i=D(t,n),r=Object(a["a"])(i,2),c=r[0],o=r[1];return[t[0]+c*e,t[1]+o*e]}function $(t,n,e){var i=D(n[0],t),r=R(i,e);return r>=-1e-5}function _(t,n,e){if($(t[0],n,e)!==$(t[1],n,e)){var i=D.apply(void 0,Object(c["a"])(t)),r=D(n[0],t[0]),a=R(r,e),o=R(i,e);if(0===o)return!1;var s=-a/o;return W.apply(void 0,Object(c["a"])(t).concat([s]))}return!1}function B(t,n,e){for(var i,r,a=0;a<n.length;a+=1){var o=[],s=T(D.apply(void 0,Object(c["a"])(n[a])),e);t.push(t[0]);for(var h=1;h<t.length;h+=1)i=t[h],r=_([t[h-1],i],n[a],s),r&&o.push(r),$(i,n[a],s)&&o.push(i);if(0===o.length)return[];t=[].concat(o)}return t}var F={beforeCreate:function(){this.$store.registerModule("l7",f)},beforeDestroy:function(){this.$store.unregisterModule("l7")},computed:Object(o["a"])({},Object(s["c"])("l7",{cmd:"cmd"})),data:function(){return{lab:Number(this.$route.path[this.$route.path.length-1]),line:[],edge:[],win:[],shape:"line",isWin:!1,color:["#ff9f40","#1a89fc","#dd0000"]}},mounted:function(){var t=this.$el.clientHeight,n=this.$el.clientWidth;this.draft=this.$refs.draft.getContext("2d"),this.canvas=this.$refs.canvas,this.ctx=this.canvas.getContext("2d"),this.draft.canvas.width=n,this.draft.canvas.height=t,this.ctx.canvas.width=Math.floor(n),this.ctx.canvas.height=Math.floor(t),this.canvas.isDrawing=!1,this.canvas.begin=[],this.test()},watch:{cmd:function(t){switch(this.canvas.isDrawing&&"polygon"===this.shape&&this.onCanvasEnd(),l["canvasClear"](this.draft),this.canvas.isDrawing=!1,t){case"clear":this.line=[],this.edge=[],this.win=[],l["canvasClear"](this.ctx);break;case"run":7===this.lab?this.onClipLineRect():8===this.lab?this.onClipLinePolygon():this.onClipPolygonPolygon();break;case"test":this.test();break;case"line":case"poly":this.isWin=!1,this.shape="line";break;case"wrec":this.isWin=!0,this.shape="rect";break;case"wpoly":this.isWin=!0,this.shape="line";break;default:break}}},methods:{onCanvas:function(t){var n=this.canvas,e=n.getClientRects()["0"],i=Math.round(t.clientX-e.left),r=Math.round(t.clientY-e.top);if(this.isWin)if(7===this.lab)n.isDrawing&&(this.win.push([n.x,n.y,i,r]),l["drawRect"](this.ctx,n.x,n.y,i,r,this.color[1],2)),n.isDrawing=!n.isDrawing;else if(n.isDrawing=!0,0===n.begin.length)n.begin=[i,r];else if(Math.pow(n.begin[0]-i,2)+Math.pow(n.begin[1]-r,2)<25)this.onCanvasEnd(t);else{var a=[n.x,n.y],c=[i,r];this.win.push([a,c]),l["drawLineBuiltin"].apply(l,[this.ctx].concat(a,c,[this.color[1],2]))}else 9===this.lab?(n.isDrawing=!0,0===n.begin.length?n.begin=[i,r]:Math.pow(n.begin[0]-i,2)+Math.pow(n.begin[1]-r,2)<25?this.onCanvasEnd(t):(this.edge.push([i,r,n.x,n.y]),this.drawLastLine())):(n.isDrawing&&this.line.length<10&&(this.line.push([n.x,n.y,i,r]),this.drawLastLine(this.line)),n.isDrawing=!n.isDrawing);n.x=i,n.y=r},onMove:function(t){l["canvasClear"](this.draft);var n=this.canvas.getClientRects()["0"],e=Math.round(t.clientX-n.left),i=Math.round(t.clientY-n.top);"rect"===this.shape?l["draftRect"](e,i,this.draft,this.ctx):l["draftLine"](e,i,this.draft,this.ctx)},onCanvasEnd:function(t){t&&t.preventDefault(),l["canvasClear"](this.draft),this.isWin?(this.win.push([[this.canvas.x,this.canvas.y],this.canvas.begin]),l["drawLineBuiltin"].apply(l,[this.ctx].concat(Object(c["a"])(this.canvas.begin),[this.canvas.x,this.canvas.y,this.color[1],2]))):(this.edge.push([this.canvas.x,this.canvas.y].concat(Object(c["a"])(this.canvas.begin))),this.drawLastLine()),this.canvas.begin=[],this.canvas.isDrawing=!1},drawLastLine:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.edge,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.color[0];l["drawLineBuiltin"].apply(l,[this.ctx].concat(Object(c["a"])(t[t.length-1]),[n]))},onClipLineRect:function(){var t=this;if(!(this.win.length>1)){var n=this.win[0],e=[n[0],n[2]].sort((function(t,n){return t-n})),i=[n[1],n[3]].sort((function(t,n){return t-n}));this.line.forEach((function(n){var r=Object(a["a"])(n,4),o=r[0],s=r[1],h=r[2],u=r[3],f=j.apply(void 0,Object(c["a"])(e).concat(Object(c["a"])(i),[[o,s],[h,u]]));f.length&&(f=[].concat(Object(c["a"])(f[0]),Object(c["a"])(f[1]))),l["drawLineBuiltin"].apply(l,[t.ctx].concat(Object(c["a"])(f),[t.color[2],2]))}))}},onClipLinePolygon:function(){var t=this,n=I(this.win);n[0]&&this.line.forEach((function(e){var i=Object(a["a"])(e,4),r=i[0],o=i[1],s=i[2],h=i[3],u=P([r,o],[s,h],t.win,n[1]);u.length&&(u=[].concat(Object(c["a"])(u[0]),Object(c["a"])(u[1]))),l["drawLineBuiltin"].apply(l,[t.ctx].concat(Object(c["a"])(u),[t.color[2],2]))}))},onClipPolygonPolygon:function(){var t=I(this.win);if(t[0]){var n=A(this.edge),e=B(n,this.win,t[1]);if(e.length>1){var i,r;this.ctx.strokeStyle=this.color["2"],this.ctx.beginPath(),(i=this.ctx).moveTo.apply(i,Object(c["a"])(e[0]));for(var a=1;a<e.length;a+=1){var o;(o=this.ctx).lineTo.apply(o,Object(c["a"])(e[a]))}(r=this.ctx).lineTo.apply(r,Object(c["a"])(e[0])),this.ctx.stroke(),this.ctx.fillStyle="".concat(this.color[2],"40"),this.ctx.fill()}}},test:function(){var t=this;if(7===this.lab){var n=Object(a["a"])(d,2);this.line=n[0],this.win=n[1]}else if(8===this.lab){var e=Object(a["a"])(v,2);this.line=e[0],this.win=e[1]}else{var i=Object(a["a"])(p,2);this.edge=i[0],this.win=i[1]}this.line.forEach((function(n){l["drawLineBuiltin"].apply(l,[t.ctx].concat(Object(c["a"])(n),[t.color[0]]))})),this.edge.forEach((function(n){l["drawLineBuiltin"].apply(l,[t.ctx].concat(Object(c["a"])(n),[t.color[0]]))})),this.win.forEach((function(n){if(7===t.lab)l["drawRect"].apply(l,[t.ctx].concat(Object(c["a"])(n),[t.color[1],2]));else{var e=Object(a["a"])(n,2),i=e[0],r=e[1];l["drawLineBuiltin"].apply(l,[t.ctx].concat(Object(c["a"])(i),Object(c["a"])(r),[t.color[1],2]))}}))}}},J=F,V=(e("47ee"),e("2877")),X=Object(V["a"])(J,i,r,!1,null,"3541755d",null);n["default"]=X.exports},"27c7":function(t,n,e){"use strict";e.r(n),e.d(n,"putPixel",(function(){return r})),e.d(n,"drawLineBuiltin",(function(){return a})),e.d(n,"canvasClear",(function(){return c})),e.d(n,"draftLine",(function(){return o})),e.d(n,"draftRect",(function(){return s})),e.d(n,"drawRect",(function(){return h}));e("99af");var i=e("2909");function r(t,n,e){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;t.fillRect(n,e,i,r)}function a(t,n,e,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:t.strokeStyle,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;t.strokeStyle=a,t.beginPath(),t.lineWidth=c,t.moveTo(n,e),t.lineTo(i,r),t.stroke(),t.closePath()}function c(t){t.clearRect(0,0,t.canvas.width,t.canvas.height)}function o(t,n,e,r){var c=r.canvas,o="black",s=.2;0!==c.begin.length&&(Math.pow(c.begin[0]-t,2)+Math.pow(c.begin[1]-n,2)<25&&(o="red",s=1),e.strokeStyle=o,e.lineWidth=s,e.beginPath(),e.arc.apply(e,Object(i["a"])(c.begin).concat([5,0,2*Math.PI,!0])),e.stroke()),c.isDrawing&&a(e,c.x,c.y,t,n,o,.2)}function s(t,n,e,i){var r=i.canvas;r.isDrawing&&(e.beginPath(),e.lineWidth=1,e.rect(r.x,r.y,t-r.x,n-r.y),e.stroke())}function h(t,n,e,i,r,a){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;t.strokeStyle=a,t.lineWidth=c,t.beginPath(),t.rect(n,e,i-n,r-e),t.stroke(),t.closePath()}},3835:function(t,n,e){"use strict";function i(t){if(Array.isArray(t))return t}e.d(n,"a",(function(){return o}));e("a4d3"),e("e01a"),e("d28b"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function r(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],i=!0,r=!1,a=void 0;try{for(var c,o=t[Symbol.iterator]();!(i=(c=o.next()).done);i=!0)if(e.push(c.value),n&&e.length===n)break}catch(s){r=!0,a=s}finally{try{i||null==o["return"]||o["return"]()}finally{if(r)throw a}}return e}}var a=e("06c5");function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,n){return i(t)||r(t,n)||Object(a["a"])(t,n)||c()}},"38e5":function(t,n,e){},"47ee":function(t,n,e){"use strict";var i=e("38e5"),r=e.n(i);r.a},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var i=e("1d80"),r=e("5899"),a="["+r+"]",c=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(n){var e=String(i(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(o,"")),e}};t.exports={start:s(1),end:s(2),trim:s(3)}},6865:function(t){t.exports=JSON.parse("[[[644,77,301,400],[861,88,1206,158],[1418,316,1586,631],[799,730,1198,538],[582,919,1104,916],[181,562,1499,704],[728,54,738,507],[1038,269,1414,569],[346,466,925,473]],[[[674,117],[331,440]],[[331,440],[328,674]],[[328,674],[949,747]],[[949,747],[1500,413]],[[1500,413],[989,157]],[[989,157],[674,117]]]]")},7156:function(t,n,e){var i=e("861d"),r=e("d2bb");t.exports=function(t,n,e){var a,c;return r&&"function"==typeof(a=n.constructor)&&a!==e&&i(c=a.prototype)&&c!==e.prototype&&r(t,c),t}},"81d5":function(t,n,e){"use strict";var i=e("7b0b"),r=e("23cb"),a=e("50c4");t.exports=function(t){var n=i(this),e=a(n.length),c=arguments.length,o=r(c>1?arguments[1]:void 0,e),s=c>2?arguments[2]:void 0,h=void 0===s?e:r(s,e);while(h>o)n[o++]=t;return n}},"99af":function(t,n,e){"use strict";var i=e("23e7"),r=e("d039"),a=e("e8b5"),c=e("861d"),o=e("7b0b"),s=e("50c4"),h=e("8418"),u=e("65f0"),f=e("1dde"),l=e("b622"),d=e("2d00"),v=l("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=d>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=f("concat"),y=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:a(t)},x=!g||!w;i({target:"Array",proto:!0,forced:x},{concat:function(t){var n,e,i,r,a,c=o(this),f=u(c,0),l=0;for(n=-1,i=arguments.length;n<i;n++)if(a=-1===n?c:arguments[n],y(a)){if(r=s(a.length),l+r>p)throw TypeError(b);for(e=0;e<r;e++,l++)e in a&&h(f,l,a[e])}else{if(l>=p)throw TypeError(b);h(f,l++,a)}return f.length=l,f}})},a9e3:function(t,n,e){"use strict";var i=e("83ab"),r=e("da84"),a=e("94ca"),c=e("6eeb"),o=e("5135"),s=e("c6b6"),h=e("7156"),u=e("c04e"),f=e("d039"),l=e("7c73"),d=e("241c").f,v=e("06cf").f,p=e("9bf2").f,b=e("58a8").trim,g="Number",w=r[g],y=w.prototype,x=s(l(y))==g,O=function(t){var n,e,i,r,a,c,o,s,h=u(t,!1);if("string"==typeof h&&h.length>2)if(h=b(h),n=h.charCodeAt(0),43===n||45===n){if(e=h.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(h.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+h}for(a=h.slice(2),c=a.length,o=0;o<c;o++)if(s=a.charCodeAt(o),s<48||s>r)return NaN;return parseInt(a,i)}return+h};if(a(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var j,m=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof m&&(x?f((function(){y.valueOf.call(e)})):s(e)!=g)?h(new w(O(n)),e,m):O(n)},C=i?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;C.length>E;E++)o(w,j=C[E])&&!o(m,j)&&p(m,j,v(w,j));m.prototype=y,y.constructor=m,c(r,g,m)}},cb29:function(t,n,e){var i=e("23e7"),r=e("81d5"),a=e("44d2");i({target:"Array",proto:!0},{fill:r}),a("fill")},d58f:function(t,n,e){var i=e("1c0b"),r=e("7b0b"),a=e("44ad"),c=e("50c4"),o=function(t){return function(n,e,o,s){i(e);var h=r(n),u=a(h),f=c(h.length),l=t?f-1:0,d=t?-1:1;if(o<2)while(1){if(l in u){s=u[l],l+=d;break}if(l+=d,t?l<0:f<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:f>l;l+=d)l in u&&(s=e(s,u[l],l,h));return s}};t.exports={left:o(!1),right:o(!0)}},d81d:function(t,n,e){"use strict";var i=e("23e7"),r=e("b727").map,a=e("1dde"),c=e("ae40"),o=a("map"),s=c("map");i({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d921:function(t){t.exports=JSON.parse("[[[894,62,781,315],[781,315,437,312],[437,312,727,476],[727,476,618,808],[618,808,907,578],[907,578,1156,805],[1156,805,1066,483],[1066,483,1393,302],[1393,302,997,305],[997,305,894,62]],[[[663,200],[1051,193]],[[1051,193],[1153,408]],[[1153,408],[784,630]],[[784,630],[530,424]],[[530,424],[663,200]]]]")}}]);