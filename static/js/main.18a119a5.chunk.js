(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(15),n(1)),s=n(2),u=n(4),l=n(3),m=n(5),d=(n(17),n(6)),p=n.n(d),h=n(9),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark(function e(){var t,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.pop.culture.gouv.fr/").concat(this.props.uri));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({data:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"img",value:function(e){return Array.isArray(e.IMG)?"https://s3.eu-west-3.amazonaws.com/pop-phototeque/"+e.IMG[0]:e.IMG}},{key:"title",value:function(e){return(e.LEG||e.TICO||e.TITR).replace(/\/.*/,"").replace(" : ","\n")}},{key:"render",value:function(){return this.state.data?o.a.createElement("div",{className:"doc"},o.a.createElement("a",{href:"http://pop.culture.gouv.fr/notice/"+this.props.uri,target:"_blank"},o.a.createElement("img",{className:"frame",src:this.img(this.state.data)}),o.a.createElement("div",{className:"card"},this.title(this.state.data)))):o.a.createElement("div",null)}}]),t}(a.Component),j=["joconde/07430003391","memoire/AP62T000063","joconde/5002E012518","memoire/AP0602T05982","memoire/IVR54_99172513NUCA","memoire/AP0602T04393","memoire/AP71L20602","joconde/00000100554","joconde/5002E009430","joconde/M0418002994","joconde/M0352003093","joconde/M0333012292","memoire/IVR94_20092A01074","memoire/IVR26_20037101092","joconde/00980000413","memoire/APNADAR011656","joconde/00000099832","joconde/50430001541","memoire/IVR11_20099500040","joconde/07760000924","joconde/07350000494","memoire/AP62T000066","memoire/APFSK50-09","joconde/M0432000514"],v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderDocs",value:function(){return j.map(function(e){return o.a.createElement(f,{key:e,uri:e})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Joyeux No\xebl \ud83d\ude0a"),o.a.createElement("h2",null,"Antoine, Jennifer, Nicolas,",o.a.createElement("br",null),"Sandrine et S\xe9bastien"),o.a.createElement("section",{className:"docs"},this.renderDocs()),o.a.createElement("div",null,"Donn\xe9es :"," ",o.a.createElement("a",{href:"http://pop.culture.gouv.fr"},"Plateforme Ouverte du Patrimoine")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.18a119a5.chunk.js.map