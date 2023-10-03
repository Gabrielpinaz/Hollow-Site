(function(g){var window=this;'use strict';var tob=function(a,b){a.Ta("onAutonavCoundownStarted",b)},l6=function(a,b,c){g.pu(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Lg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.SS&&(b.lengthText?(e=b.lengthText||null,f=b.hw||null):b.lengthSeconds&&(e=g.kH(b.lengthSeconds),f=g.kH(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.HPa(d).type;var l=b instanceof g.SS?b.isLivePlayback:null,m=b instanceof g.SS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.wK("Assistir a $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Sk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.Cs};b instanceof g.RS&&(c.playlist_length=b.playlistLength);a.update(c)},m6=function(a){var b=a.W(),c=b.D;
g.T.call(this,{I:"a",T:"ytp-autonav-suggestion-card",Y:{href:"{{url}}",target:c?b.ea:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},X:[{I:"div",Oa:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],Y:{style:"{{background}}"},X:[{I:"div",Y:{"aria-label":"{{timestamp}}"},Oa:["ytp-autonav-timestamp"],Aa:"{{duration}}"},{I:"div",Oa:["ytp-autonav-live-stamp"],Aa:"Ao vivo"},
{I:"div",Oa:["ytp-autonav-upcoming-stamp"],Aa:"Em breve"},{I:"div",T:"ytp-autonav-list-overlay",X:[{I:"div",T:"ytp-autonav-mix-text",Aa:"Mix"},{I:"div",T:"ytp-autonav-mix-icon"}]}]},{I:"div",Oa:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],Aa:"{{title}}"},{I:"div",Oa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],Aa:"{{author}}"},{I:"div",Oa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],Aa:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.j=c;this.Ua("click",this.onClick);this.Ua("keypress",this.onKeyPress)},n6=function(a,b){b=void 0===b?!1:b;
g.T.call(this,{I:"div",T:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.K=b;this.G=void 0;this.C=0;this.container=new g.T({I:"div",T:"ytp-autonav-endscreen-countdown-container"});g.L(this,this.container);this.container.Ga(this.element);b=a.W();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.V(a,"videodatachange",this.onVideoDataChange);this.j=new g.T({I:"div",T:"ytp-autonav-endscreen-upnext-container",Y:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},X:[{I:"div",T:"ytp-autonav-endscreen-upnext-header"},{I:"div",T:"ytp-autonav-endscreen-upnext-alternative-header",Aa:"{{autoplayAlternativeHeader}}"},{I:"a",T:"ytp-autonav-endscreen-link-container",Y:{href:"{{url}}",target:d?b.ea:""},X:[{I:"div",T:"ytp-autonav-endscreen-upnext-thumbnail",Y:{style:"{{background}}"},X:[{I:"div",Y:{"aria-label":"{{timestamp}}"},Oa:["ytp-autonav-timestamp"],
Aa:"{{duration}}"},{I:"div",Oa:["ytp-autonav-live-stamp"],Aa:"Ao vivo"},{I:"div",Oa:["ytp-autonav-upcoming-stamp"],Aa:"Em breve"}]},{I:"div",T:"ytp-autonav-endscreen-video-info",X:[{I:"div",T:"ytp-autonav-endscreen-premium-badge"},{I:"div",T:"ytp-autonav-endscreen-upnext-title",Aa:"{{title}}"},{I:"div",T:"ytp-autonav-endscreen-upnext-author",Aa:"{{author}}"},{I:"div",T:"ytp-autonav-view-and-date",Aa:"{{views_and_publish_time}}"},{I:"div",T:"ytp-autonav-author-and-view",Aa:"{{author_and_views}}"}]}]}]});
g.L(this,this.j);this.j.Ga(this.container.element);d||this.V(this.j.Ha("ytp-autonav-endscreen-link-container"),"click",this.AS);this.J.zb(this.container.element,this,115127);this.J.zb(this.j.Ha("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.T({I:"div",T:"ytp-autonav-overlay"});g.L(this,this.overlay);this.overlay.Ga(this.container.element);this.B=new g.T({I:"div",T:"ytp-autonav-endscreen-button-container"});g.L(this,this.B);this.B.Ga(this.container.element);this.cancelButton=
new g.T({I:"button",Oa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.N("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],Y:{"aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},Aa:"Cancelar"});g.L(this,this.cancelButton);this.cancelButton.Ga(this.B.element);this.cancelButton.Ua("click",this.Z0,this);this.J.zb(this.cancelButton.element,this,115129);this.playButton=new g.T({I:"a",Oa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.N("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],Y:{href:"{{url}}",role:"button","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},Aa:"Assista agora"});g.L(this,this.playButton);this.playButton.Ga(this.B.element);this.playButton.Ua("click",this.AS,this);this.J.zb(this.playButton.element,this,115130);this.D=new g.du(function(){uob(c)},500);
g.L(this,this.D);this.zS();this.V(a,"autonavvisibility",this.zS);this.J.N("web_autonav_color_transition")&&(this.V(a,"autonavchange",this.Y0),this.V(a,"onAutonavCoundownStarted",this.w7))},o6=function(a){var b=a.J.Rk(!0,a.J.isFullscreen());
g.pu(a.container.element,"ytp-autonav-endscreen-small-mode",a.zg(b));g.pu(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.qK);g.pu(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.Df());g.pu(a.J.getRootNode(),"countdown-running",a.Vk());g.pu(a.container.element,"ytp-player-content",a.J.Df());g.Cr(a.overlay.element,{width:b.width+"px"});if(!a.Vk()){a.J.Df()?vob(a,Math.round(wob(a)/1E3)):vob(a);b=!!a.suggestion&&!!a.suggestion.Cs;var c=a.J.Df()||!b;
g.pu(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.pu(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.tG(a.B,a.J.Df());g.pu(a.element,"ytp-enable-w2w-color-transitions",xob(a))}},uob=function(a){var b=wob(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);vob(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Vk()?a.select(!0):a.Vk()&&a.D.start()},wob=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.KB;return-1===a||void 0===a?8E3:a}return 0<=a.J.Us()?a.J.Us():g.KJ(a.J.W().experiments,"autoplay_time")||1E4},xob=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},vob=function(a,b){b=void 0===b?-1:b;
a=a.j.Ha("ytp-autonav-endscreen-upnext-header");g.rf(a);if(0<=b){b=String(b);var c="Pr\u00f3ximo v\u00eddeo em $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Pr\u00f3ximo v\u00eddeo em $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.pf("Pr\u00f3ximo v\u00eddeo em $SECONDS".slice(0,d)));var e=g.of("span");g.ju(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Df(e,b);a.appendChild(e);a.appendChild(g.pf("Pr\u00f3ximo v\u00eddeo em $SECONDS".slice(d+c.length)));return}}g.Df(a,"Pr\u00f3ximo")},
p6=function(a,b){g.T.call(this,{I:"div",
Oa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},q6=function(a){g.T.call(this,{I:"div",
Oa:["ytp-upnext","ytp-player-content"],Y:{"aria-label":"{{aria_label}}"},X:[{I:"div",T:"ytp-cued-thumbnail-overlay-image",Y:{style:"{{background}}"}},{I:"span",T:"ytp-upnext-top",X:[{I:"span",T:"ytp-upnext-header",Aa:"Pr\u00f3ximo"},{I:"span",T:"ytp-upnext-title",Aa:"{{title}}"},{I:"span",T:"ytp-upnext-author",Aa:"{{author}}"}]},{I:"a",T:"ytp-upnext-autoplay-icon",Y:{role:"button",href:"{{url}}","aria-label":"Reproduzir pr\u00f3ximo v\u00eddeo"},X:[{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},X:[{I:"circle",T:"ytp-svg-autoplay-circle",Y:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",T:"ytp-svg-autoplay-ring",Y:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",T:"ytp-svg-fill",Y:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",T:"ytp-upnext-bottom",X:[{I:"span",T:"ytp-upnext-cancel"},{I:"span",T:"ytp-upnext-paused",
Aa:"Reprodu\u00e7\u00e3o autom\u00e1tica pausada"}]}]});this.api=a;this.cancelButton=null;this.G=this.Ha("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.du(this.TG,5E3,this);this.B=0;var b=this.Ha("ytp-upnext-cancel");this.cancelButton=new g.T({I:"button",Oa:["ytp-upnext-cancel-button","ytp-button"],Y:{tabindex:"0","aria-label":"Cancelar reprodu\u00e7\u00e3o autom\u00e1tica"},Aa:"Cancelar"});g.L(this,this.cancelButton);this.cancelButton.Ua("click",this.b1,
this);this.cancelButton.Ga(b);this.cancelButton&&this.api.zb(this.cancelButton.element,this,115129);g.L(this,this.D);this.api.zb(this.element,this,18788);b=this.Ha("ytp-upnext-autoplay-icon");this.V(b,"click",this.d1);this.api.zb(b,this,115130);this.BS();this.V(a,"autonavvisibility",this.BS);this.V(a,"mdxnowautoplaying",this.h8);this.V(a,"mdxautoplaycanceled",this.i8);g.pu(this.element,"ytp-upnext-mobile",this.api.W().B)},yob=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.KB;return-1===a||void 0===a?8E3:a}return 0<=a.api.Us()?a.api.Us():g.KJ(a.api.W().experiments,"autoplay_time")||1E4},zob=function(a,b){b=yob(a,b);
var c=Math,d=c.min;var e=(0,g.PD)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Vk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Vk()&&a.j.start()},r6=function(a){p6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.T({I:"div",T:"ytp-suggestion-panel",X:[{I:"div",Oa:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],Aa:"Mais v\u00eddeos"}]});this.S=new g.T({I:"div",T:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new n6(this.player);g.L(this,this.B);this.B.Ga(this.element);a.getVideoData().If?this.j=this.B:(this.j=new q6(a),g.rU(this.player,this.j.element,4),g.L(this,this.j));this.overlay=new g.T({I:"div",
T:"ytp-autonav-overlay-cancelled-state"});g.L(this,this.overlay);this.overlay.Ga(this.element);this.D=new g.$K(this);g.L(this,this.D);g.L(this,this.table);this.table.Ga(this.element);this.table.show();g.L(this,this.S);this.S.Ga(this.table.element);this.hide()},s6=function(a){var b=a.Df();
b!==a.G&&(a.G=b,a.player.ra("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},t6=function(a,b){g.T.call(this,{I:"button",
Oa:["ytp-watch-on-youtube-button","ytp-button"],Aa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.MZ();2===this.buttonType&&g.lu(this.element,"ytp-continue-watching-button");this.Ua("click",this.onClick);this.Ua("videodatachange",this.MZ);g.tG(this,!0)},u6=function(a,b){p6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.ub=b;this.J.zb(this.element,this,156943);this.watchButton=new t6(a,2);g.L(this,this.watchButton);this.watchButton.Ga(this.element);this.hide()},Aob=function(a){p6.call(this,a,"subscribecard-endscreen");
this.j=new g.T({I:"div",T:"ytp-subscribe-card",X:[{I:"img",T:"ytp-author-image",Y:{src:"{{profilePicture}}"}},{I:"div",T:"ytp-subscribe-card-right",X:[{I:"div",T:"ytp-author-name",Aa:"{{author}}"},{I:"div",T:"html5-subscribe-button-container"}]}]});g.L(this,this.j);this.j.Ga(this.element);var b=a.getVideoData();this.subscribeButton=new g.jW("Inscreva-se",null,"Cancelar assinatura",null,!0,!1,b.Gl,b.subscribed,"trailer-endscreen",null,a);g.L(this,this.subscribeButton);this.subscribeButton.Ga(this.j.Ha("html5-subscribe-button-container"));
this.V(a,"videodatachange",this.Sa);this.Sa();this.hide()},v6=function(a){var b=a.W(),c=g.tL||g.cS?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.T.call(this,{I:"a",Oa:e,Y:{href:"{{url}}",target:d?b.ea:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},X:[{I:"div",T:"ytp-videowall-still-image",Y:{style:"{{background}}"}},{I:"span",T:"ytp-videowall-still-info",Y:{"aria-hidden":"true"},X:[{I:"span",T:"ytp-videowall-still-info-bg",X:[{I:"span",T:"ytp-videowall-still-info-content",Y:c,X:[{I:"span",T:"ytp-videowall-still-info-title",Aa:"{{title}}"},
{I:"span",T:"ytp-videowall-still-info-author",Aa:"{{author_and_views}}"},{I:"span",T:"ytp-videowall-still-info-live",Aa:"Ao vivo"},{I:"span",T:"ytp-videowall-still-info-duration",Aa:"{{duration}}"}]}]}]},{I:"span",Oa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],Y:{"aria-hidden":"true"},X:[{I:"span",T:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",T:"ytp-videowall-still-listlabel-length",X:[" (",{I:"span",Aa:"{{playlist_length}}"},")"]}]},{I:"span",Oa:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],Y:{"aria-hidden":"true"},X:[{I:"span",T:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",T:"ytp-videowall-still-listlabel-length",Aa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.$K(this);g.L(this,this.j);this.Ua("click",this.onClick);this.Ua("keypress",this.onKeyPress);this.j.V(a,"videodatachange",this.onVideoDataChange);a.qg(this.element,this);this.onVideoDataChange()},w6=function(a){p6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.S=!1;this.ea=null;this.B=new g.$K(this);g.L(this,this.B);this.K=new g.du(function(){g.lu(b.element,"ytp-show-tiles")},0);
g.L(this,this.K);var c=new g.T({I:"button",Oa:["ytp-button","ytp-endscreen-previous"],Y:{"aria-label":"Anterior"},X:[g.zG()]});g.L(this,c);c.Ga(this.element);c.Ua("click",this.l1,this);this.table=new g.qG({I:"div",T:"ytp-endscreen-content"});g.L(this,this.table);this.table.Ga(this.element);c=new g.T({I:"button",Oa:["ytp-button","ytp-endscreen-next"],Y:{"aria-label":"Pr\u00f3ximo"},X:[g.AG()]});g.L(this,c);c.Ga(this.element);c.Ua("click",this.j1,this);a.getVideoData().If?this.j=new n6(a,!0):this.j=
new q6(a);g.L(this,this.j);g.rU(this.player,this.j.element,4);a.zb(this.element,this,158789);this.hide()},x6=function(a){return g.sU(a.player)&&a.uC()&&!a.D},y6=function(a){var b=a.Df();
b!==a.S&&(a.S=b,a.player.ra("autonavvisibility"))},z6=function(a){p6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new t6(a,1);g.L(this,this.watchButton);this.watchButton.Ga(this.element);g.Fcb(a)&&(this.j=new g.p2(a,g.dU(a)),g.L(this,this.j),this.B=new g.T({I:"div",Oa:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],Y:{tabIndex:"-1"},X:[this.j]}),g.L(this,this.B),this.j.Ga(this.B.element),this.B.Ga(this.element));a.zb(this.element,this,156914);this.hide()},Eob=function(a){g.xV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.$K(this);g.L(this,this.listeners);var c=a.W(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.PC(g.mS(c))&&d&&!g.nU(a)?(this.B=!0,this.endScreen=new u6(a,g.dU(a))):g.oU(a)?this.endScreen=new z6(a):Bob(a)?(this.D=!0,Cob(this),this.j?this.endScreen=new r6(a):this.endScreen=new w6(a)):c.eh?this.endScreen=new Aob(a):this.endScreen=new p6(a);g.L(this,this.endScreen);g.rU(a,this.endScreen.element,4);Dob(this);
this.listeners.V(a,"videodatachange",this.onVideoDataChange,this);this.listeners.V(a,g.qK("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.V(a,g.rK("endscreen"),function(e){b.onCueRangeExit(e)})},Cob=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Ol&&a.C===b.If)return!1;a.j=b.Ol;a.C=b.If;return!0},Bob=function(a){a=a.W();
return a.Nd&&!a.eh},Dob=function(a){a.player.nf("endscreen");
var b=a.player.getVideoData();b=new g.pK(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.pK(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.yf([b,c])};
g.YX.prototype.eB=g.ba(37,function(a){this.fQ!==a&&(this.fQ=a,this.Fl())});
g.PW.prototype.Jr=g.ba(36,function(a){this.j!==a&&(this.j=a,this.Sa())});
g.YX.prototype.Jr=g.ba(35,function(a){this.shareButton&&this.shareButton.Jr(a)});
g.KW.prototype.Ir=g.ba(34,function(a){this.j!==a&&(this.j=a,this.Sa())});
g.YX.prototype.Ir=g.ba(33,function(a){this.overflowButton&&this.overflowButton.Ir(a)});
g.aW.prototype.zF=g.ba(32,function(a){this.gQ!==a&&(this.gQ=a,this.Yp())});
g.jU.prototype.Us=g.ba(6,function(){return this.app.Us()});
g.R0.prototype.Us=g.ba(5,function(){return this.getVideoData().oU});g.w(m6,g.T);m6.prototype.select=function(){this.J.Ao(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.SC||void 0)&&this.J.wb(this.element)};
m6.prototype.onClick=function(a){g.LU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
m6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.w(n6,g.T);g.k=n6.prototype;g.k.cG=function(a){this.suggestion!==a&&(this.suggestion=a,l6(this.j,a),this.playButton.updateValue("url",this.suggestion.Sk()),o6(this))};
g.k.Vk=function(){return 0<this.C};
g.k.lB=function(){this.Vk()||(this.C=Date.now(),uob(this),tob(this.J,wob(this)),g.pu(this.J.getRootNode(),"countdown-running",this.Vk()))};
g.k.Hw=function(){this.Qr();uob(this);var a=this.j.Ha("ytp-autonav-endscreen-upnext-header");a&&g.Df(a,"Pr\u00f3ximo")};
g.k.Qr=function(){this.Vk()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Qr()};
g.k.AS=function(a){g.LU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.wb(this.playButton.element):a.currentTarget===this.j.Ha("ytp-autonav-endscreen-link-container")&&(a=this.j.Ha("ytp-autonav-endscreen-link-container"),this.J.Ya(a,!0),this.J.wb(a)),this.select())};
g.k.Z0=function(){this.J.wb(this.cancelButton.element);g.lU(this.J,!0);this.G&&this.J.Ta("innertubeCommand",this.G)};
g.k.onVideoDataChange=function(a,b){var c;this.G=null==(c=b.a5)?void 0:c.command};
g.k.w7=function(a){if(xob(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.sH(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.sH(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.sH(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.sH(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.sH(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.sH(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.pu(this.element,"ytp-w2w-animate",!0)}};
g.k.Y0=function(a){this.J.N("web_autonav_color_transition")&&2!==a&&g.pu(this.element,"ytp-w2w-animate",!1)};
g.k.zS=function(){var a=this.J.Df();this.K&&this.Ib!==a&&g.tG(this,a);o6(this);this.J.Ya(this.container.element,a);this.J.Ya(this.cancelButton.element,a);this.J.Ya(this.j.Ha("ytp-autonav-endscreen-link-container"),a);this.J.Ya(this.playButton.element,a)};
g.k.zg=function(a){return 400>a.width||459>a.height};g.w(p6,g.T);g.k=p6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.uC=function(){return!1};
g.k.Df=function(){return!1};
g.k.kX=function(){return!1};g.w(q6,g.T);g.k=q6.prototype;g.k.TG=function(){this.notification&&(this.D.stop(),this.Rc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.cG=function(a){this.suggestion=a;l6(this,a,"hqdefault.jpg")};
g.k.BS=function(){g.tG(this,this.api.Df());this.api.Ya(this.element,this.api.Df());this.api.Ya(this.Ha("ytp-upnext-autoplay-icon"),this.api.Df());this.cancelButton&&this.api.Ya(this.cancelButton.element,this.api.Df())};
g.k.q8=function(){window.focus();this.TG()};
g.k.lB=function(a){var b=this;this.Vk()||(g.VE("a11y-announce","Pr\u00f3ximo "+this.suggestion.title),this.B=(0,g.PD)(),this.j=new g.du(function(){zob(b,a)},25),zob(this,a),tob(this.api,yob(this,a)));
g.nu(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.T.prototype.hide.call(this)};
g.k.Vk=function(){return!!this.j};
g.k.Hw=function(){this.Qr();this.B=(0,g.PD)();zob(this);g.lu(this.element,"ytp-upnext-autoplay-paused")};
g.k.Qr=function(){this.Vk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.W().N("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.TG(),this.notification=new Notification("Pr\u00f3ximo",{body:this.suggestion.title,icon:this.suggestion.Lg()}),this.C=this.V(this.notification,"click",this.q8),this.D.start())}this.Qr();this.api.nextVideo(!1,a)};
g.k.d1=function(a){!g.Cf(this.cancelButton.element,a.target)&&g.LU(a,this.api)&&(this.api.Df()&&this.api.wb(this.Ha("ytp-upnext-autoplay-icon")),this.select())};
g.k.b1=function(){this.api.Df()&&this.cancelButton&&this.api.wb(this.cancelButton.element);g.lU(this.api,!0)};
g.k.h8=function(a){this.api.getPresentingPlayerType();this.show();this.lB(a)};
g.k.i8=function(){this.api.getPresentingPlayerType();this.Qr();this.hide()};
g.k.Ba=function(){this.Qr();this.TG();g.T.prototype.Ba.call(this)};g.w(r6,p6);g.k=r6.prototype;g.k.create=function(){p6.prototype.create.call(this);this.D.V(this.player,"appresize",this.NB);this.D.V(this.player,"onVideoAreaChange",this.NB);this.D.V(this.player,"videodatachange",this.onVideoDataChange);this.D.V(this.player,"autonavchange",this.CS);this.D.V(this.player,"autonavcancel",this.e1);this.onVideoDataChange()};
g.k.show=function(){p6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.lU(this.player,!1);g.sU(this.player)&&this.uC()&&!this.C?(s6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.lB():3===this.videoData.autonavState&&this.j.Hw()):(g.lU(this.player,!0),s6(this));this.NB()};
g.k.hide=function(){p6.prototype.hide.call(this);this.j.Hw();s6(this)};
g.k.NB=function(){var a=this.player.Rk(!0,this.player.isFullscreen());s6(this);o6(this.B);g.pu(this.element,"ytp-autonav-cancelled-small-mode",this.zg(a));g.pu(this.element,"ytp-autonav-cancelled-tiny-mode",this.tI(a));g.pu(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Cr(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.pu(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.N("web_player_autonav_empty_suggestions_fix")){var b=g.sT(this.videoData);b&&(this.j.cG(b),this.j!==this.B&&this.B.cG(b))}if(a&&a.length)for(b=0;b<Fob.length;++b){var c=Fob[b];if(a&&a[c]){this.videos[b]=new m6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,l6(d,c));g.L(this,this.videos[b]);this.videos[b].Ga(this.S.element)}}this.NB()}};
g.k.CS=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Qr(),this.Ib&&this.NB()):(this.K=!0,this.Df()&&(2===a?this.j.lB():3===a&&this.j.Hw()))};
g.k.e1=function(a){a?this.CS(1):(this.C=null,this.K=!1)};
g.k.uC=function(){return 1!==this.videoData.autonavState};
g.k.zg=function(a){return(910>a.width||459>a.height)&&!this.tI(a)&&!(400>=a.width||360>=a.height)};
g.k.tI=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Df=function(){return this.Ib&&g.sU(this.player)&&this.uC()&&!this.C};
var Fob=[1,3,2,4];g.w(t6,g.T);g.k=t6.prototype;g.k.MZ=function(){switch(this.buttonType){case 1:var a="Assista outra vez no YouTube";var b=156915;break;case 2:a="Continue assistindo no YouTube";b=156942;break;default:a="Continue assistindo no YouTube",b=156942}this.update({content:a});this.J.Xj(this.element)&&this.J.IC(this.element);this.J.zb(this.element,this,b)};
g.k.onClick=function(a){this.J.N("web_player_log_click_before_generating_ve_conversion_params")&&this.J.wb(this.element);g.MU(this.getVideoUrl(),this.J,a);this.J.N("web_player_log_click_before_generating_ve_conversion_params")||this.J.wb(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.W();if(g.dS(b)||g.lS(b)){var c={};g.dS(b)&&g.bU(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.EP(c,b);a=g.Fl(a,c)}return a};
g.k.Ya=function(){this.J.Ya(this.element,this.Ib&&this.ma)};
g.k.show=function(){g.T.prototype.show.call(this);this.Ya()};
g.k.hide=function(){g.T.prototype.hide.call(this);this.Ya()};
g.k.pc=function(a){g.T.prototype.pc.call(this,a);this.Ya()};g.w(u6,p6);u6.prototype.show=function(){3!==this.player.getPlayerState()&&(p6.prototype.show.call(this),this.ub.eB(!0),this.ub.Jr(!0),this.J.W().Vd||this.ub.Ir(!0),this.J.Ya(this.element,!0),this.watchButton.pc(!0))};
u6.prototype.hide=function(){p6.prototype.hide.call(this);this.ub.eB(!1);this.ub.Jr(!1);this.ub.Ir(!1);this.J.Ya(this.element,!1);this.watchButton.pc(!1)};g.w(Aob,p6);Aob.prototype.Sa=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Gl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.w(v6,g.T);v6.prototype.select=function(){this.api.Ao(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.SC||void 0)&&this.api.wb(this.element)};
v6.prototype.onClick=function(a){if(g.dS(this.api.W())&&this.api.N("web_player_log_click_before_generating_ve_conversion_params")){this.api.wb(this.element);var b=this.suggestion.Sk(),c={};g.eSa(this.api,c,"emb_rel_end");b=g.Fl(b,c);g.MU(b,this.api,a)}else g.LU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
v6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
v6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.W();this.B=a.Td?!1:b.D};g.w(w6,p6);g.k=w6.prototype;g.k.create=function(){p6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.bq();this.B.V(this.player,"appresize",this.bq);this.B.V(this.player,"onVideoAreaChange",this.bq);this.B.V(this.player,"videodatachange",this.onVideoDataChange);this.B.V(this.player,"autonavchange",this.ZK);this.B.V(this.player,"autonavcancel",this.f1);a=this.videoData.autonavState;a!==this.ea&&this.ZK(a);this.B.V(this.element,"transitionend",this.G9)};
g.k.destroy=function(){g.dD(this.B);g.tb(this.stills);this.stills=[];p6.prototype.destroy.call(this);g.nu(this.element,"ytp-show-tiles");this.K.stop();this.ea=this.videoData.autonavState};
g.k.uC=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Ib;p6.prototype.show.call(this);g.nu(this.element,"ytp-show-tiles");this.player.W().B?g.fu(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.lU(this.player,!1);x6(this)?(y6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.lB():3===this.videoData.autonavState&&this.j.Hw()):(g.lU(this.player,!0),y6(this));a!==this.Ib&&this.player.Ya(this.element,!0)};
g.k.hide=function(){var a=this.Ib;p6.prototype.hide.call(this);this.j.Hw();y6(this);a!==this.Ib&&this.player.Ya(this.element,!1)};
g.k.G9=function(a){a.target===this.element&&this.bq()};
g.k.bq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.sT(d)];if(e.length){g.lu(this.element,"ytp-endscreen-paginate");var f=this.J.Rk(!0,this.J.isFullscreen());if(a=g.dU(this.J))a=a.Ng()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,v=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&v)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(v)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.Mr(f,n,p);g.Cr(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.cG(g.sT(this.videoData));this.j instanceof
n6&&o6(this.j);g.pu(this.element,"ytp-endscreen-takeover",x6(this));y6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.me(q+this.C,c),0!==t){r=this.stills[h];r||(r=new v6(this.player),this.stills[h]=r,f.appendChild(r.element));v=Math.floor(p*m/b);var x=Math.floor(n*l/a),C=Math.floor(p*(m+t)/b)-v-4,G=Math.floor(n*(l+t)/a)-x-4;g.Ir(r.element,x,v);g.Mr(r.element,G,C);g.Cr(r.element,"transitionDelay",
(m+l)/20+"s");g.pu(r.element,"ytp-videowall-still-mini",1===t);g.pu(r.element,"ytp-videowall-still-large",2<t);t=Math.max(G,C);g.pu(r.element,"ytp-videowall-still-round-large",256<=t);g.pu(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.pu(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.W(),v=g.ku(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",l6(r,q,v),g.dS(t)&&!r.api.N("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Sk(),v={},g.bU(r.api,"addEmbedsConversionTrackingParams",[v]),t=g.Fl(t,g.EP(v,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.Gg(r.element,q));h++}f.ariaBusy="false";g.pu(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.Af(a.element),g.sb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.C=0,this.videoData=a,this.bq())};
g.k.j1=function(){this.C+=this.stills.length;this.bq()};
g.k.l1=function(){this.C-=this.stills.length;this.bq()};
g.k.kX=function(){return this.j.Vk()};
g.k.ZK=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.Qr(),this.Ib&&this.bq()):(this.G=!0,this.Ib&&x6(this)&&(2===a?this.j.lB():3===a&&this.j.Hw()))};
g.k.f1=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.Ya(this.stills[a].element,!0);this.ZK(1)}else this.D=null,this.G=!1;this.bq()};
g.k.Df=function(){return this.Ib&&x6(this)};g.w(z6,p6);z6.prototype.ED=function(){var a;return null==(a=this.j)?void 0:a.ED()};
z6.prototype.show=function(){if(3!==this.player.getPlayerState()){p6.prototype.show.call(this);var a=this.B;if(a){var b=this.j.ED();g.pu(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.dU(this.player))||c.zF(!0);this.player.Ya(this.element,!0);this.watchButton.pc(!0)}};
z6.prototype.hide=function(){p6.prototype.hide.call(this);var a;null==(a=g.dU(this.player))||a.zF(!1);this.player.Ya(this.element,!1);this.watchButton.pc(!1)};g.w(Eob,g.xV);g.k=Eob.prototype;g.k.nu=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((g.oU(this.player)||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.sT(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!Bob(this.player)||d;a=a.sj||g.lS(a.Ka);c=this.player.dD();return d&&!a&&!c&&!b};
g.k.Df=function(){return this.endScreen.Df()};
g.k.p6=function(){return this.Df()?this.endScreen.kX():!1};
g.k.Ba=function(){this.player.nf("endscreen");g.xV.prototype.Ba.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.Eb().Ue.get("heartbeat"),d=g.sT(a);!d||b.videoId!==d.videoId||a.uS?(this.player.Ao(b.videoId,void 0,void 0,!0,!0,b),c&&c.BI("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.xV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.xV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.nu()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Dob(this);this.D&&Cob(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new r6(this.player):this.endScreen=new w6(this.player),g.L(this,this.endScreen),g.rU(this.player,this.endScreen.element,4))};g.wV("endscreen",Eob);})(_yt_player);