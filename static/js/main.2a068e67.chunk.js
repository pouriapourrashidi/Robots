(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(13),n(3)),i=n(4),s=n(6),u=n(5),h=n(7),m=(n(15),function(e){var t=e.name,n=e.email,a=e.id;return o.a.createElement("div",{className:"tc bc grow br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))}),d=function(e){var t=e.robots;return o.a.createElement("div",null,t.map(function(e,n){return o.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=(n(17),function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bc",type:"search",placeholder:"search robots",onChange:t}))}),b=function(e){return o.a.createElement("div",{style:{overflow:"scroll",height:"800px"}},e.children)},p=(n(19),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(f,{searchChange:this.onSearchChange}),o.a.createElement(b,null,o.a.createElement(d,{robots:a}))):o.a.createElement("h1",null,"Loading")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(21);c.a.render(o.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(23)}},[[8,2,1]]]);
//# sourceMappingURL=main.2a068e67.chunk.js.map