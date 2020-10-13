// 接口通讯密匙(API后台获取) websiteSecret
// 数据接口域名(API域名) websiteUrl
// 接口服务器图片域名(API域名，BANNER图、广告图之类的) apiImageUrl
// 远程图片域(CMS域名) imageUrl

const websiteSecret = 'c1f4zmtPH7O9yuBtfxUFtniHQ9nE3lkcfN9KnYTnguo2OJZfFar/K6267lNu';
let websiteUrl = '',apiImageUrl = '',imageUrl = '', shareUrl = '';
const cachePath = '/cache/';
// 全局应用名称
const appName = '龙猫看电影';

// APP、H5域名配置
// #ifndef MP
/* websiteUrl = 'http://xcx.matan.com.cn/api.php';
apiImageUrl = 'http://xcx.matan.com.cn';
imageUrl = 'http://maccms.matan.com.cn/'; */
/* websiteUrl = 'http://girltujian.com/api.php';
apiImageUrl = 'http://girltujian.com';
imageUrl = 'http://www.girltujian.com/'; */
// #endif

// 小程序必须是https，运行预览时需将域名添加进小程序后台域名列表内！否则需要打开调试模式！
// #ifdef MP
websiteUrl = 'https://girltujian.com/api.php';
apiImageUrl = 'https://girltujian.com';
imageUrl = 'https://www.girltujian.com/';
// #endif

// APP分享到微信的H5页面地址，需配置微信开放平台APPID(测试功能)
shareUrl = ''; 


// -------------------------------------------------------------------
var getUrlName = function getUrlName(url) {
	let tmp= new Array();//临时变量，保存分割字符串
	tmp = url.split("/");//按照"/"分割
	let pp = tmp[tmp.length-1];//获取最后一部分，即文件名和参数
	tmp = pp.split("?");//把参数和文件名分割开
	return tmp[0];
}

export default {  
    websiteSecret,
    websiteUrl,
    imageUrl,
    apiImageUrl,
    cachePath,
	getUrlName,
	appName,
}  