self=typeof window!=="undefined"?window:typeof WorkerGlobalScope!=="undefined"&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i;var t=self.Prism={util:{encode:function(e){if(e instanceof n){return new n(e.type,t.util.encode(e.content),e.alias)}else if(t.util.type(e)==="Array"){return e.map(t.util.encode)}else{return e.replace(/&/g,"&").replace(/</g,"&lt;").replace(/\u00a0/g," ")}},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e){if(e.hasOwnProperty(i)){r[i]=t.util.clone(e[i])}}return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n){r[i]=n[i]}return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e];var o={};for(var u in s){if(s.hasOwnProperty(u)){if(u==n){for(var a in r){if(r.hasOwnProperty(a)){o[a]=r[a]}}}o[u]=s[u]}}return i[e]=o},DFS:function(e,n,r){for(var i in e){if(e.hasOwnProperty(i)){n.call(e,i,e[i],r||i);if(t.util.type(e[i])==="Object"){t.languages.DFS(e[i],n)}else if(t.util.type(e[i])==="Array"){t.languages.DFS(e[i],n,i)}}}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];){t.highlightElement(s,e===true,n)}},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className)){a=a.parentNode}if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u){return}r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;if(/pre/i.test(a.nodeName)){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o}var f=r.textContent;if(!f){return}var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){var s=t.tokenize(e,r);return n.stringify(t.util.encode(s),i)},tokenize:function(e,n,r){var i=t.Token;var s=[e];var o=n.rest;if(o){for(var u in o){n[u]=o[u]}delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u]){continue}var a=n[u];a=t.util.type(a)==="Array"?a:[a];for(var f=0;f<a.length;++f){var l=a[f],c=l.inside,h=!!l.lookbehind,p=0,d=l.alias;l=l.pattern||l;for(var v=0;v<s.length;v++){var m=s[v];if(s.length>e.length){break e}if(m instanceof i){continue}l.lastIndex=0;var g=l.exec(m);if(g){if(h){p=g[1].length}var y=g.index-1+p,g=g[0].slice(p),b=g.length,w=y+b,E=m.slice(0,y+1),S=m.slice(w+1);var x=[v,1];if(E){x.push(E)}var T=new i(u,c?t.tokenize(g,c):g,d);x.push(T);if(S){x.push(S)}Array.prototype.splice.apply(s,x)}}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length){return}for(var i=0,s;s=r[i++];){s(n)}}}};var n=t.Token=function(e,t,n){this.type=e;this.content=t;this.alias=n};n.stringify=function(e,r,i){if(typeof e=="string"){return e}if(Object.prototype.toString.call(e)=="[object Array]"){return e.map(function(t){return n.stringify(t,r,e)}).join("")}var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};if(s.type=="comment"){s.attributes["spellcheck"]="true"}if(e.alias){var o=t.util.type(e.alias)==="Array"?e.alias:[e.alias];Array.prototype.push.apply(s.classes,o)}t.hooks.run("wrap",s);var u="";for(var a in s.attributes){u+=a+'="'+(s.attributes[a]||"")+'"'}return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+u+">"+s.content+"</"+s.tag+">"};if(!self.document){if(!self.addEventListener){return self.Prism}self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i,t.languages[r]))));self.close()},false);return self.Prism}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;if(document.addEventListener&&!r.hasAttribute("data-manual")){document.addEventListener("DOMContentLoaded",t.highlightAll)}}return self.Prism}();if(typeof module!=="undefined"&&module.exports){module.exports=Prism}Prism.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/\&#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){if(e.type==="entity"){e.attributes["title"]=e.content.replace(/&/,"&")}});Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,"function":/[-a-z0-9]+(?=\()/ig};if(Prism.languages.markup){Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/ig,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}})}Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:true}],string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,lookbehind:true,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:true}});if(Prism.languages.markup){Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/ig,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}})}(function(){if(!self.Prism||!self.document||!document.querySelector){return}var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var n=t.getAttribute("data-src");var r=(n.match(/\.(\w+)$/)||[,""])[1];var i=e[r]||r;var s=document.createElement("code");s.className="language-"+i;t.textContent="";s.textContent="Loading…";t.appendChild(s);var o=new XMLHttpRequest;o.open("GET",n,true);o.onreadystatechange=function(){if(o.readyState==4){if(o.status<400&&o.responseText){s.textContent=o.responseText;Prism.highlightElement(s)}else if(o.status>=400){s.textContent="✖ Error "+o.status+" while fetching file: "+o.statusText}else{s.textContent="✖ Error: File does not exist or is empty"}}};o.send(null)})})()