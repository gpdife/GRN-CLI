__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),s=r(d[2]),o=r(d[3]),c=r(d[4]),u=r(d[5]),l=r(d[6]),h=r(d[7]),p=h.ActivityIndicator,f=h.Alert,S=h.CameraRoll,y=h.Image,v=h.ListView,w=h.PermissionsAndroid,_=(h.Platform,h.StyleSheet),R=h.View,E=(r(d[8]),r(d[9])),x=r(d[10]);function P(t,n){if(t.length!==n.length)return!0;for(var s=0;s<t.length;s++)if(t[s]!==n[s])return!0;return!1}var T=(function(h){function y(){var t,s;n(this,y);for(var u=arguments.length,h=new Array(u),f=0;f<u;f++)h[f]=arguments[f];return(s=o(this,(t=c(y)).call.apply(t,[this].concat(h)))).state=s.getInitialState(),s.fetch=function(t){s.state.loadingMore||s.setState({loadingMore:!0},function(){s._fetch(t)})},s._renderFooterSpinner=function(){return s.state.noMore?null:l.createElement(p,null)},s._renderRow=function(t,n,o){var c=t.map(function(t){return null===t?null:s.props.renderImage(t)});return l.createElement(R,{style:k.row},c)},s._onEndReached=function(){s.state.noMore||s.fetch()},s}return u(y,h),s(y,[{key:"getInitialState",value:function(){return{assets:[],lastCursor:null,noMore:!1,loadingMore:!1,dataSource:new v.DataSource({rowHasChanged:P})}}},{key:"rendererChanged",value:function(){var t=new v.DataSource({rowHasChanged:P});this.state.dataSource=t.cloneWithRows(E(this.state.assets,this.props.imagesPerRow))}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){this.props.groupTypes!==t.groupTypes&&this.fetch(!0)}},{key:"_fetch",value:function(n){var s,o;return t.async(function(c){for(;;)switch(c.prev=c.next){case 0:if(!n){c.next=3;break}return this.setState(this.getInitialState(),this.fetch),c.abrupt("return");case 3:return c.next=6,t.awrap(w.request(w.PERMISSIONS.READ_EXTERNAL_STORAGE,{title:'Permission Explanation',message:'RNTester would like to access your pictures.'}));case 6:if('granted'===c.sent){c.next=10;break}return f.alert('Access to pictures was denied.'),c.abrupt("return");case 10:return delete(s={first:this.props.batchSize,groupTypes:this.props.groupTypes,assetType:this.props.assetType}).groupTypes,this.state.lastCursor&&(s.after=this.state.lastCursor),c.prev=13,c.next=16,t.awrap(S.getPhotos(s));case 16:o=c.sent,this._appendAssets(o),c.next=23;break;case 20:c.prev=20,c.t0=c.catch(13),x(c.t0);case 23:case"end":return c.stop()}},null,this,[[13,20]])}},{key:"render",value:function(){return l.createElement(v,{renderRow:this._renderRow,renderFooter:this._renderFooterSpinner,onEndReached:this._onEndReached,style:k.container,dataSource:this.state.dataSource,enableEmptySections:!0})}},{key:"_appendAssets",value:function(t){var n=t.edges,s={loadingMore:!1};t.page_info.has_next_page||(s.noMore=!0),n.length>0&&(s.lastCursor=t.page_info.end_cursor,s.assets=this.state.assets.concat(n),s.dataSource=this.state.dataSource.cloneWithRows(E(s.assets,this.props.imagesPerRow))),this.setState(s)}}]),y})(l.Component);T.defaultProps={groupTypes:'SavedPhotos',batchSize:5,imagesPerRow:1,assetType:'Photos',renderImage:function(t){var n=[k.image,{width:150,height:150}];return l.createElement(y,{source:t.node.image,style:n})}};var k=_.create({row:{flexDirection:'row',flex:1},image:{margin:4},container:{flex:1}});m.exports=T},666768,[139,3,4,5,8,9,11,15,276,666769,141]);