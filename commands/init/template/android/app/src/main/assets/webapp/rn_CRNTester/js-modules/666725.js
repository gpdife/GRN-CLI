__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),o=r(d[3]),c=r(d[4]),p=r(d[5]),s=r(d[6]),h=s.ScrollView,u=s.StyleSheet,I=s.Text,v=s.TouchableOpacity,y=(function(s){function u(){var n,c;t(this,u);for(var s=arguments.length,h=new Array(s),y=0;y<s;y++)h[y]=arguments[y];return(c=l(this,(n=o(u)).call.apply(n,[this].concat(h)))).makeItems=function(t,n){for(var l=[],o=0;o<t;o++)l[o]=p.createElement(v,{key:o,style:n},p.createElement(I,null,'Item '+o));return l},c}return c(u,s),n(u,[{key:"render",value:function(){var t=this.makeItems(20,W.itemWrapper);return t[4]=p.createElement(h,{key:'scrollView',horizontal:!0},this.makeItems(20,[W.itemWrapper,W.horizontalItemWrapper])),t.push(p.createElement(h,{key:'scrollViewSnap',horizontal:!0,snapToInterval:210,pagingEnabled:!0},this.makeItems(20,[W.itemWrapper,W.horizontalItemWrapper,W.horizontalPagingItemWrapper]))),p.createElement(h,{style:W.verticalScrollView},t)}}]),u})(p.Component),W=u.create({verticalScrollView:{margin:10},itemWrapper:{backgroundColor:'#dddddd',alignItems:'center',borderRadius:5,borderWidth:5,borderColor:'#a52a2a',padding:30,margin:5},horizontalItemWrapper:{padding:50},horizontalPagingItemWrapper:{width:200}});e.title='<ScrollView>',e.description='Component that enables scrolling through child components.',e.examples=[{title:'Simple scroll view',render:function(){return p.createElement(y,null)}}]},666725,[3,4,5,8,9,11,15]);