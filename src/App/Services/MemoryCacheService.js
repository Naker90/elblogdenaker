function MemoryCacheService(){

    let cache = {};

    return {
        add: add,
        get: get,
        exist: exist
    };

    function add({key, data}){
        cache[`${key}`] = data;
    }

    function get({key}){
        return cache[key];
    }

    function exist({key}){
        return cache.hasOwnProperty(key);
    }
}

module.exports = MemoryCacheService;
