/**
 * 日志输出
 * @module logOutput
 */
'use strict';
const chalk = require('chalk');

/**
 * 输出错误日志
 */
function error() {
	const message = Array.prototype.slice.call(arguments).join(' ');
	if (message) {
		console.log(chalk.red("[crn-cli error]: " + message));
	}
}

/**
 * 输出警告日志
 */
function warn() {
	const message = Array.prototype.slice.call(arguments).join(' ');
	if (message) {
		console.log(chalk.yellow("[crn-cli warn]: " + message));
	}
}

/**
 * 输出普通日志
 */
function log() {
	const message = Array.prototype.slice.call(arguments).join(' ');
	if (message) {
		console.log("[crn-cli]: " + message);
	}
}

module.exports = {
	error,
	warn,
	log
};