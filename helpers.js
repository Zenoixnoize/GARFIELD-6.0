/*COPYRIGHT (C) 2022 CODED BY NOIZE */

function successfullMessage(msg) {
    return "🐼 *Garfield*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🐼 *Garfield*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🐼️ *Garfield*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
