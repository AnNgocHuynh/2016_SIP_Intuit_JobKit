/* prebid.js v0.8.1
 * Updated : 2016-05-09 */
!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(){for(var e=0;e<I.que.length;e++)if(B(I.que[e].called)===P)try{I.que[e].call(),I.que[e].called=!0}catch(n){A.logError("Error processing command :","prebid.js",n)}}function i(e,n){var t=0;if(t=("undefined"==typeof e?"undefined":B(e))===P||null===e?I.bidderTimeout:e,!o())return A.logMessage("No adUnits configured. No bids requested."),void 0;if(setTimeout(T.executeCallback,t),n&&A.isArray(n)){for(var r=0;r<n.length;r++)for(var i=0;i<I.adUnits.length;i++)I.adUnits[i].code===n[r]&&x.push(I.adUnits[i]);s(),d()}else x=I.adUnits,s(),d()}function o(){return!(!I.adUnits||0===I.adUnits.length)}function a(){if(!F){F=!0;var e=T.getTimedOutBidders();R.emit(j,e)}}function d(e){var n=A._map(M,function(e){return e});("undefined"==typeof e?"undefined":B(e))===N&&n.sort(e),w.callBids(n)}function s(){for(var e=0;e<x.length;e++){var n=x[e][E.JSON_MAPPING.PL_BIDS],t=x[e][E.JSON_MAPPING.PL_CODE];u(x[e][E.JSON_MAPPING.PL_CODE],x[e][E.JSON_MAPPING.PL_SIZE],n),T.addBidResponse(t)}for(e=0;e<k.length;e++)k[e].loadPreBid();T.setBidderMap(M)}function u(e,n,t){for(var r=0;r<t.length;r++){var i=t[r];i.placementCode=e,i.sizes=n;var o=t[r][E.JSON_MAPPING.BD_BIDDER],a=M[o];if(("undefined"==typeof a?"undefined":B(a))===P){var d={bidderCode:o,bids:[]};d.bids.push(i),M[o]=d}else a.bids.push(i)}}function c(e){var n={};return e&&0!==e.length&&(e.sort(function(e,n){return n.cpm-e.cpm}),n=e[0]),n.bid}function l(e,n){var t=h(n),r=I.getBidResponses(n.getAdUnitPath());q[e]?A.extend(q[e],t):q[e]=t,L&&r&&r.bids&&r.bids.length&&A.extend(q[e],y(r.bids)),A._each(q[e],function(e,t){n.setTargeting(t,"")});for(var i in t)if(t.hasOwnProperty(i))try{A.logMessage("Attempting to set key value for slot: "+n.getSlotElementId()+" key: "+i+" value: "+encodeURIComponent(t[i])),n.setTargeting(i,t[i])}catch(o){A.logMessage("Problem setting key value pairs in slot: "+o.message)}}function p(e){var n={};return e?n=T.pbBidResponseByPlacement[e]:T.pbBidResponseByPlacement}function f(e){var n=[],t="",r=[],i={};if(e&&e[0]&&e[0].adUnitCode){t=e[0]&&e[0].adUnitCode,G[t]={};for(var o=0;o<e.length;o++){var a=e[o];i=g(a),a.alwaysUseBid&&i.adserverTargeting&&(G[i.adUnitCode]=A.extend(G[i.adUnitCode],i.adserverTargeting)),a.cpm&&a.cpm>0&&r.push({cpm:a.cpm,bid:a}),n.push(i)}}if(t&&0!==r.length){var d=c(r),s=d.adserverTargeting;G[t]=A.extend(G[t],s)}return n}function g(e){var n={};if(e){var t=JSON.stringify(e);n=JSON.parse(t),delete n.pbLg,delete n.pbMg,delete n.pbHg}return n}function m(){T.clearAllBidResponses(),M={},x=[],G={},F=!1}function b(e){m(),i(e)}function v(e){var n=A._map(x,function(e){return e.code});return A.contains(n,e)?!0:(A.logError('The "'+e+'" placement is not defined.'),void 0)}function h(e){var n=null;return e&&(n=I.getAdserverTargetingForAdUnitCode(e.getSlotElementId()),n||(n=I.getAdserverTargetingForAdUnitCode(e.getAdUnitPath()))),n}function y(e){var n=E.TARGETING_KEYS,t={};return A._each(e,function(e){e.adserverTargeting&&A._each(n,function(n){t[n+"_"+e.bidderCode]=e.adserverTargeting[n]})}),t}var B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};window.pbjs=window.pbjs||{},window.pbjs.que=window.pbjs.que||[];var I=window.pbjs,E=t(1),A=t(2),T=t(4),w=t(6),S=t(9),C=t(10),_=t(16),R=t(5),N="function",P="undefined",U="object",O="string",D=E.EVENTS.BID_WON,j=E.EVENTS.BID_TIMEOUT,k=[],x=[],M={},G={},q={},F=!1,L=!1,z={bidWon:v};I.bidderTimeout=I.bidderTimeout||3e3,I.logging=I.logging||!1,I.libLoaded=!0,A.logInfo("Prebid.js v0.8.1 loaded"),I.adUnits=I.adUnits||[],I.que.push=function(e){if(("undefined"==typeof e?"undefined":B(e))===N)try{e.call()}catch(n){A.logError("Error processing command :"+n.message)}else A.logError("Commands written into pbjs.que.push must wrapped in a function")},I.getAdserverTargetingForAdUnitCodeStr=function(e){if(A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var n=I.getAdserverTargetingForAdUnitCode(e);return A.transformAdServerTargetingObj(n)}A.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},I.getAdserverTargetingForAdUnitCode=function(e){return A.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCode",arguments),I.getBidResponses(e),e?G[e]:G},I.getAdserverTargeting=function(){return A.logInfo("Invoking pbjs.getAdserverTargeting",arguments),I.getAdserverTargetingForAdUnitCode()},I.getBidResponses=function(e){A.logInfo("Invoking pbjs.getBidResponses",arguments);var n={},t=[],r={};if(e)n=p(e),t=[],n&&n.bids&&(t=f(n.bids)),r={bids:t};else{n=p();for(var i in n)n.hasOwnProperty(i)&&(n&&n[i]&&n[i].bids&&(t=f(n[i].bids)),r[i]={bids:t})}return r},I.getBidResponsesForAdUnitCode=function(e){return A.logInfo("Invoking pbjs.getBidResponsesForAdUnitCode",arguments),I.getBidResponses(e)},I.setTargetingForAdUnitsGPTAsync=function(e){if(A.logInfo("Invoking pbjs.setTargetingForAdUnitsGPTAsync",arguments),!window.googletag||!A.isFn(window.googletag.pubads)||!A.isFn(window.googletag.pubads().getSlots))return A.logError("window.googletag is not defined on the page"),void 0;a();var n=e;("undefined"==typeof e?"undefined":B(e))===O?n=[e]:("undefined"==typeof e?"undefined":B(e))===U&&(n=e);var t,r={},i=0;if(n)for(i=0;i<n.length;i++){var o=n[i];t=window.googletag.pubads().getSlots();for(var d=0;d<t.length;d++)(t[d].getSlotElementId()===o||t[d].getAdUnitPath()===o)&&(r=p(o),l(o,t[d]))}else for(t=window.googletag.pubads().getSlots(),i=0;i<t.length;i++){var s=t[i].getSlotElementId();s&&l(s,t[i])}},I.setTargetingForGPTAsync=function(e){A.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),I.setTargetingForAdUnitsGPTAsync(e)},I.allBidsAvailable=function(){return A.logInfo("Invoking pbjs.allBidsAvailable",arguments),T.allBidsBack()},I.renderAd=function(e,n){if(A.logInfo("Invoking pbjs.renderAd",arguments),A.logMessage("Calling renderAd with adId :"+n),e&&n)try{var t=T._adResponsesByBidderId[n];if(t){R.emit(D,t);var r=t.height,i=t.width,o=t.adUrl,a=t.ad;a?(e.write(a),e.close(),e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=i,e.defaultView.frameElement.height=r)):o?(e.write('<IFRAME SRC="'+o+'" FRAMEBORDER="0" SCROLLING="no" MARGINHEIGHT="0" MARGINWIDTH="0" TOPMARGIN="0" LEFTMARGIN="0" ALLOWTRANSPARENCY="true" WIDTH="'+i+'" HEIGHT="'+r+'"></IFRAME>'),e.close(),e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=i,e.defaultView.frameElement.height=r)):A.logError("Error trying to write ad. No ad for bid response id: "+n)}else A.logError("Error trying to write ad. Cannot find ad by given id : "+n)}catch(d){A.logError("Error trying to write ad Id :"+n+" to the page:"+d.message)}else A.logError("Error trying to write ad Id :"+n+" to the page. Missing document or adId")},I.requestBidsForAdUnit=function(e){m(),i(e)},I.requestBidsForAdUnits=function(e){if(!e||e.constructor!==Array)return A.logError("requestBidsForAdUnits must pass an array of adUnits"),void 0;m();var n=I.adUnits.slice(0);I.adUnits=e,i(),I.adUnits=n},I.removeAdUnit=function(e){if(A.logInfo("Invoking pbjs.removeAdUnit",arguments),e)for(var n=0;n<I.adUnits.length;n++)I.adUnits[n].code===e&&I.adUnits.splice(n,1)},I.requestBids=function(e){if(A.logInfo("Invoking pbjs.requestBids",arguments),e){var n=e.adUnitCodes,t=e.adUnits,r=e.timeout,o=e.bidsBackHandler,a=I.adUnits.slice(0);("undefined"==typeof o?"undefined":B(o))===N&&T.addOneTimeCallback(o),n&&A.isArray(n)?(m(),i(r,n)):t&&A.isArray(t)?(m(),I.adUnits=t,i(r)):b(r),I.adUnits=a}else b()},I.addAdUnits=function(e){A.logInfo("Invoking pbjs.addAdUnits",arguments),A.isArray(e)?I.adUnits.push.apply(I.adUnits,e):("undefined"==typeof e?"undefined":B(e))===U&&I.adUnits.push(e)},I.onEvent=function(e,n,t){return A.logInfo("Invoking pbjs.onEvent",arguments),A.isFn(n)?t&&!z[e].call(null,t)?(A.logError('The id provided is not valid for event "'+e+'" and no handler was set.'),void 0):(R.on(e,n,t),void 0):(A.logError('The event handler provided is not a function and was not set on event "'+e+'".'),void 0)},I.offEvent=function(e,n,t){A.logInfo("Invoking pbjs.offEvent",arguments),(!t||z[e].call(null,t))&&R.off(e,n,t)},I.addCallback=function(e,n){A.logInfo("Invoking pbjs.addCallback",arguments);var t=null;return e&&n&&("undefined"==typeof n?"undefined":B(n))===N?(t=A.getUniqueIdentifierStr,T.addCallback(t,n,e),t):(A.logError("error registering callback. Check method signature"),t)},I.removeCallback=function(){return null},I.registerBidAdapter=function(e,n){A.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{w.registerBidAdapter(e(),n)}catch(t){A.logError("Error registering bidder adapter : "+t.message)}},I.bidsAvailableForAdapter=function(e){A.logInfo("Invoking pbjs.bidsAvailableForAdapter",arguments);for(var n=M[e].bids,t=0;t<n.length;t++){var r=n[t].placementCode,i=T.pbBidResponseByPlacement[r],o=S.createBid(1);o.bidderCode=e,o.adUnitCode=r,o.bidder=e,i.bids.push(o),i.bidsReceivedCount++,T.pbBidResponseByPlacement[r]=i}T.increaseBidResponseReceivedCount(e)},I.createBid=function(e){return A.logInfo("Invoking pbjs.createBid",arguments),S.createBid(e)},I.addBidResponse=function(e,n){A.logInfo("Invoking pbjs.addBidResponse",arguments),T.addBidResponse(e,n)},I.loadScript=function(e,n,t){A.logInfo("Invoking pbjs.loadScript",arguments),C.loadScript(e,n,t)},I.enableAnalytics=function(e){if(A.logInfo("Invoking pbjs.enableAnalytics",arguments),!e)return A.logError("pbjs.enableAnalytics should be called with option {}","prebid.js"),void 0;if("ga"===e.provider)try{_.enableAnalytics("undefined"==typeof e.options?{}:e.options)}catch(n){A.logError("Error calling GA: ","prebid.js",n)}else if("other_provider"===e.provider)return null},I.sendTimeoutEvent=function(){A.logInfo("Invoking pbjs.sendTimeoutEvent",arguments),a()},I.aliasBidder=function(e,n){A.logInfo("Invoking pbjs.aliasBidder",arguments),e&&n?w.aliasBidAdapter(e,n):A.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},I.setPriceGranularity=function(e){e?T.setPriceGranularity(e):A.logError("Prebid Error: no value passed to `setPriceGranularity()`")},I.enableSendAllBids=function(){L=!0},r()},function(e){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},REPO_AND_VERSION:"prebid_prebid_0.8.1",DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon"}},objectType_function:"function",objectType_undefined:"undefined",objectType_object:"object",objectType_string:"string",objectType_number:"number",EVENTS:{BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_WON:"bidWon"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto"},TARGETING_KEYS:["hb_bidder","hb_adid","hb_pb","hb_size"]}},function(e,n,t){"use strict";function r(){return I()+Math.random().toString(16).substr(2)}function i(){return window.console&&window.console.log}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=t(1),d=t(3),s="object",u="string",c="number",l=!1,p=5,f=20,g=20,m="Array",b="String",v="Function",h=Object.prototype.toString,y=null;try{y=console.info.bind(window.console)}catch(B){}n.replaceTokenInString=function(e,n,t){return this._each(n,function(n,r){n=void 0===n?"":n;var i=t+r.toUpperCase()+t,o=new RegExp(i,"g");e=e.replace(o,n)}),e};var I=function(){var e=0;return function(){return e++,e}}();n.getUniqueIdentifierStr=r,n.getBidIdParamater=function(e,n){return n&&n[e]?n[e]:""},n.tryAppendQueryString=function(e,n,t){return t?e+=n+"="+encodeURIComponent(t)+"&":e},n.parseQueryStringParameters=function(e){var n="";for(var t in e)e.hasOwnProperty(t)&&(n+=t+"="+encodeURIComponent(e[t])+"&");return n},n.transformAdServerTargetingObj=function(e){var n="";if(!e)return"";for(var t in e)e.hasOwnProperty(t)&&(n+=t+"="+encodeURIComponent(e[t])+"&");return n},n.extend=function(e,n){return e=e||{},this._each(n,function(t,r){e[r]=o(n[r])===s?this.extend(e[r],n[r]):n[r]}),e},n.parseSizesInput=function(e){var n=[];if(("undefined"==typeof e?"undefined":o(e))===u){var t=e.split(","),r=/^(\d)+x(\d)+$/i;if(t)for(var i in t)w(t,i)&&t[i].match(r)&&n.push(t[i])}else if(("undefined"==typeof e?"undefined":o(e))===s){var a=e.length;if(a>0)if(2===a&&o(e[0])===c&&o(e[1])===c)n.push(this.parseGPTSingleSizeArray(e));else for(var d=0;a>d;d++)n.push(this.parseGPTSingleSizeArray(e[d]))}return n},n.parseGPTSingleSizeArray=function(e){return!this.isArray(e)||2!==e.length||isNaN(e[0])||isNaN(e[1])?void 0:e[0]+"x"+e[1]},n.getTopWindowUrl=function(){try{return window.top.location.href}catch(e){return window.location.href}},n.logWarn=function(e){A()&&console.warn&&console.warn("WARNING: "+e)},n.logInfo=function(e,n){A()&&i()&&y&&(n&&0!==n.length||(n=""),y("INFO: "+e+(""===n?"":" : params : "),n))},n.logMessage=function(e){A()&&i()&&console.log("MESSAGE: "+e)},n.hasConsoleLogger=i;var E=function(e){return e?window.console.error?"error":"log":""}(i()),A=function(){return pbjs.logging===!1&&l===!1&&(pbjs.logging="TRUE"===T(a.DEBUG_MODE).toUpperCase(),l=!0),!!pbjs.logging};n.debugTurnedOn=A,n.logError=function(e,n,t){var r=n||"ERROR";A()&&i()&&console[E].call(console,r+": "+e,t||"")},n.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=r(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e};var T=function(e){var n="[\\?&]"+e+"=([^&#]*)",t=new RegExp(n),r=t.exec(window.location.search);return null===r?"":decodeURIComponent(r[1].replace(/\+/g," "))};n.getPriceBucketString=function(e){var n="",t="",r="",i="",o=0,a={low:n,med:t,high:r,auto:i};try{o=parseFloat(e),o&&(a.low=o>p?p.toFixed(2):(Math.floor(2*e)/2).toFixed(2),a.med=o>f?f.toFixed(2):(Math.floor(10*e)/10).toFixed(2),a.high=o>g?g.toFixed(2):(Math.floor(100*e)/100).toFixed(2),a.auto=5>=o?(Math.floor(20*e)/20).toFixed(2):10>=o?(Math.floor(10*e)/10).toFixed(2):20>=o?(Math.floor(2*e)/2).toFixed(2):"20.00")}catch(d){this.logError("Exception parsing CPM :"+d.message)}return a},n.hasValidBidRequest=function(e,n,t){function r(e,t){t===n[o]&&(i=!0)}for(var i=!1,o=0;o<n.length;o++)if(i=!1,this._each(e,r),!i)return this.logError("Params are missing for bid request. One of these required paramaters are missing: "+n,t),!1;return!0},n.addEventHandler=function(e,n,t){e.addEventListener?e.addEventListener(n,t,!0):e.attachEvent&&e.attachEvent("on"+n,t)},n.isA=function(e,n){return h.call(e)==="[object "+n+"]"},n.isFn=function(e){return this.isA(e,v)},n.isStr=function(e){return this.isA(e,b)},n.isArray=function(e){return this.isA(e,m)},n.isEmpty=function(e){if(!e)return!0;if(this.isArray(e)||this.isStr(e))return!(e.length>0);for(var n in e)if(hasOwnProperty.call(e,n))return!1;return!0},n._each=function(e,n){if(!this.isEmpty(e)){if(this.isFn(e.forEach))return e.forEach(n,this);var t=0,r=e.length;if(r>0)for(;r>t;t++)n(e[t],t,e);else for(t in e)hasOwnProperty.call(e,t)&&n.call(this,e[t],t)}},n.contains=function(e,n){if(this.isEmpty(e))return!1;if(this.isFn(e.indexOf))return-1!==e.indexOf(n);for(var t=e.length;t--;)if(e[t]===n)return!0;return!1},n.indexOf=function(){return Array.prototype.indexOf?Array.prototype.indexOf:d.indexOf}(),n._map=function(e,n){if(this.isEmpty(e))return[];if(this.isFn(e.map))return e.map(n);var t=[];return this._each(e,function(r,i){t.push(n(r,i,e))}),t};var w=function(e,n){return e.hasOwnProperty?e.hasOwnProperty(n):"undefined"!=typeof e[n]&&e.constructor.prototype[n]!==e[n]};n.createTrackPixelHtml=function(e){if(!e)return"";var n=encodeURI(e),t='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return t+='<img src="'+n+'"></div>'},n.getIframeDocument=function(e){if(e){var n=void 0;try{n=e.contentWindow?e.contentWindow.document:e.contentDocument.document?e.contentDocument.document:e.contentDocument}catch(t){this.logError("Cannot get iframe document",t)}return n}}},function(e,n){"use strict";n.indexOf=function(e,n){var t,r;if(null===this)throw new TypeError('"this" is null or not defined');var i=Object(this);if(t=i.length>>>0,0===t)return-1;var o=+n||0;if(1/0===Math.abs(o)&&(o=0),o>=t)return-1;for(r=Math.max(o>=0?o:t-Math.abs(o),0);t>r;){if(r in i&&i[r]===e)return r;r++}return-1}},function(e,n,t){"use strict";function r(){for(var e in C)delete C[e];for(var n=0;n<pbjs.adUnits.length;n++)for(var t=pbjs.adUnits[n].bids,r=0;r<t.length;r++){var i=t[r].bidder;C[i]=0}}function i(e){g(C[e])===y?C[e]=1:C[e]++}function o(){_={}}function a(e){return _[e]}function d(e,n,t){var r=n[m.JSON_MAPPING.ADSERVER_TARGETING];return t.size=t.getSize(),b._each(r,function(n){var r=n.key,i=n.val;if(e[r]&&b.logWarn("The key: "+r+" is getting ovewritten"),b.isFn(i))try{e[r]=i(t)}catch(o){b.logError("bidmanager","ERROR",o)}else e[r]=i}),e}function s(e){var n=[e];u(B,n)}function u(e,n){var t;if(b.isArray(e))for(t=0;t<e.length;t++){var r=e[t];c(r,n)}else c(e,n)}function c(e,n){if("function"==typeof e)try{e.apply(pbjs,n)}catch(t){b.logError("Error executing callback function: "+t.message)}}function l(e){for(var n=0;n<pbjs.adUnits.length;n++){var t=pbjs.adUnits[n];if(t.code===e){var r=w[e].bidsReceivedCount;r===t.bids.length&&s(e)}}}function p(){var e=!0;return b._each(C,function(n,t){var r=a(t);(("undefined"==typeof r?"undefined":g(r))===y||r>n)&&(e=!1)}),e}function f(e){var n=e.bidderCode,t=e.cpm;if(n&&pbjs.bidderSettings&&pbjs.bidderSettings[n]&&g(pbjs.bidderSettings[n].bidCpmAdjustment)===h)try{t=pbjs.bidderSettings[n].bidCpmAdjustment.call(null,e.cpm)}catch(r){b.logError("Error during bid adjustment","bidmanager.js",r)}0!==t&&(e.cpm=t)}var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},m=t(1),b=t(2),v=t(5),h="function",y="undefined",B=[],I=[],E=null,A={},T={};n.pbCallbackMap=T;var w={};n.pbBidResponseByPlacement=w;var S={};n._adResponsesByBidderId=S;var C={};n.bidResponseReceivedCount=C;var _={},R=!1,N=!1,P=m.GRANULARITY_OPTIONS.MEDIUM,U={},O={};n.getPlacementIdByCBIdentifer=function(e){return T[e]},n.getBidResponseByAdUnit=function(){return w},n.clearAllBidResponses=function(){R=!1,N=!1,r(),o(),I.called=!1;for(var e in this.pbBidResponseByPlacement)delete this.pbBidResponseByPlacement[e]},n.getTimedOutBidders=function(){return b._map(C,function(e,n){return 0===e?n:void 0})},n.increaseBidResponseReceivedCount=function(e){i(e)},n.setExpectedBidsCount=function(e,n){_[e]=n},n.getExpectedBidsCount=a,n.addBidResponse=function(e,n){var t={};if(n){n.requestTimestamp=O[n.bidderCode],n.responseTimestamp=(new Date).getTime(),n.timeToRespond=n.responseTimestamp-n.requestTimestamp,i(n.bidderCode),2===n.getStatusCode()&&(n.cpm=0),n.bidder=n.bidderCode,v.emit(m.EVENTS.BID_ADJUSTMENT,n),v.emit(m.EVENTS.BID_RESPONSE,e,n);var r=b.getPriceBucketString(n.cpm,n.height,n.width);n.pbLg=r.low,n.pbMg=r.med,n.pbHg=r.high,n.pbAg=r.auto,n.adUnitCode=e;var o={};n.bidderCode&&0!==n.cpm&&(o=this.getKeyValueTargetingPairs(n.bidderCode,n),n.adserverTargeting=o),n.adId&&(S[n.adId]=n),e&&w[e]&&!b.isEmpty(w[e])?(t=w[e],t.bids.push(n),t.bidsReceivedCount++):b.logError("Internal error in bidmanager.addBidResponse. Params: "+e+" & "+n)}else t=this.createEmptyBidResponseObj();w[e]=t,this.checkIfAllBidsAreIn(e)},n.createEmptyBidResponseObj=function(){return{bids:[],allBidsAvailable:!1,bidsReceivedCount:0}},n.getKeyValueTargetingPairs=function(e,n){var t={},r=pbjs.bidderSettings||{};return n&&r&&(r[m.JSON_MAPPING.BD_SETTING_STANDARD]||(r[m.JSON_MAPPING.BD_SETTING_STANDARD]={adserverTargeting:[{key:"hb_bidder",val:function(e){return e.bidderCode}},{key:"hb_adid",val:function(e){return e.adId}},{key:"hb_pb",val:function(e){return P===m.GRANULARITY_OPTIONS.AUTO?e.pbAg:P===m.GRANULARITY_OPTIONS.LOW?e.pbLg:P===m.GRANULARITY_OPTIONS.MEDIUM?e.pbMg:P===m.GRANULARITY_OPTIONS.HIGH?e.pbHg:void 0}},{key:"hb_size",val:function(e){return e.size}}]}),d(t,r[m.JSON_MAPPING.BD_SETTING_STANDARD],n)),e&&n&&r&&r[e]&&r[e][m.JSON_MAPPING.ADSERVER_TARGETING]?(d(t,r[e],n),n.alwaysUseBid=r[e].alwaysUseBid):U[e]&&(d(t,U[e],n),n.alwaysUseBid=U[e].alwaysUseBid),t},n.setPriceGranularity=function(e){var n=m.GRANULARITY_OPTIONS;Object.keys(n).filter(function(t){return e===n[t]})?P=e:(b.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."),P=m.GRANULARITY_OPTIONS.MEDIUM)},n.registerDefaultBidderSetting=function(e,n){U[e]=n},n.registerBidRequestTime=function(e,n){O[e]=n},n.executeCallback=function(){var e=[];if(g(pbjs.registerBidCallbackHandler)===h&&!N)try{pbjs.registerBidCallbackHandler(),N=!0}catch(n){N=!0,b.logError("Exception trying to execute callback handler registered : "+n.message)}if(I.called!==!0&&(u(I,e),I.called=!0),E){e=[];var t=pbjs.getBidResponses();e.push(t),u(E,e),E=null}},n.allBidsBack=function(){return R},n.setBidderMap=function(e){A=e},n.checkIfAllBidsAreIn=function(e){R=p(),l(e),R&&this.executeCallback()},n.addOneTimeCallback=function(e){E=e},n.addCallback=function(e,n,t){n.id=e,m.CB.TYPE.ALL_BIDS_BACK===t?I.push(n):m.CB.TYPE.AD_UNIT_BIDS_BACK===t&&B.push(n)},v.on(m.EVENTS.BID_ADJUSTMENT,function(e){f(e)})},function(e,n,t){"use strict";var r=t(2),i=t(1),o=Array.prototype.slice,a=Array.prototype.push,d=r._map(i.EVENTS,function(e){return e}),s=i.EVENT_ID_PATHS,u=[];e.exports=function(){function e(e,n){r.logMessage("Emitting event for: "+e);var i=n[0],o=s[e],d=i[o],c=t[e]||{que:[]},l=r._map(c,function(e,n){return n}),p=[];u.push({eventType:e,args:i,id:d}),d&&r.contains(l,d)&&a.apply(p,c[d].que),a.apply(p,c.que),r._each(p,function(e){if(e)try{e.apply(null,n)}catch(t){r.logError("Error executing handler:","events.js",t)}})}function n(e){return r.contains(d,e)}var t={},i={};return i.on=function(e,i,o){if(n(e)){var a=t[e]||{que:[]};o?(a[o]=a[o]||{que:[]},a[o].que.push(i)):a.que.push(i),t[e]=a}else r.logError("Wrong event name : "+e+" Valid event names :"+d)},i.emit=function(n){var t=o.call(arguments,1);e(n,t)},i.off=function(e,n,i){var o=t[e];r.isEmpty(o)||r.isEmpty(o.que)&&r.isEmpty(o[i])||i&&(r.isEmpty(o[i])||r.isEmpty(o[i].que))||(i?r._each(o[i].que,function(e){var t=o[i].que;e===n&&t.splice(r.indexOf.call(t,e),1)}):r._each(o.que,function(e){var t=o.que;e===n&&t.splice(r.indexOf.call(t,e),1)}),t[e]=o)},i.get=function(){return t},i.getEvents=function(){var e=[];return r._each(u,function(n){var t=r.extend({},n);e.push(t)}),e},i}()},function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=t(7),o=t(4),a=t(2),d=t(1),s=t(5),u={};n.bidderRegistry=u,n.callBids=function(e){for(var n=0;n<e.length;n++){var t=e[n];if(t.bidderCode&&u[t.bidderCode]){a.logMessage("CALLING BIDDER ======= "+t.bidderCode);var r=u[t.bidderCode];s.emit(d.EVENTS.BID_REQUESTED,t),r.callBids(t),void 0===o.getExpectedBidsCount(t.bidderCode)&&o.setExpectedBidsCount(t.bidderCode,t.bids.length);var i=(new Date).getTime();o.registerBidRequestTime(t.bidderCode,i),r.defaultBidderSettings&&o.registerDefaultBidderSetting(t.bidderCode,r.defaultBidderSettings)}else a.logError("Adapter trying to be called which does not exist: "+t.bidderCode,"adaptermanager.callBids")}},n.registerBidAdapter=function(e,n){e&&n?r(e.callBids)===d.objectType_function?u[n]=e:a.logError("Bidder adaptor error for bidder code: "+n+"bidder must implement a callBids() function"):a.logError("bidAdaptor or bidderCode not specified")},n.aliasBidAdapter=function(e,n){var t=u[n];if(("undefined"==typeof t?"undefined":r(t))===d.objectType_undefined){var o=u[e];if(("undefined"==typeof o?"undefined":r(o))===d.objectType_undefined)a.logError('bidderCode "'+e+'" is not an existing bidder.',"adaptermanager.aliasBidAdapter");else try{var s=null;o instanceof i.BaseAdapter?a.logError(e+" bidder does not currently support aliasing.","adaptermanager.aliasBidAdapter"):(s=o.createNew(),s.setBidderCode(n),this.registerBidAdapter(s,n))}catch(c){a.logError(e+" bidder does not currently support aliasing.","adaptermanager.aliasBidAdapter")}}else a.logMessage('alias name "'+n+'" has been already specified.')};var c=t(8);n.registerBidAdapter(new c,"aol");var l=t(11);n.registerBidAdapter(new l.createNew,"appnexus");var p=t(13);n.registerBidAdapter(new p,"sovrn");var f=t(14);n.registerBidAdapter(new f,"pulsepoint");var g=t(15);n.registerBidAdapter(new g,"sonobi")},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});{var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.BaseAdapter=function(){function e(n){t(this,e),this.code=n}return r(e,[{key:"getCode",value:function(){return this.code}},{key:"setCode",value:function(e){this.code=e}},{key:"callBids",value:function(){throw"adapter implementation must override callBids method"}}]),e}()}},function(e,n,t){"use strict";var r=t(2),i=t(9),o=t(4),a=t(10),d=function(){function e(e){var n=m.createElement("DIV");return e&&e.length||(e="ad-placeholder-"+ ++v),n.id=e+"-head-unit",b.appendChild(n),n.id}function n(e,n){var a,d=g[n.alias];if(!d)return r.logError("mismatched bid: "+n.placement,p,n),void 0;if(a=e.getCPM(),null===a||isNaN(a))return t(e,n);delete g[n.alias];var s=i.createBid(1),u=e.getCreative();"undefined"!=typeof e.getPixels()&&(u+=e.getPixels()),s.bidderCode=p,s.ad=u,s.cpm=a,s.width=e.getAdWidth(),s.height=e.getAdHeight(),s.creativeId=e.getCreativeId(),o.addBidResponse(d.placementCode,s)}function t(e,n){var t=g[n.alias];if(!t)return r.logError("mismatched bid: "+n.placement,p,n),void 0;delete g[n.alias];var a=i.createBid(2);a.bidderCode=p,a.reason=e.getNbr(),a.raw=e.getResponse(),o.addBidResponse(t.placementCode,a)}function d(n){var t=n.params.alias||r.getUniqueIdentifierStr();return g[t]=n,{adContainerId:e(n.params.adContainerId),server:n.params.server,sizeid:n.params.sizeId||0,pageid:n.params.pageId,secure:"https:"===document.location.protocol,serviceType:"pubapi",performScreenDetection:!1,alias:t,network:n.params.network,placement:parseInt(n.params.placement),gpt:{adUnitPath:n.params.adUnitPath||n.placementCode,size:n.params.size||(n.sizes||[])[0]},params:{cors:"yes",cmd:"bid",bidfloor:"undefined"!=typeof n.params.bidFloor?n.params.bidFloor.toString():""},pubApiConfig:f,placementCode:n.placementCode}}function s(){return window.ADTECH?(r._each(c,function(e){var n=d(e);window.ADTECH.loadAd(n)}),void 0):(r.logError("window.ADTECH is not present!",p),void 0)}function u(e){window.bidRequestConfig=window.bidRequestConfig||{},window.dacBidRequestConfigs=window.dacBidRequestConfigs||{},c=e.bids,c&&c.length&&a.loadScript(l,s)}var c,l="https://secure-ads.pictela.net/rm/marketplace/pubtaglib/0_4_0/pubtaglib_0_4_0.js",p="aol",f={pixelsDivId:"pixelsDiv",defaultKey:"aolBid",roundingConfig:[{from:0,to:999,roundFunction:"tenCentsRound"},{from:1e3,to:-1,roundValue:1e3}],pubApiOK:n,pubApiER:t},g={},m=window.document,b=m.getElementsByTagName("HEAD")[0],v=0;return{callBids:u}};e.exports=d},function(e,n,t){"use strict";function r(e){function n(){switch(r){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}var t=i.getUniqueIdentifierStr(),r=e||0;this.bidderCode="",this.width=0,this.height=0,this.statusMessage=n(),this.adId=t,this.getStatusCode=function(){return r},this.getSize=function(){return this.width+"x"+this.height}}var i=t(2);n.createBid=function(e){return new r(e)}},function(e,n,t){"use strict";function r(e,n){var t=document.createElement("script");t.type="text/javascript",t.async=!0,n&&"function"==typeof n&&(t.readyState?t.onreadystatechange=function(){("loaded"===t.readyState||"complete"===t.readyState)&&(t.onreadystatechange=null,n())}:t.onload=function(){n()}),t.src=e;var r=document.getElementsByTagName("head");r=r.length?r:document.getElementsByTagName("body"),r.length&&(r=r[0],r.insertBefore(t,r.firstChild))}var i=t(2),o={};n.loadScript=function(e,n,t){return e?(t?o[e]?o[e].loaded?n():o[e].callbacks.push(n):(o[e]={loaded:!1,callbacks:[]},o[e].callbacks.push(n),r(e,function(){o[e].loaded=!0;try{for(var n=0;n<o[e].callbacks.length;n++)o[e].callbacks[n]()}catch(t){i.logError("Error executing callback","adloader.js:loadScript",t)}})):r(e,n),void 0):(i.logError("Error attempting to request empty URL","adloader.js:loadScript"),void 0)},n.trackPixel=function(e){var n=void 0,t=void 0;return e&&"string"==typeof e?(n=e.indexOf("?")>0?"&":"?",t=e+n+"rnd="+Math.floor(1e7*Math.random()),(new Image).src=t,t):(i.logMessage("Missing or invalid pixelUrl."),void 0)}},function(e,n,t){"use strict";var r,i=t(1),o=t(2),a=t(10),d=t(4),s=t(9),u=t(12);r=function(){function e(e,n){var t=o.getBidIdParamater("placementId",e.params),r=o.getBidIdParamater("memberId",e.params),i=o.getBidIdParamater("member",e.params),a=o.getBidIdParamater("invCode",e.params),d=o.getBidIdParamater("query",e.params),s=o.getBidIdParamater("referrer",e.params),u=o.getBidIdParamater("alt_referrer",e.params),c="http"+("https:"===document.location.protocol?"s://secure.adnxs.com/jpt?":"://ib.adnxs.com/jpt?");c=o.tryAppendQueryString(c,"callback","pbjs.handleAnCB"),c=o.tryAppendQueryString(c,"callback_uid",n),c=o.tryAppendQueryString(c,"psa","0"),c=o.tryAppendQueryString(c,"id",t),i?c=o.tryAppendQueryString(c,"member",i):r&&(c=o.tryAppendQueryString(c,"member",r),o.logMessage('appnexus.callBids: "memberId" will be deprecated soon. Please use "member" instead')),c=o.tryAppendQueryString(c,"code",a),c=o.tryAppendQueryString(c,"code",a);var l="",p=o.parseSizesInput(e.sizes),f=p.length;if(f>0&&(l="size="+p[0],f>1)){l+="&promo_sizes=";for(var g=1;f>g;g++)l+=p[g]+=",";l&&","===l.charAt(l.length-1)&&(l=l.slice(0,l.length-1))}l&&(c+=l+"&");var m=o.parseQueryStringParameters(d);m&&(c+=m);var b=o.extend({},e.params);delete b.placementId,delete b.memberId,delete b.invCode,delete b.query,delete b.referrer,delete b.alt_referrer,delete b.member;var v=o.parseQueryStringParameters(b);return v&&(c+=v),""===s&&(s=o.getTopWindowUrl()),c=o.tryAppendQueryString(c,"referrer",s),c=o.tryAppendQueryString(c,"alt_referrer",u),c.lastIndexOf("&")===c.length-1&&(c=c.substring(0,c.length-1)),o.logMessage("jpt request built: "+c),e.startTime=(new Date).getTime(),c}var t=u.createNew("appnexus");return t.callBids=function(n){var r=t.getBidderCode(),i=n.bids,s=i.length;d.setExpectedBidsCount(r,s);for(var u=0;s>u;u++){var c=i[u],l=o.getUniqueIdentifierStr();a.loadScript(e(c,l)),d.pbCallbackMap[l]=c}},pbjs.handleAnCB=function(e){var n;if(e&&e.callback_uid){var t,r=e.callback_uid,a="",u=d.getPlacementIdByCBIdentifer(r);u&&(n=u.bidder,a=u.placementCode,u.status=i.STATUS.GOOD),o.logMessage("JSONP callback function called for ad ID: "+r);var c=[];if(e.result&&e.result.cpm&&0!==e.result.cpm){t=parseInt(e.result.cpm,10),t/=1e4;var l=e.result.creative_id;c=s.createBid(1),c.creative_id=l,c.bidderCode=n,c.cpm=t,c.adUrl=e.result.ad,c.width=e.result.width,c.height=e.result.height,c.dealId=e.result.deal_id,d.addBidResponse(a,c)}else o.logMessage("No prebid response from AppNexus for placement code "+a),c=s.createBid(2),c.bidderCode=n,d.addBidResponse(a,c)
}else o.logMessage("No prebid response for placement %%PLACEMENT%%")},{callBids:t.callBids,setBidderCode:t.setBidderCode,createNew:n.createNew,buildJPTCall:e}},n.createNew=function(){return new r}},function(e,n){"use strict";function t(e){function n(e){i=e}function t(){return i}function r(){}var i=e;return{callBids:r,setBidderCode:n,getBidderCode:t}}n.createNew=function(e){return new t(e)}},function(e,n,t){"use strict";var r,i=t(1),o=t(2),a=t(9),d=t(4),s=t(10),u=function(){function e(e){var t=e.bids||[];n(t)}function n(e){var n=window.location.host,t=window.location.pathname+location.search+location.hash,a=[];r=[],o._each(e,function(e){var n=o.getBidIdParamater("tagid",e.params),t=o.getBidIdParamater("bidfloor",e.params),i=0,s=0,u=e.sizes.length;2===u&&"number"==typeof e.sizes[0]&&"number"==typeof e.sizes[1]?(i=e.sizes[0],s=e.sizes[1]):(i=e.sizes[0][0],s=e.sizes[0][1]);var c={id:o.getUniqueIdentifierStr(),banner:{w:i,h:s},tagid:n,bidfloor:t};a.push(c),d.pbCallbackMap[c.id]=e,r.push(e.placementCode)});var c={id:o.getUniqueIdentifierStr(),imp:a,site:{domain:n,page:t}},l="//"+u+"?callback=window.pbjs.sovrnResponse&src="+i.REPO_AND_VERSION+"&br="+encodeURIComponent(JSON.stringify(c));s.loadScript(l,null)}function t(e){o._each(r,function(n){if(o.contains(e,n))return null;var t={};t=a.createBid(2),t.bidderCode="sovrn",d.addBidResponse(n,t)})}var u="ap.lijit.com/rtb/bid";return pbjs.sovrnResponse=function(e){if(e&&e.id)if(e.seatbid&&0!==e.seatbid.length&&e.seatbid[0].bid&&0!==e.seatbid[0].bid.length){var n=[];e.seatbid[0].bid.forEach(function(e){var t,r="",o=e.impid,s={},u=d.getPlacementIdByCBIdentifer(o);if(u)if(r=u.placementCode,n.push(r),u.status=i.STATUS.GOOD,t=parseFloat(e.price),0!==t){e.placementCode=r,e.size=u.sizes;var c=e.adm,l='<img src="'+e.nurl+'">';s=a.createBid(1),s.creative_id=e.id,s.bidderCode="sovrn",s.cpm=t,s.ad=decodeURIComponent(c+l),s.width=parseInt(e.w),s.height=parseInt(e.h),d.addBidResponse(r,s)}else s=a.createBid(2),s.bidderCode="sovrn",d.addBidResponse(r,s);else s=a.createBid(2),s.bidderCode="sovrn",d.addBidResponse(r,s)}),t(n)}else t([]);else t([])},{callBids:e}};e.exports=u},function(e,n,t){"use strict";var r=t(9),i=t(4),o=t(10),a=function(){function e(e){"undefined"==typeof window.pp?o.loadScript(d,function(){n(e)}):n(e)}function n(e){for(var n=e.bids,r=0;r<n.length;r++){var i=n[r],o=t(i),a=new window.pp.Ad({cf:i.params.cf,cp:i.params.cp,ct:i.params.ct,cn:1,ca:window.pp.requestActions.BID,cu:s,adUnitId:i.placementCode,callback:o});a.display()}}function t(e){return function(n){a(e,n)}}function a(e,n){if(n){var t=e.params.cf.toUpperCase().split("X"),o=r.createBid(1);o.bidderCode=e.bidder,o.cpm=n.bidCpm,o.ad=n.html,o.width=t[0],o.height=t[1],i.addBidResponse(e.placementCode,o)}else{var a=r.createBid(2);a.bidderCode=e.bidder,i.addBidResponse(e.placementCode,a)}}var d=window.location.protocol+"//tag.contextweb.com/getjs.static.js",s=window.location.protocol+"//bid.contextweb.com/header/tag";return{callBids:e}};e.exports=a},function(e,n,t){"use strict";var r=t(9),i=t(4),o=t(10),a=t(2),d=function(){function e(e){var r="https://apex.go.sonobi.com/trinity.js?key_maker=",i=e.bids||[];o.loadScript(r+JSON.stringify(n(i))+"&cv="+t(),null)}function n(e){var n={};return a._each(e,function(e){var t=[];a._each(e.sizes,function(e){t.push(e.join("x"))}),t=t.toString(),e.params.ad_unit&&e.params.ad_unit.length>0?(n[e.params.ad_unit+"|"+e.params.dom_id]=t,c[e.params.ad_unit+"|"+e.params.dom_id]=e.placementCode):e.params.placement_id&&e.params.placement_id.length>0?(n[e.params.dom_id]=e.params.placement_id+(u?"-test":"")+"|"+t,c[e.params.dom_id]=e.placementCode):a.logError("sonobi unable to bid: Improper parameters for "+e.placementCode)}),n}function t(){var e="cb"+a.getUniqueIdentifierStr();return window[e]=d,e}function d(e){var n=e.slots||{},t=e.sbi_dc||"",o={};for(var a in n)n[a].sbi_aid?(o=r.createBid(1),o.bidderCode="sonobi",o.cpm=Number(n[a].sbi_mouse),o.ad=s(t,n[a].sbi_aid),o.width=Number(n[a].sbi_size.split("x")[0]),o.height=Number(n[a].sbi_size.split("x")[1]),i.addBidResponse(c[a],o)):(o=r.createBid(2),o.bidderCode="sonobi",i.addBidResponse(c[a],o))}function s(e,n){var t='<script type="text/javascript"src="https://'+e;return t+="apex.go.sonobi.com/sbi.js?as=dfps&aid="+n,t+='"></script>'}var u=!1,c={};return{callBids:e}};e.exports=d},function(e,n,t){"use strict";function r(){if(I&&"function"==typeof window[B]){for(var e=0;e<y.length;e++)y[e].call();y.push=function(e){e.call()},I=!1}p.logMessage("event count sent to GA: "+A)}function i(e){return e?Math.floor(100*e):0}function o(e){var n;return e>=0&&200>e?n="0-200ms":e>=200&&300>e?n="200-300ms":e>=300&&400>e?n="300-400ms":e>=400&&500>e?n="400-500ms":e>=500&&600>e?n="500-600ms":e>=600&&800>e?n="600-800ms":e>=800&&1e3>e?n="800-1000ms":e>=1e3&&1200>e?n="1000-1200ms":e>=1200&&1500>e?n="1200-1500ms":e>=1500&&2e3>e?n="1500-2000ms":e>=2e3&&(n="2000ms above"),n}function a(e){var n;return e>=0&&.5>e?n="$0-0.5":e>=.5&&1>e?n="$0.5-1":e>=1&&1.5>e?n="$1-1.5":e>=1.5&&2>e?n="$1.5-2":e>=2&&2.5>e?n="$2-2.5":e>=2.5&&3>e?n="$2.5-3":e>=3&&4>e?n="$3-4":e>=4&&6>e?n="$4-6":e>=6&&8>e?n="$6-8":e>=8&&(n="$8 above"),n}function d(e){e&&e.bidderCode&&y.push(function(){A++,window[B](S,"event",E,"Requests",e.bidderCode,1,h)}),r()}function s(e){e&&e.bidderCode&&y.push(function(){var n=i(e.cpm),t=e.bidderCode;if("undefined"!=typeof e.timeToRespond&&T){A++;var r=o(e.timeToRespond);window[B](S,"event","Prebid.js Load Time Distribution",r,t,1,h)}if(e.cpm>0){A+=2;var d=a(e.cpm);T&&(A++,window[B](S,"event","Prebid.js CPM Distribution",d,t,1,h)),window[B](S,"event",E,"Bids",t,n,h),window[B](S,"event",E,"Bid Load Time",t,e.timeToRespond,h)}}),r()}function u(e){e&&e.bidder&&y.push(function(){p._each(w,function(n){e.bidder===n&&(A++,window[B](S,"event",E,"Timeouts",n,e.timeToRespond,h))})}),r()}function c(e){var n=i(e.cpm);y.push(function(){A++,window[B](S,"event",E,"Wins",e.bidderCode,n,h)}),r()}var l=t(5),p=t(2),f=t(1),g=f.EVENTS.BID_REQUESTED,m=f.EVENTS.BID_TIMEOUT,b=f.EVENTS.BID_RESPONSE,v=f.EVENTS.BID_WON,h={nonInteraction:!0},y=[],B=null,I=!0,E="Prebid.js Bids",A=0,T=!1,w=[],S=null;n.enableAnalytics=function(e){B="undefined"!=typeof e.global?e.global:"ga",S=e.trackerName?e.trackerName+".send":"send","undefined"!=typeof e.enableDistribution&&(T=e.enableDistribution);var n=null,t=l.getEvents();p._each(t,function(e){var t=e.args;e&&(e.eventType===g?(n=t,d(n)):e.eventType===b?(n=t,s(n)):e.eventType===m?w=t.bidderCode:e.eventType===v&&(n=t,c(n)))}),l.on(g,function(e){d(e)}),l.on(b,function(e,n){s(n),u(n)}),l.on(m,function(e){w=e}),l.on(v,function(e){c(e)})},n.getTrackerSend=function(){return S}}]);
