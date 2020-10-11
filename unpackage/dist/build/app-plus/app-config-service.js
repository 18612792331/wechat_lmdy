
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/guide/index","pages/guide/list","pages/index/index","pages/detail/index","pages/cate/index","pages/cate/lists","pages/search/index","pages/user/index","pages/user/ucenter","pages/user/login","pages/user/register","pages/user/child/changeUsi","pages/user/child/changePsw","pages/user/setting","pages/webview/webview","pages/user/history","pages/user/feedback","pages/live/index","pages/live/detail","pages/user/child/giftCode"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"云试听","navigationBarBackgroundColor":"#161827","backgroundColor":"#161827"},"tabBar":{"color":"#a1a6b3","selectedColor":"#ed2f85","borderStyle":"black","backgroundColor":"#161827","list":[{"pagePath":"pages/index/index","iconPath":"static/icon/homepage_normal.png","selectedIconPath":"static/icon/homepage_active.png","text":"首页"},{"pagePath":"pages/search/index","iconPath":"static/icon/search_normal.png","selectedIconPath":"static/icon/search_active.png","text":"搜索"},{"pagePath":"pages/cate/index","iconPath":"static/icon/video_normal.png","selectedIconPath":"static/icon/video_active.png","text":"分类"},{"pagePath":"pages/user/index","iconPath":"static/icon/people_normal.png","selectedIconPath":"static/icon/people_active.png","text":"我的"}]},"networkTimeout":{"request":15000,"downloadFile":15000,"connectSocket":60000,"uploadFile":60000},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":true},"appname":"云试听","compilerVersion":"2.8.8","entryPagePath":"pages/guide/index"};
var __uniRoutes = [{"path":"/pages/guide/index","meta":{"isQuit":true},"window":{"titleNView":false}},{"path":"/pages/guide/list","meta":{},"window":{"titleNView":false,"bounce":"none"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"云试听","enablePullDownRefresh":true,"titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"},"bounce":"none"}},{"path":"/pages/detail/index","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2","buttons":[{"type":"menu"}]},"bounce":"none"}},{"path":"/pages/cate/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"频道分类","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"},"bounce":"none"}},{"path":"/pages/cate/lists","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"}}},{"path":"/pages/search/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"搜索","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"},"bounce":"none"}},{"path":"/pages/user/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"titleNView":{"backgroundColor":"#161827","titleColor":"#161827"},"bounce":"none"}},{"path":"/pages/user/ucenter","meta":{},"window":{"navigationBarTitleText":"帐号管理","bounce":"none","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"}}},{"path":"/pages/user/login","meta":{},"window":{"navigationBarTitleText":"","bounce":"none"}},{"path":"/pages/user/register","meta":{},"window":{"navigationBarTitleText":"","bounce":"none"}},{"path":"/pages/user/child/changeUsi","meta":{},"window":{"navigationBarTitleText":"修改资料","bounce":"none"}},{"path":"/pages/user/child/changePsw","meta":{},"window":{"navigationBarTitleText":"修改密码","bounce":"none"}},{"path":"/pages/user/setting","meta":{},"window":{"navigationBarTitleText":"设置","bounce":"none"}},{"path":"/pages/webview/webview","meta":{},"window":{"bounce":"none","titleNView":false}},{"path":"/pages/user/history","meta":{},"window":{"navigationBarTitleText":"浏览历史","bounce":"none","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"}}},{"path":"/pages/user/feedback","meta":{},"window":{"navigationBarTitleText":"建议反馈","bounce":"none"}},{"path":"/pages/live/index","meta":{},"window":{"navigationBarTitleText":"发现","bounce":"none","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"}}},{"path":"/pages/live/detail","meta":{},"window":{"bounce":"none","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2","buttons":[{"type":"menu"}]}}},{"path":"/pages/user/child/giftCode","meta":{},"window":{"navigationBarTitleText":"兑换码","bounce":"none","titleNView":{"backgroundColor":"#161827","titleColor":"#dae1f2"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});