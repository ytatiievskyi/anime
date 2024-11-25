module.exports = function bindAllMethods(obj) {
    let parent = obj;
    const methods = [];
    while (parent && parent !== Object.prototype) {
        Object.getOwnPropertyNames(parent).forEach(name => {
            const config = Object.getOwnPropertyDescriptor(parent, name);
            if (config) {
                if (!config.get && !config.set) {
                    if (typeof obj[name] === 'function') {
                        if (!obj[name].prototype) {
                            methods.push(name);
                        }
                    }
                }
            }
        })
        parent = Object.getPrototypeOf(parent);
    }
    methods.forEach(name => {
        obj[name] = obj[name].bind(obj);
    })
    return obj;
}