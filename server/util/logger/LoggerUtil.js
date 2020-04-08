/**
 * @author vasudev
 * @desc Util class to help logging
 */

const consoleMessage = (module, message) => {
    const messageString = '[ Module:: '.concat(module).concat(' Message -> ').concat(message).concat(' ]');
    console.log(messageString);
}

const consoleMessageWithObject = (module, message, object) => {
    const messageString = '[ Module:: '.concat(module).concat(' Message -> ').concat(message).concat(' ]');
    console.log(messageString, object);
}

const consoleErrorMessage = (module, message) => {
    const messageString = '[ Module :: '.concat(module).concat(' An Exception occurred -> ').concat(message).concat(' ] ');
    console.error(messageString);
}

module.exports={
    consoleMessage,
    consoleMessageWithObject,
    consoleErrorMessage
}