(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(42)},,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(8),i=a(14),l=a(0),c=a.n(l),r=a(13),s=a.n(r),h=(a(22),a(3)),u=a(4),m=a(6),p=a(5),d=a(7),f=(a(24),a(25),a(27),function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"heading full-width"},"myTypography")}}]),t}(l.Component)),b=(a(30),a(32),function(e){function t(e){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={fontFamily:this.props.fontFamily,fontSize:this.props.fontSize+"px",fontWeight:this.props.boldChecked?"bold":"normal",fontStyle:this.props.italicChecked?"italic":"normal"};return c.a.createElement("div",{className:"font-result col-md-12"},c.a.createElement("output",{style:e},this.props.inputValue))}}]),t}(l.Component)),g=(a(34),{FontFamilies:["Roboto","Galada"],Roboto:["Roboto-Regular","Roboto-Black","Roboto-BlackItalic","Roboto-Bold","Roboto-BoldItalic","Roboto-Italic","Roboto-Light","Roboto-LightItalic","Roboto-Medium","Roboto-MediumItalic","Roboto-Thin","Roboto-ThinItalic"],Galada:["Galada-Regular"]}),k=function(e){function t(e){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t={color:this.props.boldChecked?"#ed2445":"#000000"},a={color:this.props.italicChecked?"#ed2445":"#000000"};return c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-7 col-lg-6 zero-padding"},c.a.createElement("form",{className:"properties-form"},c.a.createElement("label",null,"Font Properties",c.a.createElement("br",null),c.a.createElement("div",{className:"properties-flex-display"},c.a.createElement("select",{className:"responsive-font-size",value:this.props.fontFamily,onChange:this.props.onChangeFontFamily},c.a.createElement("option",null),g.FontFamilies.map(function(e){return c.a.createElement("option",{value:e},e)})),c.a.createElement("select",{className:"responsive-font-size",value:this.props.fontWeight,onChange:this.props.onChangeFontWeight},c.a.createElement("option",null),this.props.fontFamily?g[this.props.fontFamily].map(function(e){return c.a.createElement("option",{value:e},e)}):c.a.createElement("option",null)),c.a.createElement("input",{className:"input-font-size responsive-font-size",value:this.props.fontSize,type:"text",autocomplete:"off",placeholder:"10",onChange:this.props.onChangeFontSize})),c.a.createElement("label",{className:"checkbox responsive-font-size"},c.a.createElement("span",{style:t},"Bold"),c.a.createElement("input",{className:"zero-margin",type:"checkbox",onClick:function(t){return e.props.onClickCheckbox(t,"bold")}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"checkbox responsive-font-size"},c.a.createElement("span",{style:a},"Italic"),c.a.createElement("input",{className:"zero-margin",type:"checkbox",onClick:function(t){return e.props.onClickCheckbox(t,"italic")}}),c.a.createElement("span",{className:"checkmark"})))))}}]),t}(l.Component),v=(a(36),function(e){function t(e){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-5 col-lg-6 zero-padding"},c.a.createElement("form",{className:"inputform"},c.a.createElement("label",null,"Your Text",c.a.createElement("br",null),c.a.createElement("input",{className:"inputform__input",type:"text",value:this.props.inputValue,onChange:this.props.onChange,placeholder:"myTypography",autocomplete:"off"}))))}}]),t}(l.Component)),y=(a(38),function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footing"},"CONTACT")}}]),t}(l.Component)),C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.state={inputValue:"",fontFamily:"",fontWeight:"",fontSize:20,boldChecked:!1,italicChecked:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleFontFamily",value:function(e){this.setState({fontFamily:e.target.value})}},{key:"handleFontWeight",value:function(e){this.setState({fontWeight:e.target.value})}},{key:"handleFontSize",value:function(e){this.setState({fontSize:e.target.value})}},{key:"handleCheckbox",value:function(e,t){"bold"===t?this.setState({boldChecked:e.target.checked}):this.setState({italicChecked:e.target.checked})}},{key:"render",value:function(){return c.a.createElement("div",{className:"outer-container"},c.a.createElement("div",{className:"container"},c.a.createElement(f,null),c.a.createElement("div",{className:"container-body"},c.a.createElement("div",{className:"row input-bar-wrapper"},c.a.createElement(v,{inputValue:this.state.inputValue,onChange:this.handleInputChange.bind(this)}),c.a.createElement(k,{fontFamily:this.state.fontFamily,onChangeFontFamily:this.handleFontFamily.bind(this),fontWeight:this.state.fontWeight,onChangeFontWeight:this.handleFontWeight.bind(this),fontSize:this.state.fontSize,onChangeFontSize:this.handleFontSize.bind(this),boldChecked:this.state.boldChecked,italicChecked:this.state.italicChecked,onClickCheckbox:this.handleCheckbox.bind(this)})),c.a.createElement("div",{className:"row font-result-wrapper"},c.a.createElement(b,{inputValue:this.state.inputValue,fontFamily:this.state.fontWeight,fontSize:this.state.fontSize,boldChecked:this.state.boldChecked,italicChecked:this.state.italicChecked}))),c.a.createElement(y,null)))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);var E=Object(n.f)({"/":Object(n.g)({title:"myTypography",head:c.a.createElement(c.a.Fragment,null,c.a.createElement("meta",{name:"description",content:"My Great description"}),c.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),view:c.a.createElement(C,null)})});s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(o.a,{routes:E}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[15,2,1]]]);
//# sourceMappingURL=main.53d19bfa.chunk.js.map