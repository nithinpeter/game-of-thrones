const env = (() => {

    const isDev = () => {
        return window.location.host.indexOf("localhost") != -1;
    }



    return {
        isDev,    
    };
})()

export default env;