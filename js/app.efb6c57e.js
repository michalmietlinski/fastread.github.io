(function(t){function e(e){for(var o,i,a=e[0],u=e[1],c=e[2],l=0,p=[];l<a.length;l++)i=a[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function i(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ac854f9b"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(t),s=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+s+")");i.type=o,i.request=s,n[1](i)}r[t]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/fastread/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0681":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAqklEQVR4AWPABkbBKDCilkF/GHoYOKlh0H8gfMDgSAWDoHAxgyCFBsHha4ZYSg1CwH0M8pQZFMDwDMr6ylDCwES2QUCaj2Eqwz8o7zyDAbkGQYAFwzUo/w9DNwMnOQbBACtDDcNPIJ/0RAHVhAxUGQ4hJwryDVJCMUiEXK9VMfyg3GsmsMCG5EByo38KRvRTniAHNovA4RuGOOoUIyKDo2CDRDR9C/9RMAoAasKFQdavMVwAAAAASUVORK5CYII="},"07bb":function(t,e,n){},1:function(t,e){},2:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"column-wrapper"},[n("div",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.copy.menu?t.copy.menu.home:""))])],1),n("li",[n("router-link",{attrs:{to:"/timer"}},[t._v(t._s(t.copy.menu?t.copy.menu.timer:""))])],1),n("li",[n("router-link",{attrs:{to:"/jumper"}},[t._v(t._s(t.copy.menu?t.copy.menu.jumper:""))])],1),n("li",[n("router-link",{attrs:{to:"/faq"}},[t._v(t._s(t.copy.menu?t.copy.menu.faq:""))])],1),n("li",[n("router-link",{attrs:{to:"/contact"}},[t._v(t._s(t.copy.menu?t.copy.menu.contact:""))])],1)])]),n("div",{staticClass:"app-wrapper"},[n("transition",{attrs:{name:"router-anim","enter-active-class":"animated bounceInLeft"}},[n("router-view")],1)],1)])])},s=[],i=n("cebc"),a=n("2f62"),u={name:"appView",data:function(){return{showSettings:!1}},computed:Object(i["a"])({},Object(a["b"])(["language","availableLanguages","copy","styles","availableThemes","theme"])),methods:{setLanguage:function(t){this.$store.dispatch("setLanguage",t.target.value)},setTheme:function(t){this.$store.dispatch("setTheme",t.target.value)}},watch:{styles:function(t){}},mounted:function(){window.addEventListener("load",function(){})}},c=u,l=(n("5c0b"),n("b0a0"),n("2877")),d=Object(l["a"])(c,r,s,!1,null,null,null),p=d.exports,m=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Main")],1)},f=[],g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-main"},[o("div",{staticClass:"introduction"},[o("h2",[t._v(t._s(t.copy.section?t.copy.section.main.header:""))]),o("p",[t._v(t._s(t.copy.section?t.copy.section.main.describtion:""))])]),o("div",{staticClass:"inputtext"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.texttoread,expression:"texttoread"}],staticClass:"textareaMain",attrs:{autofocus:""},domProps:{value:t.texttoread},on:{change:function(e){return t.restart()},input:function(e){e.target.composing||(t.texttoread=e.target.value)}}})]),o("div",{staticClass:"container_main_container_buttons"},[o("div",{staticClass:"container_buttons"},[o("button",{on:{click:function(e){return t.start()}}},[o("img",{staticClass:"controlsImg play",attrs:{"blank-color":"red",title:"play",src:n("0681")}}),t._v("\n        "+t._s(t.copy.menu?t.copy.controls.start:"")+"\n      ")]),o("button",{on:{click:function(e){return t.stop()}}},[o("img",{staticClass:"controlsImg",attrs:{title:"stop",src:n("e7e7")}}),t._v("\n        "+t._s(t.copy.menu?t.copy.controls.stop:"")+"\n      ")]),o("button",{on:{click:function(e){return t.restart()}}},[o("img",{staticClass:"controlsImg",attrs:{title:"repeat",src:n("8180")}}),t._v(" "+t._s(t.copy.menu?t.copy.controls.restart:"")+"\n      ")]),o("button",{staticStyle:{display:"none"},on:{click:function(e){return t.download()}}},[o("img",{staticClass:"controlsImg",attrs:{title:"download",src:n("6369")}}),t._v("\n        Download\n      ")])]),o("div",{staticClass:"container_controls"},[o("div",{staticClass:"controls"},[o("div",{staticClass:"column"},[o("div",{staticClass:"row"},[t._v("\n            "+t._s(t.copy.menu?t.copy.controls.speed:"")+"\n          ")]),o("div",{staticClass:"row"},[t._v("\n            "+t._s(t.copy.menu?t.copy.controls.words:"")+"\n          ")]),o("div",{staticClass:"row"},[t._v("\n            "+t._s(t.copy.menu?t.copy.controls.rows:"")+"\n          ")])]),o("div",{staticClass:"column"},[o("div",{staticClass:"row"},[o("input",{attrs:{type:"number"},domProps:{value:t.speed},on:{change:t.updateSpeed}}),o("span",{on:{click:function(e){return t.addSpeed(50)}}},[t._v(" +50 ")]),o("span",{on:{click:function(e){return t.addSpeed(100)}}},[t._v(" +100")])]),o("div",{staticClass:"row"},[o("input",{attrs:{type:"number"},domProps:{value:t.wordperline},on:{change:t.updateWordperline}}),o("span",{on:{click:function(e){return t.addWords(5)}}},[t._v(" +5 ")]),o("span",{on:{click:function(e){return t.addWords(-5)}}},[t._v(" -5")])]),o("div",{staticClass:"row"},[o("input",{attrs:{type:"number"},domProps:{value:t.numberofrows},on:{change:t.updateNumberofrows}}),o("span",{on:{click:function(e){return t.addRows(1)}}},[t._v(" +1 ")]),o("span",{on:{click:function(e){return t.addRows(-1)}}},[t._v(" -1")])])])])])]),o("br"),o("div",{staticClass:"resulttext centered"},t._l(t.readtext.split("$#$"),function(e){return o("h1",{key:e},[t._v(t._s(e))])}),0)])},w=[],b=(n("ac6a"),n("e814")),v=n.n(b),y=(n("28a5"),n("b0f0")),A=n.n(y),S={name:"Main",data:function(){return{partialtext:"",readtext:"Text to display",wordcount:0,splitted:[],currentplay:"",playing:!1,availableArticles:[]}},computed:Object(i["a"])({},Object(a["b"])(["speed","wordperline","numberofrows","copy"]),{texttoread:{get:function(){return this.$store.state.texttoread},set:function(t){this.$store.dispatch("setText",t),this.partialtext=t.split(" "),this.wordcount=0}}}),methods:{reading:function(t){var e=this;if(this.wordperline>0&&this.wordcount<this.splitted.length&&this.currentplay===t){if(this.playing=!0,this.readtext=this.splitted[this.wordcount],this.numberofrows>1)for(var n=1;n<v()(this.numberofrows,10);n++)this.splitted[this.wordcount+n]&&(this.readtinputteext=this.readtext.concat("$#$"),this.readtext=this.readtinputteext.concat(this.splitted[this.wordcount+n]));setTimeout(function(){e.wordcount=e.wordcount+v()(e.numberofrows,10),e.reading(t)},this.wordperline*this.numberofrows*60*1e3/this.speed)}},restart:function(){this.wordcount=0;var t=this.texttoread.split(/[ ,\s]+/),e=t.length;this.splitted=[],this.currentplay=new Date;for(var n=0;n<e/this.wordperline;n++)this.splitted[n]=t.splice(0,this.wordperline).join(" ");this.reading.bind(this),this.reading(this.currentplay),sessionStorage.setItem("wordperline",this.wordperline),sessionStorage.setItem("numberofrows",this.numberofrows)},stop:function(){this.currentplay=new Date,this.playing=!1},start:function(){this.reading.bind(this),!this.playing&&this.wordcount<this.splitted.length?this.reading(this.currentplay):this.restart()},updateSpeed:function(t){this.$store.dispatch("setSpeed",t.target.value),this.restart.bind(this),this.reading(this.restart)},updateWordperline:function(t){this.$store.dispatch("setWordperline",t.target.value),this.restart.bind(this),this.reading(this.restart)},updateNumberofrows:function(t){this.$store.dispatch("setNumberofrows",t.target.value),this.restart.bind(this),this.reading(this.restart)},addSpeed:function(t){this.$store.dispatch("setSpeed",v()(this.speed,10)+v()(t,10))},addWords:function(t){this.$store.dispatch("setWordperline",v()(this.wordperline,10)+v()(t,10)>=1?v()(this.wordperline,10)+v()(t,10):1)},addRows:function(t){this.$store.dispatch("setNumberofrows",v()(this.numberofrows,10)+v()(t,10)>=1?v()(this.numberofrows,10)+v()(t,10):1)},download:function(){var t=this,e=new A.a,n="https://cors-anywhere.herokuapp.com/";e.parseURL("".concat(n,"https://www.reddit.com/.rss"),function(e,n){console.log(n.title),n.items.forEach(function(e){console.log(e),t.availableArticles.push(e)})})}}},k=S,_=Object(l["a"])(k,g,w,!1,null,null,null),T=_.exports,x={name:"home",components:{Main:T}},E=x,C=Object(l["a"])(E,h,f,!1,null,null,null),j=C.exports;o["a"].use(m["a"]);var O=new m["a"]({routes:[{path:"/",name:"home",component:j},{path:"/timer",name:"timer",component:function(){return n.e("about").then(n.bind(null,"69a5"))}},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/faq",name:"faq",component:function(){return n.e("about").then(n.bind(null,"10c2"))}},{path:"/jumper",name:"jumperView",component:function(){return n.e("about").then(n.bind(null,"7603"))}}]}),R=n("5176"),P=n.n(R),I=n("f499"),M=n.n(I),W=(n("6762"),n("2fdb"),{English:{menu:{faq:"FAQ",contact:"Contact",jumper:"Jumper",timer:"Timer",home:"Home"},section:{counter:{header:"Check your reading speed",describtion:"Just input the text, click on start, and as soon as you are done with reading, click it again. You will see your results and progress from previous tests.",inputtextdesc:"Paste your chosen text here:",timeOfReading:"Time reading",wordsPerMinute:"Words per minute",numberOfWords:"Words in text",latest:"Latest"},jumper:{header:"Train your eyes",describtion:"This tool alows you to move your eyes a bit! Just input text, and follow displayed words with your eyes, without moving head. This way you' force your muscles to work"},main:{header:"Read faster by making the screen do the work!",describtion:"This tool shows you text displaying it in one place, so you can eliminate jumping your eyes and loosing track of what you read, instead - focus on understanding!"}},controls:{speed:"Speed",words:"Words",rows:"Rows",stop:"Stop",start:"Start",restart:"Restart",rewind:"Rewind",reset:"Reset"},faq:[{question:"Why bother?",answear:"For fun, for checking your skills, and improving them. For keeping eyes sharp and maybe even just to read some text quicker."},{question:"How to progress further",answear:"There are tons of useful articles available on fast reading. After that we suggest some additional training."},{question:"What did you learn doing this project?",answear:"Making tools like this helps to learn new technologies, in our case it was improving RWD, Vue, Vuex skills as well as our overall project managing experience."}],contact:[{name:"Michał Mietliński",github:"https://github.com/michalmietlinski"},{name:"Aleksander Jakubowski",github:"https://github.com/ol3kjak"},{name:"Our other projects",github:""}]},Polski:{menu:{faq:"FAQ",contact:"Kontakt",jumper:"Skoczek !",timer:"Czas",home:"Home"},section:{counter:{header:"Sprawdź swoje obecną predkość / tepo czytania",describtion:"Just input the text, click on start, and as soon as you are done with reading, click it again. You will see your results and progress from previous tests.",inputtextdesc:"Wklej swój teks tutaj:",timeOfReading:"Czas czytania",wordsPerMinute:"Slów na minute",numberOfWords:"Ilość slów w tekście",latest:"Latest"},jumper:{header:"Tranuj swój wzrok",describtion:"zabawka"},main:{header:"Czytaj szybciej dzięki pomocy aplikacji",describtion:"zabawka"}},controls:{speed:"Prędkość",words:"Słowa",rows:"Rzędy",stop:"Stop",start:"Start",restart:"Restart",rewind:"Przewijanie",reset:"Reset"},faq:[{question:"Pytanie 1",answear:"Odpowiedź 1"},{question:"Pytanie 2",answear:"Odpowiedź 2"}]}}),D=W,q={light:{mainColor:"#42b983",secondaryColor:"#42b983",background:"#fff"},dark:{mainColor:"#000",secondaryColor:"#42b983",background:"#fff"}},N=q;o["a"].use(a["a"]);var L=new a["a"].Store({state:{speed:v()(sessionStorage.getItem("speed"),10)||250,wordperline:v()(sessionStorage.getItem("wordperline"),10)||1,numberofrows:v()(sessionStorage.getItem("numberofrows"),10)||1,language:sessionStorage.getItem("language")||"English",availableLanguages:["English","Polski"],copy:D[sessionStorage.getItem("language")||"English"],availableThemes:["light","dark"],theme:sessionStorage.getItem("theme")||"light",styles:sessionStorage.getItem("theme")?N[sessionStorage.getItem("theme")]:N.light,texttoread:sessionStorage.getItem("texttoread")||"Text to use",previousTimes:JSON.parse(sessionStorage.getItem("previousTimes"))||[]},mutations:{SET_SPEED:function(t,e){t.speed=e},SET_WORDPERLINE:function(t,e){t.wordperline=e},SET_NUMBEROFROWS:function(t,e){t.numberofrows=e},SET_LANGUAGE:function(t,e){t.language=e,t.copy=D[e]},SET_THEME:function(t,e){t.theme=e,t.styles=N[e]},SET_TEXT:function(t,e){t.texttoread=e},SET_PT:function(t,e){t.previousTimes=e}},actions:{setText:function(t,e){var n=t.commit,o=t.state;return sessionStorage.setItem("texttoread",e),n("SET_TEXT",e),o.texttoread},setSpeed:function(t,e){var n=t.commit,o=t.state;return sessionStorage.setItem("speed",e),n("SET_SPEED",e),o.speed},setWordperline:function(t,e){var n=t.commit,o=t.state;return sessionStorage.setItem("wordperline",e),n("SET_WORDPERLINE",e),o.wordperline},setNumberofrows:function(t,e){var n=t.commit,o=t.state;return sessionStorage.setItem("numberofrows",e),n("SET_NUMBEROFROWS",e),o.numberofrows},setLanguage:function(t,e){var n=t.commit,o=t.state;return o.availableLanguages.includes(e)&&(sessionStorage.setItem("language",e),n("SET_LANGUAGE",e)),o.language},setTheme:function(t,e){var n=t.commit,o=t.state;return o.availableThemes.includes(e)&&(sessionStorage.setItem("theme",e),n("SET_THEME",e)),o.theme},setPreviousTime:function(t,e){var n=t.commit,o=t.state;return sessionStorage.setItem("previousTimes",M()(e)),n("SET_PT",e),o.previousTimes},resetPreviousTime:function(t,e){var n=t.commit,o=t.state;return sessionStorage.setItem("previousTimes",M()([])),n("SET_PT",[]),o.previousTimes}},getters:{getSpeed:function(t){return t.speed},getText:function(t){return t.texttoread},getWordperline:function(t){return t.wordperline},getNumberofrows:function(t){return t.numberofrows},getFaq:function(t){return t.copy.faq.map(function(t){return P()(t,{opened:!1})})}}});o["a"].config.productionTip=!1,new o["a"]({router:O,store:L,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(t,e,n){},6369:function(t,e,n){t.exports=n.p+"img/download.e19b8613.svg"},8180:function(t,e,n){t.exports=n.p+"img/repeat.2f92b96d.svg"},b0a0:function(t,e,n){"use strict";var o=n("07bb"),r=n.n(o);r.a},e7e7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAK0lEQVR4Ae3OsQ0AAAjDMP5/Gn6gHW0pe+YHgC2VM2QoZ8hQwJAhQ4YMAXBRuULM76fufAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.efb6c57e.js.map