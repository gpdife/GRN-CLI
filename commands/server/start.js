const fs = require("fs");
const path = require("path");
const Promise = require("promise");
const fetch = require("node-fetch");
const spawnSync = require("child_process").spawnSync;
const logOutput = require("../../tools/logOutput");
const parseCommand = require("../../tools/parseCommand");
const kill = require("cross-port-killer").kill;
const printHelp = require('../../tools/printHelp');
const patch = require('../pack/patch');

const MODULES_RN_PATH = path.resolve(
  "node_modules",
  "react-native",
  "package.json"
);
const cliVersion = path.resolve('node_modules','@react-native-community','cli','package.json');
console.log(cliVersion)
const TMP_PATH = path.resolve(".__tmp");

function isPackagerRunning(webPort) {
  return fetch(`http://localhost:${webPort}/status`).then(
    res =>
      res
        .text()
        .then(
          body =>
            body === "packager-status:running" ? "running" : "unrecognized"
        ),
    () => "not_running"
  );
}

function parseCommandParams(args) {
  if (!fs.existsSync(MODULES_RN_PATH)) {
    logOutput.error(
      "启动RN服务失败, 当前目录不存在React-Native依赖, 请检查..."
    );
    process.exit(1);
  }

  let paramConfigs = [
    {
      command: "port",
      description: "webserver port",
      type: "string",
      default: "8081"
    }
  ];
  return parseCommand(paramConfigs, args);
}

function modifyScript(webPort) {
  if (!fs.existsSync(TMP_PATH)) {
    fs.mkdirSync(TMP_PATH);
  }
  let rnCliConfigPath = path.resolve(process.cwd(),'rn-cli.config.js');

  if (/^win/.test(process.platform)) {
    let batPath = path.resolve(TMP_PATH, "launchPackager.bat");
    let winCommand = [
      "@echo off",
      "title React Packager",
      `cd ${process.cwd()}`,
      `node ${path.resolve(
        process.cwd(),
        "node_modules/react-native/local-cli/cli.js"
      )} start --port ${webPort} --config ${rnCliConfigPath}`,
      "pause",
      "exit"
    ].join("\n");
    fs.writeFileSync(batPath, winCommand, "utf8");

    return batPath;
  } else {
    let otherPath = path.resolve(TMP_PATH, "launchPackager.command");
    let otherCommand = [
      "#!/usr/bin/env bash",
      "clear",
      'THIS_DIR=$(dirname "$0")',
      'pushd "$THIS_DIR"',
      "source ./packager.sh",
      'echo "Process terminated. Press <enter> to close the window"',
      "read",
      " "
    ].join("\n");
    fs.writeFileSync(otherPath, otherCommand, "utf8");

    let cliPath = path.resolve(
      process.cwd(),
      "node_modules/react-native/local-cli/cli.js "
    );
    let packagerPath = path.resolve(TMP_PATH, "packager.sh");
    let shCommand = [
      "#!/usr/bin/env bash",
      `cd ${process.cwd()}`,
      `node ${cliPath} start --port ${webPort} --config ${rnCliConfigPath}`
    ].join("\n");
    fs.writeFileSync(packagerPath, shCommand, "utf8");

    spawnSync("chmod", ["u+x", otherPath], { stdio: "inherit" });
    spawnSync("chmod", ["u+x", packagerPath], { stdio: "inherit" });

    return otherPath;
  }
}

function startReactNativeServer(commandPath) {

  let yargV = require("yargs").argv;
  let procConfig = { cwd: process.cwd() };

  commandPath = path.resolve(process.cwd(), commandPath);
  logOutput.log("执行以下脚本: " + commandPath);

  if (process.platform === "darwin") {
    if (yargV.open) {
      spawnSync("open", ["-a", yargV.open, commandPath], procConfig);
    }
    spawnSync("open", [commandPath], procConfig);
  } else if (process.platform === "linux") {
    procConfig.detached = true;
    if (yargV.open) {
      spawnSync(yargV.open, ["-e", "sh", commandPath], procConfig);
    }
    spawnSync("sh", [commandPath], procConfig);
  } else if (/^win/.test(process.platform)) {
    procConfig.detached = true;
    procConfig.stdio = "ignore";
    spawnSync("cmd.exe", ["/C", "start", commandPath], procConfig);
  } else {
    logOutput.error(
      `启动RN服务失败, 当前处在位置平台中, 请确认当前在windows或者macos中!`
    );
    process.exit(1);
  }
}

function startRNServer() {
  return new Promise(resolve => {
    let args = process.argv.slice(2);
    if (args[1] == '--help' || args[1] == '-h' || args[0] == '-H') {
      printHelp('start');
      return;
    }
    logOutput.log("正在判断当前输入参数是否合法以及当前目录路径是否合法...");
    let argv = parseCommandParams(process.argv.slice(2));
    logOutput.log("当前输入参数合法!");
    logOutput.log("当前目录路径为: " + path.resolve(""));
    logOutput.log("当前启动的RN服务端口为: " + argv.port);
    logOutput.log("正在判断当前RN服务是否已经启动...");

    isPackagerRunning(argv.port).then(result => {
      if (result === "running") {
        logOutput.log("已存在RN服务,关闭当前服务重新启动...");
        kill(argv.port)
          .then(() => {
            logOutput.log("关闭RN服务成功");
            runRNServer(argv);
            resolve();
          })
          .catch(() => {
            logOutput.error("关闭RN服务失败");
            runRNServer(argv);
            resolve();
          });
      } else {
        runRNServer(argv);
        resolve();
      }
    });
  });
}

function runRNServer(argv) {
  logOutput.log("当前RN服务正在启动...");
  logOutput.log("当前写入启动服务脚本...");
  let commandPath = modifyScript(argv.port);
  logOutput.log("写入启动服务脚本完成!");
  patch();
  logOutput.log("正在启动RN服务...");
  startReactNativeServer(commandPath);
  logOutput.log("启动RN服务成功!");
}


module.exports = startRNServer;
