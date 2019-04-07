const MemoryCacheService = require("./MemoryCacheService");

let memoryCacheService = null;

export const GetMemoryCacheService = () => {
    if(!memoryCacheService){
        memoryCacheService = MemoryCacheService();
    }
    return memoryCacheService;
};