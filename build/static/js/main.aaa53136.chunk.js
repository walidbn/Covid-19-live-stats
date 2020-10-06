(this.webpackJsonpcovid19humanitydata=this.webpackJsonpcovid19humanitydata||[]).push([[0],{39:function(e,t,a){},51:function(e,t,a){e.exports=a(88)},56:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(40),c=a.n(r),o=(a(56),a(57),a(7)),u=a(8),s=a(10),i=a(9),m=a(92),d=a(19),p=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,{justify:!0,variant:"tabs"},l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,null,l.a.createElement(d.b,{to:"/"},"COVID-19 CORONAVIRUS PANDEMIC Stats"))),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,null,l.a.createElement(d.b,{to:"/symptoms"},"  Symptoms"))),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,null,l.a.createElement(d.b,{to:"/graphs"},"GRAPHS"))),l.a.createElement(m.a.Item,null,l.a.createElement(m.a.Link,null,l.a.createElement(d.b,{to:"/about"},"About"))))}}]),a}(n.Component),h=a(23),E=a.n(h),v=a(15),y=(a(39),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.countries.map((function(e){return l.a.createElement(v.a,{className:"CountriesContainer",style:{width:"25em",marginTop:"8px",height:"100px"}},l.a.createElement(v.a.Img,{variant:"top",src:e.countryInfo.flag}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,null,e.country),l.a.createElement(v.a.Text,null,l.a.createElement("p",null,"Cases : ",parseInt(e.cases).toLocaleString("en-US")," "),l.a.createElement("p",null,"Today Cases : ",parseInt(e.todayCases).toLocaleString("en-US")),l.a.createElement("p",null,"Active  Cases : ",parseInt(e.active).toLocaleString("en-US")),l.a.createElement("p",null,"Recovred : ",parseInt(e.recovered).toLocaleString("en-US")),l.a.createElement("p",null,"Today Recovred : ",parseInt(e.todayRecovered).toLocaleString("en-US")),l.a.createElement("p",null,"Deaths : ",parseInt(e.deaths).toLocaleString("en-US")),l.a.createElement("p",null,"Today Deaths : ",parseInt(e.todayDeaths).toLocaleString("en-US")),l.a.createElement("p",null,"Total Tests : ",parseInt(e.tests).toLocaleString("en-US")))),l.a.createElement(v.a.Body,null))})))}}]),a}(n.Component)),b=a(45),f=(a(89),a(85),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Cases"),l.a.createElement("th",null,"Today Cases"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Critical"),l.a.createElement("th",null,"Deaths"),l.a.createElement("th",null,"Today Deaths"),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null,"Today Recovered"),l.a.createElement("th",null,"Tests"))),l.a.createElement("tbody",null,this.props.data.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",{key:t},t+1),l.a.createElement("td",null,e.country),l.a.createElement("td",null,e.cases),l.a.createElement("td",null,e.todayCases),l.a.createElement("td",null,e.active),l.a.createElement("td",null,e.critical),l.a.createElement("td",null,e.deaths),l.a.createElement("td",null,e.todayDeaths),l.a.createElement("td",null,e.recovered),l.a.createElement("td",null,e.todayRecovered),l.a.createElement("td",null,e.tests))}))))}}]),a}(n.Component)),g=a(46),C=a(47),O=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={worldCountries:[],showed:!0},e.handelChange=function(){e.setState({showed:!e.state.showed}),console.log(e.state.showed)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://disease.sh/v3/covid-19/countries").then((function(t){e.setState({worldCountries:t.data})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,{variant:"light",onClick:this.handelChange,size:"lg",style:{marginRight:"25px"}}," Show ",this.state.showed?"List":"Table"),this.state.showed?l.a.createElement(f,{data:this.state.worldCountries}):l.a.createElement(C.a,{style:{marginBottom:"8px"}},l.a.createElement(y,{countries:this.state.worldCountries})))}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(v.a,{style:{margin:"20px",width:"23%"}},l.a.createElement(v.a.Header,null,l.a.createElement("h3",null,this.props.icone," ",this.props.title)),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,null,l.a.createElement("h4",null,parseInt(this.props.number).toLocaleString("en-US"))),l.a.createElement(v.a.Text,null)))}}]),a}(n.Component),j=(a(86),a(18)),w=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={general:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://disease.sh/v3/covid-19/all").then((function(t){e.setState({general:t.data}),console.log(e.state.general)}))}},{key:"render",value:function(){var e=[this.state.general],t=new Date(parseInt(this.state.general.updated)).toLocaleString("en-US");return l.a.createElement("div",null,e.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"GlobalContainer"},l.a.createElement(S,{key:a,title:"Golbal Cases",icone:l.a.createElement(j.e,null),number:e.cases,updated:e.updated,className:"DataCardStyle "}),l.a.createElement(S,{title:"Today Cases",icone:l.a.createElement(j.a,null),number:e.todayCases,updated:e.updated,className:"DataCardStyle"}),l.a.createElement(S,{title:"Deaths",icone:l.a.createElement(j.c,null),number:e.deaths,updated:e.updated,className:"DataCardStyle bg-danger"}),l.a.createElement(S,{title:"Today Deaths",icone:l.a.createElement(j.c,null),number:e.todayDeaths,updated:e.updated,className:"DataCardStyle"})),l.a.createElement("div",{className:"GlobalContainer"},l.a.createElement(S,{title:"Total Recovered",icone:l.a.createElement(j.f,null),number:e.recovered,updated:e.updated,className:"DataCardStyle",bg:"Danger"}),l.a.createElement(S,{title:"Today Recovered",icone:l.a.createElement(j.f,null),number:e.todayRecovered,updated:e.updated,className:"DataCardStyle"}),l.a.createElement(S,{title:"Active Cases",icone:l.a.createElement(j.d,null),number:e.active,updated:e.updated,className:"DataCardStyle"}),l.a.createElement(S,{title:"Critical Cases",icone:l.a.createElement(j.b,null),number:e.critical,updated:e.updated,className:"DataCardStyle"})),l.a.createElement(O,null),l.a.createElement("h5",null,"     ",l.a.createElement(j.g,null),"        Last update since :  ",t))})))}}]),a}(l.a.Component),D=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Hello from Symptoms page")}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Hello from graphs page")}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"hello from about page")}}]),a}(n.Component),T=(a(87),a(5));var L=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(p,null),l.a.createElement(T.c,null,l.a.createElement(T.a,{exact:!0,path:"/",component:w}),l.a.createElement(T.a,{path:"/symptoms",component:D}),l.a.createElement(T.a,{path:"/graphs",component:k}),l.a.createElement(T.a,{path:"/about",component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.aaa53136.chunk.js.map