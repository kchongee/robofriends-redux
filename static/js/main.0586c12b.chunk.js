(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),i=t.n(a),c=t(1),s=t(5),l=t(14),u=t(15),d=(t(25),t(3)),h=t(4),f=t(7),b=t(6),g="CHANGE_SEARCHFIELD",p="REQUEST_ROBOTS_PENDING",m="REQUEST_ROBOTS_SUCCESS",v="REQUEST_ROBOTS_FAILED",E=function(){return function(e){var n;e({type:p}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:m,payload:n})})).catch((function(n){return e({type:v,payload:n})}))}},w=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},y=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(w,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},O=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robot",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},j=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},R=function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(d.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(h.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.Component),C=(t(26),function(e){Object(f.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,r=e.onSearchChange,a=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(O,{searchChange:r}),o.a.createElement(j,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(R,null,o.a.createElement(y,{robots:i}))))}}]),t}(r.Component)),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:g,payload:t}));var t},onRequestRobots:function(){return e(E())}}}))(C),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F={searchField:""},L={robots:[],isPending:!0},P=(t(27),Object(u.createLogger)()),_=Object(c.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case p:return Object.assign({},e,{isPending:!0});case m:return Object.assign({},e,{robots:n.payload,isPending:!1});case v:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case g:return Object.assign({},e,{searchField:n.payload});default:return e}}}),x=Object(c.d)(_,Object(c.a)(l.a,P));i.a.render(o.a.createElement(s.a,{store:x},o.a.createElement(S,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends-redux","/service-worker.js");k?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.0586c12b.chunk.js.map