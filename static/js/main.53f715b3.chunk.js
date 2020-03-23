(this["webpackJsonpidenticon-generator"]=this["webpackJsonpidenticon-generator"]||[]).push([[0],{120:function(e,t,a){e.exports=a(217)},125:function(e,t,a){},181:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),l=a.n(i),c=(a(125),a(43)),u=a(44),o=a(24),s=a(45),h=a(46),d=a(220),p=a(221),m=a(85),v=a(222),g=a(223),b=a(224),f=a(100),y=a.n(f),E=a(118),C=a(117),j=(a(181),a(101)),O=a.n(j),k=(a(182),a(10)),x=d.a.Option,I=function(){return{opacity:0,y:-60,duration:1500}};function S(e){return r.a.createElement("div",null,r.a.createElement("h1",{id:"pTitle"},r.a.createElement(E.a,{type:"top",enter:I},"Genvatar")))}var z=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInput=n.handleInput.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"handleInput",value:function(e){this.props.onInputChange(e.target.value)}},{key:"handleChange",value:function(e){this.props.onSizeChange(e)}},{key:"render",value:function(){var e=this.props.userText,t=this.props.avatarSize;return r.a.createElement(p.a.Group,{compact:!0},r.a.createElement(p.a,{placeholder:"\u8f93\u5165\u7528\u6765\u751f\u6210Identicon\u7684\u5b57\u7b26\u4e32",id:"GTextBox",size:"large",value:e,onInput:this.handleInput}),r.a.createElement(d.a,{value:String(t),size:"large",onChange:this.handleChange,style:{width:"120px"}},r.a.createElement(x,{value:"144"},"144x144"),r.a.createElement(x,{value:"192"},"192x192"),r.a.createElement(x,{value:"256"},"256x256")))}}]),a}(r.a.Component),w=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"handleClick",value:function(){this.props.onButtonClick()}},{key:"render",value:function(){return r.a.createElement(m.a,{type:"primary",size:"large",onClick:this.handleClick},"\u597d\uff01")}}]),a}(r.a.Component),T=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.avatarImg;return r.a.createElement("div",null,e)}}]),a}(r.a.Component),G=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.b,{animation:{x:10,y:-30,scale:.97,repeat:-1,duration:2e4,yoyo:!0}},r.a.createElement("div",{id:"shape1"})),r.a.createElement(k.b,{animation:{x:-30,y:10,scale:.97,repeat:-1,duration:1e4,yoyo:!0}},r.a.createElement("div",{id:"shape2"})))}}]),a}(r.a.Component),B=function(e){Object(h.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={userText:"",avatarSize:144,avatarImg:r.a.createElement("img",{src:"data:image/svg+xml;base64,"+A(new Date,144),alt:"Avatar",width:"144px"})},n.handleInputChange=n.handleInputChange.bind(Object(o.a)(n)),n.handleSizeChange=n.handleSizeChange.bind(Object(o.a)(n)),n.handleGenerate=n.handleGenerate.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"handleInputChange",value:function(e){this.setState({userText:e})}},{key:"handleSizeChange",value:function(e){this.setState({avatarSize:e})}},{key:"handleGenerate",value:function(){var e=this.state.userText,t=this.state.avatarSize;this.setState({ifDisplay:!1});var a=A(e,t);this.setState({avatarImg:r.a.createElement("img",{src:"data:image/svg+xml;base64,"+a,alt:"Avatar",width:"144px"}),ifDisplay:!0})}},{key:"render",value:function(){var e=this.state.userText,t=this.state.avatarSize,a=this.state.avatarImg;return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement(v.a,{style:{paddingTop:"24vh",backgroundColor:"#f2f8fe",height:"100vh"}},r.a.createElement(C.a,{type:"top",duration:"2000"},r.a.createElement(g.a,{gutter:[0,16],key:"Row1"},r.a.createElement(b.a,{span:24},r.a.createElement(S,null))),r.a.createElement(g.a,{justify:"center",gutter:[0,24],key:"Row2"},r.a.createElement(b.a,{span:4},r.a.createElement(T,{avatarImg:a}))),r.a.createElement(g.a,{justify:"center",gutter:[0,24],key:"Row3"},r.a.createElement(b.a,null,r.a.createElement(z,{userText:e,avatarSize:t,onInputChange:this.handleInputChange,onSizeChange:this.handleSizeChange}))),r.a.createElement(g.a,{justify:"center",gutter:[0,24],key:"Row4"},r.a.createElement(b.a,{span:2},r.a.createElement(w,{onButtonClick:this.handleGenerate}))))))}}]),a}(r.a.Component),R=[[255,197,61,255],[250,219,20,255],[160,217,17,255],[115,209,61,255],[135,232,222,255],[19,194,194,255],[105,192,255,255],[24,144,255,255],[192,108,1,255],[47,84,235,255],[133,165,255,255],[146,84,222,255],[255,173,210,255],[255,120,117,255],[255,169,64,255],[139,0,18,255]];function A(e,t){for(var a=O()(e),n=0,r=28;r<32;++r)n^=parseInt(a.charAt(r),16);var i={foreground:R[n],background:[245,245,250,255],margin:0,size:t,format:"svg"};return new y.a(a.slice(0,28),i).toString()}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.53f715b3.chunk.js.map