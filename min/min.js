if(!localStorage.length){var configScript=document.createElement("script");configScript.src="config.js";document.head.appendChild(configScript)}var core,style;window.addEventListener("load",function init(){core=new Core();style=new Style();new SearchBox();new PictureBox();new Menu("links")},false);function Core(){var d=this,c=document.getElementById("settings"),j="",g;function h(){if(!localStorage.length){i()}else{g={}}d.addSettingsButton("reset","reset",d.resetConfig)}this.getConfig=function k(m){if(!(m in g)){g[m]=JSON.parse(localStorage[m])}return g[m]};this.setConfig=function l(m,n){g[m]=n;localStorage[m]=JSON.stringify(n)};this.resetConfig=function e(){localStorage.clear();window.location.reload(true)};this.modLoad=function f(n,o){var m=document.createElement("script");document.head.appendChild(m);m.src=n+".js";m.className="mod-"+n;if(o!==null){m.addEventListener("load",o,false)}};this.styleLoad=function a(n){var m=document.createElement("link");m.rel="stylesheet";m.href=n+".css";document.head.appendChild(m)};this.addSettingsButton=function b(n,o,p){var m=document.createElement("a");m.innerHTML=n;c.appendChild(m);m.addEventListener("click",p,false);if(o!=j){j=o;o+=" first-of-class"}m.className=o};function i(){g=config;for(var m in g){localStorage[m]=JSON.stringify(g[m])}}h()};function Style(){var d=this,c=["","white"];this.set=function b(e){var f=c.indexOf(e);if(f>-1){document.body.dataset.styleId=f;document.body.className=e}return d};this.cycle=function a(){document.body.className=c[++document.body.dataset.styleId%c.length];return d};document.body.dataset.styleId=0;document.body.className=c[0];core.addSettingsButton("style","style",d.cycle)};function SearchBox(){var g=this,e=document.getElementById("searchInput"),f=document.getElementById("searchButtons"),a=core.getConfig("engines");function c(){d();window.addEventListener("click",function(){e.focus()},false)}function b(j){var k=e.value.trim(),i=/^((https?)|(ftp)):\/\//i,h=/^(([a-z0-9-]+\.)+((de)|(com)|(org)|(net)|(me)|(info)|(im)|(fr)|(co\.uk)|(io)|(cc)))(\/.*)?$/i,l=/^r\/\w+$/;if(i.test(k)){window.location.replace(k);return false}if(h.test(k)){window.location.replace("http://"+k);return false}if(l.test(k)){window.location.replace("http://www.reddit.com/"+k);return false}document.getElementById("search").setAttribute("action",a[j].url);e.setAttribute("name",a[j].param);return true}function d(){var j;for(var h=0;h<a.length;h++){j=document.createElement("button");j.innerHTML=a[h].name;j.setAttribute("formaction",a[h].url);(function(k){j.addEventListener("click",function(i){if(!b(k)){i.preventDefault()}},false)})(h);f.appendChild(j)}}c()};function Menu(a){var f=this,e=document.getElementById(a),b=document.getElementById("logo"),d=core.getConfig(a);function c(){var g;for(var h=0;h<d.length;h++){g=document.createElement("a");g.innerHTML=d[h].name;g.setAttribute("href",d[h].url);e.appendChild(g)}b.setAttribute("href",d[0].url)}c()};function PictureBox(){var f=this,o=50,a=document.getElementById("main"),i=document.getElementById("myImage"),b=document.getElementById("imgNavigation"),d=document.getElementById("search"),j=core.getConfig("collections"),c=[],g=[],h=0,e=new Image();function k(){for(var p=0;p<j.length;p++){if(j[p].active){m(p)}(function(q){core.addSettingsButton(j[q].name,"collection",function(){m(q)})})(p)}i.addEventListener("load",n,false);window.addEventListener("resize",n,false);i.addEventListener("click",f.cycleImage,false);i.addEventListener("DOMMouseScroll",function(q){if(q.detail<0){f.cycleImage(1)}else{f.cycleImage(-1)}},false);b.addEventListener("DOMMouseScroll",function(q){if(q.detail<0){f.cycleImage(1)}else{f.cycleImage(-1)}},false);n()}function m(q){c=core.getConfig("pictures_"+j[q].name);b.innerHTML="";for(var p=0;p<c.length;p++){g[p]=document.createElement("a");(function(r){g[r].addEventListener("click",function(){l(r)},false)})(p);b.appendChild(document.createElement("li")).appendChild(g[p])}l(Math.floor((Math.random()*c.length)));for(var p=0;p<j.length;p++){j[p].active=p===q}core.setConfig("collections",j)}this.cycleImage=function(p){if(isNaN(p)){p=1}l((h+p+c.length)%c.length)};function l(p){i.setAttribute("src",c[p].src);i.setAttribute("title","#"+p+"     "+c[p].src);style.set(c[p].style);g[h].className="";g[p].className="active";n();e.src=c[(p+1)%c.length].src;h=p}function n(){var u=a.offsetHeight,r=a.offsetWidth,p=d.offsetHeight,t=d.offsetWidth,w=i.height,v=i.width,q=i.height/i.width,x=0,y,s;if((r-t-3*o)*q>Math.min(w,u-p-3*o)){a.className="horizontalLayout";y=u-2*o;s=r-t-3*o}else{a.className="verticalLayout";y=u-p-3*o;s=r-2*o;x=(u-p-Math.min(w,y)-o)/2}i.style.maxHeight=Math.floor(y)+"px";i.style.maxWidth=Math.floor(s)+"px";d.style.marginTop=Math.floor(x)+"px"}k()};