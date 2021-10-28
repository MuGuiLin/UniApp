'use strict';

const ucc = require('uni-config-center');

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	
	// 在云函数中获取 common 目录下的相关配置模块的信息
	const mu = ucc({pluginId: "mupiao"}).config();
	
	console.log(mu);
	
	//返回数据给客户端
	// return event;
	return mu;
};
