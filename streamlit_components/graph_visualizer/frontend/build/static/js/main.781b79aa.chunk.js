(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{120:function(t,e,n){t.exports=n(268)},268:function(t,e,n){"use strict";n.r(e);var a=n(5),o=n.n(a),r=n(116),s=n.n(r),l=n(0),i=n(1),c=n(2),p=n(3),h=n(15),m=n(118),d=n.n(m),u=function(t){Object(c.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={graph:JSON.parse(t.props.args.data),events:{select:function(t){console.log("Selected nodes:"),console.log(t.nodes[0]),h.Streamlit.setComponentValue(t.nodes[0])}},options:JSON.parse(t.props.args.options),width:t.props.width},t.render=function(){return o.a.createElement(d.a,{graph:t.state.graph,options:t.state.options,events:t.state.events,style:{height:"900px",width:t.state.width,fill:"none"}})},t}return Object(l.a)(n)}(h.StreamlitComponentBase),g=Object(h.withStreamlitConnection)(u),v=n(119);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v.StreamlitProvider,null,o.a.createElement("div",{style:{height:800,width:"100%"}},o.a.createElement(g,null)))),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.781b79aa.chunk.js.map