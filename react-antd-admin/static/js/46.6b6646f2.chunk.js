(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[46,110,111],{190:function(e,t,n){"use strict";n.r(t);n(231);var a=n(7),r=n(0),c=n.n(r),o=n(1233),l=n(1008),i=n(24),u=n(15),s=n(12),m=n(129),f=Object(u.getAllRouteList)(i.default).map((function(e){return{breadcrumb:e.title,path:e.path,icon:e.icon}}));t.default=Object(l.a)(f)((function(e){var t=e.breadcrumbs,n=t[t.length-1];return n&&n.key.split("/").length<3&&(t=[n]),c.a.createElement("div",{"layout-flex":"none",style:{height:s.BREADCRUMBS_HEIGHT}},t.map((function(e,n){var r=e.match,l=r.url,i=r.path,u=function(e){return f.find((function(t){return Object.is(e,t.path)}))||{}}(i),s=u.icon,d=u.breadcrumb,p=c.a.createElement(c.a.Fragment,null,s&&c.a.createElement(a.a,{type:s}),"\xa0",d);return c.a.createElement("span",{key:i},!m.default.isHome()&&m.default.isHome(l)?c.a.createElement(o.a,{to:l},p):p,d&&c.a.createElement("span",{className:"mglr"},n<t.length-1&&c.a.createElement("i",null," / ")))})))}))},192:function(e,t,n){"use strict";n.r(t);var a=n(402);n.d(t,"Header",(function(){return a.default}));var r=n(398);n.d(t,"SiderBar",(function(){return r.default}))},398:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(86),o=n(2),l=n.n(o),i=n(885),u=n(181),s=n(716),m=n.n(s),f=n(12),d=n(24),p=n(401),h=n(42),b=window.g_config,g=b.logo,O=b.name,y=m.a.sider_logo;t.default=Object(u.a)(Object(c.connect)((function(e){return e.global}))((function(e){var t=e.foldMenu,n=e.collapsed,a=e.configInfo,c=(void 0===a?{}:a).isFixedSider;return t?r.a.createElement(p.default,null):r.a.createElement(h.BegetSider,{className:l()("layout-sider-container",{"fixed-sider-menu":c}),width:f.SIDER_WIDTH,trigger:null,collapsible:!0,collapsed:n},r.a.createElement(i.a,{to:d.HOME,"layout-align":"center center",className:y},r.a.createElement("img",{alt:O,className:"logo",src:g,title:O}),!n&&r.a.createElement("span",{className:"font-size-xl font-weight-bold"},O)),r.a.createElement(p.default,null))})))},401:function(e,t,n){"use strict";n.r(t);var a=n(18),r=(n(231),n(7)),c=n(88),o=n(10),l=(n(394),n(233)),i=n(0),u=n.n(i),s=n(86),m=n(885),f=n(181),d=n(15),p=n(68),h=n(42),b=n(46);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=l.a.SubMenu,E=function(e,t,n){var a={};return t&&n?a={search:"".concat(n,"&carry_path=").concat(e)}:(t||n)&&(a={search:n||"?carry_path=".concat(e)}),O({pathname:e},a)};t.default=Object(f.a)(Object(s.connect)((function(e){return e.global}))((function(e){var t=e.location.pathname,n=e.userInfo,o=e.collapsed,s=void 0!==o&&o,f=e.foldMenu,g=Object(i.useContext)(p.CtxMenu).routes,v=Object(d.getSearchValues)("carry_path"),j=Object(d.splitPathList)(v||t),_=Object(i.useState)((function(){return{openKeys:s&&!f?[]:j,collapsed:s,saveKeys:j,pathname:t}})),w=Object(a.a)(_,2),C=w[0],k=w[1],P=C.openKeys,S=Object(b.usePrevious)(C);Object.is(s,C.collapsed)||k((function(e){return O({},e,{openKeys:s?[]:C.saveKeys,collapsed:s})})),Object(i.useEffect)((function(){!f&&S&&(Object.is(t,S.pathname)||k((function(e){return O({},e,{saveKeys:P},(f||!s)&&{openKeys:P},{pathname:t})})))}),[f,s,t,S]);var N=Object(i.useCallback)((function(e){var t=function(e){return e.reduce((function(e,t){return t.routes&&(e=[].concat(Object(c.a)(e),[t.path])),e}),[])}(g),n=e.find((function(e){return!P.includes(e)}));if(!t.includes(n))return k((function(t){return O({},t,{openKeys:e})}));k((function(e){return O({},e,{openKeys:n?[n]:[]})}))}),[g,P]);return u.a.createElement(h.BegetMenu,{style:{height:"calc(100vh - 150px)",overflowX:"hidden",paddingBottom:50},onOpenChange:N,mode:"inline",selectedKeys:[v||t||""],openKeys:P},g&&function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.filter((function(e){return e.title&&!e.navHide})).map((function(t){if(!Object(d.authRoutePage)(t,n))return null;var a=t.routes,c=t.path,o=t.icon,i=t.title,s=t.search,f=t.isCarryPath,p=u.a.createElement(u.a.Fragment,null,o&&u.a.createElement(r.a,{type:o}),u.a.createElement("span",null,i));if(a)return u.a.createElement(y,{key:c,title:p},e(a,n));var h=E(c,f,s);return u.a.createElement(l.a.Item,{key:c},u.a.createElement(m.a,{to:h},p))}))}(g,n))})))},402:function(e,t,n){"use strict";n.r(t);n(231);var a=n(7),r=(n(238),n(75)),c=n(10),o=n(18),l=(n(394),n(233)),i=(n(404),n(242)),u=n(0),s=n.n(u),m=n(86),f=n(2),d=n.n(f),p=n(181),h=n(718),b=n.n(h),g=n(85),O=n(398),y=n(403),E=n(42),v=n(46),j=n(15);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=i.a.Header,k=l.a.ItemGroup,P=b.a.header,S=b.a.btn_like,N=b.a.popover_menu,I=window.g_config.enName,D=function(e){var t=e.onSelect,n=e.userInfo.userName;return s.a.createElement(E.BegetMenu,Object.assign({mode:"inline"},t&&{onSelect:t}),s.a.createElement(k,{title:"\u7528\u6237\u4e2d\u5fc3"},s.a.createElement(l.a.Item,{key:"setting:1"},"\u4f60\u597d - ",n),s.a.createElement(l.a.Item,{key:"logout"},"\u9000\u51fa\u767b\u5f55")))};t.default=Object(p.a)(Object(m.connect)((function(e){return e.global}))((function(e){var t=e.collapsed,n=e.foldMenu,c=e.siderWidth,l=void 0===c?0:c,i=e.userInfo,m=e.dispatch,f=e.configInfo,p=(void 0===f?{}:f).isFixedHeader,h=Object(u.useState)((function(){return{visible:!1,pathname:window.g_history.location.pathname}})),b=Object(o.a)(h,2),_=b[0],k=b[1],x=_.visible,B=i.userName,M=void 0===B?"admin":B,T=p&&!n?{width:"calc(100% - ".concat(l,"px)")}:{},H=Object(v.usePrevious)(_);Object(u.useEffect)((function(){if(H){var e=window.g_history.location.pathname;n?!Object.is(e,H.pathname)&&k((function(t){return w({},t,{visible:!1,pathname:e})})):H.visible&&k((function(e){return w({},e,{visible:!1})}))}}),[n,H]);var L=Object(u.useCallback)((function(e){k((function(t){return w({},t,{visible:e})}))}),[]),F=Object(u.useCallback)((function(e){switch(e.key){case"logout":Object(g.goLogoutAccount)().then((function(){r.a.success("\u9000\u51fa\u6210\u529f!"),Object(j.clearLoginInfo)()}))}}),[]),K=Object(u.useCallback)((function(){m({type:"global/upState",data:{collapsed:!t}})}),[t]);return s.a.createElement(C,{style:T,className:d()("".concat(P," locate-fit z2"),{"fixed-header":p})},s.a.createElement(E.BegetThemeContainer,{showThemeBgColor:!0},s.a.createElement("div",{"layout-align":"space-between center"},n?s.a.createElement(E.BegetPopover,{placement:"bottomLeft",overlayClassName:"".concat(N),visible:x,overlayStyle:{position:"fixed"},onVisibleChange:L,content:s.a.createElement(O.default,null)},s.a.createElement("div",{className:"cursign font-size-lg tc ".concat(S)},s.a.createElement(a.a,{type:"bars"}))):s.a.createElement("div",{className:"cursign tc font-size-lg ".concat(S),onClick:K},s.a.createElement(a.a,{type:t?"menu-unfold":"menu-fold"})),s.a.createElement("div",{"layout-align":"start center"},s.a.createElement("a",{title:I,target:"_blank",rel:"noreferrer noopener",href:"https://github.com/liuguanhua/react-antd-admin"},s.a.createElement(a.a,{type:"github"})),s.a.createElement("span",{className:"header-icon-operate mgl"},s.a.createElement(y.default,null)),s.a.createElement(E.BegetPopover,{overlayClassName:"custom-menu-popover",content:s.a.createElement(D,{onSelect:F,userInfo:i})},s.a.createElement("span",{"layout-align":"start center",className:"cursign"},s.a.createElement(a.a,{className:"mglr",type:"user"}),s.a.createElement("span",{className:"inline-block mgr anticon"},M),s.a.createElement("img",{className:"avatar bdr-half",src:"/static/avatar.png",alt:M})))))))})))},403:function(e,t,n){"use strict";n.r(t);n(231);var a=n(7),r=n(18),c=(n(905),n(908)),o=n(10),l=(n(907),n(884)),i=n(0),u=n.n(i),s=n(86),m=n(2),f=n.n(m),d=n(55),p=n.n(d),h=n(15),b=n(12),g=n(46),O=n(42);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=l.a.Option,j=p.a.theme_list,_=Object.keys(O.themesSkin),w=function(e){var t=e.configInfo,n=void 0===t?{}:t,a=e.dispatch,r=n.showLineNumbers,o=n.codeTheme,s=Object(i.useCallback)((function(e){a({type:"global/upState",data:{configInfo:E({},n,{},e)}}),Object(h.setStorage)(b.WEB_CONFIG,e)}),[n]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(O.BegetThemeContainer,{showThemeColor:!0},u.a.createElement("h3",null,"markdown\u4e3b\u9898")),u.a.createElement("span",{className:"mgr"},u.a.createElement(c.a,{onChange:function(){s({showLineNumbers:!r})},checked:r,checkedChildren:"\u884c\u53f7(\u5173)",unCheckedChildren:"\u884c\u53f7(\u5f00)"})),u.a.createElement(l.a,{style:{width:118},value:o,onChange:function(e){s({codeTheme:e})}},b.MARKDOWN_CODE_THEME.map((function(e){return u.a.createElement(v,{value:e,key:e},e)}))))};t.default=Object(s.connect)((function(e){return e.global}))((function(e){var t=e.onSetting,n=e.dispatch,l=e.configInfo,s=void 0===l?{}:l,m=s.isFixedHeader,d=s.isFixedSider,p=Object(g.useTheme)(),y=p.theme,v=p.switchTheme,C=Object(g.useModal)(),k=Object(r.a)(C,2),P=k[0],S=k[1],N=S.showModal,I=S.hideModal,D=Object(i.useCallback)((function(e){v(e),Object(h.setStorage)(b.WEB_CONFIG,{theme:e})}),[]),x=Object(i.useCallback)((function(){t&&t(),N()}),[]),B=Object(i.useCallback)((function(e){return function(t){var a=Object(o.a)({},e,t);n({type:"global/upState",data:{configInfo:E({},s,{},a)}}),Object(h.setStorage)(b.WEB_CONFIG,a)}}),[s]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(a.a,{title:"\u8bbe\u7f6e",onClick:x,className:"cursign",type:"setting"}),u.a.createElement(O.BegetDrawer,{title:u.a.createElement(O.BegetThemeContainer,{showThemeColor:!0},u.a.createElement("span",null,"\u8bbe\u7f6e")),onClose:I,visible:P,placement:"right"},u.a.createElement(O.BegetThemeContainer,{showThemeColor:!0},u.a.createElement("h3",null,"\u80cc\u666f\u8272")),u.a.createElement("ul",{"layout-align":"space-between center",className:"".concat(j," mgb")},_.map((function(e){var t=O.themesSkin[e],n=Object.is(y,e);return u.a.createElement("li",{style:{backgroundColor:t},onClick:function(){D(e)},className:f()({active:n}),key:e},u.a.createElement(a.a,{className:"theme-check",type:"check"}))}))),u.a.createElement(O.BegetThemeContainer,{showThemeColor:!0},u.a.createElement("h3",null,"\u9875\u9762\u8bbe\u7f6e")),u.a.createElement("div",{"layout-align":"space-between center"},u.a.createElement(c.a,{unCheckedChildren:"\u56fa\u5b9a\u5934\u90e8(\u5f00)",checkedChildren:"\u56fa\u5b9a\u5934\u90e8(\u5173)",checked:m,onChange:B("isFixedHeader")}),u.a.createElement(c.a,{unCheckedChildren:"\u56fa\u5b9a\u83dc\u5355(\u5f00)",checkedChildren:"\u56fa\u5b9a\u83dc\u5355(\u5173)",checked:d,onChange:B("isFixedSider")})),u.a.createElement(w,{dispatch:n,configInfo:s})))}))},430:function(e,t,n){"use strict";n.r(t);var a=n(10),r=(n(404),n(242)),c=n(0),o=n.n(c),l=n(86),i=n(1556),u=n(12),s=n(54),m=n(89),f=n(190),d=n(42),p=n(46),h=n(68),b=n(192);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=r.a.Content;t.default=Object(m.withAuthRoute)()(Object(l.connect)((function(e){return e.global}))(Object(m.injectLocaleLang)(Object(m.hasRoutePath)((function(e){var t=e.foldMenu,n=e.dispatch,a=e.children,c=e.collapsed,l=e.route.routes,m=e.configInfo,g=void 0===m?{}:m,E=g.isFixedSider,v=g.isFixedHeader;Object(p.useEventListener)("resize",Object(i.a)(1e3,(function(){return Object(s.isMobile)()?!t&&n({type:"global/upState",data:{foldMenu:!0}}):t&&n({type:"global/upState",data:{foldMenu:!1}})})));var j=c?u.COLLAPSED_SIDER_WIDTH:u.SIDER_WIDTH,_=E&&!t?{paddingLeft:j}:{};return o.a.createElement(r.a,{className:"min-h-100"},o.a.createElement(h.CtxMenu.Provider,{value:{routes:l}},!t&&o.a.createElement(b.SiderBar,null),o.a.createElement(r.a,{style:_,className:"layout-inside-container"},o.a.createElement(b.Header,{siderWidth:j,routes:l}),o.a.createElement(y,{"flex-direction":"column",style:O({},v&&{paddingTop:79}),className:"inside-padding-container"},o.a.createElement("div",{"layout-flex":"flex","flex-direction":"column",className:"min-h-100 h-100"},o.a.createElement(d.Authorized,null,o.a.createElement(f.default,null),a))))))})))))},716:function(e,t,n){e.exports={sider_logo:"layout_sider_logo__2MLho",fadeLeftIn:"layout_fadeLeftIn__3g958",switch_theme:"layout_switch_theme__Nu7sm"}},718:function(e,t,n){e.exports={header:"header_header__34HIu",switch_menu:"header_switch_menu__2QzUB",btn_like:"header_btn_like__2BgGk",header_dark:"header_header_dark__14_Y_",popover_menu:"header_popover_menu__cCy-a"}}}]);