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

                    "Options:",
                    "   -h, --help             显示命令帮助",
                    "   -v, --version          显示版本",
                    "",
                    ""
                ].join("\n")
            );
            break;
        default:
    }
  
  }
  module.exports = printHelp;
  