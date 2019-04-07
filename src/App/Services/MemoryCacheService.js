function MemoryCacheService(){

    let cache = {};

    return {
        add: add,
        get: get
    };

    function add({key, data}){
        cache[`${key}`] = data;
    }

    function get({key}){
        return cache[key];
    }
}

module.exports = MemoryCacheService;
