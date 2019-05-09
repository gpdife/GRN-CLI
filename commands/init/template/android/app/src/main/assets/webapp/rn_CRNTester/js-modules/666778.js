__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),o=r(d[3]),u=r(d[4]),s=r(d[5]),c=r(d[6]),p=r(d[7]),f=p.View,y=p.Text,v=p.Animated,h=p.StyleSheet,E=p.TouchableWithoutFeedback,w=p.Slider,R=v.createAnimatedComponent(w),b=(function(p){function h(){var l,s;n(this,h);for(var c=arguments.length,p=new Array(c),f=0;f<c;f++)p[f]=arguments[f];return(s=o(this,(l=u(h)).call.apply(l,[this].concat(p)))).state={native:new v.Value(0),js:new v.Value(0)},s.current=0,s.onPress=function(){var n=s.current&&s.props.reverseConfig?s.props.reverseConfig:s.props.config;s.current=s.current?0:1;var l=t({},n,{toValue:s.current});v[s.props.type](s.state.native,t({},l,{useNativeDriver:!0})).start(),v[s.props.type](s.state.js,t({},l,{useNativeDriver:!1})).start()},s}return s(h,p),l(h,[{key:"render",value:function(){return c.createElement(E,{onPress:this.onPress},c.createElement(f,null,c.createElement(f,null,c.createElement(y,null,"Native:")),c.createElement(f,{style:C.row},this.props.children(this.state.native)),c.createElement(f,null,c.createElement(y,null,"JavaScript:")),c.createElement(f,{style:C.row},this.props.children(this.state.js))))}}]),h})(c.Component),k=(function(p){function h(){var l,s;n(this,h);for(var c=arguments.length,p=new Array(c),f=0;f<c;f++)p[f]=arguments[f];return(s=o(this,(l=u(h)).call.apply(l,[this].concat(p)))).state={anim:new v.Value(0),progress:0},s._current=0,s._onPress=function(){s._current=s._current?0:1;var n={duration:1e3,toValue:s._current};v.timing(s.state.anim,t({},n,{useNativeDriver:!0})).start()},s}return s(h,p),l(h,[{key:"componentDidMount",value:function(){var t=this;this.state.anim.addListener(function(n){return t.setState({progress:n.value})})}},{key:"componentWillUnmount",value:function(){this.state.anim.removeAllListeners()}},{key:"render",value:function(){return c.createElement(E,{onPress:this._onPress},c.createElement(f,null,c.createElement(f,{style:C.row},c.createElement(v.View,{style:[C.block,{opacity:this.state.anim}]})),c.createElement(y,null,"Value: ",this.state.progress)))}}]),h})(c.Component),V=(function(t){function p(){var t,l;n(this,p);for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return(l=o(this,(t=u(p)).call.apply(t,[this].concat(c)))).state={value:new v.Value(0)},l}return s(p,t),l(p,[{key:"componentDidMount",value:function(){v.loop(v.timing(this.state.value,{toValue:1,duration:5e3,useNativeDriver:!0})).start()}},{key:"render",value:function(){return c.createElement(f,{style:C.row},c.createElement(v.View,{style:[C.block,{opacity:this.state.value.interpolate({inputRange:[0,.5,1],outputRange:[0,1,0]})}]}))}}]),p})(c.Component),S=r(d[8]),A=(function(t){function p(){return n(this,p),o(this,u(p).apply(this,arguments))}return s(p,t),l(p,[{key:"render",value:function(){var t=this;return c.createElement(f,null,c.createElement(S,{initialValue:!1,label:"Force JS Stalls",onEnable:function(){t._stallInterval=setInterval(function(){for(var t=Date.now();Date.now()-t<100;);},300)},onDisable:function(){clearInterval(t._stallInterval||0)}}),c.createElement(S,{initialValue:!1,label:"Track JS Stalls",onEnable:function(){r(d[9]).install({thresholdMS:25}),t.setState({busyTime:'<none>'}),r(d[9]).addHandler({onStall:function(n){var l=n.busyTime;return t.setState(function(t){return{busyTime:l,filteredStall:.97*(t.filteredStall||0)+.03*l}})}})},onDisable:function(){}}),this.state&&c.createElement(y,null,"JS Stall filtered: "+Math.round(this.state.filteredStall)+", ","last: "+this.state.busyTime))}}]),p})(c.Component),D=(function(t){function p(){var t,l;n(this,p);for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];return(l=o(this,(t=u(p)).call.apply(t,[this].concat(c)))).state={scrollX:new v.Value(0)},l}return s(p,t),l(p,[{key:"render",value:function(){var t=this.state.scrollX.interpolate({inputRange:[0,200],outputRange:[1,0]});return c.createElement(f,null,c.createElement(v.View,{style:[C.block,{opacity:t}]}),c.createElement(v.ScrollView,{horizontal:!0,style:{height:100,marginTop:16},scrollEventThrottle:16,onScroll:v.event([{nativeEvent:{contentOffset:{x:this.state.scrollX}}}],{useNativeDriver:!0})},c.createElement(f,{style:{width:600,backgroundColor:'#eee',justifyContent:'center'}},c.createElement(y,null,"Scroll me!"))))}}]),p})(c.Component),N=(function(p){function h(){var t,l;n(this,h);for(var s=arguments.length,p=new Array(s),f=0;f<s;f++)p[f]=arguments[f];return(l=o(this,(t=u(h)).call.apply(t,[this].concat(p)))).state={native:new v.Value(0),toNative:new v.Value(0),js:new v.Value(0),toJS:new v.Value(0)},l.onPress=function(){var t=200*Math.random();l.state.toNative.setValue(t),l.state.toJS.setValue(t)},l.renderBlock=function(t,n){return[c.createElement(v.View,{key:"line",style:[C.line,{transform:[{translateX:n}]}]}),c.createElement(v.View,{key:"block",style:[C.block,{transform:[{translateX:t}]}]})]},l}return s(h,p),l(h,[{key:"componentDidMount",value:function(){var n={tension:20,friction:.5};v.spring(this.state.native,t({},n,{toValue:this.state.toNative,useNativeDriver:!0})).start(),v.spring(this.state.js,t({},n,{toValue:this.state.toJS,useNativeDriver:!1})).start()}},{key:"render",value:function(){return c.createElement(E,{onPress:this.onPress},c.createElement(f,null,c.createElement(f,null,c.createElement(y,null,"Native:")),c.createElement(f,{style:C.row},this.renderBlock(this.state.native,this.state.toNative)),c.createElement(f,null,c.createElement(y,null,"JavaScript:")),c.createElement(f,{style:C.row},this.renderBlock(this.state.js,this.state.toJS))))}}]),h})(c.Component),C=h.create({row:{padding:10,zIndex:1},block:{width:50,height:50,backgroundColor:'blue'},line:{position:'absolute',left:35,top:0,bottom:0,width:1,backgroundColor:'red'}});e.framework='React',e.title='Native Animated Example',e.description='Test out Native Animations',e.examples=[{title:'Multistage With Multiply and rotation',render:function(){return c.createElement(b,{type:"timing",config:{duration:1e3}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{translateX:t.interpolate({inputRange:[0,1],outputRange:[0,200]})},{translateY:t.interpolate({inputRange:[0,.5,1],outputRange:[0,50,0]})},{rotate:t.interpolate({inputRange:[0,.5,1],outputRange:['0deg','90deg','0deg']})}],opacity:v.multiply(t.interpolate({inputRange:[0,1],outputRange:[1,0]}),t.interpolate({inputRange:[0,1],outputRange:[.25,1]}))}]})})}},{title:'Multistage With Multiply',render:function(){return c.createElement(b,{type:"timing",config:{duration:1e3}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{translateX:t.interpolate({inputRange:[0,1],outputRange:[0,200]})},{translateY:t.interpolate({inputRange:[0,.5,1],outputRange:[0,50,0]})}],opacity:v.multiply(t.interpolate({inputRange:[0,1],outputRange:[1,0]}),t.interpolate({inputRange:[0,1],outputRange:[.25,1]}))}]})})}},{title:'Multistage With Subtract',render:function(){return c.createElement(b,{type:"timing",config:{duration:1e3}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{translateX:t.interpolate({inputRange:[0,1],outputRange:[0,200]})},{translateY:t.interpolate({inputRange:[0,.5,1],outputRange:[0,50,0]})}],opacity:v.subtract(t.interpolate({inputRange:[0,1],outputRange:[1,1]}),t.interpolate({inputRange:[0,.5,1],outputRange:[0,.5,0]}))}]})})}},{title:'Scale interpolation with clamping',render:function(){return c.createElement(b,{type:"timing",config:{duration:1e3}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{scale:t.interpolate({inputRange:[0,.5],outputRange:[1,1.4],extrapolateRight:'clamp'})}]}]})})}},{title:'Opacity with delay',render:function(){return c.createElement(b,{type:"timing",config:{duration:1e3,delay:1e3}},function(t){return c.createElement(v.View,{style:[C.block,{opacity:t}]})})}},{title:'Rotate interpolation',render:function(){return c.createElement(b,{type:"timing",config:{duration:1e3}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{rotate:t.interpolate({inputRange:[0,1],outputRange:['0deg','90deg']})}]}]})})}},{title:'translateX => Animated.spring (bounciness/speed)',render:function(){return c.createElement(b,{type:"spring",config:{bounciness:0}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{translateX:t.interpolate({inputRange:[0,1],outputRange:[0,100]})}]}]})})}},{title:'translateX => Animated.spring (stiffness/damping/mass)',render:function(){return c.createElement(b,{type:"spring",config:{stiffness:1e3,damping:500,mass:3}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{translateX:t.interpolate({inputRange:[0,1],outputRange:[0,100]})}]}]})})}},{title:'translateX => Animated.decay',render:function(){return c.createElement(b,{type:"decay",config:{velocity:.5},reverseConfig:{velocity:-.5}},function(t){return c.createElement(v.View,{style:[C.block,{transform:[{translateX:t}]}]})})}},{title:'Drive custom property',render:function(){return c.createElement(b,{type:"timing",config:{duration:1e3}},function(t){return c.createElement(R,{style:{},value:t})})}},{title:'Animated value listener',render:function(){return c.createElement(k,null)}},{title:'Animated loop',render:function(){return c.createElement(V,null)}},{title:'Animated events',render:function(){return c.createElement(D,null)}},{title:'Animated Tracking - tap me many times',render:function(){return c.createElement(N,null)}},{title:'Internal Settings',render:function(){return c.createElement(A,null)}}]},666778,[51,3,4,5,8,9,11,15,666779,666781]);