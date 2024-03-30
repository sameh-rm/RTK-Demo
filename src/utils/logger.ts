const logger = {
    info: (data: any) => {
        console.info(JSON.stringify({ level: 'info', ...data }));
    },
    debug: (data: any) => {
        console.log(JSON.stringify({ level: 'debug', ...data }));
    },
    error: (data: any) => {
        console.error(JSON.stringify({ level: 'error', ...data }));
    },
    warn: (data: any) => {
        console.warn(JSON.stringify({ level: 'warn', ...data }));
    }
};

export default logger;
