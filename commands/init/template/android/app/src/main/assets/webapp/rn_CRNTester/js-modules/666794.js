__d(function(g,r,i,a,m,e,d){'use strict';var t,n,o=r(d[0]),l=r(d[1]),c=l.StyleSheet,u=l.View,b=l.Text,s=l.TouchableHighlight,p=l.Vibration;l.Platform;e.framework='React',e.title='Vibration',e.description='Vibration API',t=[0,1e3,2e3,3e3],n="[0, 1000, 2000, 3000]\nvibration length on iOS is fixed.\npattern controls durations BETWEEN each vibration only.\n\narg 0: duration to wait before turning the vibrator on.\nsubsequent args: duration to wait before next vibration.\n",e.examples=[{title:'Pattern Descriptions',render:function(){return o.createElement(u,{style:E.wrapper},o.createElement(b,null,n))}},{title:'Vibration.vibrate()',render:function(){return o.createElement(s,{style:E.wrapper,onPress:function(){return p.vibrate()}},o.createElement(u,{style:E.button},o.createElement(b,null,"Vibrate")))}},{title:"Vibration.vibrate([0, 1000, 2000, 3000])",render:function(){return o.createElement(s,{style:E.wrapper,onPress:function(){return p.vibrate(t)}},o.createElement(u,{style:E.button},o.createElement(b,null,"Vibrate once")))}},{title:"Vibration.vibrate([0, 1000, 2000, 3000], true)",render:function(){return o.createElement(s,{style:E.wrapper,onPress:function(){return p.vibrate(t,!0)}},o.createElement(u,{style:E.button},o.createElement(b,null,"Vibrate until cancel")))}},{title:'Vibration.cancel()',render:function(){return o.createElement(s,{style:E.wrapper,onPress:function(){return p.cancel()}},o.createElement(u,{style:E.button},o.createElement(b,null,"Cancel")))}}];var E=c.create({wrapper:{borderRadius:5,marginBottom:5},button:{backgroundColor:'#eeeeee',padding:10}})},666794,[11,15]);