
const loggerEnabled = true;

export const consoleSimpleMessage = (message,value) => {
    if(loggerEnabled) {
        console.log(message, value)
    }  ;
};

export const defaultLogger = (component, componentName, action, message) => {
    var loggerString = '[ ';

    loggerString = loggerString.concat(
                                        component,
                                        ' :: ',
                                        componentName, 
                                        ' , ',
                                        action, 
                                        ' at :: ', 
                                        new Date().toLocaleString(), 
                                        ' Message :: ',
                                        message,
                                        ' ]' 
                                        );
                            
    if (loggerEnabled){
        console.log(loggerString) 
    };
}

export const consoleMessage = (component, message) => {
    var loggerString = '[ ';
    loggerString = loggerString.concat(
                                        component,
                                        ' :: ', 
                                        ' , ',
                                        ' Message :: ',
                                        message,
                                        ' at :: ', 
                                        new Date().toLocaleString(), 
                                        ' Message :: ',
                                        message,
                                        ' ]' 
                                        );
                                        if(loggerEnabled) {
                                            console.log(loggerString)
                                        }
}

export const consoleMessageWithValue = (component, message, value) => {
    var loggerString = '[ ';
    loggerString = loggerString.concat(
                                        component,
                                        ' :: ', 
                                        ' , ',
                                        ' Message :: ',
                                        message,
                                        ' value ',
                                        value,
                                        ' at :: ', 
                                        new Date().toLocaleString(), 
                                        ' Message :: ',
                                        message,
                                        ' ]' 
                                        );
if(loggerEnabled) {
    console.log(loggerString
, value)};
}

export const entryMarker = (component, componentName) => {
    var loggerString = '[ ';
    loggerString = loggerString.concat(
                                        component,
                                        ' :: ',
                                        componentName, 
                                        ' , ',
                                        ' Enter Method ', 
                                        ' at :: ', 
                                        new Date().toLocaleString(), 
                                        ' ]' 
                                        );
    if(loggerEnabled) {
     console.log(loggerString)
    }
}

export const exitMarker = (component, componentName) => {
    var loggerString = '[ ';
    loggerString = loggerString.concat(
                                        component,
                                        ' :: ',
                                        componentName, 
                                        ' , ',
                                        ' Exit Method ', 
                                        ' at :: ', 
                                        new Date().toLocaleString(), 
                                        ' ]' 
                                        );
                                        if(loggerEnabled) {
                                            console.log(loggerString)
                                        }
}