(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),s=(t(13),t(3)),l=t(4),i=t(6),u=t(5),h=t(7),m=(t(14),function(e){var n=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/BE".concat(n.id,".png?set=set2"),alt:n.name,height:"200",width:"200"}),r.a.createElement("h1",null,n.name),r.a.createElement("p",null,n.email))}),d=(t(15),function(e){var n=e.monsters;return r.a.createElement("div",{className:"card-list"},n.map(function(e){return r.a.createElement(m,{key:e.id,monster:e})}))}),p=(t(16),function(e){var n=e.onSearch,t=e.search,a=e.placeholder;return r.a.createElement("input",{className:"search",type:"search",placeholder:a,name:"search",onChange:n,value:t})});t(17);var f=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={monsters:[],search:""},t.handleSearch=function(e){var n=e.currentTarget.value;t.setState({search:n})},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({monsters:n})}).catch(function(e){return console.log("Something went wrong unable to proceed",e.message)})}},{key:"render",value:function(){var e,n=this.state,t=n.monsters,a=n.search,o=(e=a,t.filter(function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(p,{placeholder:"search monsters",onSearch:this.handleSearch,value:a}),r.a.createElement(d,{monsters:o}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.ec3b5ef7.chunk.js.map