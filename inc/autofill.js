!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return a.returnExportsGlobal=b(c)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l;k="caret",b=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.setPos=function(a){var b,c,d,e;return(e=j.getSelection())&&(d=0,c=!1,(b=function(a,f){var g,i,j,k,l,m;for(l=f.childNodes,m=[],j=0,k=l.length;k>j&&(g=l[j],!c);j++)if(3===g.nodeType){if(d+g.length>=a){c=!0,i=h.createRange(),i.setStart(g,a-d),e.removeAllRanges(),e.addRange(i);break}m.push(d+=g.length)}else m.push(b(a,g));return m})(a,this.domInputor)),this.domInputor},b.prototype.getIEPosition=function(){return this.getPosition()},b.prototype.getPosition=function(){var a,b;return b=this.getOffset(),a=this.$inputor.offset(),b.left-=a.left,b.top-=a.top,b},b.prototype.getOldIEPos=function(){var a,b;return b=h.selection.createRange(),a=h.body.createTextRange(),a.moveToElementText(this.domInputor),a.setEndPoint("EndToEnd",b),a.text.length},b.prototype.getPos=function(){var a,b,c;return(c=this.range())?(a=c.cloneRange(),a.selectNodeContents(this.domInputor),a.setEnd(c.endContainer,c.endOffset),b=a.toString().length,a.detach(),b):h.selection?this.getOldIEPos():void 0},b.prototype.getOldIEOffset=function(){var a,b;return a=h.selection.createRange().duplicate(),a.moveStart("character",-1),b=a.getBoundingClientRect(),{height:b.bottom-b.top,left:b.left,top:b.top}},b.prototype.getOffset=function(){var b,c,d,e,f;return j.getSelection&&(d=this.range())?(d.endOffset-1>0&&d.endContainer!==this.domInputor&&(b=d.cloneRange(),b.setStart(d.endContainer,d.endOffset-1),b.setEnd(d.endContainer,d.endOffset),e=b.getBoundingClientRect(),c={height:e.height,left:e.left+e.width,top:e.top},b.detach()),c&&0!==(null!=c?c.height:void 0)||(b=d.cloneRange(),f=a(h.createTextNode("|")),b.insertNode(f[0]),b.selectNode(f[0]),e=b.getBoundingClientRect(),c={height:e.height,left:e.left,top:e.top},f.remove(),b.detach())):h.selection&&(c=this.getOldIEOffset()),c&&(c.top+=a(j).scrollTop(),c.left+=a(j).scrollLeft()),c},b.prototype.range=function(){var a;if(j.getSelection)return a=j.getSelection(),a.rangeCount>0?a.getRangeAt(0):null},b}(),c=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.getIEPos=function(){var a,b,c,d,e,f,g;return b=this.domInputor,f=h.selection.createRange(),e=0,f&&f.parentElement()===b&&(d=b.value.replace(/\r\n/g,"\n"),c=d.length,g=b.createTextRange(),g.moveToBookmark(f.getBookmark()),a=b.createTextRange(),a.collapse(!1),e=g.compareEndPoints("StartToEnd",a)>-1?c:-g.moveStart("character",-c)),e},b.prototype.getPos=function(){return h.selection?this.getIEPos():this.domInputor.selectionStart},b.prototype.setPos=function(a){var b,c;return b=this.domInputor,h.selection?(c=b.createTextRange(),c.move("character",a),c.select()):b.setSelectionRange&&b.setSelectionRange(a,a),b},b.prototype.getIEOffset=function(a){var b,c,d,e;return c=this.domInputor.createTextRange(),a||(a=this.getPos()),c.move("character",a),d=c.boundingLeft,e=c.boundingTop,b=c.boundingHeight,{left:d,top:e,height:b}},b.prototype.getOffset=function(b){var c,d,e;return c=this.$inputor,h.selection?(d=this.getIEOffset(b),d.top+=a(j).scrollTop()+c.scrollTop(),d.left+=a(j).scrollLeft()+c.scrollLeft(),d):(d=c.offset(),e=this.getPosition(b),d={left:d.left+e.left-c.scrollLeft(),top:d.top+e.top-c.scrollTop(),height:e.height})},b.prototype.getPosition=function(a){var b,c,e,f,g,h,i;return b=this.$inputor,f=function(a){return a=a.replace(/<|>|`|"|&/g,"?").replace(/\r\n|\r|\n/g,"<br/>"),/firefox/i.test(navigator.userAgent)&&(a=a.replace(/\s/g,"&nbsp;")),a},void 0===a&&(a=this.getPos()),i=b.val().slice(0,a),e=b.val().slice(a),g="<span style='position: relative; display: inline;'>"+f(i)+"</span>",g+="<span id='caret' style='position: relative; display: inline;'>|</span>",g+="<span style='position: relative; display: inline;'>"+f(e)+"</span>",h=new d(b),c=h.create(g).rect()},b.prototype.getIEPosition=function(a){var b,c,d,e,f;return d=this.getIEOffset(a),c=this.$inputor.offset(),e=d.left-c.left,f=d.top-c.top,b=d.height,{left:e,top:f,height:b}},b}(),d=function(){function b(a){this.$inputor=a}return b.prototype.css_attr=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopWidth","boxSizing","fontFamily","fontSize","fontWeight","height","letterSpacing","lineHeight","marginBottom","marginLeft","marginRight","marginTop","outlineWidth","overflow","overflowX","overflowY","paddingBottom","paddingLeft","paddingRight","paddingTop","textAlign","textOverflow","textTransform","whiteSpace","wordBreak","wordWrap"],b.prototype.mirrorCss=function(){var b,c=this;return b={position:"absolute",left:-9999,top:0,zIndex:-2e4},"TEXTAREA"===this.$inputor.prop("tagName")&&this.css_attr.push("width"),a.each(this.css_attr,function(a,d){return b[d]=c.$inputor.css(d)}),b},b.prototype.create=function(b){return this.$mirror=a("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(b),this.$inputor.after(this.$mirror),this},b.prototype.rect=function(){var a,b,c;return a=this.$mirror.find("#caret"),b=a.position(),c={left:b.left,top:b.top,height:a.height()},this.$mirror.remove(),c},b}(),e={contentEditable:function(a){return!(!a[0].contentEditable||"true"!==a[0].contentEditable)}},g={pos:function(a){return a||0===a?this.setPos(a):this.getPos()},position:function(a){return h.selection?this.getIEPosition(a):this.getPosition(a)},offset:function(a){var b;return b=this.getOffset(a)}},h=null,j=null,i=null,l=function(a){var b;return(b=null!=a?a.iframe:void 0)?(i=b,j=b.contentWindow,h=b.contentDocument||j.document):(i=void 0,j=window,h=document)},f=function(a){var b;h=a[0].ownerDocument,j=h.defaultView||h.parentWindow;try{return i=j.frameElement}catch(c){b=c}},a.fn.caret=function(d,f,h){var i;return g[d]?(a.isPlainObject(f)?(l(f),f=void 0):l(h),i=e.contentEditable(this)?new b(this):new c(this),g[d].apply(i,[f])):a.error("Method "+d+" does not exist on jQuery.caret")},a.fn.caret.EditableCaret=b,a.fn.caret.InputCaret=c,a.fn.caret.Utils=e,a.fn.caret.apis=g});
!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(this,function(t){var e,i;i={ESC:27,TAB:9,ENTER:13,CTRL:17,A:65,P:80,N:78,LEFT:37,UP:38,RIGHT:39,DOWN:40,BACKSPACE:8,SPACE:32},e={beforeSave:function(t){return r.arrayToDefaultHash(t)},matcher:function(t,e,i,n){var r,o,s,a,h;return t=t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),i&&(t="(?:^|\\s)"+t),r=decodeURI("%C3%80"),o=decodeURI("%C3%BF"),h=n?" ":"",a=new RegExp(t+"([A-Za-z"+r+"-"+o+"0-9_"+h+"'.+-]*)$|"+t+"([^\\x00-\\xff]*)$","gi"),s=a.exec(e),s?s[2]||s[1]:null},filter:function(t,e,i){var n,r,o,s;for(n=[],r=0,s=e.length;s>r;r++)o=e[r],~new String(o[i]).toLowerCase().indexOf(t.toLowerCase())&&n.push(o);return n},remoteFilter:null,sorter:function(t,e,i){var n,r,o,s;if(!t)return e;for(n=[],r=0,s=e.length;s>r;r++)o=e[r],o.atwho_order=new String(o[i]).toLowerCase().indexOf(t.toLowerCase()),o.atwho_order>-1&&n.push(o);return n.sort(function(t,e){return t.atwho_order-e.atwho_order})},tplEval:function(t,e){var i,n,r;r=t;try{return"string"!=typeof t&&(r=t(e)),r.replace(/\$\{([^\}]*)\}/g,function(t,i,n){return e[i]})}catch(n){return i=n,""}},highlighter:function(t,e){var i;return e?(i=new RegExp(">\\s*([^<]*?)("+e.replace("+","\\+")+")([^<]*)\\s*<","ig"),t.replace(i,function(t,e,i,n){return"> "+e+"<strong>"+i+"</strong>"+n+" <"})):t},beforeInsert:function(t,e,i){return t},beforeReposition:function(t){return t},afterMatchFailed:function(t,e){}};var n;n=function(){function e(e){this.currentFlag=null,this.controllers={},this.aliasMaps={},this.$inputor=t(e),this.setupRootElement(),this.listen()}return e.prototype.createContainer=function(e){var i;return null!=(i=this.$el)&&i.remove(),t(e.body).append(this.$el=t("<div class='atwho-container'></div>"))},e.prototype.setupRootElement=function(e,i){var n,r;if(null==i&&(i=!1),e)this.window=e.contentWindow,this.document=e.contentDocument||this.window.document,this.iframe=e;else{this.document=this.$inputor[0].ownerDocument,this.window=this.document.defaultView||this.document.parentWindow;try{this.iframe=this.window.frameElement}catch(r){if(n=r,this.iframe=null,t.fn.atwho.debug)throw new Error("iframe auto-discovery is failed.\nPlease use `setIframe` to set the target iframe manually.\n"+n)}}return this.createContainer((this.iframeAsRoot=i)?this.document:document)},e.prototype.controller=function(t){var e,i,n,r;if(this.aliasMaps[t])i=this.controllers[this.aliasMaps[t]];else{r=this.controllers;for(n in r)if(e=r[n],n===t){i=e;break}}return i?i:this.controllers[this.currentFlag]},e.prototype.setContextFor=function(t){return this.currentFlag=t,this},e.prototype.reg=function(t,e){var i,n;return n=(i=this.controllers)[t]||(i[t]=this.$inputor.is("[contentEditable]")?new l(this,t):new s(this,t)),e.alias&&(this.aliasMaps[e.alias]=t),n.init(e),this},e.prototype.listen=function(){return this.$inputor.on("compositionstart",function(t){return function(e){var i;return null!=(i=t.controller())&&i.view.hide(),t.isComposing=!0,null}}(this)).on("compositionend",function(t){return function(e){return t.isComposing=!1,setTimeout(function(e){return t.dispatch(e)}),null}}(this)).on("keyup.atwhoInner",function(t){return function(e){return t.onKeyup(e)}}(this)).on("keydown.atwhoInner",function(t){return function(e){return t.onKeydown(e)}}(this)).on("blur.atwhoInner",function(t){return function(e){var i;return(i=t.controller())?(i.expectedQueryCBId=null,i.view.hide(e,i.getOpt("displayTimeout"))):void 0}}(this)).on("click.atwhoInner",function(t){return function(e){return t.dispatch(e)}}(this)).on("scroll.atwhoInner",function(t){return function(){var e;return e=t.$inputor.scrollTop(),function(i){var n,r;return n=i.target.scrollTop,e!==n&&null!=(r=t.controller())&&r.view.hide(i),e=n,!0}}}(this)())},e.prototype.shutdown=function(){var t,e,i;i=this.controllers;for(t in i)e=i[t],e.destroy(),delete this.controllers[t];return this.$inputor.off(".atwhoInner"),this.$el.remove()},e.prototype.dispatch=function(t){var e,i,n,r;if(void 0!==t){n=this.controllers,r=[];for(e in n)i=n[e],r.push(i.lookUp(t));return r}},e.prototype.onKeyup=function(e){var n;switch(e.keyCode){case i.ESC:e.preventDefault(),null!=(n=this.controller())&&n.view.hide();break;case i.DOWN:case i.UP:case i.CTRL:case i.ENTER:t.noop();break;case i.P:case i.N:e.ctrlKey||this.dispatch(e);break;default:this.dispatch(e)}},e.prototype.onKeydown=function(e){var n,r;if(r=null!=(n=this.controller())?n.view:void 0,r&&r.visible())switch(e.keyCode){case i.ESC:e.preventDefault(),r.hide(e);break;case i.UP:e.preventDefault(),r.prev();break;case i.DOWN:e.preventDefault(),r.next();break;case i.P:if(!e.ctrlKey)return;e.preventDefault(),r.prev();break;case i.N:if(!e.ctrlKey)return;e.preventDefault(),r.next();break;case i.TAB:case i.ENTER:case i.SPACE:if(!r.visible())return;if(!this.controller().getOpt("spaceSelectsMatch")&&e.keyCode===i.SPACE)return;if(!this.controller().getOpt("tabSelectsMatch")&&e.keyCode===i.TAB)return;r.highlighted()?(e.preventDefault(),r.choose(e)):r.hide(e);break;default:t.noop()}},e}();var r,o=[].slice;r=function(){function i(e,i){this.app=e,this.at=i,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||this.uid(),this.expectedQueryCBId=null,this.setting=null,this.query=null,this.pos=0,this.range=null,0===(this.$el=t("#atwho-ground-"+this.id,this.app.$el)).length&&this.app.$el.append(this.$el=t("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new u(this),this.view=new c(this)}return i.prototype.uid=function(){return(Math.random().toString(16)+"000000000").substr(2,8)+(new Date).getTime()},i.prototype.init=function(e){return this.setting=t.extend({},this.setting||t.fn.atwho["default"],e),this.view.init(),this.model.reload(this.setting.data)},i.prototype.destroy=function(){return this.trigger("beforeDestroy"),this.model.destroy(),this.view.destroy(),this.$el.remove()},i.prototype.callDefault=function(){var i,n,r,s;s=arguments[0],i=2<=arguments.length?o.call(arguments,1):[];try{return e[s].apply(this,i)}catch(r){return n=r,t.error(n+" Or maybe At.js doesn't have function "+s)}},i.prototype.trigger=function(t,e){var i,n;return null==e&&(e=[]),e.push(this),i=this.getOpt("alias"),n=i?t+"-"+i+".atwho":t+".atwho",this.$inputor.trigger(n,e)},i.prototype.callbacks=function(t){return this.getOpt("callbacks")[t]||e[t]},i.prototype.getOpt=function(t,e){var i,n;try{return this.setting[t]}catch(n){return i=n,null}},i.prototype.insertContentFor=function(e){var i,n;return n=this.getOpt("insertTpl"),i=t.extend({},e.data("item-data"),{"atwho-at":this.at}),this.callbacks("tplEval").call(this,n,i,"onInsert")},i.prototype.renderView=function(t){var e;return e=this.getOpt("searchKey"),t=this.callbacks("sorter").call(this,this.query.text,t.slice(0,1001),e),this.view.render(t.slice(0,this.getOpt("limit")))},i.arrayToDefaultHash=function(e){var i,n,r,o;if(!t.isArray(e))return e;for(o=[],i=0,r=e.length;r>i;i++)n=e[i],t.isPlainObject(n)?o.push(n):o.push({name:n});return o},i.prototype.lookUp=function(t){var e,i;if((!t||"click"!==t.type||this.getOpt("lookUpOnClick"))&&(!this.getOpt("suspendOnComposing")||!this.app.isComposing))return(e=this.catchQuery(t))?(this.app.setContextFor(this.at),(i=this.getOpt("delay"))?this._delayLookUp(e,i):this._lookUp(e),e):(this.expectedQueryCBId=null,e)},i.prototype._delayLookUp=function(t,e){var i,n;return i=Date.now?Date.now():(new Date).getTime(),this.previousCallTime||(this.previousCallTime=i),n=e-(i-this.previousCallTime),n>0&&e>n?(this.previousCallTime=i,this._stopDelayedCall(),this.delayedCallTimeout=setTimeout(function(e){return function(){return e.previousCallTime=0,e.delayedCallTimeout=null,e._lookUp(t)}}(this),e)):(this._stopDelayedCall(),this.previousCallTime!==i&&(this.previousCallTime=0),this._lookUp(t))},i.prototype._stopDelayedCall=function(){return this.delayedCallTimeout?(clearTimeout(this.delayedCallTimeout),this.delayedCallTimeout=null):void 0},i.prototype._generateQueryCBId=function(){return{}},i.prototype._lookUp=function(e){var i;return i=function(t,e){return t===this.expectedQueryCBId?e&&e.length>0?this.renderView(this.constructor.arrayToDefaultHash(e)):this.view.hide():void 0},this.expectedQueryCBId=this._generateQueryCBId(),this.model.query(e.text,t.proxy(i,this,this.expectedQueryCBId))},i}();var s,a=function(t,e){function i(){this.constructor=t}for(var n in e)h.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},h={}.hasOwnProperty;s=function(e){function i(){return i.__super__.constructor.apply(this,arguments)}return a(i,e),i.prototype.catchQuery=function(){var t,e,i,n,r,o,s;return e=this.$inputor.val(),t=this.$inputor.caret("pos",{iframe:this.app.iframe}),s=e.slice(0,t),r=this.callbacks("matcher").call(this,this.at,s,this.getOpt("startWithSpace"),this.getOpt("acceptSpaceBar")),n="string"==typeof r,n&&r.length<this.getOpt("minLen",0)?void 0:(n&&r.length<=this.getOpt("maxLen",20)?(o=t-r.length,i=o+r.length,this.pos=o,r={text:r,headPos:o,endPos:i},this.trigger("matched",[this.at,r.text])):(r=null,this.view.hide()),this.query=r)},i.prototype.rect=function(){var e,i,n;if(e=this.$inputor.caret("offset",this.pos-1,{iframe:this.app.iframe}))return this.app.iframe&&!this.app.iframeAsRoot&&(i=t(this.app.iframe).offset(),e.left+=i.left,e.top+=i.top),n=this.app.document.selection?0:2,{left:e.left,top:e.top,bottom:e.top+e.height+n}},i.prototype.insert=function(t,e){var i,n,r,o,s;return i=this.$inputor,n=i.val(),r=n.slice(0,Math.max(this.query.headPos-this.at.length,0)),o=""===(o=this.getOpt("suffix"))?o:o||" ",t+=o,s=""+r+t+n.slice(this.query.endPos||0),i.val(s),i.caret("pos",r.length+t.length,{iframe:this.app.iframe}),i.is(":focus")||i.focus(),i.change()},i}(r);var l,a=function(t,e){function i(){this.constructor=t}for(var n in e)h.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},h={}.hasOwnProperty;l=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return a(n,e),n.prototype._getRange=function(){var t;return t=this.app.window.getSelection(),t.rangeCount>0?t.getRangeAt(0):void 0},n.prototype._setRange=function(e,i,n){return null==n&&(n=this._getRange()),n&&i?(i=t(i)[0],"after"===e?(n.setEndAfter(i),n.setStartAfter(i)):(n.setEndBefore(i),n.setStartBefore(i)),n.collapse(!1),this._clearRange(n)):void 0},n.prototype._clearRange=function(t){var e;return null==t&&(t=this._getRange()),e=this.app.window.getSelection(),null==this.ctrl_a_pressed?(e.removeAllRanges(),e.addRange(t)):void 0},n.prototype._movingEvent=function(t){var e;return"click"===t.type||(e=t.which)===i.RIGHT||e===i.LEFT||e===i.UP||e===i.DOWN},n.prototype._unwrap=function(e){var i;return e=t(e).unwrap().get(0),(i=e.nextSibling)&&i.nodeValue&&(e.nodeValue+=i.nodeValue,t(i).remove()),e},n.prototype.catchQuery=function(e){var n,r,o,s,a,h,l,u,c,p,f,d;if((d=this._getRange())&&d.collapsed){if(e.which===i.ENTER)return(r=t(d.startContainer).closest(".atwho-query")).contents().unwrap(),r.is(":empty")&&r.remove(),(r=t(".atwho-query",this.app.document)).text(r.text()).contents().last().unwrap(),void this._clearRange();if(/firefox/i.test(navigator.userAgent)){if(t(d.startContainer).is(this.$inputor))return void this._clearRange();e.which===i.BACKSPACE&&d.startContainer.nodeType===document.ELEMENT_NODE&&(c=d.startOffset-1)>=0?(o=d.cloneRange(),o.setStart(d.startContainer,c),t(o.cloneContents()).contents().last().is(".atwho-inserted")&&(a=t(d.startContainer).contents().get(c),this._setRange("after",t(a).contents().last()))):e.which===i.LEFT&&d.startContainer.nodeType===document.TEXT_NODE&&(n=t(d.startContainer.previousSibling),n.is(".atwho-inserted")&&0===d.startOffset&&this._setRange("after",n.contents().last()))}if(t(d.startContainer).closest(".atwho-inserted").addClass("atwho-query").siblings().removeClass("atwho-query"),(r=t(".atwho-query",this.app.document)).length>0&&r.is(":empty")&&0===r.text().length&&r.remove(),this._movingEvent(e)||r.removeClass("atwho-inserted"),r.length>0)switch(e.which){case i.LEFT:return this._setRange("before",r.get(0),d),void r.removeClass("atwho-query");case i.RIGHT:return this._setRange("after",r.get(0).nextSibling,d),void r.removeClass("atwho-query")}if(r.length>0&&(f=r.attr("data-atwho-at-query"))&&(r.empty().html(f).attr("data-atwho-at-query",null),this._setRange("after",r.get(0),d)),o=d.cloneRange(),o.setStart(d.startContainer,0),u=this.callbacks("matcher").call(this,this.at,o.toString(),this.getOpt("startWithSpace"),this.getOpt("acceptSpaceBar")),h="string"==typeof u,0===r.length&&h&&(s=d.startOffset-this.at.length-u.length)>=0&&(d.setStart(d.startContainer,s),r=t("<span/>",this.app.document).attr(this.getOpt("editableAtwhoQueryAttrs")).addClass("atwho-query"),d.surroundContents(r.get(0)),l=r.contents().last().get(0),l&&(/firefox/i.test(navigator.userAgent)?(d.setStart(l,l.length),d.setEnd(l,l.length),this._clearRange(d)):this._setRange("after",l,d))),!(h&&u.length<this.getOpt("minLen",0)))return h&&u.length<=this.getOpt("maxLen",20)?(p={text:u,el:r},this.trigger("matched",[this.at,p.text]),this.query=p):(this.view.hide(),this.query={el:r},r.text().indexOf(this.at)>=0&&(this._movingEvent(e)&&r.hasClass("atwho-inserted")?r.removeClass("atwho-query"):!1!==this.callbacks("afterMatchFailed").call(this,this.at,r)&&this._setRange("after",this._unwrap(r.text(r.text()).contents().first()))),null)}},n.prototype.rect=function(){var e,i,n;return n=this.query.el.offset(),n&&this.query.el[0].getClientRects().length?(this.app.iframe&&!this.app.iframeAsRoot&&(i=(e=t(this.app.iframe)).offset(),n.left+=i.left-this.$inputor.scrollLeft(),n.top+=i.top-this.$inputor.scrollTop()),n.bottom=n.top+this.query.el.height(),n):void 0},n.prototype.insert=function(t,e){var i,n,r,o,s;return this.$inputor.is(":focus")||this.$inputor.focus(),n=this.getOpt("functionOverrides"),n.insert?n.insert.call(this,t,e):(o=""===(o=this.getOpt("suffix"))?o:o||" ",i=e.data("item-data"),this.query.el.removeClass("atwho-query").addClass("atwho-inserted").html(t).attr("data-atwho-at-query",""+i["atwho-at"]+this.query.text).attr("contenteditable","false"),(r=this._getRange())&&(this.query.el.length&&r.setEndAfter(this.query.el[0]),r.collapse(!1),r.insertNode(s=this.app.document.createTextNode(""+o)),this._setRange("after",s,r)),this.$inputor.is(":focus")||this.$inputor.focus(),this.$inputor.change())},n}(r);var u;u=function(){function e(t){this.context=t,this.at=this.context.at,this.storage=this.context.$inputor}return e.prototype.destroy=function(){return this.storage.data(this.at,null)},e.prototype.saved=function(){return this.fetch()>0},e.prototype.query=function(t,e){var i,n,r;return n=this.fetch(),r=this.context.getOpt("searchKey"),n=this.context.callbacks("filter").call(this.context,t,n,r)||[],i=this.context.callbacks("remoteFilter"),n.length>0||!i&&0===n.length?e(n):i.call(this.context,t,e)},e.prototype.fetch=function(){return this.storage.data(this.at)||[]},e.prototype.save=function(t){return this.storage.data(this.at,this.context.callbacks("beforeSave").call(this.context,t||[]))},e.prototype.load=function(t){return!this.saved()&&t?this._load(t):void 0},e.prototype.reload=function(t){return this._load(t)},e.prototype._load=function(e){return"string"==typeof e?t.ajax(e,{dataType:"json"}).done(function(t){return function(e){return t.save(e)}}(this)):this.save(e)},e}();var c;c=function(){function e(e){this.context=e,this.$el=t("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),this.$elUl=this.$el.children(),this.timeoutID=null,this.context.$el.append(this.$el),this.bindEvent()}return e.prototype.init=function(){var t,e;return e=this.context.getOpt("alias")||this.context.at.charCodeAt(0),t=this.context.getOpt("headerTpl"),t&&1===this.$el.children().length&&this.$el.prepend(t),this.$el.attr({id:"at-view-"+e})},e.prototype.destroy=function(){return this.$el.remove()},e.prototype.bindEvent=function(){var e,i,n;return e=this.$el.find("ul"),i=0,n=0,e.on("mousemove.atwho-view","li",function(r){return function(r){var o;if((i!==r.clientX||n!==r.clientY)&&(i=r.clientX,n=r.clientY,o=t(r.currentTarget),!o.hasClass("cur")))return e.find(".cur").removeClass("cur"),o.addClass("cur")}}(this)).on("click.atwho-view","li",function(i){return function(n){return e.find(".cur").removeClass("cur"),t(n.currentTarget).addClass("cur"),i.choose(n),n.preventDefault()}}(this))},e.prototype.visible=function(){return t.expr.filters.visible(this.$el[0])},e.prototype.highlighted=function(){return this.$el.find(".cur").length>0},e.prototype.choose=function(t){var e,i;return(e=this.$el.find(".cur")).length&&(i=this.context.insertContentFor(e),this.context._stopDelayedCall(),this.context.insert(this.context.callbacks("beforeInsert").call(this.context,i,e,t),e),this.context.trigger("inserted",[e,t]),this.hide(t)),this.context.getOpt("hideWithoutSuffix")?this.stopShowing=!0:void 0},e.prototype.reposition=function(e){var i,n,r,o;return i=this.context.app.iframeAsRoot?this.context.app.window:window,e.bottom+this.$el.height()-t(i).scrollTop()>t(i).height()&&(e.bottom=e.top-this.$el.height()),e.left>(r=t(i).width()-this.$el.width()-5)&&(e.left=r),n={left:e.left,top:e.bottom},null!=(o=this.context.callbacks("beforeReposition"))&&o.call(this.context,n),this.$el.offset(n),this.context.trigger("reposition",[n])},e.prototype.next=function(){var t,e,i,n;return t=this.$el.find(".cur").removeClass("cur"),e=t.next(),e.length||(e=this.$el.find("li:first")),e.addClass("cur"),i=e[0],n=i.offsetTop+i.offsetHeight+(i.nextSibling?i.nextSibling.offsetHeight:0),this.scrollTop(Math.max(0,n-this.$el.height()))},e.prototype.prev=function(){var t,e,i,n;return t=this.$el.find(".cur").removeClass("cur"),i=t.prev(),i.length||(i=this.$el.find("li:last")),i.addClass("cur"),n=i[0],e=n.offsetTop+n.offsetHeight+(n.nextSibling?n.nextSibling.offsetHeight:0),this.scrollTop(Math.max(0,e-this.$el.height()))},e.prototype.scrollTop=function(t){var e;return e=this.context.getOpt("scrollDuration"),e?this.$elUl.animate({scrollTop:t},e):this.$elUl.scrollTop(t)},e.prototype.show=function(){var t;return this.stopShowing?void(this.stopShowing=!1):(this.visible()||(this.$el.show(),this.$el.scrollTop(0),this.context.trigger("shown")),(t=this.context.rect())?this.reposition(t):void 0)},e.prototype.hide=function(t,e){var i;if(this.visible())return isNaN(e)?(this.$el.hide(),this.context.trigger("hidden",[t])):(i=function(t){return function(){return t.hide()}}(this),clearTimeout(this.timeoutID),this.timeoutID=setTimeout(i,e))},e.prototype.render=function(e){var i,n,r,o,s,a,h;if(!(t.isArray(e)&&e.length>0))return void this.hide();for(this.$el.find("ul").empty(),n=this.$el.find("ul"),h=this.context.getOpt("displayTpl"),r=0,s=e.length;s>r;r++)o=e[r],o=t.extend({},o,{"atwho-at":this.context.at}),a=this.context.callbacks("tplEval").call(this.context,h,o,"onDisplay"),i=t(this.context.callbacks("highlighter").call(this.context,a,this.context.query.text)),i.data("item-data",o),n.append(i);return this.show(),this.context.getOpt("highlightFirst")?n.find("li:first").addClass("cur"):void 0},e}();var p;p={load:function(t,e){var i;return(i=this.controller(t))?i.model.load(e):void 0},isSelecting:function(){var t;return!!(null!=(t=this.controller())?t.view.visible():void 0)},hide:function(){var t;return null!=(t=this.controller())?t.view.hide():void 0},reposition:function(){var t;return(t=this.controller())?t.view.reposition(t.rect()):void 0},setIframe:function(t,e){return this.setupRootElement(t,e),null},run:function(){return this.dispatch()},destroy:function(){return this.shutdown(),this.$inputor.data("atwho",null)}},t.fn.atwho=function(e){var i,r;return i=arguments,r=null,this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function(){var o,s;return(s=(o=t(this)).data("atwho"))||o.data("atwho",s=new n(this)),"object"!=typeof e&&e?p[e]&&s?r=p[e].apply(s,Array.prototype.slice.call(i,1)):t.error("Method "+e+" does not exist on jQuery.atwho"):s.reg(e.at,e)}),null!=r?r:this},t.fn.atwho["default"]={at:void 0,alias:void 0,data:null,displayTpl:"<li>${name}</li>",insertTpl:"${atwho-at}${name}",headerTpl:null,callbacks:e,functionOverrides:{},searchKey:"name",suffix:void 0,hideWithoutSuffix:!1,startWithSpace:!0,acceptSpaceBar:!1,highlightFirst:!0,limit:5,maxLen:20,minLen:0,displayTimeout:300,delay:null,spaceSelectsMatch:!1,tabSelectsMatch:!0,editableAtwhoQueryAttrs:{},scrollDuration:150,suspendOnComposing:!0,lookUpOnClick:!0},t.fn.atwho.debug=!1});
$('#auto_smiles').change(function() {
    if(this.checked) { localStorage.setItem('auto_smiles', 1); }
    else { localStorage.setItem('auto_smiles', 0); }
});
$('#auto_mentions').change(function() {
    if(this.checked) { localStorage.setItem('auto_mentions', 1); }
    else { localStorage.setItem('auto_mentions', 0); }
});

if (localStorage.getItem("autofill_smiles") != 0) {
   var emojis = $.map(smilies_list, function(value, data, i) {return {key: value, name:data}});
   $('#message_input').atwho({
      at: ":",
      data: emojis,
      displayTpl: '<li><img src="https://static.cracked.to/images/smilies/${key}" class="smilie">${name}</li>',
      insertTpl: '${name}'
   });
}

if (localStorage.getItem("autofill_mentions") != 0) {
   var uids = [];
   var people = [];
   ppl=0;
   $("#online_users>span>a").each(function() {
       rank=$(this).find("span").attr("class");
       if (rank == null) {rank="registered_rank"}
       username=$(this).find("span").text();
       uid=$(this).attr("data-uid");
       if (uid != null && username != null) {
           uids.push(uid);
           people.push({name: username, rank: rank});
           ppl++;
       }
   });
   console.log("Added "+ppl+" Users from Online List");
   
   people.push({name: "everyone", rank: "registered_rank"});

   $('#message_input').atwho({
      at: "@",
      data: people,
      displayTpl: '<li><span class="${rank}">@${name}</span></li>',
      insertTpl: '@${name}'
   });

   $('.shoutbox-messages').bind('DOMSubtreeModified', function(){
       $msg=$(this).find(".entry:nth-of-type(1)");
       $text = $msg.find(".text");
       if ($text.text() != null && $text.text().includes("@everyone")) {
           Shoutbox.mentionSound.play();
           $msg.addClass("mention");
           $text.html($text.html().replace(/@everyone/g, '@<a href="/Sango" onclick="return false;"><span class="registered_rank">everyone</span></a>'));
       }

       if ((uid=$msg.attr("data-user")) != null && uid != "" && Object.values(uids).indexOf(uid) == -1) {
           $elm=$msg.find(".user>a>span");
           rank=$elm.attr("class");
           username=$elm.text();
           if ($elm != null && username != null) {
               uids.push(uid);
               people.push({name: username, rank: rank});
               $('#message_input').atwho('load', '@', people);
               console.log("Added "+username+" with "+rank+" from Shoutbox");
           }
       }
   });
}
