__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o={getStats:function(){return{stallCount:c,totalStallTime:u,longestStall:f,acceptableBusyTime:s}},reset:function(){t('JSEventLoopWatchdog: reset'),u=0,c=0,f=0,h=n()},addHandler:function(t){v.push(t)},install:function(o){var S=o.thresholdMS;s=S,l||(l=!0,h=n(),(function o(){var s=n(),l=s-h;if(l>=S){var p=l-S;c++,u+=p,f=Math.max(f,p);var E="JSEventLoopWatchdog: JS thread busy for "+l+"ms. "+u+"ms in "+c+" stalls so far. ";v.forEach(function(t){E+=t.onStall({lastInterval:h,busyTime:l})||''}),t(E)}v.forEach(function(t){t.onIterate&&t.onIterate()}),h=s,setTimeout(o,S/5)})())}},s=0,l=!1,u=0,c=0,f=0,h=0,v=[];m.exports=o},666781,[149,109]);