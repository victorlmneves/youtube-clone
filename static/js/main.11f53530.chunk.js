(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{1591:function(e,t,s){},1592:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),i=s(55),n=s.n(i),r=s(9),o=Object(a.createContext)(),d=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[window.innerWidth]),s},l=s(1),j=function(e){var t=e.children,s=Object(a.useState)(!0),c=Object(r.a)(s,2),i=c[0],n=c[1],j=d().width;return Object(a.useEffect)((function(){n(!(j<=1320))}),[j]),Object(l.jsx)(o.Provider,{value:{isToggled:i,setIsToggled:n,handleToggleSideBar:function(){n(!i)}},children:t})},b=Object(a.createContext)(),u=function(e){var t=e.children,s=Object(a.useState)({input:"",videos:[]}),c=Object(r.a)(s,2),i=c[0],n=c[1];return Object(l.jsx)(b.Provider,{value:{searchQuery:i,setSearchQuery:n,API_SEARCH:"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=",API_KEY:"AIzaSyDc1FtmkGR1lfPfDstyl6KSl3T0poh87Jg"},children:t})},h=s(4),O=s(5),x=s(23),m=function(){var e=Object(a.useContext)(o).handleToggleSideBar;return Object(l.jsx)("button",{className:"icon-container burgerMenu",onClick:e,children:Object(l.jsx)(x.a,{size:25})})},v=function(){return Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)(h.b,{to:"/",children:Object(l.jsx)("img",{src:"".concat("/youtube-clone","/logo.png"),alt:"youtube logo","data-tip":"YouTube Home","data-for":"sidebar"})})})},p=function(){return Object(l.jsxs)("div",{className:"menu-logo",children:[Object(l.jsx)(m,{}),Object(l.jsx)(v,{})]})},f=s(15),N=s.n(f),_=s(20),g=s(8),y=s(30),S=s(7),C=s(16),I=s.n(C),w=function(){var e=Object(a.useContext)(b),t=e.searchQuery,s=e.setSearchQuery,c=e.API_SEARCH,i=e.API_KEY,n=Object(O.f)(),r=d().width,o=function(){var e=Object(_.a)(N.a.mark((function e(a){var r,o,d;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r=JSON.parse(localStorage.getItem(t.input)),""===t.input&&r){e.next=14;break}return console.log("searching..."),e.next=6,I()("".concat(c).concat(t.input,"&key=").concat(i));case 6:return o=e.sent,console.log(o),e.next=10,o.json();case 10:d=e.sent,console.log(d),s(Object(g.a)(Object(g.a)({},t),{},{videos:d})),n.push("/results?search_query=".concat(t.input));case 14:r&&(s(Object(g.a)(Object(g.a)({},t),{},{videos:r.videos})),n.push("/results?search_query=".concat(t.input)));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){localStorage.setItem(t.input,JSON.stringify(t.videos))}),[t.videos]),Object(l.jsxs)("div",{className:"SearchBar ".concat(r<=640?"smallSearch":""),children:[r>640?Object(l.jsxs)("form",{onSubmit:o,children:[Object(l.jsx)("input",{type:"text",name:"search",value:t.input,placeholder:"Search",onChange:function(e){s(Object(g.a)(Object(g.a)({},t),{},{input:e.target.value}))},autoComplete:"false"}),Object(l.jsx)("button",{children:Object(l.jsx)(y.a,{size:20,"data-tip":"Search","data-for":"navbar"})})]}):Object(l.jsx)("button",{className:"icon-container searchIcon",children:Object(l.jsx)(y.a,{size:20,"data-tip":"Search","data-for":"navbar"})}),Object(l.jsx)("button",{className:"icon-container voiceIcon",children:Object(l.jsx)(S.b,{size:25,"data-tip":"Search with your voice","data-for":"navbar"})})]})},k=s(17),z=s(24),E=s.n(z),T=function(){return Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{className:"icon-container",children:Object(l.jsx)(S.g,{size:25,"data-tip":"Create","data-for":"navbar"})}),Object(l.jsx)("button",{className:"icon-container",children:Object(l.jsx)(S.a,{size:25,"data-tip":"YouTube Apps","data-for":"navbar"})}),Object(l.jsx)("button",{className:"icon-container",children:Object(l.jsx)(S.d,{size:25,"data-tip":"Notifications","data-for":"navbar"})}),Object(l.jsx)("img",{src:E.a.image.avatar(),alt:"avatar image",className:"avatar"}),Object(l.jsx)(k.a,{id:"navbar",backgroundColor:"grey",effect:"solid",offset:"{'top': -10}",delayHide:150,arrowColor:"transparent"})]})},L=function(){return Object(l.jsxs)("nav",{className:"Navbar",children:[Object(l.jsx)(p,{}),Object(l.jsx)(w,{}),Object(l.jsx)(T,{})]})},Y=s(21),A=function(){return Object(l.jsx)(h.c,{to:"/",exact:!0,activeClassName:"active","data-for":"sidebar","data-tip":"Home",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(Y.a,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Home"})]})})},P=s(57),R=function(){return Object(l.jsx)(h.c,{to:"/feed/explore",exact:!0,activeClassName:"active","data-for":"sidebar","data-tip":"Explore",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(P.a,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Explore"})]})})},D=function(){return Object(l.jsx)(h.c,{to:"/feed/subscriptions",activeClassName:"active","data-for":"sidebar","data-tip":"Subscriptions",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(S.f,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Subscriptions"})]})})},H=function(){return Object(l.jsx)(h.c,{to:"/feed/library",activeClassName:"active","data-for":"sidebar","data-tip":"Library",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(S.h,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Library"})]})})},J=s(14),M=function(){return Object(l.jsx)(h.c,{to:"/feed/history",activeClassName:"active","data-for":"sidebar","data-tip":"History",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(J.d,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"History"})]})})},F=function(){return Object(l.jsx)(h.c,{to:"/playlist?list=WL",activeClassName:"active","data-for":"sidebar","data-tip":"Watch later",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(S.i,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Watch later"})]})})},V=function(){return Object(l.jsx)(h.c,{to:"/playlist?list=LL",activeClassName:"active","data-for":"sidebar","data-tip":"Liked videos",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(J.f,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Liked videos"})]})})},W=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h3",{children:"SUBSCRIPTIONS"})})},U=function(){return Object(l.jsx)(h.c,{to:"/premium",activeClassName:"active","data-for":"sidebar","data-tip":"YouTube Premium",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(Y.c,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"YouTube Premium"})]})})},B=function(){return Object(l.jsx)(h.c,{to:"/feed/storefront?bp=ogUCKAI%3D",activeClassName:"active","data-for":"sidebar","data-tip":"Movies & Shows",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(S.c,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Movies & Shows"})]})})},K=s(58),Q=function(){return Object(l.jsx)(h.c,{to:"/gaming",activeClassName:"active","data-for":"sidebar","data-tip":"Gaming",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(K.a,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Gaming"})]})})},q=s(59),G=function(){return Object(l.jsx)(h.c,{to:"/channel/UC4R8DWoMoI7CAwX8_LjQHig",activeClassName:"active","data-for":"sidebar","data-tip":"Live",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(q.a,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Live"})]})})},X=s(25),Z=function(){return Object(l.jsx)(h.c,{to:"/channel/UCtFRv9O2AHqOZjjynzrv-xg",activeClassName:"active","data-for":"sidebar","data-tip":"Learning",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(X.a,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Learning"})]})})},$=function(){return Object(l.jsx)(h.c,{to:"channel/UCEgdi0XIXXZ-qJOFPf4JSKw",activeClassName:"active","data-for":"sidebar","data-tip":"Sports",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(x.b,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Sports"})]})})},ee=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"MORE FROM YOUTUBE"}),Object(l.jsx)(U,{}),Object(l.jsx)(B,{}),Object(l.jsx)(Q,{}),Object(l.jsx)(G,{}),Object(l.jsx)(Z,{}),Object(l.jsx)($,{})]})},te=function(){return Object(l.jsx)(h.c,{to:"/",exact:!0,activeClassName:"active","data-for":"sidebar","data-tip":"Settings",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(Y.b,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Settings"})]})})},se=function(){return Object(l.jsx)(h.c,{to:"/reporthistory",activeClassName:"active","data-for":"sidebar","data-tip":"Report history",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(J.b,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Report history"})]})})},ae=function(){return Object(l.jsx)(h.c,{to:"/",activeClassName:"active",children:Object(l.jsxs)("div",{className:"sidebar_icon_container","data-for":"sidebar","data-tip":"Help",children:[Object(l.jsx)(X.b,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Help"})]})})},ce=function(){return Object(l.jsx)(h.c,{to:"/",activeClassName:"active","data-for":"sidebar","data-tip":"Send feedback",children:Object(l.jsxs)("div",{className:"sidebar_icon_container",children:[Object(l.jsx)(J.a,{size:23,className:"sidebar_icon"}),Object(l.jsx)("h4",{className:"sidebar_text",children:"Send feedback"})]})})},ie=function(){return Object(l.jsx)("aside",{className:"big_sidebar",children:Object(l.jsxs)("div",{className:"big_sidebar_container",children:[Object(l.jsxs)("div",{className:"sidebar_section",children:[Object(l.jsx)(A,{}),Object(l.jsx)(R,{}),Object(l.jsx)(D,{})]}),Object(l.jsxs)("div",{className:"sidebar_section",children:[Object(l.jsx)(H,{}),Object(l.jsx)(M,{}),Object(l.jsx)(F,{}),Object(l.jsx)(V,{})]}),Object(l.jsx)("div",{className:"sidebar_section",children:Object(l.jsx)(W,{})}),Object(l.jsx)("div",{className:"sidebar_section",children:Object(l.jsx)(ee,{})}),Object(l.jsxs)("div",{className:"sidebar_section",children:[Object(l.jsx)(te,{}),Object(l.jsx)(se,{}),Object(l.jsx)(ae,{}),Object(l.jsx)(ce,{})]}),Object(l.jsx)(k.a,{effect:"solid",id:"sidebar",place:"bottom",backgroundColor:"black",delayShow:300,arrowColor:"transparent",offset:{top:0,left:0},className:"tooltip"}),Object(l.jsx)("div",{className:"sidebar_section footer",children:"Cloned by Lucas Ferrari"})]})})},ne=function(){return Object(l.jsx)("aside",{className:"small_sidebar",children:Object(l.jsxs)("div",{className:"small_sidebar_container",children:[Object(l.jsx)(A,{}),Object(l.jsx)(R,{}),Object(l.jsx)(D,{}),Object(l.jsx)(H,{})]})})},re=function(){var e=Object(a.useContext)(o),t=e.isToggled,s=(e.setIsToggled,Object(O.g)()),c=d().width;return Object(l.jsx)(l.Fragment,{children:s.pathname.startsWith("/video/")?t?Object(l.jsx)(ie,{}):null:c<792?null:t?Object(l.jsx)(ie,{}):Object(l.jsx)(ne,{})})},oe=s(60),de=function(e){return e>999&&e<1e6?(e/1e3).toFixed(0)+"K":e>1e6?(e/1e6).toFixed(0)+"M":e<900?e:void 0},le=function(e){if(!e.startsWith("PT"))return null;for(var t=e.substring(2),s="",a=0;a<t.length;a++)Number(t[a])?a>0&&!Number(t[a-1])&&!Number(t[a+1])?s+="0"+t[a]:s+=t[a]:s+=":";if(t.endsWith("M"))return s.slice(0,-1)+"00";if(-1!==t.indexOf("H")&&-1===t.indexOf("M")&&t.endsWith("S")){var c=s.slice(0,-1).split(":"),i=Object(r.a)(c,2),n=i[0],o=i[1];return"".concat(n,":00:").concat(o)}return s.slice(0,-1)},je=s(22),be=s.n(je),ue=s(19),he=function(e){var t=e.id,s=e.info,a=e.eInfo,c=e.channelInfo,i=le(a.duration),n=de(a.viewCount),r=be()(s.publishedAt,"YYYYMMDD").fromNow();return Object(l.jsx)("div",{className:"videoCard",children:Object(l.jsxs)(h.b,{to:"/video/".concat(t),children:[Object(l.jsxs)("div",{className:"video_preview",children:[Object(l.jsx)("img",{src:s.thumbnails.medium.url,alt:s.title}),i?Object(l.jsx)("div",{className:"video_duration",children:Object(l.jsx)("span",{children:i})}):null]}),Object(l.jsxs)("div",{className:"video_info_container",children:[Object(l.jsxs)("div",{className:"avatar_container",children:[Object(l.jsx)("img",{src:c.thumbnails.default.url,alt:"".concat(s.channelTitle," avatar"),className:"avatar","data-for":"avatar","data-tip":s.channelTitle}),Object(l.jsx)(k.a,{effect:"solid",id:"avatar",place:"bottom",delayShow:200,arrowColor:"transparent",offset:{top:0,left:0},className:"tooltip"})]}),Object(l.jsxs)("div",{className:"video_text_container",children:[Object(l.jsx)("h3",{"data-for":"title","data-tip":s.title,children:s.title.length>60?s.title.substring(0,60)+"...":s.title}),Object(l.jsx)(k.a,{effect:"solid",id:"title",place:"bottom",delayShow:200,arrowColor:"transparent",offset:{top:0,left:0},className:"tooltip"}),Object(l.jsxs)("div",{className:"video_info",children:[Object(l.jsxs)(h.b,{to:"/channel/".concat(c.customUrl),children:[Object(l.jsx)("div",{className:"channelName","data-for":"channel","data-tip":s.channelTitle,children:s.channelTitle}),Object(l.jsx)(k.a,{effect:"solid",id:"channel",place:"top",delayShow:100,offset:{top:0,left:0},arrowColor:"transparent",className:"tooltip"})]}),Object(l.jsxs)("div",{className:"video_metadata",children:[Object(l.jsxs)("span",{children:[n," views"]}),Object(l.jsx)("span",{className:"dot_separator",children:" \u2022 "}),Object(l.jsx)("span",{children:r})]})]})]}),Object(l.jsx)("div",{className:"dots_container",children:Object(l.jsx)(ue.b,{size:25,className:"dots"})})]})]})})},Oe=function(){var e=JSON.parse(localStorage.getItem("mainVideos")),t=Object(a.useState)(e||[]),s=Object(r.a)(t,2),c=s[0],i=s[1],n=Object(a.useContext)(b),o=n.API_SEARCH,d=n.API_KEY,j=function(){var t=Object(_.a)(N.a.mark((function t(){var s,a,c,n,r,l,j,b,u,h,O,x,m;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=52;break}return t.next=4,I()("".concat(o,"techno&key=").concat(d));case 4:return s=t.sent,t.next=7,s.data.items;case 7:a=t.sent,console.log(a),c=!1,n=!1,t.prev=11,l=Object(oe.a)(a);case 13:return t.next=15,l.next();case 15:if(!(c=!(j=t.sent).done)){t.next=34;break}return b=j.value,t.next=19,I()("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=".concat(b.id.videoId,"&key=").concat(d));case 19:return u=t.sent,console.log(b.snippet),Object.assign(b.snippet,Object(g.a)({},u.data.items[0].snippet)),console.log(b.snippet),b.extraInfo=Object.assign({},u.data.items[0].tags,u.data.items[0].contentDetails,u.data.items[0].statistics,u.data.items[0].player),t.next=26,I()("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&id=".concat(b.snippet.channelId,"&key=").concat(d));case 26:h=t.sent,O=h.data.items[0].snippet,x=h.data.items[0].statistics,m=Object.assign({},Object(g.a)(Object(g.a)({},O),x)),b.channelInfo=m;case 31:c=!1,t.next=13;break;case 34:t.next=40;break;case 36:t.prev=36,t.t0=t.catch(11),n=!0,r=t.t0;case 40:if(t.prev=40,t.prev=41,!c||null==l.return){t.next=45;break}return t.next=45,l.return();case 45:if(t.prev=45,!n){t.next=48;break}throw r;case 48:return t.finish(45);case 49:return t.finish(40);case 50:i(a),localStorage.setItem("mainVideos",JSON.stringify(a));case 52:t.next=57;break;case 54:t.prev=54,t.t1=t.catch(0),console.log(t.t1);case 57:case"end":return t.stop()}}),t,null,[[0,54],[11,36,40,50],[41,,45,49]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){j()}),[]);var u=c.map((function(e){return Object(l.jsx)(he,{id:e.id.videoId,info:e.snippet,eInfo:e.extraInfo,channelInfo:e.channelInfo},e.id.videoId)}));return Object(l.jsx)("section",{className:"mainGallery",children:u})},xe=function(){Object(a.useContext)(b).searchQuery;return Object(l.jsx)("section",{className:"searchedVideos"})},me=s(61),ve=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")},pe=Object(a.createContext)(),fe=function(){var e,t,s,c=Object(O.h)().videoId,i=Object(a.useState)(JSON.parse(localStorage.getItem("mainVideos"))||[]),n=Object(r.a)(i,2),d=n[0],j=(n[1],Object(a.useState)(d.find((function(e){return e.id.videoId===c})))),b=Object(r.a)(j,2),u=b[0],h=b[1],x=Object(a.useState)([]),m=Object(r.a)(x,2),v=m[0],p=m[1],f=Object(a.useContext)(o).setIsToggled,g=Object(a.useContext)(pe),y=g.user,C=g.likeVideo,w=g.addToWatchLater,k=g.subscribeToChannel,z=ve(u.extraInfo.viewCount),T=de(u.extraInfo.likeCount),L=de(u.extraInfo.dislikeCount),Y=de(u.channelInfo.subscriberCount),A=ve(u.extraInfo.commentCount),P=function(){var e=Object(_.a)(N.a.mark((function e(){var t,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I()("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=".concat(c,"&key=").concat("AIzaSyDc1FtmkGR1lfPfDstyl6KSl3T0poh87Jg"));case 2:return t=e.sent,console.log(t),e.next=6,t.data.items;case 6:s=e.sent,p(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=d.map((function(e){return Object(l.jsx)(he,{id:e.id.videoId,info:e.snippet,eInfo:e.extraInfo,image:e.snippet.thumbnails.default.url,channelInfo:e.channelInfo},e.id.videoId)})),D=Object(l.jsxs)("div",{className:"video_main_info",children:[Object(l.jsx)("div",{className:"tags",children:u.snippet.tags.map((function(e,t){return Object(l.jsxs)("span",{className:"tag",children:["#",e]},t)}))}),Object(l.jsx)("h1",{children:u.snippet.title}),Object(l.jsxs)("div",{className:"videoplayer_metadata",children:[Object(l.jsxs)("span",{children:[z," visualisations"]}),Object(l.jsx)("span",{className:"dot_separator",children:" \u2022 "}),Object(l.jsx)("span",{children:be()(u.snippet.publishedAt).format("ll")})]})]}),H=v.map((function(e){var t=e.snippet.topLevelComment,s=t.id,a=t.snippet;return Object(l.jsxs)("div",{className:"comment_container",children:[Object(l.jsx)("div",{className:"comment_avatar_container",children:Object(l.jsx)("img",{src:a.authorProfileImageUrl,alt:"user avatar"})}),Object(l.jsxs)("div",{className:"comment_text_container",children:[Object(l.jsxs)("div",{className:"comment_author",children:[a.authorDisplayName,Object(l.jsx)("span",{children:be()(a.publishedAt,"YYYYMMDD").fromNow()})]}),Object(l.jsx)("div",{className:"comment_text",children:a.textOriginal}),Object(l.jsxs)("div",{className:"comment_buttons",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(ue.c,{size:16}),Object(l.jsx)("span",{className:"muted",children:E.a.datatype.number(998)})]}),Object(l.jsx)("div",{children:Object(l.jsx)(ue.a,{size:16})}),Object(l.jsx)("span",{className:"muted",children:"REPLY"})]})]})]},s)}));return Object(a.useEffect)((function(){f(!1),P()}),[]),Object(a.useEffect)((function(){var e=d.find((function(e){return e.id.videoId===c}));h(e)}),[c]),Object(l.jsx)("section",{className:"videoPage",children:Object(l.jsxs)("div",{className:"columns_container",children:[Object(l.jsxs)("div",{className:"column column_1",children:[Object(l.jsx)("div",{className:"youtube_player_container",children:Object(l.jsx)(me.a,{className:"youtube_player",videoId:c,onPlay:function(e){e.target.playVideo()},opts:{height:"720",width:"1280"},autoplay:!0})}),Object(l.jsxs)("div",{className:"videoplayer_info",children:[D,Object(l.jsxs)("div",{className:"main_header_buttons",children:[Object(l.jsxs)("div",{className:"likes_container",children:[Object(l.jsxs)("div",{className:"likes",children:[Object(l.jsx)(ue.c,{size:25,onClick:function(){return C(c)}}),Object(l.jsx)("span",{children:T})]}),Object(l.jsxs)("div",{className:"dislikes",children:[Object(l.jsx)(ue.a,{size:25}),Object(l.jsx)("span",{children:L})]})]}),Object(l.jsxs)("div",{className:"share",children:[Object(l.jsx)(J.e,{size:25}),Object(l.jsx)("span",{children:"SHARE"})]}),Object(l.jsxs)("div",{className:"save",children:[Object(l.jsx)(S.e,{size:25,onClick:function(){return w(c)}}),Object(l.jsx)("span",{children:"SAVE"})]}),Object(l.jsx)("div",{className:"report",children:Object(l.jsx)(J.c,{size:25,className:"sidebar_icon"})})]})]}),Object(l.jsxs)("div",{className:"channel_video_info",children:[Object(l.jsxs)("div",{className:"channel_data",children:[Object(l.jsx)("div",{className:"channel_avatar",children:Object(l.jsx)("img",{src:u.channelInfo.thumbnails.default.url,alt:"avatar"})}),Object(l.jsxs)("div",{className:"channel_title",children:[Object(l.jsx)("a",{href:"/",children:u.channelInfo.title}),Object(l.jsxs)("span",{children:[Y," subscribers"]})]}),Object(l.jsx)("div",{className:"channel_subscribe",children:Object(l.jsx)("button",{onClick:function(){return k(u.snippet.channelId)},className:"".concat((null===y||void 0===y||null===(e=y.subscriptions)||void 0===e?void 0:e.some((function(e){return e===u.snippet.channelId})))?"subscribed":""),children:(null===y||void 0===y||null===(t=y.subscriptions)||void 0===t?void 0:t.some((function(e){return e===u.snippet.channelId})))?"SUBSCRIBED":"SUBSCRIBE"})})]}),Object(l.jsx)("div",{className:"video_description",children:(s=u.snippet.description,s.split(" ").map((function(e){return e.startsWith("http")?Object(l.jsx)("a",{href:e,children:e}):Object(l.jsxs)("span",{children:[" ",e," "]})})))})]}),Object(l.jsxs)("div",{className:"video_comments_container",children:[Object(l.jsxs)("div",{className:"video_comments_count",children:[A," Comments"]}),Object(l.jsx)("div",{className:"video_comments",children:H})]})]}),Object(l.jsx)("div",{className:"column column_2",children:Object(l.jsx)("div",{className:"related_list",children:R})})]})})},Ne=function(){var e=Object(a.useContext)(b).searchQuery;return Object(l.jsxs)("main",{children:[Object(l.jsx)(O.a,{exact:!0,path:"/",component:Oe}),Object(l.jsx)(O.a,{exact:!0,path:"/results?search_query=".concat(e.input),children:Object(l.jsx)(xe,{})}),Object(l.jsx)(O.a,{exact:!0,path:"/video/:videoId",component:fe})]})},_e=function(){return Object(l.jsx)(c.a.Fragment,{children:Object(l.jsxs)(h.a,{children:[Object(l.jsx)(L,{}),Object(l.jsx)(re,{}),Object(l.jsx)(O.c,{children:Object(l.jsx)(Ne,{})})]})})},ge={likedVideos:[],watchLater:[],subscriptions:[]},ye=function(e){var t=e.children,s=JSON.parse(localStorage.getItem("userYoutubeClone")),c=Object(a.useState)(s||ge),i=Object(r.a)(c,2),n=i[0],o=i[1];return Object(l.jsx)(pe.Provider,{value:{user:n,likeVideo:function(e){var t,s,a=[];(null===(t=n.likedVideos)||void 0===t?void 0:t.find((function(t){return t===e})))?a=n.likedVideos.filter((function(t){return t!==e})):a=null===(s=n.likedVideos)||void 0===s?void 0:s.concat(e);o(Object(g.a)(Object(g.a)({},n),{},{likedVideos:a})),localStorage.setItem("userYoutubeClone",JSON.stringify(n))},addToWatchLater:function(e){var t=n.watchLater.concat(e);o(Object(g.a)(Object(g.a)({},n),{},{watchLater:t})),localStorage.setItem("userYoutubeClone",JSON.stringify(n))},subscribeToChannel:function(e){var t,s,a=[];(null===(t=n.subscriptions)||void 0===t?void 0:t.find((function(t){return t===e})))?a=n.subscriptions.filter((function(t){return t!==e})):a=null===(s=n.subscriptions)||void 0===s?void 0:s.concat(e);o(Object(g.a)(Object(g.a)({},n),{},{subscriptions:a})),localStorage.setItem("userYoutubeClone",JSON.stringify(n))}},children:t})},Se=function(){return Object(l.jsx)(c.a.Fragment,{children:Object(l.jsx)(ye,{children:Object(l.jsx)(u,{children:Object(l.jsx)(j,{children:Object(l.jsx)(_e,{})})})})})};s(1591);n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(Se,{})}),document.getElementById("root"))}},[[1592,1,2]]]);
//# sourceMappingURL=main.11f53530.chunk.js.map