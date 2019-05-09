/**
 * 打印cli各种命令帮助
 * @module printHelp
 */


/**
 * 打印cli各种命令帮助
 * @param {string} type 帮助类型 如 init,pack...
 */
function printHelp(type) {
    switch (type) {
        case "cli":
            console.log(
                [
                    "Usage: grn-cli <command> [options]",
                    "Commands:",
                    "   init                   建立并初始化GRN工程，基于React Native 0.59.0,React 16.8.3",
                    "Options:",
                    "   -h, --help             显示命令帮助",
                    "   -v, --version          显示版本",
                    "",
                    ""
                ].join("\n")
            );
            break;
        case "init":
            console.log(
                [
                    "",
                    " Usage: grn-cli init <project-name>",
                    "",
                    " Example:",
                    "",
                    " $ grn-cli init Demo ",
                    "",
                ].join("\n")
            );
            break;
        default:
    }
  
  }
  module.exports = printHelp;
  