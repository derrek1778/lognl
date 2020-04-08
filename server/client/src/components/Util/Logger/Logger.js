


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
    console.log(loggerString); 
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
    console.log(loggerString); 
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
    console.log(loggerString); 
}