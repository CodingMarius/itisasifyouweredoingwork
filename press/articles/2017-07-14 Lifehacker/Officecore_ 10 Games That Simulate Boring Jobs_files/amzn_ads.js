/* amazon-dtb-javascript-api - v1.0.0 - 2017-07-12 10:26:47 PM */"use strict";function amzn_ads(a){try{amznads.updateAds(a)}catch(b){try{}catch(c){}}}function aax_write(a,b){a.write(b),a.close()}function amznMatchCookie(a){function b(a){if(!c){c=!0;var b=document.createElement("iframe");b.style.display="none",b.src=a,document.body.appendChild(b)}}var c=!1;document.readyState&&"loading"==document.readyState?document.addEventListener?document.addEventListener("DOMContentLoaded",function(){b(a)},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&b(a)}):b(a)}function aax_render_ad(a){var b,c,d,e,f,g,h,i;if(a&&a.cmp&&""!=a.cmp&&"undefined"!=a.cmp&&amznMatchCookie(a.cmp),a.passback)return void aax_write(document,a.html);if(b=a.slotSize,!b)return void aax_write(document,a.html);c=b.indexOf("x"),d=b.substring(0,c),e=b.substring(c+1),f="amznad"+Math.round(1e6*Math.random()),aax_write(document,'<iframe id="'+f+'" width="'+d+'" height="'+e+'" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"></iframe>');try{g=document.getElementById(f),h=g.contentWindow||g.contentDocument,h.document&&(h=h.document),aax_write(h,a.html);try{a.iid&&(document.write('<script type="text/javascript" src="'+amznpassback.CSM_JS+'"></script>'),document.write('<script type="text/javascript">'),i="aax.amazon-adsystem.com",document.write('  amzncsm.host="'+i+'";\n'),document.write('  amzncsm.rmC(document.getElementById("'+f+'"), "'+a.iid+'", window, document);'),document.write("</script>"),document.close())}catch(j){console&&console.log}}catch(k){g&&(g.style.display="none")}}var amznads,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a},amznpassback=amznpassback||{};amznpassback.CPM_JS||(amznpassback.CSM_JS="//c.amazon-adsystem.com/aax2/csm.js.gz"),Date.now||(Date.now=function(){return(new Date).getTime()}),amznads=function(a,b,c){function d(b,c,e){this.startTime=null,this.stopTime=null,this.sourceId=c,this.sync=b,this.mode=e,this.latency=null,d.prototype.startTimer=function(){this.startTime=Date.now()},d.prototype.stopTimer=function(){this.stopTime=Date.now()},d.prototype.stopTimerAndReportLatency=function(){this.stopTimer(),this.calculateLatency(),this.isThrottled()||this.reportLatency()},d.prototype.calculateLatency=function(){this.latency=this.stopTime-this.startTime},d.prototype.isThrottled=function(){var b,c=parseInt(a.latencySamplingRate,10);if(!isNaN(c)){if(0==c)return!0;if(100==c)return!1;if(b=100*Math.random(),c>=b)return!1}return!0},d.prototype.reportLatency=function(){var b,c;null!=this.latency&&this.latency>0&&(b='/{"c":"dtb","src":"'+this.sourceId+'","'+(this.sync?"bls":"bla")+'":"'+this.latency+'","m":"'+this.mode+'"}',c=a.protocol+a.host+a.px_svc+"PH"+b,(new Image).src=c)}}function e(){this.metrics={},this.t0=Date.now(),this.i=0,this.addTimer=function(a,b){b||(b=Date.now()),this.metrics[a]=b-this.t0},this.set=function(a,b){this.metrics[a]=b},this.schedule=function(b,c){var d=this;b||(b=5e3),c||(c="PH"),c+="/",setTimeout(function(){var b,e;d.metrics.i=d.i,d.metrics.t0=d.t0,d.metrics.site=d.getTopDomain(a),b=JSON.stringify(d.metrics),e=a.protocol+a.host+a.px_svc+c+encodeURIComponent(b),(new Image).src=e,d.metrics={},d.t0=Date.now(),d.i++},b)},this.getTopDomain=function(a){var b,c=decodeURIComponent(a.getReferrerURL());return b=c.indexOf("://")>-1?c.split("/")[2]:c.split("/")[0],b=b.split(":")[0]}}var f,g,h,i="https:"===b.location.protocol;return a.latencyUtil=a.latencyUtil||null,a.protocol=i?"https://":"http://",a.DEFAULT_HOST="aax.amazon-adsystem.com",a.host=a.DEFAULT_HOST,a.dtb_svc="/e/dtb/bid",a.pb_svc="/x/getad",a.px_svc="/x/px/",a.debug_mode=a.debug_mode||!1,a.MIN_TIMEOUT=0,a.DEFAULT_TIMEOUT=1e3,a.targetingKey="amznslots",a.latencySamplingRate=1,a.vidKey="amzn_vid",a.tasks=a.tasks||[],a.VIEWABILITY_CUTOFF_AREA=a.VIEWABILITY_CUTOFF_AREA||.5,a.VIEWABILITY_CUTOFF_DURATION_SEC=a.VIEWABILITY_CUTOFF_DURATION_SEC||1,a.CSM_JS="//c.amazon-adsystem.com/aax2/csm.js.gz",a.vads={},f="_d",g=!1,h=new e,h.addTimer("tlt"),a.ads||(a.ads={}),a.updateAds=function(b){var c,d;if(b&&b.cmp&&""!=b.cmp&&"undefined"!=b.cmp&&amznMatchCookie(b.cmp),g=!0,a.ads=b.ads,a.ev=b.ev,b.vads){a.vads=b.vads,a.ads||(a.ads={}),d=!1;for(c in b.vads)b.vads.hasOwnProperty(c)&&-1!=c.indexOf(f)&&(a.ads[c]=b.vads[c],a.amzn_vid=b.vads[c],d=!0);if(!d)for(c in b.vads)b.vads.hasOwnProperty(c)&&(a.ads[c]=b.vads[c],a.amzn_vid=b.vads[c])}a.doAllTasks(),a.tasks.push=function(b){a.doTask(b)};try{b.lsr&&(a.latencySamplingRate=b.lsr),b.rm&&(h.addTimer("br"),h.set("brs","1"),h.schedule(b.to,b.id)),null!=a.latencyUtil&&a.latencyUtil.stopTimerAndReportLatency()}catch(e){}},a.aaxPunt=function(a){try{a&&a.cmp&&""!=a.cmp&&"undefined"!=a.cmp&&amznMatchCookie(a.cmp),g=!0,h.addTimer("br"),h.set("brs","0"),a&&a.rm&&h.schedule(a.to,a.id)}catch(b){}},a.saveAds=function(b){a.saved_ads=b.ads,a.updateAds(b)},a.getAdForSlot=function(c,d,e){var f,g,h,i;a.src_id=c,f=f||{},g=f.u,a.host=3e3==c?"aax-cpm.amazon-adsystem.com":a.host,g||(g=a.getReferrerURL()),g&&-1!==g.indexOf("amzn_debug_mode")&&(a.debug_mode=!0),h="src="+a.src_id+"&slot_uuid="+d+"&c=100&u="+g+"&cb="+Math.round(1e7*Math.random()),i=a.protocol+a.host+a.pb_svc+"?jsd=1&"+h,e?a.appendScriptTag(i):aax_write(b,"<script type='text/javascript' src='"+i+"'></script>")},a.getAdsCallback=function(b,c,d,e,f){var g=null;f=f||{};try{c&&"function"==typeof c&&(g=a.handleCallBack(c,d))}catch(h){}f.to||(f.to=d),a.doGetAdsAsync(b,e,f,g)},a.getVideoAdsCallback=function(b,c,d,e,f){var f=f||{};f.mt="V",a.getAdsCallback(b,c,d,e,f)},a.getDisplayAdsCallback=function(b,c,d,e,f){var f=f||{};f.mt="D",a.getAdsCallback(b,c,d,e,f)},a.getAdsAsync=function(b,c,d){a.doGetAdsAsync(b,c,d)},a.getVideoAdsAsync=function(b,c,d){var d=d||{};d.mt="V",a.getAdsAsync(b,c,d)},a.getDisplayAdsAsync=function(b,c,d){var d=d||{};d.mt="D",a.getAdsAsync(b,c,d)},a.handleCallBack=function(b,d){var e=!1,f=null,g=function(a){if(!e){try{b(a),f&&clearTimeout(f),a||h.set("to","1")}catch(c){}e=!0}},i=a.getValidMilliseconds(d);return f=i?c.setTimeout(g,i):c.setTimeout(g,a.DEFAULT_TIMEOUT),g},a.getValidMilliseconds=function(b){if(!b)return!1;try{var c=~~Number(b);if(c>a.MIN_TIMEOUT)return c}catch(d){return!1}return!1},a.getAds=function(c,e,f,i){if(g=!1,i)return void a.doGetAdsAsync(c,e,f);var j=a.getScriptSource(c,e,f);try{a.latencyUtil=new d(!0,c,f&&f.mt?f.mt:"DV"),a.latencyUtil.startTimer(),h.addTimer("sb"),h.set("src",c)}catch(k){}j&&aax_write(b,"<script type='text/javascript' src='"+j+"'></script>")},a.getVideoAds=function(b,c,d,e){var d=d||{};d.mt="V",a.getAds(b,c,d,e)},a.getDisplayAds=function(b,c,d,e){var d=d||{};d.mt="D",a.getAds(b,c,d,e)},a.doGetAdsAsync=function(b,c,e,f){g=!1;var i=a.getScriptSource(b,c,e);try{a.latencyUtil=new d(!1,b,e&&e.mt?e.mt:"DV"),a.latencyUtil.startTimer(),h.addTimer("ab"),h.set("src",b)}catch(j){}a.appendScriptTag(i,f)},a.getScriptSource=function(c,d,e){var f,g,i,j,k,l;if(!a.ssb){if(a.src_id=c,e=e||{},f=e.u,g=e.d,i=e.to,j=e.mt,f||(f=a.getReferrerURL()),f&&-1!==f.indexOf("amzn_debug_mode")&&(a.debug_mode=!0),e.mt&&"V"!=e.mt&&"DV"!=e.mt||a.vads&&(a.vads={},delete a.amzn_vid),a.ads&&(a.clearTargetingFromGPTAsync(),a.ads={}),a.startTime&&_typeof("number"==a.startTime)&&h.addTimer("st",a.startTime),a.saved_ads&&(a.ads=a.saved_ads),g)try{b.domain=g}catch(m){}return k="src="+c+"&u="+f+"&cb="+Math.round(1e7*Math.random()),d&&(k+="&sz="+d),i&&(k+="&t="+i),j&&(k+="&mt="+j),l=a.protocol+a.host+a.dtb_svc+"?"+k}a.ssb=!1},a.getReferrerURL=function(){var d=encodeURIComponent(b.documentURI);try{d=encodeURIComponent(c.top.location.href),d&&"undefined"!=d||(d=a.detectIframeAndGetURL())}catch(e){d=a.detectIframeAndGetURL()}return d},a.detectIframeAndGetURL=function(){try{if(c.top!==c.self)return encodeURIComponent(b.referrer)}catch(a){return encodeURIComponent(b.documentURI)}},a.appendScriptTag=function(a,c){var d,e;if(!a&&c&&"function"==typeof c)return void c.apply(this,[!0]);d=b.getElementsByTagName("script")[0],e=b.createElement("script"),e.type="text/javascript",e.async=!0,a&&(e.src=a);try{c&&"function"==typeof c&&(e.readyState?e.onreadystatechange=function(){("loaded"==e.readyState||"complete"==e.readyState)&&(e.onreadystatechange=null,c(!0))}:e.onload=function(){c(!0)})}catch(f){}d.parentNode.insertBefore(e,d)},a.renderAd=function(b,c){var d,e,f,g,i,j;if(a.ads[c])h.addTimer("imp"),d=a.ads[c],a.ev&&(e="amznad"+Math.round(1e6*Math.random()),d=d.replace("window.top.amznads.detectViewability","window.amzncsm.rmD"),d=d.replace(/id=[^ ]*/,'id="'+e+'"'),f="<script type='text/javascript' src='"+a.CSM_JS+"'></script>\n",a.host!=a.DEFAULT_HOST&&(f+="<script type='text/javascript'>try{amzncsm.host=window.top.amznads.host;}catch(e){amzncsm.host=amznads.host;}</script>\n"),d=f+d),aax_write(b,d);else{h.set("kvm","1"),g=new Object,g.c="dtb",g.src=a.src_id,g.kvmismatch=1,g.pubReturnedKey=c,g.aaxReturnedKeys=a.getTokens(),g.cb=Math.round(1e7*Math.random());try{g.u=encodeURIComponent(location.host+location.pathname),navigator&&(g.ua=encodeURIComponent(navigator.userAgent))}catch(k){}i=encodeURIComponent(JSON.stringify(g)),j=a.protocol+a.host+"/x/px/p/0/"+i,aax_write(b,"<img src='"+j+"'/>")}},a.hasAds=function(b){var c;if(!b)try{return Object.keys(a.ads).length>0}catch(d){for(c in a.ads)if(a.ads.hasOwnProperty(c))return!0}for(c in a.ads)if(a.ads.hasOwnProperty(c)&&c.indexOf(b)>0)return!0;return!1},a.getTargeting=function(b){var c={},d=0;a.getTokens()&&a.getTokens().length>0?(d=1,c[a.targetingKey]=a.getTokens(),a.amzn_vid&&(c[a.vidKey]=a.amzn_vid)):g||(d=2);try{h.addTimer("gk"),h.set("gks",d)}catch(e){}return c},a.setTargeting=function(b,c){var d;for(d in a.ads)if(a.ads.hasOwnProperty(d)){if(c&&d.indexOf(c)<0)continue;b(d,"1")}},a.setTargetingForGPTAsync=function(b){var c,d;try{if(b)a.targetingKey=b,c=a.getTokens(),"undefined"!=typeof c&&c.length>0&&googletag.cmd.push(function(){googletag.pubads().setTargeting(b,c),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid)});else for(d in a.ads)a.ads.hasOwnProperty(d)&&!function(){var b=d;googletag.cmd.push(function(){amznads.debug_mode,googletag.pubads().setTargeting(b,"1"),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid)})}()}catch(e){}},a.setTargetingForGPTSync=function(b){var c,d;try{if(b)a.targetingKey=b,c=a.getTokens(),"undefined"!=typeof c&&c.length>0&&(googletag.pubads().setTargeting(b,c),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid));else for(d in a.ads)a.ads.hasOwnProperty(d)&&(googletag.pubads().setTargeting(d,"1"),a.amzn_vid&&googletag.pubads().setTargeting(a.vidKey,a.amzn_vid))}catch(e){}},a.clearTargetingFromGPTAsync=function(){try{googletag&&googletag.pubads()&&googletag.pubads().clearTargeting(a.targetingKey),googletag.pubads().clearTargeting(a.vidKey)}catch(b){}},a.appendTargetingToAdServerUrl=function(b){var c;try{-1===b.indexOf("?")&&(b+="?");for(c in a.ads)a.ads.hasOwnProperty(c)&&(b+="&"+c+"=1")}catch(d){}return b},a.appendTargetingToQueryString=function(b){var c;try{for(c in a.ads)a.ads.hasOwnProperty(c)&&(b+="&"+c+"=1")}catch(d){}return b},a.getTokens=function(b){var c,d=[];try{for(c in a.ads)if(a.ads.hasOwnProperty(c)){if(b&&c.indexOf(b)<0)continue;d.push(c)}}catch(e){}return d},a.getKeys=a.getTokens,a.getVid=function(){return a.amzn_vid},a.doAllTasks=function(){for(;a.tasks.length>0;){var b=a.tasks.shift();a.doTask(b)}},a.doTask=function(a){try{a.call()}catch(b){}},a.tryGetAdsAsync=function(){a.ssb&&a.__ads&&a.updateAds(a.__ads),a.asyncParams&&(a.startTime=a.asyncParams.startTime,a.getAdsCallback(a.asyncParams.id,a.asyncParams.callbackFn,a.asyncParams.timeout,a.asyncParams.size,a.asyncParams.data))},a}(amznads||{},document,window),amznads.tryGetAdsAsync(),window.amzn_ads=amzn_ads,window.amznads=amznads;